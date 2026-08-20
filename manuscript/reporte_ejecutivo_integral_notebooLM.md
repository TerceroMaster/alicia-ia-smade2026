# Reporte Ejecutivo Integral: AlicIA Pharmaceutical

*Documento de alto nivel estratégico y clínico para la presentación en SMaDE 2026 y análisis con NotebookLM.*

---

## 1. Resumen Ejecutivo

**AlicIA Pharmaceutical** es un sistema de apoyo a la decisión clínica (CDSS) diseñado específicamente para el entorno farmacéutico hospitalario. Impulsado por el modelo de lenguaje de inteligencia artificial **Google Gemma 4 (12B QAT)**, el sistema opera de manera 100% local y aislada de internet (Air-Gapped) para garantizar el cumplimiento de normativas de privacidad como HIPAA y NOM-024. Su objetivo principal es erradicar los Resultados Negativos asociados a la Medicación (RNM) provocados por la polifarmacia, dotando al farmacéutico clínico de un "copiloto" capaz de analizar interacciones medicamentosas complejas en milisegundos, adaptándose a 7 perfiles demográficos distintos mediante una arquitectura de *System Prompt Injection*. En su evaluación inicial sobre el perfil "Adulto General" (8 escenarios), el sistema alcanzó una precisión del 100% en la identificación de problemas relacionados con medicamentos.

---

## 2. Introducción y Justificación

Los sistemas de salud públicos en Latinoamérica enfrentan una crisis estructural. Un farmacéutico clínico promedio debe gestionar la revisión de hasta 80 pacientes por turno, lo que se traduce en apenas 5 a 10 minutos por paciente. En poblaciones geriátricas o con enfermedades crónicas, la polifarmacia (uso simultáneo de 5 o más medicamentos) crea una explosión combinatoria de posibles interacciones que es humanamente imposible de evaluar en tiempo real y sin margen de error.

Mientras que las soluciones en la nube (como ChatGPT o Claude) ofrecen capacidades de análisis, su uso en entornos hospitalarios está bloqueado por regulaciones de privacidad de datos médicos. AlicIA nace para llenar este vacío: ofrecer razonamiento de IA de grado experto directamente en hardware local (commodity hardware).

---

## 3. Metodología y Arquitectura del Sistema

El desarrollo de AlicIA Pharmaceutical siguió una metodología de despliegue en 4 capas interconectadas localmente:

1.  **Motor de Inferencia Cuantizado:** Se utilizó Gemma 4 12B QAT (Quantization-Aware Training) a 4-bits, lo que reduce el consumo de memoria de 24 GB a ~6-8 GB VRAM, permitiendo su ejecución en GPUs comerciales estándar.
2.  **API Local (LM Studio):** Interfaz que actúa como servidor local en el puerto 1234, simulando el estándar de la API de OpenAI.
3.  **Capa de Especialización Farmacológica:** Un sistema que inyecta directrices rígidas (Criterios de Beers, STOPP/START, LactMed, FDA) antes de cada consulta, forzando al modelo a especializarse instantáneamente en 1 de 7 perfiles: *Neonato, Pediátrico, Adolescente, Adulto, Adulto Mayor, Embarazo, y Lactancia*.
4.  **Frontend Multimodal (React + Vite):** Interfaz gráfica *Glassmorphism* que soporta captura de recetas médicas por visión y dictado de voz mediante la W3C Web Speech API (procesada nativamente en Microsoft Edge por seguridad).

---

## 4. Ventajas Competitivas

*   **Privacidad Absoluta (Air-Gapped):** Ningún dato del paciente (texto, voz o imagen) sale del dispositivo local hacia internet.
*   **Eficiencia en Hardware Comercial:** No requiere clusters de servidores costosos; puede ejecutarse en laptops hospitalarias con GPUs dedicadas de gama media.
*   **Transparencia (Auditoría CoT):** Cumple con las directrices CONSORT-AI al mostrar de forma colapsable el "proceso de pensamiento" (Chain-of-Thought) de la IA antes de emitir la recomendación.
*   **Prevención de "Jailbreaking" (ISO/IEC 42001):** Cuenta con salvaguardas arquitectónicas inmutables que impiden que el modelo asuma personalidades maliciosas o brinde consejos sobre uso recreativo de drogas.
*   **Cero Alucinaciones Cruzadas:** El sistema limpia completamente la ventana de contexto de la IA cada vez que se cambia de paciente, induciendo una amnesia controlada que elimina el riesgo de mezclar historiales clínicos.

---

## 5. Desventajas y Limitaciones Actuales

*   **Límites de la Cuantización:** Aunque QAT mitiga la pérdida de precisión, el modelo de 4-bits puede perder matices microscópicos en casos de extrema rareza en comparación con el modelo en precisión completa (bfloat16).
*   **Dependencia del Hardware Local:** Si bien corre en equipos "comerciales", sigue requiriendo una GPU moderna (idealmente Nvidia RTX serie 3000 o 4000) o un procesador con NPU capaz, lo que descarta computadoras de oficina muy antiguas.
*   **Restricción de Navegador para Voz:** Para asegurar que el audio no se envíe a la nube, el sistema fuerza operativamente el uso de Microsoft Edge en Windows, limitando la libertad del usuario de usar Chrome o Safari si desean usar la función de dictado por voz.

---

## 6. Discusión Clínica

La implementación de LLMs en el entorno clínico no debe entenderse como un reemplazo del juicio médico, sino como un escudo de seguridad perimetral. AlicIA demuestra que, limitando la "creatividad" del modelo (reduciendo la temperatura a 0.3) y forzando marcos de referencia epidemiológicos duros mediante *System Prompt Injection*, es posible transformar un generador de texto estocástico en un motor determinista de validación farmacocinética. 

El modelo demostró ser inmune a sesgos demográficos genéricos al forzársele a solicitar parámetros biométricos (como mg/kg de peso o aclaramiento de creatinina) en lugar de permitirle adivinar la posología basada en edad aparente.

---

## 7. Conclusión

AlicIA Pharmaceutical establece un nuevo paradigma para la farmacovigilancia digital en países en vías de desarrollo. Demuestra que es tecnológicamente viable y económicamente factible desplegar Inteligencia Artificial Generativa de grado clínico de manera local, resolviendo el cuello de botella del tiempo por paciente sin violar las leyes de privacidad de datos de salud. Con un 100% de identificación de PRMs en la fase preliminar, el sistema sienta las bases para auditorías clínicas automatizadas en tiempo real.

---

## 8. Trabajos a Futuro (Next Steps)

1.  **Validación de los 48 Escenarios Restantes:** Completar la auditoría clínica sobre los escenarios correspondientes a los perfiles de Neonatos, Pediatría, Adolescentes, Embarazo y Lactancia, los cuales ya están desarrollados a nivel de código pero pendientes de evaluación formal por pares.
2.  **Integración Continua EHR:** Explorar vías seguras y locales para que AlicIA lea directamente el Expediente Clínico Electrónico (Electronic Health Record) a través de estándares FHIR/HL7 en redes de área local (LAN).
3.  **Expansión de la Ventana de Contexto:** Optimizar el uso de memoria (KV Cache) para permitir historiales médicos longitudinales masivos sin superar los límites de RAM de la GPU local.
