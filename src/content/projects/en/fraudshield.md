---
title: FraudShield
summary: Transaction fraud detection system with machine learning (scikit-learn) and a real-time monitoring dashboard built with Streamlit.
category: data
stack: [Python, Streamlit, scikit-learn, pandas, Plotly]
repo: https://github.com/Josepkfr/fraud
date: 2025-06-11
featured: true
---

A Python application that analyses payment transactions, estimates their fraud probability with machine learning models and surfaces the suspicious ones in an interactive monitoring dashboard.

## Features

- **Monitoring dashboard (Streamlit):** real-time transaction tracking, overall metrics, a configurable fraud threshold and interactive Plotly charts.
- **Alert system:** rules with severity levels (critical, high and medium) based on fraud score, unusual amounts, rapid-fire transactions, night-time operations and high-risk merchants.
- **Transaction generator:** realistic test data that simulates known fraud patterns such as high amounts, bursts of operations, unusual hours, international transactions and card testing.

## Technical details

- **Models:** Isolation Forest for anomaly detection and Random Forest for classification, with scikit-learn. The trained model is persisted to disk.
- **Feature engineering (pandas):** time-based variables (hour, day of the week, weekend, night-time), amount transformations (logarithm and ranges), categorical encoding and scaling.
- **Modular design:** data generation, processing, detection and alerting live in independent modules.
