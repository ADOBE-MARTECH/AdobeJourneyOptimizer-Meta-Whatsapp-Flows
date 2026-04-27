import os
import glob

# Rutas
base_dir = r"c:\Users\aluca\OneDrive\Desktop\ia\adobe\ajo\AdobeJourneyOptimizer-Meta-Whatsapp-Flows\evaluaciones"
img_dir = os.path.join(base_dir, "partes de adobe")
images = glob.glob(os.path.join(img_dir, "*.jpeg"))

# Ordenar por fecha o nombre
images.sort()

out_file = os.path.join(base_dir, "EXAMEN_COMPLETO.md")

md_content = "# 🎯 Examen de Certificación Adobe - Preguntas\n\n"
md_content += "Este documento contiene todas las preguntas subidas para tu preparación. Iremos completando las respuestas y la documentación a medida que avancemos.\n\n"
md_content += "---\n\n"

for i, img_path in enumerate(images):
    img_name = os.path.basename(img_path)
    # Usar ruta relativa para el markdown
    import urllib.parse
    rel_path = f"partes de adobe/{img_name}"
    encoded_path = urllib.parse.quote(rel_path)
    
    md_content += f"### ❓ Pregunta {i+1}\n"
    md_content += f"![Pregunta {i+1}](./{encoded_path})\n\n"
    md_content += "*   **Opciones:**\n"
    md_content += "    *   [A] \n"
    md_content += "    *   [B] \n"
    md_content += "    *   [C] \n"
    md_content += "    *   [D] \n\n"
    md_content += "*   **✅ Respuesta Correcta:** `[Pendiente]`\n\n"
    md_content += "*   **🧠 Intención de la Pregunta:** \n"
    md_content += "    *   [Pendiente]\n\n"
    md_content += "*   **📖 Justificación Detallada:**\n"
    md_content += "    *   [Pendiente]\n\n"
    md_content += "*   **🔗 Documentación Oficial de Respaldo:**\n"
    md_content += "    *   [Documentación de Adobe](https://experienceleague.adobe.com/)\n\n"
    md_content += "---\n\n"

with open(out_file, "w", encoding="utf-8") as f:
    f.write(md_content)

print(f"Archivo generado exitosamente con {len(images)} preguntas en {out_file}")
