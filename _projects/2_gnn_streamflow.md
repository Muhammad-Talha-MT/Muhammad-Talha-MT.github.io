---
title: GNNs for Distributed Streamflow
description: Graph neural networks over the river network, pretrained on National Water Model simulations and fine-tuned on gauges.
org: Oak Ridge National Laboratory
period: 2026 – present
status: Ongoing
importance: 2
image: /assets/img/research/gnn-tennessee-valley.jpg
image_alt: "Satellite view of the Tennessee Valley with TVA reservoirs winding between ridges"
image_credit: "Tennessee Valley reservoirs near Knoxville, Landsat 8 OLI, April 10, 2022. NASA Earth Observatory."
image_credit_url: https://science.nasa.gov/earth/earth-observatory/spring-in-the-tennessee-valley-149732/
category: ornl
tags: [Graph neural networks, River networks, Transfer learning]
links:
  - label: Code
    url: https://github.com/Muhammad-Talha-MT/GraphRivers
    icon: github
---

This project predicts streamflow at many points along a river network at once. The graph is the river network itself: nodes are reaches and catchments, and edges follow upstream–downstream connectivity, so information propagates the way water does.

## Approach

- **Pretraining** on National Water Model (NWM) simulations, which cover every reach, then **fine-tuning** on observed gauge records, which are sparse but accurate.
- **Benchmarking** against neural baselines and Tennessee Valley Authority (TVA) operational forecasts.
