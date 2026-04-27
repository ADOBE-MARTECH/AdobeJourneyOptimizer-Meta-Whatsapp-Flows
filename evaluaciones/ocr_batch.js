const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'partes de adobe');
const outFile = path.join(__dirname, 'raw_ocr_output.txt');

const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpeg')).sort();

async function processAllImages() {
    console.log(`Starting OCR process for ${files.length} images...`);
    fs.writeFileSync(outFile, '--- INICIO DE EXTRACCIÓN ---\n\n', 'utf8');

    // Run with 2 parallel workers to speed it up slightly without crashing
    const worker1 = await Tesseract.createWorker('eng+spa');
    const worker2 = await Tesseract.createWorker('eng+spa');

    let currentIndex = 0;

    async function processNext(worker, workerId) {
        while (currentIndex < files.length) {
            const index = currentIndex++;
            const file = files[index];
            const imgPath = path.join(imgDir, file);
            console.log(`[Worker ${workerId}] Processing image ${index + 1}/${files.length}: ${file}`);
            
            try {
                const { data: { text } } = await worker.recognize(imgPath);
                const outputText = `\n\n=== IMAGEN: ${file} ===\n${text.trim()}\n`;
                fs.appendFileSync(outFile, outputText, 'utf8');
            } catch (e) {
                console.error(`Error processing ${file}:`, e);
                fs.appendFileSync(outFile, `\n\n=== IMAGEN: ${file} ===\n[ERROR OCR]\n`, 'utf8');
            }
        }
    }

    await Promise.all([
        processNext(worker1, 1),
        processNext(worker2, 2)
    ]);

    await worker1.terminate();
    await worker2.terminate();
    
    console.log('OCR Extraction Complete! File saved to raw_ocr_output.txt');
}

processAllImages().catch(console.error);
