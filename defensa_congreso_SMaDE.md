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

---

### 5. Justificación de la Metodología de Validación Clínica (El Excel)
**¿Por qué hicimos esa tabla y cuál es el fin?**  
En el mundo académico y médico, no puedes simplemente decir *"mi Inteligencia Artificial es muy buena"*; tienes que demostrarlo con métricas cuantitativas que otros científicos puedan replicar. El fin de la tabla es **transformar las respuestas subjetivas de un LLM en datos duros, objetivos y publicables**.

**¿Qué vamos a reportar al final en el paper?**  
Con esos datos, vamos a calcular 3 porcentajes clave que irán en la sección de Resultados:
1. **DRP Identification Rate (Tasa de Identificación):** El % de veces que Alicia detectó el peligro.
2. **Recommendation Acceptance (Aceptación Clínica):** El % de veces que su consejo fue seguro y útil para un humano.
3. **CoT Quality Score (Calidad de Transparencia):** El promedio (ej. 4.4 sobre 5) de qué tan bien la IA explica su razonamiento antes de actuar. 

**¿De dónde sacamos esta tabla y la métrica de Transparencia (1 al 5)?**  
Esta metodología está respaldada por dos grandes estándares de Inteligencia Artificial en Medicina:
1. **Guías CONSORT-AI (Consolidated Standards of Reporting Trials for AI):** Exigen que los sistemas médicos de IA evalúen la *explicabilidad* (Explainability). No basta con que la IA acierte, debe explicar *por qué* acertó, para que el farmacéutico humano pueda auditar la decisión.
2. **Escalas Likert en PNL Clínico:** Evaluar el *"Chain-of-Thought"* (la Transparencia del Razonamiento) con una escala Likert del 1 al 5 es el estándar de oro actual en los *papers* de IEEE y Nature Medicine para calificar a los Large Language Models.

Con esto le demuestras a la Dra. y al jurado que el Excel no es un "invento", sino un protocolo experimental estructurado, alineado a normas internacionales (CONSORT-AI) para garantizar la seguridad del paciente.
