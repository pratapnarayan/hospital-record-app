# AI/OCR/NLP Module Design

## 🧠 Overview
This module automates prescription analysis and record updates using OCR and NLP technologies.

## 🔍 Model Type
- OCR Engine: Google Vision or AWS Textract.
- NLP Model: Custom-trained on medical terminology.

## 🧰 Data Preprocessing
1. Image normalization & noise removal.
2. Text segmentation.
3. Entity extraction (drug names, dosage, patient details).

## 🧩 NLP Pipeline
- Tokenization → Entity Recognition → Context Mapping → Output JSON.

## 🎯 Accuracy Goals
- OCR accuracy ≥ 95%
- NLP entity accuracy ≥ 90%

## 🔁 Feedback Loop
- Doctor verification feedback improves model accuracy over time.
