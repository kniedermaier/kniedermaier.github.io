---
layout: layouts/page.njk
title: Example work
---
{% for item in work.items %}
  {% include "partials/example.njk" %}
{% endfor %}
