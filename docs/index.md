---
layout: default
title: Block Lists
---

# Block Lists

This site provides categorized blocklists for security and compliance purposes. Each category contains entities that should be blocked according to organizational policies.

## Block Categories

{% assign categories = site.pages | where_exp: "item", "item.path contains 'list.txt'" %}

| Category | Description | Count |
|----------|-------------|-------|
{% for category in categories %}
{% assign category_name = category.path | split: "/" | first %}
{% assign item_count = category.content | split: "
" | size %}
| [{{ category_name | replace: "-", " " | capitalize }}]({{ site.baseurl }}/{{ category_name }}) | {% if category_name == "cloud-services" %}Various cloud service providers identified as risky.{% elsif category_name == "companies" %}Companies linked to specific nation states of concern.{% elsif category_name == "email-attachment-file-types" %}Email attachment filetypes blocked via Microsoft Defender.{% elsif category_name == "games" %}Apps blocked for various reasons.{% elsif category_name == "network-utilities" %}Apps blocked for various reasons.{% elsif category_name == "peer-2-peer" %}Apps and protocols blocked according to policy.{% elsif category_name == "proxy-bypass" %}Apps, services, and protocols blocked.{% elsif category_name == "remote-access" %}Apps, services, and protocols blocked.{% elsif category_name == "web-content-filters" %}Categories of websites.{% elsif category_name == "conferencing-services" %}Conferencing services that are blocked.{% elsif category_name == "known-unapproved-tools" %}Tools that have not been approved for use.{% endif %} | {{ item_count }} |
{% endfor %}

## Usage

These lists can be used to configure various security tools and policies. Each list is provided in a simple text format with one entry per line.

## Questions

Please reach out for questions about these blocklists or to suggest additions.