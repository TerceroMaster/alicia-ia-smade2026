# Guía de Defensa para el Congreso SMaDE 2026 🎓

Este documento contiene los conceptos clave y la terminología técnica fundamental para defender la arquitectura del proyecto **Farmacéutica Alicia IA** ante los revisores y el jurado del congreso.

---

### 1. ¿Por qué NO es un "Multi-Agent System" (Sistema Multi-Agente)?
**No, el sistema no es multi-agente.** Un sistema multi-agente ocurre cuando tienes a múltiples inteligencias artificiales hablando entre sí al mismo tiempo (Ejemplo: Un agente AI "Doctor" discutiendo con un agente AI "Farmacéutico" para llegar a un acuerdo). 

Lo nuestro es un **Single-Agent with Prompt-Driven Routing** (Un Agente Único con Ruteo por Prompts). Tenemos un solo cerebro (el modelo Gemma 4 12B cargado en LM Studio), y lo que hace el código en React es cambiarle la "personalidad" (el *system prompt*) dinámicamente dependiendo del botón de perfil que el usuario presione.

### 2. ¿Qué significa "Privacy-First"?
Significa **"Privacidad desde el diseño"**. Hoy en día, si un hospital usa ChatGPT, está enviando ilegalmente el historial clínico del paciente a los servidores de OpenAI en California, violando normativas como HIPAA o la NOM mexicana. Nuestro sistema es "Privacy-First" porque está construido con el objetivo principal de que los datos médicos confidenciales (PHI - Protected Health Information) **nunca** salgan de la computadora del farmacéutico. Todo se procesa localmente.

### 3. ¿Qué significa "Air-Gapped"?
Traducido literal es "Separación de Aire". Es un término militar y de ciberseguridad. Significa que una computadora está físicamente desconectada del internet (no tiene cable de red ni WiFi). 

El sistema Alicia IA es **"Air-Gapped by design"** porque, como corre localmente con LM Studio, podrías instalar la aplicación en una laptop, llevarla a una clínica rural en la sierra de Tabasco sin ninguna señal de internet, ¡y la IA de nivel experto seguiría funcionando perfectamente sin latencia de red!

### 4. ¿Qué significa "Commodity Hardware"?
Significa **"Hardware de Consumo"** (computadoras comerciales normales). Las IA médicas de frontera normalmente requieren clústers de servidores en la nube que cuestan cientos de miles de dólares (*Enterprise Hardware*). 

Al declarar que nuestro sistema corre en *Commodity Hardware*, demostramos que logramos hacer correr una IA médica hiper-avanzada (cuantizada) en una simple tarjeta gráfica "gamer" (como una NVIDIA RTX 3060 de 12GB de VRAM) que cualquier clínica modesta u hospital público puede comprar por menos de $1,000 dólares. Esta es la verdadera democratización de la IA en la salud.
