# Dataset de Validación Clínica Reducido - Farmacéutica Alicia IA
**Total de Escenarios:** 8 (Perfil Adulto General)
**Revisores:** Mtro. Luis Ramón Tercero Martínez González, Dra. María Teresa Flores Dorantes (LBMyFG - UJAT).
*Nota metodológica: Por recomendación del especialista en farmacia clínica, esta primera versión del artículo se enfocará exclusivamente en 8 casos del Perfil Adulto General (18 - 64 años) abordando polifarmacia, interacciones CYP450 y cascada de prescripción.*

---

## Perfil Adulto General (18 - 64 años)
*Enfoque: Polifarmacia estándar, interacciones CYP450, cascada de prescripción.*

1. **Caso G1:** Adulto (45 años) con úlcera y dislipidemia. Toma: Atorvastatina 40 mg. Prescripción: Omeprazol 40 mg y Claritromicina 500 mg. 
   **DRP Esperado:** Interacción severa (inhibición de CYP3A4 por claritromicina) que aumenta niveles de atorvastatina, riesgo de rabdomiólisis.
2. **Caso G2:** Adulto (35 años) con dolor muscular. Prescripción: Paracetamol 1g cada 6h + Tramadol/Paracetamol (37.5/325 mg) cada 8h. 
   **DRP Esperado:** Duplicidad terapéutica y superación de dosis máxima diaria de paracetamol (> 4g/día), riesgo de hepatotoxicidad.
3. **Caso G3:** Adulta (50 años) con hipertensión y tos. Toma: Enalapril 20 mg. Prescripción: Jarabe para la tos (Dextrometorfano). 
   **DRP Esperado:** DRP de inefectividad. La tos es probablemente un efecto secundario del IECA (Enalapril). Se debe cambiar a ARA-II en vez de añadir antitusivo (cascada de prescripción).
4. **Caso G4:** Adulto (40 años) con gota y dolor crónico. Toma: Naproxeno 500 mg c/12h. Prescripción: Diclofenaco IM por dolor. 
   **DRP Esperado:** Duplicidad de AINEs; aumento grave de riesgo de sangrado gastrointestinal y nefrotoxicidad sin beneficio analgésico extra.
5. **Caso G5:** Adulto (60 años) diabético. Toma: Metformina 850 mg c/8h. GFR 35 mL/min. 
   **DRP Esperado:** Dosis de metformina demasiado alta para su tasa de filtración glomerular reducida; riesgo de acidosis láctica.
6. **Caso G6:** Adulta (28 años) con hipotiroidismo. Toma: Levotiroxina 100 mcg. Prescripción: Suplemento de Calcio y Hierro juntos en la mañana. 
   **DRP Esperado:** El calcio y el hierro inhiben severamente la absorción de levotiroxina. Deben separarse al menos 4 horas.
7. **Caso G7:** Adulto (55 años) con arritmia. Toma: Amiodarona. Prescripción: Levofloxacino 500 mg. 
   **DRP Esperado:** Riesgo de prolongación del intervalo QT y Torsades de Pointes (ambos fármacos prolongan QT).
8. **Caso G8:** Adulto (42 años) bebedor social (fines de semana). Prescripción: Metronidazol 500 mg c/8h x 7 días. 
   **DRP Esperado:** Riesgo de efecto antabús (disulfiram-like) con el consumo de alcohol; se requiere advertencia estricta.

---

## Instrucciones para realizar las pruebas

### 👩‍⚕️ Guía paso a paso para evaluar a Alicia
Para que el experimento sea válido y repetible para el artículo, debes ejecutar la prueba de la siguiente manera:

**Prepara el entorno:**
1. Abre **LM Studio**, asegúrate de tener cargado el modelo y dale a "Start Server" (Puerto 1234).
2. En tu terminal de VSCode (PowerShell), asegúrate de tener corriendo el frontend con `npm run dev`.
3. Abre Alicia IA en tu navegador (`http://localhost:5173`).

**Ejecuta el Caso (Ejemplo con el Caso G1):**
1. En la interfaz de Alicia, ve al selector de pacientes y **elige el perfil "Adulto (18-64)"** o similar.
2. En el chat, cópiale textualmente los datos del paciente: *"Adulto (45 años) con úlcera y dislipidemia. Toma: Atorvastatina 40 mg. Prescripción: Omeprazol 40 mg y Claritromicina 500 mg."*
3. Dale a enviar y espera la respuesta.

**Guarda y Evalúa:**
1. Copia la respuesta completa de Alicia.
2. Pégala en un documento de Excel o Word.
3. Evalúa (Sí/No) si detectó el problema y si dio la solución correcta.
4. Califícala del 1 al 5 según la transparencia de su razonamiento (como se definía en el documento original).

**Limpia y repite (¡CRÍTICO!):**
⚠️ **¡MUY IMPORTANTE!** Después de evaluar cada caso, dale al botón de **"Nueva Consulta"** (o refresca la página) para limpiar la memoria de Alicia. **CADA PREGUNTA DEBE SER UNA CONVERSACIÓN NUEVA.** Es vital que la IA no recuerde al paciente anterior cuando le preguntes por el siguiente caso. No uses una conversación larga para todos los casos.
