const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'partes de adobe');
const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpeg')).sort().slice(0, 5);

async function processImages() {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imgPath = path.join(imgDir, file);
        console.log(`\n--- OCR for ${file} ---`);
        try {
            const { data: { text } } = await Tesseract.recognize(
                imgPath,
                'eng+spa', // Use English and Spanish
            );
            console.log(text.trim());
        } catch (e) {
            console.error(`Error processing ${file}:`, e);
        }
    }
}

processImages();
