const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const imgDir = path.join(baseDir, 'partes de adobe');
const outFile = path.join(baseDir, 'EXAMEN_COMPLETO.md');

const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpeg')).sort();

let mdContent = "# 🎯 Examen de Certificación Adobe - Preguntas\n\n";
mdContent += "Este documento contiene todas las preguntas subidas para tu preparación. Iremos completando las respuestas y la documentación a medida que avancemos.\n\n";
mdContent += "---\n\n";

files.forEach((imgName, index) => {
    const relPath = `partes de adobe/${imgName}`;
    const encodedPath = encodeURI(relPath);
    
    mdContent += `### ❓ Pregunta ${index + 1}\n`;
    mdContent += `![Pregunta ${index + 1}](./${encodedPath})\n\n`;
    mdContent += "*   **Opciones:**\n";
    mdContent += "    *   [A] \n";
    mdContent += "    *   [B] \n";
    mdContent += "    *   [C] \n";
    mdContent += "    *   [D] \n\n";
    mdContent += "*   **✅ Respuesta Correcta:** `[Pendiente]`\n\n";
    mdContent += "*   **🧠 Intención de la Pregunta:** \n";
    mdContent += "    *   [Pendiente]\n\n";
    mdContent += "*   **📖 Justificación Detallada:**\n";
    mdContent += "    *   [Pendiente]\n\n";
    mdContent += "*   **🔗 Documentación Oficial de Respaldo:**\n";
    mdContent += "    *   [Documentación de Adobe](https://experienceleague.adobe.com/)\n\n";
    mdContent += "---\n\n";
});

fs.writeFileSync(outFile, mdContent, 'utf8');
console.log(`Archivo generado exitosamente con ${files.length} preguntas en ${outFile}`);
