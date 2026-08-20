# Guía de Despliegue en Producción: AlicIA Pharmaceutical

*Manual Técnico para Instalación, Configuración y Puesta en Marcha en Entornos Hospitalarios y Laboratorios Farmacéuticos.*

---

## 1. Requisitos de Hardware (Commodity Hardware)

Dado que AlicIA opera 100% de manera local (Air-Gapped) utilizando un modelo de 12 Billones de parámetros con cuantización QAT de 4-bits, los equipos de cómputo en el hospital/laboratorio deben cumplir con los siguientes requisitos mínimos:

*   **Sistema Operativo:** Windows 10/11 (Recomendado fuertemente para garantizar la privacidad del dictado por voz nativo).
*   **Procesador (CPU):** Intel Core i5/i7 (10ª Gen o superior) o AMD Ryzen 5/7.
*   **Memoria RAM (Sistema):** Mínimo 16 GB DDR4 (Recomendado 32 GB).
*   **Tarjeta Gráfica (GPU):** **OBLIGATORIO.** NVIDIA RTX Serie 3000 o 4000 (Ej. RTX 3060, 4060) con un mínimo de **8 GB de VRAM dedicados**.
*   **Almacenamiento:** SSD NVMe (Mínimo 50 GB de espacio libre para el modelo y dependencias).

---

## 2. Fase 1: Instalación del Backend (LM Studio y Modelo AI)

El backend no requiere instalaciones complejas de Python ni dependencias frágiles, todo se orquesta a través de **LM Studio**.

1.  **Descargar LM Studio:** Instala la última versión de LM Studio para Windows desde su sitio web oficial.
2.  **Descargar el Modelo Gemma 4:**
    *   Abre LM Studio.
    *   En la barra de búsqueda, ingresa `google/gemma-4-12b-qat`.
    *   Asegúrate de descargar la versión cuantizada a **4-bits (Q4_K_M o similar)**. El archivo pesará aproximadamente entre 6 y 8 GB.
3.  **Configurar el Servidor Local (API Gateway):**
    *   Ve a la pestaña de "Local Server" (ícono de servidor en el menú izquierdo).
    *   Selecciona el modelo Gemma 4 descargado en la parte superior.
    *   En el panel de configuración de la derecha, ajusta lo siguiente:
        *   **Server Port:** `1234` (OBLIGATORIO, el frontend asume este puerto).
        *   **CORS (Cross-Origin Resource Sharing):** Activa (ON) la opción `Enable CORS` para permitir que el frontend de React se conecte.
        *   **GPU Offload:** Configura el parámetro en "Max" o asigna manualmente las capas (layers) a la GPU para garantizar que la inferencia se realice en la tarjeta de video y no en el procesador.
    *   **Haz clic en "Start Server".**

---

## 3. Fase 2: Configuración de Inferencia (Requisitos Médicos)

En LM Studio, justo antes de iniciar el servidor o dentro del panel derecho, debes fijar los hiperparámetros de inferencia clínica para asegurar resultados deterministas y evitar alucinaciones:

*   **Temperature:** `0.3` (Crítico para respuestas farmacológicas exactas).
*   **Max Tokens:** `4096`
*   **Context Length:** `8192` (Asegura suficiente memoria para procesar recetas largas e historiales clínicos).

---

## 4. Fase 3: Despliegue del Frontend (React + Vite)

El código fuente actual de la aplicación (la carpeta con `package.json`, `src/`, etc.) está en modo desarrollo (`npm run dev`). Para llevarlo a computadoras de producción en los hospitales, debes construir (build) el proyecto.

### A) Generar la Versión de Producción
En la computadora principal de desarrollo, abre una terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
npm run build
```
Esto creará una carpeta llamada `dist/`. **Esa carpeta contiene todo tu software final optimizado.** Ya no necesitas Node.js en las computadoras de los hospitales.

### B) Instalar en la Computadora del Hospital
1.  Copia la carpeta `dist/` a la computadora del farmacéutico clínico en el hospital.
2.  Para servir estos archivos, puedes usar cualquier servidor web estático liviano (como NGINX, Apache, o incluso un pequeño script de Python/Node).
    *   *Opción sencilla para Windows:* Usar `serve` o un servidor web local simple apuntando a la carpeta `dist/`.
    *   El personal médico simplemente abrirá su navegador en `http://localhost:XXXX` (dependiendo del puerto del servidor web).

---

## 5. Fase 4: Políticas de Seguridad y Aislamiento (Air-Gap)

Una vez que LM Studio y el Frontend estén corriendo, debes aplicar las siguientes políticas estrictas de TI:

1.  **Desconexión de Red (Air-Gapped):** 
    *   Desconecta físicamente el cable Ethernet o desactiva el adaptador Wi-Fi de la computadora clínica. AlicIA no requiere internet para funcionar. 
    *   *Nota:* Si el hospital requiere intranet para el Expediente Clínico Electrónico (EHR), configura el firewall de Windows para **bloquear todo el tráfico saliente a Internet**, permitiendo solo tráfico LAN local.
2.  **Navegador OBLIGATORIO (Microsoft Edge):**
    *   Para la captura de voz de los diagnósticos, el farmacéutico debe utilizar **únicamente Microsoft Edge en Windows 10/11**.
    *   ¿Por qué? Chrome o Firefox intentarán enviar el audio a servidores de la nube para transcribirlo (fallará sin internet). Microsoft Edge, por el contrario, usará el sistema operativo Windows nativamente para procesar el texto localmente (W3C Web Speech API offline), garantizando el cumplimiento de la privacidad NOM-024.
3.  **Permisos de Hardware:** 
    *   Asegúrate de que Edge tenga permisos habilitados en Windows para acceder al **Micrófono** (para el dictado) y a la **Cámara** (para escanear recetas).

---

## 6. Mantenimiento y Actualizaciones

*   **Actualización de Lineamientos (Prompts):** Cuando las guías médicas cambien (ej. actualización de Criterios de Beers), el equipo de TI central solo debe modificar el archivo `systemPrompts.js`, generar un nuevo `npm run build` (nueva carpeta `dist/`), y reemplazarla en las computadoras de los hospitales mediante USB segura.
*   **Limpieza de Datos:** Como AlicIA no usa base de datos persistente propia (depende del estado en RAM del navegador), los datos del paciente (PHI) se purgan automáticamente en el momento en que se cierra la pestaña del navegador o se apaga la computadora.

---
*Con estos pasos, el sistema quedará robustamente instalado y operando a nivel de grado médico en cualquier computadora local del hospital.*
