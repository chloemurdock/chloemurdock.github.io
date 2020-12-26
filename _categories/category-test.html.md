---
layout: category
title: Category Test
role: TestCategory Role
timeInPosition: 2020 — Present
description: Category test descripiton
order: 7
date: 2020-12-26
image: /assets/images/abb-hero.png
---
{% assign categorySlugged = page.title | slugify %}{% include category.html %}