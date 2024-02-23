---
layout: layouts/page.njk
title: Bookshelf
class: bookshelf
---

{% for years in bookshelf.years %}
  {% include "partials/bookshelf.njk" %}
{% endfor %}
