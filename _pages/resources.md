---
layout: post
title: Resources
permalink: /resources
description: 
---

<style>
  h1.item {
    text-align: center;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 20px;
  }

  .grid-item {
    font-size: 14px;
    padding: 5px;
  }

h2 {
    font-size: 22px;
    padding-left: 20px;
    text-align: left;
    margin-bottom: .4em;
}

  h2.item {
    font-size: 22px;
    padding-left: 20px;
    text-align: left;
  }
  img.item {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    margin-top: 2px;
    float: left;
  }
  div.item {
    counter-reset: dopeCounter;
    position: relative;
  }
  ol.item {
    list-style: none;
    counter-reset: li;
    margin-left: 0;
    padding: 0;
  }

  .link {
    text-align: center;
  }

  a.item {
    width: 100%;
    padding: 2px 0;
    padding-top: 3px;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    color: #000;
    display: inline-block;
    text-align: left;
    text-shadow: none;
    background: none;
    line-height: 1.6;
  }

  .pagebody-content {
    text-align: center;
  }

  @media screen and (max-width: 735px) {
    .pagebody-content {
      margin-left: auto !important;
      margin-right: auto !important;
      width: 87.5% !important;
    }

    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
    h1.item {
      font-size: 44px !important;
      padding-bottom: 20px;
    }

    a.item {
      padding: 14px 0;
    }
  }
</style>

<div class="">
  <div class="grid-container">
    {% for d in site.data.resources.resources %}
    <div class="grid-item">
        <h2 class="item">{{ d.type }}</h2>
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
