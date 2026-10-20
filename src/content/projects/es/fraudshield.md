---
title: FraudShield
summary: Sistema de detección de fraude en transacciones con machine learning (scikit-learn) y panel de monitoreo en tiempo real con Streamlit.
category: data
stack: [Python, Streamlit, scikit-learn, pandas, Plotly]
repo: https://github.com/Josepkfr/fraud
date: 2025-06-11
featured: true
---

Aplicación en Python que analiza transacciones de pago, calcula su probabilidad de fraude con modelos de machine learning y presenta las sospechosas en un panel interactivo de monitoreo.

## Funcionalidades

- **Panel de monitoreo (Streamlit):** seguimiento de transacciones en tiempo real, métricas generales, umbral de fraude configurable y gráficos interactivos con Plotly.
- **Sistema de alertas:** reglas con niveles de severidad (crítica, alta y media) según el score de fraude, montos inusuales, transacciones en ráfaga, operaciones en horario nocturno y comercios de alto riesgo.
- **Generador de transacciones:** datos de prueba realistas que simulan patrones de fraude conocidos, como montos elevados, ráfagas de operaciones, horarios inusuales, transacciones internacionales y card testing.

## Aspectos técnicos

- **Modelos:** Isolation Forest para la detección de anomalías y Random Forest para la clasificación, con scikit-learn. El modelo entrenado se persiste en disco.
- **Ingeniería de características (pandas):** variables temporales (hora, día de la semana, fin de semana, horario nocturno), transformaciones del monto (logaritmo y rangos), codificación de variables categóricas y escalado.
- **Diseño modular:** generación de datos, procesamiento, detección y alertas en módulos independientes.
