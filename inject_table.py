import re

table_iscs = r'''
\begin{table*}[t]
\centering
\caption{Clinical Validation Matrix (General Adult Profile, $n=8$). Comparison of Expert Gold Standard vs. AI Inferences.}
\label{tab:correlation_matrix}
\renewcommand{\arraystretch}{1.3}
\begin{tabular}{@{}p{0.05\linewidth}p{0.25\linewidth}p{0.3\linewidth}p{0.3\linewidth}c@{}}
\toprule
\textbf{Case} & \textbf{Prescription} & \textbf{Expected DRP (Expert Panel)} & \textbf{AI Detected PRM (Chain-of-Thought)} & \textbf{Match} \\
\midrule
\textbf{G1} & Omeprazole + Clarithromycin + Atorvastatin & Severe CYP3A4 inhibition by clarithromycin; elevates atorvastatin levels, risk of rhabdomyolysis. & Drug-Drug Interaction. Clarithromycin inhibits CYP3A4. Severe muscular toxicity risk. & 100\% \\
\textbf{G2} & Paracetamol 1g q6h + Tramadol/Parac. (37.5/325 mg) q8h & Therapeutic duplication and exceeding max daily paracetamol dose ($> 4$g/day). & Inadequate Dose. Consumption of 4.975 g/day. Severe Hepatotoxicity risk. & 100\% \\
\textbf{G3} & Enalapril + Cough Syrup (Dextromethorphan) & Prescribing cascade. Cough is an ACE inhibitor side effect. & Adverse Effect (Cascade). Enalapril causes dry cough. Dextromethorphan masks symptom. Switch to ARB. & 100\% \\
\textbf{G4} & Naproxen 500 mg q12h + Diclofenac IM & NSAID duplication; severe increase in GI bleeding and nephrotoxicity risk. & Therapeutic Duplication. Simultaneous use of two NSAIDs. Severe GI and renal toxicity increase. & 100\% \\
\textbf{G5} & Metformin 850 mg q8h (GFR 35 mL/min) & Dose too high for reduced GFR; lactic acidosis risk. & Inadequate dose due to renal failure. Accumulation at GFR 35 mL/min. Lactic Acidosis risk. & 100\% \\
\textbf{G6} & Levothyroxine + Calcium and Iron & Severe inhibition of levothyroxine absorption. Separate by 4 hours. & Drug Interaction. Calcium/Iron reduce absorption. Separate doses by at least 4 hours. & 100\% \\
\textbf{G7} & Amiodarone + Levofloxacin & Risk of QT interval prolongation and \textit{Torsades de Pointes}. & Drug Interaction. Both prolong QT interval. Arrhythmia risk. & 100\% \\
\textbf{G8} & Metronidazole + Alcohol & Antabuse (disulfiram-like) effect risk with alcohol. & Drug-Substance Interaction. Disulfiram-like reaction risk. Avoid alcohol. & 100\% \\
\bottomrule
\end{tabular}
\end{table*}
'''

table_cientifico = r'''
\begin{table}[H]
\centering
\caption{Matriz de Validación Clínica (Perfil: Adulto General, $n=8$).}
\label{tab:correlation_matrix}
\renewcommand{\arraystretch}{1.3}
\begin{tabularx}{\textwidth}{@{}lXXXc@{}}
\toprule
\textbf{Caso} & \textbf{Prescripción Evaluada} & \textbf{DRP Esperado (Panel Expertos)} & \textbf{PRM Detectado por IA (Chain-of-Thought)} & \textbf{Éxito} \\
\midrule
\textbf{G1} & Omeprazol + Claritromicina + Atorvastatina & Interacción severa (inhibición de CYP3A4 por claritromicina); aumenta niveles de atorvastatina, riesgo de rabdomiólisis. & Interacción Fármaco-Fármaco. Claritromicina inhibe CYP3A4. Riesgo de toxicidad muscular grave. & 100\% \\
\textbf{G2} & Paracetamol 1g c/6h + Tramadol/Parac. c/8h & Duplicidad terapéutica y superación de dosis máxima diaria de paracetamol ($> 4$g/día), hepatotoxicidad. & Dosis Inadecuada. Consumo de 4.975 g/día. Riesgo de Hepatotoxicidad grave. & 100\% \\
\textbf{G3} & Enalapril + Jarabe para la tos & DRP de inefectividad. Tos por efecto secundario del IECA (cascada de prescripción). & Efecto adverso (Cascada). Enalapril causa tos seca. Dextrometorfano enmascara síntoma. Cambiar a ARA-II. & 100\% \\
\textbf{G4} & Naproxeno 500 mg c/12h + Diclofenaco IM & Duplicidad de AINEs; aumento grave de riesgo de sangrado gastrointestinal y nefrotoxicidad. & Duplicidad terapéutica. Uso simultáneo de dos AINEs. Aumento severo de toxicidad gastrointestinal y renal. & 100\% \\
\textbf{G5} & Metformina 850 mg c/8h (GFR 35 mL/min) & Dosis demasiado alta para tasa de filtración reducida; riesgo de acidosis láctica. & Dosis inadecuada por falla renal. Acumulación por GFR 35 mL/min. Riesgo de Acidosis Láctica. & 100\% \\
\textbf{G6} & Levotiroxina + Calcio y Hierro juntos & Inhibición severa de absorción de levotiroxina. Separar 4 horas. & Interacción medicamentosa. Calcio/Hierro reducen absorción. Separar tomas por 4 horas. & 100\% \\
\textbf{G7} & Amiodarona + Levofloxacino & Riesgo de prolongación del intervalo QT y \textit{Torsades de Pointes}. & Interacción medicamentosa. Ambos prolongan intervalo QT. Riesgo de arritmias. & 100\% \\
\textbf{G8} & Metronidazol + Alcohol & Riesgo de efecto antabús (disulfiram-like) con el consumo de alcohol. & Interacción fármaco-sustancia. Riesgo de Reacción tipo Disulfiram. Evitar alcohol. & 100\% \\
\bottomrule
\end{tabularx}
\end{table}
'''

# Update ISCS (English)
with open('articulo_congreso_ISCS.tex', 'r', encoding='utf-8') as f:
    iscs = f.read()

def replacer_iscs(match):
    return table_iscs + '\n' + match.group(0)

# insert before \subsection{Hardware Performance}
iscs = re.sub(r'\\subsection\{Hardware Performance\}', replacer_iscs, iscs)

with open('articulo_congreso_ISCS.tex', 'w', encoding='utf-8') as f:
    f.write(iscs)

# Update Cientifico (Spanish)
with open('articulo_cientifico.tex', 'r', encoding='utf-8') as f:
    cien = f.read()

def replacer_cien(match):
    return match.group(0) + '\n\n' + table_cientifico

# insert after "respetando el formato Chain-of-Thought."
pattern_cien = r'respetando el formato Chain-of-Thought\.'
cien = re.sub(pattern_cien, replacer_cien, cien)

with open('articulo_cientifico.tex', 'w', encoding='utf-8') as f:
    f.write(cien)

print('Tables injected successfully')
