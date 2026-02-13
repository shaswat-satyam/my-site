---
title: Index
layout: layout.html
---

{% for post in collections.post %}
<h2>
<a href="{{ post.url }}">
    {{ post.data.title }} 
</a>
</h2>
<p> {{ post.content }} </p>
{% endfor %}

# Heading
This is my Home Page.
Current Home page.


