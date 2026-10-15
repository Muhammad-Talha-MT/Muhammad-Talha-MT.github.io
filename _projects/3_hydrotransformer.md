---
title: HydroTransformer
description: A transformer framework that learns streamflow from distributed, gridded inputs and generalizes across space and time.
org: Michigan State University
period: Ph.D. research
status: Under review
importance: 1
featured: 4
image: /assets/img/research/hydrotransformer-atmospheric-river.jpg
image_alt: "Atmospheric river carrying a plume of water vapor into the Pacific Northwest"
image_credit: "Atmospheric river reaching the Pacific Northwest, GEOS-5 model, December 4, 2023. NASA Earth Observatory."
image_credit_url: https://science.nasa.gov/earth/earth-observatory/atmospheric-river-flows-into-the-pacific-northwest-152164/
category: dissertation
tags: [Transformers, Spatiotemporal, Generalization]
links:
  - label: Code
    url: https://github.com/Muhammad-Talha-MT/HydroTransformer
    icon: github
publications: [talha2026hydrotransformer]
---

Most data-driven hydrologic models take basin-averaged ("lumped") inputs, which throws away how rainfall, temperature, and land surface vary within a basin. HydroTransformer uses the **distributed, gridded inputs directly** and models them with a spatiotemporal transformer.

## What it shows

The model is evaluated on how well it generalizes to **basins and time periods not seen in training**, which is the setting that matters for prediction in ungauged locations and under a changing climate.
