---
layout: resource
title: Resources
permalink: /resources/
---

<div class="">
  <div class="grid-container">
    {% for d in site.data.resources.resources %}
    <div class="grid-item">
        <h3 class="item">{{ d.type }}</h3>
        <ol class="item">
          {% for item in d.list %}
          <li class="item">
            <a class="item" target="_blank" href="{{ item.URL }}" rel="noopener">
              <img class="item" loading="lazy" alt="{{ item.URL }}" src="https://s2.googleusercontent.com/s2/favicons?domain_url={{ item.URL }}">
              {{ item.title }}
            </a>
          </li>
          {% endfor %}
        </ol>
    </div>
    {% endfor %}
  </div>
  </div>
