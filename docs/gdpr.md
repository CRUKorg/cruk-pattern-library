---
layout: page
title: GDPR
---

Contained here are patterns required for GDPR styling.

## Help text

{% example html %}
<div class="cr-gdpr-explanation">
    <a class="cr-gdpr-explaination__title collapsed" role="button" data-toggle="collapse" href="#id-of-text-to-display" aria-expanded="false" aria-controls="id-of-text-to-display">Why are we asking for this?</a>
    <div id="id-of-text-to-display" class="cr-gdpr-explaination__text collapse">Some interesting text that no one will ever read.</div>
</div>
{% endexample %}
