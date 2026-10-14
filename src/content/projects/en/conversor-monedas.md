---
title: Currency converter
summary: Currency converter built with React and Dinero.js, deployed on GitHub Pages.
category: frontend
stack: [React, JavaScript, Dinero.js]
repo: https://github.com/Josepkfr/Conversor-monedas
demo: https://josepkfr.github.io/Conversor-monedas/
date: 2021-11-24
---

A single-screen application to convert amounts between currencies: pick the source currency, the target currency and the amount, and the result is shown in the format of the chosen currency.

## Features

- Source and target currency selection from the available currencies.
- Amount conversion and formatting with Dinero.js, based on a table of euro-based exchange rates.

## Technical details

- **State:** React function components with the `useState` and `useEffect` hooks.
- **Money arithmetic:** Dinero.js to operate on amounts without floating-point rounding errors.
- **Deployment:** published to GitHub Pages with `gh-pages`.
