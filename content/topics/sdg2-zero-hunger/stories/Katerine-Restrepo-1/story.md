---
title: Does the infant mortality rate in Bolivia exhibit correlations with nutritional challenges? Could there be evidence of a Simpson's Paradox?
author: Katerine Restrepo
date: 2023-10-04
data: "/data/GeoDS4Bolivia.geojson"
links:
  deepnote: "https://deepnote.com/workspace/nagoya-university-102f-072bbb53-844b-47b1-aa0d- c8654cf05167/project/Nutritional-Inequality-b5441f3b-b9ff-452a-a4cf-3a2ce6025e8d/notebook/Infant%20Mortality%20and%20Nutrition%20in%20Bolivia-84beb61d25a44593b6f174613c80f259"
categories: ['Nutrition', 'Obesity', 'Childcare', 'Sustainable Development']
---

## **Variables Used :**
| Variable Name | Description |
| :-- | :-: |
|<b>sdg2_2_cmc</b>|Chronic malnutrition in children (< 5 years), 2016 (%)|
|<b>sdg2_2_oww</b>|Obesity in women (15-49 years), 2016 (%)|
|<b>sdg3_2_mrc</b>|Children mortality rate in (< 5 years), 2016 (per. 1,000 live births)|



The following two graphics illustrate the prevalence of chronic malnutrition among children and obesity in women, presented as percentages across Bolivia's various Departments. Oruro and Cochabamba exhibit the highest rates of chronic malnutrition among children, while Beni and Tarija stand out with the highest levels of obesity among women.

![chronic malnutrition deparments](stories/Katerine-Restrepo-1/Image1.png)

![obesity in women deparments](stories/Katerine-Restrepo-1/Image2.png)


By employing scatterplot diagrams, we can examine the relationship between the infant mortality rate as an explanatory variable and two distinct dependent variables: chronic malnutrition among children and obesity in women. In the former case, a positive correlation is observed, which aligns with our intuitive expectations. Conversely, in the context of women's obesity, a negative relationship is evident, indicating that regions with elevated rates of female obesity tend to have lower infant mortality rates. This outcome is also unsurprising, given that in Bolivia, affluent regions tend to exhibit higher rates of obesity among women and have better access to healthcare services.

![infant mortality chronic malnutrition ](stories/Katerine-Restrepo-1/Image3.png)

![infant mortality obesity in women ](stories/Katerine-Restrepo-1/Image4.png)

When we separate the trends within various departments for both variables, we not only uncover the considerable heterogeneity in these relationships but also identify certain departments exhibiting contrary patterns compared to the overall aggregate data. An intriguing example is Oruro, where, for both variables, the prevailing trend diverges from the collective pattern, hinting at the presence of a Simpson's Paradox.

![infant mortality chronic malnutrition deparments](stories/Katerine-Restrepo-1/Image5.png)

![infant mortality obesity in women deparments](stories/Katerine-Restrepo-1/Image6.png)

This exercise primarily serves as an Exploratory Data Analysis (EDA), stimulating curiosity and prompting further inquiries into unexpected findings. To gain deeper insights and validate these results, it becomes imperative to introduce control variables and examine whether these anomalous patterns persist under controlled conditions.
