---
layout: page
title: Calls To Action
---



This pattern is used for call to action links to allows user to navigate around the site.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Link patterns

### Pink CTA

The Pink CTA includes a right chevron at the beginning of link.

{% example html %}
<div class="cr-cta-link" role="navigation">
  <a class="cr-cta-link__link" href="http://www.cancerresearchuk.org/about-cancer/breast-cancer/about">
    <i class="cr-cta-link__icon" aria-hidden="true"></i>
    <span class="cr-cta-link__text">Find out about breast cancer</span>
  </a>
</div>
{% endexample %}

### Print CTA

Print icon with call to action

The Print icon with call to action includes a right icon at the beginning of the link.

How it would be used:
{% example html %}
<div class="cr-print-link">
  <a href="#" id="cr-print-link__link">
    <i class="cr-i cr-i--print" aria-hidden="true"></i>Print page
  </a>
</div>
{% endexample %}