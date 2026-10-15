---
title: HydroORBIT
description: A physics-informed, multimodal foundation model for continental-scale hydrologic prediction.
org: Oak Ridge National Laboratory
period: 2026 – present
status: Ongoing
importance: 1
featured: 1
image: /assets/img/research/hydroorbit-north-america.jpg
image_alt: "North America seen from space in a cloud-free satellite composite"
image_credit: "Blue Marble Next Generation, August 2004. NASA Earth Observatory."
image_credit_url: https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/
category: ornl
tags: [Foundation models, Multimodal learning, Frontier HPC]
links:
  - label: ORNL project page
    url: https://www.ornl.gov/project/ai-foundation-model-development-water-forecasting
    icon: external
  - label: Project record
    url: https://impact.ornl.gov/en/projects/hydroorbit-a-physic-informed-multimodal-ai-foundation-model-for-c/
    icon: doc
publications: [fan2026multimodal]
---

HydroORBIT is a [Genesis Mission](https://www.ornl.gov/genesis-mission-ai-driven-projects/)–funded foundation model for hydrology, led by [Dr. Dan Lu](https://www.ornl.gov/staff-profile/dan-lu) at Oak Ridge National Laboratory. It learns jointly from environmental observations and numerical-model simulations to predict surface and groundwater across the continental United States, and it is trained on the Frontier supercomputer.

## My contributions

- **Multimodal datasets.** Building aligned training data from gridded meteorological fields, basin attributes, and gauge time series.
- **Space–time alignment.** Developing point-cloud representations that synchronize these sources, which arrive on different grids and at different time steps.
- **Scale.** Preparing large-scale data workflows for HydroORBIT pretraining on Frontier.

## Why it matters

A single pretrained model that understands weather, landscape, and river response can be adapted to many downstream tasks: river inflows for hydropower, groundwater availability, and flooding, without training a new model from scratch for each one.
