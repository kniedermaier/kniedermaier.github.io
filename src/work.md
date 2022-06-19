---
layout: layouts/page.njk
title: Work
---
<section>
{% for item in work.items %}
  {% include "partials/example.njk" %}
{% endfor %}
</section>