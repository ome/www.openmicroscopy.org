---
title: Governance
filename: governance
main-blurb: Governance documents for the OME Consortium
---

# Governance documents

{% raw %}{% assign docs = site.governance | sort: "title" %}

{% for doc in docs %}
* [{{ doc.title }}]({{ doc.url | relative_url }})
{% endfor %}{% endraw %}
