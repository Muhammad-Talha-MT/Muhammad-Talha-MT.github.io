---
title: BASINGRID
description: A 40-year (1985–2024) dataset of aligned meteorological and landscape rasters for 9,067 U.S. basins.
org: Michigan State University
period: Ph.D. research
status: Published
importance: 3
featured: 3
image: /assets/img/research/basingrid-garden-city-2011.jpg
image_alt: "False-color Landsat image of circular irrigated fields around Garden City, Kansas"
image_credit: "Garden City, Kansas, Landsat 5 TM false color, August 15, 2011. NASA Earth Observatory."
image_credit_url: https://earthobservatory.nasa.gov/features/LandsatLooks/page3.php
category: dissertation
tags: [Dataset, Geospatial, Scientific Data]
links:
  - label: Paper
    url: https://doi.org/10.1038/s41597-026-08030-4
    icon: doc
  - label: Code
    url: https://github.com/Muhammad-Talha-MT/BasinGrid
    icon: github
publications: [talha2026basingrid]
figures:
  - src: /assets/img/research/basingrid-garden-city-1972-2011.jpg
    caption: "Forty years of landscape change seen by Landsat, the kind of long record BASINGRID is built from: Garden City, Kansas, in 1972 (Landsat 1, left) and 2011 (Landsat 5, right). Red is healthy vegetation; circles are center-pivot irrigation. NASA Earth Observatory."
---

BASINGRID is a distributed, machine-learning-ready hydrology dataset, published in _Scientific Data_. For each of **9,067 U.S. basins** it provides **40 years (1985–2024)** of meteorological forcings and landscape attributes as rasters on a common grid, aligned with streamflow records.

## Why distributed

Most large-sample hydrology datasets provide only basin-averaged values. BASINGRID keeps the spatial detail, so models such as HydroTransformer and Basin2Vec can learn where in a basin rain falls and how the landscape responds.
