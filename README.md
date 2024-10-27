# PCA Visualization of Bird Personalities

This project provides an interactive visualization of Principal Component Analysis (PCA) results for various bird personalities. It utilizes Plotly for visual representation and D3.js for data loading.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Data Source](#data-source)
- [Interpretation of Results](#interpretation-of-results)

## Introduction
The PCA visualization aims to showcase how different bird personalities cluster based on their characteristics. The visualization is built using web technologies to create an interactive experience where users can explore data points corresponding to various bird personalities.

## Features
- Interactive 3D plots representing PCA results.
- Toggle between different views of the data: PCA Cluster Plot and PCA Personality Plot.
- Adjustable grid and tick visibility for enhanced readability.

## Technologies Used
- HTML
- CSS
- JavaScript
- D3.js (for data loading)
- Plotly.js (for interactive plotting)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Ak79p/birds_personality_pca.git
   cd birds_personality_pca

## Usage
1. Open the side menu to select between different PCA plots.
2. Use the checkbox to toggle grid and tick visibility.
3. Hover over data points in the plots to view corresponding bird personalities.

## Data Source
The original data for this project is stored in Notebook folder while the pre-processed data is stored in Data/pca_df.csv, which includes the following columns:

- PC1, PC2, PC3: Principal components from PCA analysis.
- Personality: Different personality types of birds.
- Cluster: Cluster assignments for the PCA results.

## Interpretation of Results
Clusters did not particularly match the predefined personality types (Angry Bird, Pretty Chill Bird, Standard Bird), nor did they fully align with the principal components analysis (PCA). PCA highlighted that the most significant contributors to PC1 were traits such as neophilia (high) and aggression (low), indicating a clear contrast between these dimensions. However, these traits did not create distinct separations between the personality categories.

Instead, PCA provided insight into the separation of clusters by visually emphasizing groupings based on behavioral traits rather than personality, suggesting that individuals with high neophilia tended to cluster separately from those exhibiting high aggression. PC2 reflected a dimension characterized by high boldness and low neophobia, which helps distinguish clusters, particularly separating individuals who are more adventurous from those who are more cautious. Notably, personality groups like "Angry Bird" showed slight tendencies to cluster together without strong separation across PC1 or PC2 or PC3, ultimately illuminating behavioral characteristics that may be more indicative of clustering than the predefined personality categories.

Results:
![image](https://github.com/user-attachments/assets/bb4035ab-128a-456d-847a-5bc046795538)

