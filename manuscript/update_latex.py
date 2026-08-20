import re

with open('articulo_congreso_ISCS.tex', 'r', encoding='utf-8') as f:
    tex = f.read()

new_results = r'''\subsection{Results}

Preliminary testing focused on the \textbf{General Adult (18-64 years)} profile using 8 distinct clinical scenarios involving polypharmacy, CYP450 interactions, and prescribing cascades. The AI successfully identified the hidden Drug-Related Problems (DRP) in 100\% of the cases and adhered strictly to its \textit{Chain-of-Thought} constraints.

\begin{figure}[H]
  \centering
  \includegraphics[width=\columnwidth]{fig2_results.png}
  \caption{Preliminary Evaluation Results: General Adult Profile ($n=8$). 
Demonstrates 100\% DRP identification and safe clinical recommendations.}
  \label{fig:results}
\end{figure}

The qualitative analysis of the AI's performance reveals advanced clinical reasoning across four critical domains:

\begin{enumerate}
    \item \textbf{High-Risk Interactions (CYP450 and QT):} In Case G1, the system successfully identified the severe CYP3A4 inhibition caused by clarithromycin, which dangerously elevates atorvastatin levels and risks rhabdomyolysis. In Case G7, it correctly warned of \textit{Torsades de Pointes} when combining Amiodarone and Levofloxacin.
    \item \textbf{Prescribing Cascade Detection:} In Case G3, the system deduced that the patient's cough was a secondary effect of the ACE inhibitor (Enalapril), advising a switch to an ARB rather than treating the symptom with dextromethorphan.
    \item \textbf{Renal Adjustment and NSAID Duplication:} The model demonstrated mathematical reasoning by correlating a reduced Glomerular Filtration Rate (GFR 35 mL/min) with metformin accumulation (Case G5), warning of Lactic Acidosis. Furthermore, it identified toxic therapeutic duplication of NSAIDs and accurately calculated paracetamol overdose limits (Cases G2 and G4).
    \item \textbf{Clinically Safe Recommendations:} The system consistently provided actionable mitigations, such as separating levothyroxine from calcium/iron administration by 4 hours (Case G6) and enforcing strict alcohol abstinence during and after metronidazole therapy (Case G8).
\end{enumerate}

\subsection{Hardware Performance}'''

def replacer(match):
    return new_results

pattern = r'\\subsection\{Results\}.*?\\subsection\{Hardware Performance\}'
tex = re.sub(pattern, replacer, tex, flags=re.DOTALL)

with open('articulo_congreso_ISCS.tex', 'w', encoding='utf-8') as f:
    f.write(tex)

print('Updated ISCS successfully')
