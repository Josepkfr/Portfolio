---
title: Conversor de monedas
summary: Conversor de divisas en React con Dinero.js, desplegado en GitHub Pages.
category: frontend
stack: [React, JavaScript, Dinero.js]
repo: https://github.com/Josepkfr/Conversor-monedas
demo: https://josepkfr.github.io/Conversor-monedas/
date: 2021-11-24
---

Aplicación de una sola pantalla para convertir importes entre divisas: se selecciona la moneda de origen, la de destino y la cantidad, y el resultado se muestra con el formato de la moneda elegida.

## Funcionalidades

- Selección de moneda de origen y de destino entre las divisas disponibles.
- Conversión y formato del importe con Dinero.js a partir de una tabla de tipos de cambio con base en euros.

## Aspectos técnicos

- **Estado:** componentes funcionales de React con los hooks `useState` y `useEffect`.
- **Cálculo monetario:** Dinero.js para operar con importes sin errores de redondeo de coma flotante.
- **Despliegue:** publicación en GitHub Pages con `gh-pages`.
