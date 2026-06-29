import matplotlib.pyplot as plt
import numpy as np

# Data
metrics = ['DRP Identification Rate', 'Chain-of-Thought Adherence', 'Clinical Acceptability (Preliminary)']
percentages = [100.0, 100.0, 100.0]

# Style configuration
plt.style.use('seaborn-v0_8-whitegrid')
fig, ax = plt.subplots(figsize=(8, 5))

# Create bars
y_pos = np.arange(len(metrics))
bars = ax.barh(y_pos, percentages, height=0.5, color=['#2ca02c', '#1f77b4', '#ff7f0e'], edgecolor='black', linewidth=1.2)

# Set axis limits and labels
ax.set_xlim(0, 110)
ax.set_yticks(y_pos)
ax.set_yticklabels(metrics, fontsize=11, fontweight='bold')
ax.set_xlabel('Porcentaje de Éxito (%)', fontsize=12, fontweight='bold')
ax.set_title('Resultados Preliminares: Perfil Adulto General (n=8)', fontsize=14, fontweight='bold', pad=15)

# Add text labels on bars
for bar in bars:
    width = bar.get_width()
    ax.text(width - 5, bar.get_y() + bar.get_height()/2, f'{width}%', 
            ha='right', va='center', color='white', fontweight='bold', fontsize=11)

# Enhance grid and layout
ax.xaxis.grid(True, linestyle='--', alpha=0.7)
ax.yaxis.grid(False)
plt.tight_layout()

# Save image
plt.savefig('fig2_results.png', dpi=300, bbox_inches='tight')
print('Chart successfully saved to fig2_results.png')
