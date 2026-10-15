---
title: Watershed-Agnostic Forecasting
description: An explainable, distributed CNN–LSTM hydrologic model that is not tied to a single watershed.
org: Michigan State University
period: Ph.D. research
status: Published
importance: 4
image: /assets/img/research/watershed-michigan.jpg
image_alt: "Satellite view of Michigan's Lower Peninsula in autumn color between Lake Michigan and Lake Huron"
image_credit: "Michigan's Lower Peninsula, VIIRS on NOAA-20, October 19, 2024. NASA Earth Observatory."
image_credit_url: https://earthobservatory.nasa.gov/images/153502/majestic-color-on-the-michigan-mitten
category: dissertation
tags: [CNN–LSTM, Explainable AI, Hydrologic modeling]
links:
  - label: Paper
    url: https://doi.org/10.1016/j.envsoft.2026.107149
    icon: doc
  - label: Code
    url: https://github.com/Muhammad-Talha-MT/watershed-agnostic-streamflow-estimation
    icon: github
publications: [talha2026watershed]
---

A CNN–LSTM that takes distributed (gridded) inputs and predicts streamflow without being trained for one specific watershed. Convolutional layers capture spatial patterns within a basin, and the LSTM captures how they evolve over time.

## Explainability

Attribution analysis shows which regions and which inputs drive each prediction, so the model can be checked against hydrologic understanding rather than trusted as a black box. Published in _Environmental Modelling & Software_.
