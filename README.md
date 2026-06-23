# Farmacéutica Alicia IA 👩‍⚕️💊

**A Privacy-First, Air-Gapped Multimodal Clinical Pharmacist Agent with Seven-Profile Specialization on Commodity Hardware**

![Architecture](fig1_architecture.png)

## Overview
This repository contains the source code, prompts, and clinical validation dataset for **Alicia IA**, an air-gapped clinical decision-support agent designed for pharmacovigilance. 

Built to address the three major barriers of cloud-based LLMs in healthcare (connectivity, recurring costs, and PHI privacy), Alicia IA runs entirely locally on commodity hardware using **Google Gemma 4 12B QAT** interfaced through a React+Vite frontend and LM Studio.

The system utilizes a **Seven-Profile Pharmacological Specialization Engine** that steers the model into distinct clinical modes (Neonatal, Pediatric, Adolescent, General Adult, Geriatric, Obstetric, Lactation) using evidence-based criteria (Beers 2023, STOPP/START, LactMed, etc.).

## Authors
- **Mtro. Luis Ramón Tercero Martínez González**
- **Dra. María Teresa Flores Dorantes**
*Laboratorio de Biología Molecular y Farmacogenética (LBMyFG) - UJAT, México.*

## Data Availability
To support reproducibility and transparent academic review (CONSORT-AI), this repository includes:
1. **`dataset_56_casos_clinicos.md`**: The complete dataset of 56 structured clinical scenarios (8 per pharmacological profile) used for the preliminary validation.
2. **`systemPrompts.js`**: The exact system prompts and rulesets used to enforce the clinical behaviors and safety guardrails (ISO/IEC 42001).

## System Requirements
- **Hardware**: Intel Core i7 / Ryzen 7, 16 GB RAM, NVIDIA RTX 3060 (12 GB VRAM) or equivalent.
- **Backend**: [LM Studio](https://lmstudio.ai/) running `google/gemma-4-12b-qat` on port 1234.
- **Frontend**: Node.js v18+.

## Quick Start
1. Clone the repository: `git clone https://github.com/TerceroMaster/alicia-ia-smade2026.git`
2. Install dependencies: `npm install`
3. Start the UI: `npm run dev`
4. Ensure LM Studio server is running locally before submitting queries.

## License
Open-source academic license. 

*Presented at SMaDE 2026 — Symposium on Mathematics applied to Data Engineering.*
