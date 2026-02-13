---
layout: "layout.html"
---

# Blog Index

## Entries

{% for blog in collections.blogs %}

<a href="{{ blog.url }}">
{{blog.data.title}}
</a>

{% endfor %}
