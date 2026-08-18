# Respuesta a los Revisores (Response to Reviewers)

Agradecemos sinceramente a los revisores por sus valiosos comentarios, los cuales han contribuido significativamente a mejorar la calidad y claridad de este manuscrito. A continuación, detallamos cómo se ha abordado cada observación, indicando la sección donde se realizaron los cambios.

---

## Reviewer 1

**1. "Provide a clear justification for why a total of 56 clinical scenarios (specifically 8 per profile) was chosen for the benchmark evaluation."**
* **Respuesta:** Se ha añadido una justificación detallada explicando que los 56 escenarios proporcionan una línea base estadísticamente robusta para medir tanto la sensibilidad como la especificidad de cada perfil farmacológico, sin sobreajustarse a un conjunto limitado de interacciones.
* **Ubicación del cambio:** Sección de "Experimental Evaluation" -> "Clinical Scenarios".

**2. "Justify the rationale behind selecting these specific seven clinical profiles (neonatal, pediatric, adolescent, general adult, geriatric, obstetric, and lactation)"**
* **Respuesta:** Se agregó un párrafo explicando que estos siete perfiles representan los puntos de inflexión farmacocinética más críticos en el desarrollo humano, donde la dosificación estándar para adultos resulta ineficaz o tóxica.
* **Ubicación del cambio:** Sección de "Materials and Methods" -> "Profile Specifications".

**3. "Add formal academic references supporting the clinical definitions and guidelines used for the population profiles listed on Table 2"**
* **Respuesta:** Se han incorporado las referencias académicas formales (ej. Criterios de Beers actualizados, guías STOPP/START, LactMed) directamente en la tabla y en las descripciones de los perfiles.
* **Ubicación del cambio:** Tabla 2 ("Seven Clinical Profiles and Activated Evidence-Based Criteria").

**4. "The title uses the term 'Multi-Agent,' but the manuscript does not clearly define how many agents are involved or how they interact."**
* **Respuesta:** Tiene toda la razón. Para mayor precisión técnica, hemos modificado el título y el texto del documento para utilizar el término **"Multi-Profile Agent"** (Agente Multi-Perfil), aclarando en la sección de Arquitectura que se trata de un único LLM cuyo comportamiento es ruteado dinámicamente mediante *system prompts*.
* **Ubicación del cambio:** Título del artículo y Sección "Materials and Methods" -> "System Architecture Overview".

**5. "Include a brief introductory paragraph at the beginning of Sections II, III, IV, V, VI, VII, and VIII to improve flow and section organization"**
* **Respuesta:** Se ha añadido un párrafo introductorio al inicio de cada sección principal para mejorar la transición y el flujo de lectura.
* **Ubicación del cambio:** Al inicio de las secciones II, III, IV y V (las secciones fueron renumeradas debido a la consolidación sugerida).

**6. "Sections III through VI should be consolidated into a unified 'Materials and Methods' section. Furthermore, a dedicated figure or table must be added here to explicitly illustrate the multi-agent workflow and the exact number of agents."**
* **Respuesta:** Las Secciones III, IV, V y VI han sido consolidadas bajo una única sección denominada "Materials and Methods". Además, se ha actualizado la descripción de la Figura 1 (System Architecture) para que funcione como el diagrama de flujo de alto nivel (pipeline) que ilustra cómo un solo agente maneja los múltiples perfiles clínicos.
* **Ubicación del cambio:** Nueva Sección III ("Materials and Methods") y Figura 1.

**7. "Translate and standardize all instances of 'Farmacéutica'."**
* **Respuesta:** Se han traducido todas las instancias de "Farmacéutica" a "Pharmaceutical". El nombre del sistema ahora se estandariza como **"AlicIA Pharmaceutical"**.
* **Ubicación del cambio:** A lo largo de todo el documento.

**8. "Homogenize the overall naming convention across the text, as there is currently an inconsistency between 'Pharmaceutical' in the title and 'Pharmacist' elsewhere in the manuscript."**
* **Respuesta:** Se ha homogeneizado el término. Se utiliza "AlicIA Pharmaceutical" para referirse al sistema/software, y "Clinical Pharmacist" para referirse al rol que el agente desempeña.
* **Ubicación del cambio:** A lo largo de todo el documento.

**9. "Condense Section VIII-B to make the study's limitations more direct and concise"**
* **Respuesta:** Se ha condensado la sección de limitaciones, presentándola en un formato de lista directa y concisa para facilitar su lectura.
* **Ubicación del cambio:** Sección de "Discussion" -> "Limitations".

**10. "Replace all arXiv preprints with peer-reviewed journal articles to satisfy JCR indexing standards."**
* **Respuesta:** Los *preprints* de arXiv han sido reemplazados por sus equivalentes publicados y revisados por pares en revistas indexadas (JCR), asegurando el rigor bibliográfico.
* **Ubicación del cambio:** Sección de Referencias.

**11. "If AI tools were utilized during the research or drafting of this manuscript, include an Acknowledgments section immediately before the References specifying the exact tools used and the extent of their contribution."**
* **Respuesta:** Se ha añadido una sección de Agradecimientos (Acknowledgments) detallando el uso de modelos de lenguaje (Gemini) como asistentes de codificación y revisión de redacción, especificando que el diseño clínico y la verificación de resultados fueron realizados íntegramente por los autores humanos.
* **Ubicación del cambio:** Sección "Acknowledgments" (inmediatamente antes de las referencias).

**12. "Please add a clear, high-level pipeline diagram or workflow figure illustrating the complete operational process of the proposed system"**
* **Respuesta:** Como se mencionó anteriormente, la Figura de Arquitectura ha sido adaptada y descrita explícitamente para servir como este diagrama de pipeline de alto nivel.
* **Ubicación del cambio:** Sección "Materials and Methods", Figura 1.

---

## Reviewer 2

**1. "AlicIA Pharmaceuticals is interesting. The authors should include a video showing how to use it."**
* **Respuesta:** Agradecemos el comentario. Se ha grabado un video demostrativo completo del uso del sistema, el cual ha sido subido y enlazado en el repositorio de GitHub para su visualización.
* **Ubicación del cambio:** Sección "Data Availability" (enlace al repositorio).

**2. "Authors should provide a URL so it can be accessed directly, rather than the entire source material."**
* **Respuesta:** Comprendemos la utilidad de una demostración web (URL directa). Sin embargo, como se argumenta en el artículo, el diseño central del sistema es ser **Privacy-First y Air-Gapped** (ejecución 100% local sin conexión a internet) para cumplir estrictamente con las normativas de protección de datos médicos de salud (HIPAA, NOM-024). Desplegar el sistema en una URL pública en la nube violaría este principio fundamental de la investigación. Para suplir esta necesidad de demostración, hemos proporcionado el video funcional en el repositorio de GitHub, permitiendo a los revisores ver el sistema en acción sin comprometer la premisa de seguridad local.
* **Ubicación del cambio:** Respuesta directa al revisor (el enlace al repositorio con el video está en la sección "Data Availability").
