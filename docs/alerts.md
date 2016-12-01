---
layout: page
title: Alerts
---

Hey, read this!

We're currently working through potential ideas for an alert style for different use cases, this page is due to grow!

Alert text should use proper punctuation and be more than "Error".

When producing an alert the text alone should be able to convey clear meaning, don't rely on colour of the alert to do this for you. This allows us to better cater to users that browse using a screen reader.

## Heads Up! Alerts

Conceptually meant to be slightly more laid back and to carry supplimental information rather than "You must read this" type alerts.

### Warning

{% example html %}
<div class="cr-hu-alert cr-hu-alert--warning" role="alert">
  <i class="cr-hu-alert__icon" aria-hidden="true"></i>
  <div class="cr-hu-alert__text">
    Seagull attacks are on the rise!
  </div>
</div>

<div class="cr-hu-alert cr-hu-alert--info cr-hu-alert--dismissible" role="alert">
  <i class="cr-hu-alert__icon" aria-hidden="true"></i>
  <div class="cr-hu-alert__text">
    Bears are shifty.
  </div>
  <button type="button" class="cr-hu-alert__dismiss" aria-label="Dismiss"></button>
</div>

<div class="cr-hu-alert cr-hu-alert--success cr-hu-alert--dismissible" role="alert">
  <i class="cr-hu-alert__icon" aria-hidden="true"></i>
  <div class="cr-hu-alert__text">
    Good job, here's a little something for the effort.
  </div>
  <button type="button" class="cr-hu-alert__dismiss" aria-label="Dismiss"></button>
</div>

<div class="cr-hu-alert cr-hu-alert--error cr-hu-alert--dismissible" role="alert">
  <i class="cr-hu-alert__icon" aria-hidden="true"></i>
  <div class="cr-hu-alert__text">
    Well you can't do that, I'm not sure why you think you could.
  </div>
  <button type="button" class="cr-hu-alert__dismiss" aria-label="Dismiss"></button>
</div>

<div class="cr-hu-alert cr-hu-alert--error" role="alert">
  <i class="cr-hu-alert__icon" aria-hidden="true"></i>
  <div class="cr-hu-alert__text">
    We've got problems!
    <ul>
      <li>You left the iron on</li>
      <li>You've not fed the cat for three days</li>
    </ul>
  </div>
</div>
{% endexample %}
