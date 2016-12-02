---
layout: page
title: Animations
---

Make a page element stand out, use sparingly!

This work is powered by <a href="https://daneden.github.io/animate.css/">Animate.css</a> although we pull out only the animations we want to reduce filesize. We also namespace the classes to avoid collisions with <code>.cr-animated</code>.

As per <a href="https://daneden.github.io/animate.css/">Animate.css</a> you can add an <code>.cr-animated--infinite</code> class to the element you're animating to have it perpetually execute that animation.

## Usage guidelines

There are the following guidelines (open to discussion) around the use of animations:

<ol>
  <li>Only one animation should be used on a single page (else it'll resemble something from the 1990s) to avoid <a href="https://www.youtube.com/watch?v=vJG698U2Mvo">Selective Attention</a></li>
  <li>The animation should not clip into any other elements</li>
  <li>Animation should be used to draw attention, the element should be effective at conveying its meaning</li>
  <li>Typically animations should only be executed once (examples are set to infinite) unless you want to induce rage</li>
  <li>Inject some fun into an otherwise simple or boring interaction (keeping in mind the above guidelines)</li>
</ol>

## Slight amount of theory

Think of <a href="http://babich.biz/best-practices-for-microinteractions/">Microinteractions</a> as a way to connect to the user to visually express change, a required action or to generally draw attention.

## Available animations

### Jiggle/shake

{% example html %}
<div class="cr-hu-alert cr-hu-alert--warning cr-hu-alert--dismissible cr-animated-shake" role="alert">
  <i class="cr-hu-alert__icon" aria-hidden="true"></i>
  <div class="cr-hu-alert__text">
    Seagull attacks are on the rise!
  </div>
  <button type="button" class="cr-hu-alert__dismiss" aria-label="Dismiss"></button>
</div>
{% endexample %}

### Bounce

{% example html %}
<div class="cr-hu-alert cr-hu-alert--warning cr-hu-alert--dismissible cr-animated-bounce" role="alert">
  <i class="cr-hu-alert__icon" aria-hidden="true"></i>
  <div class="cr-hu-alert__text">
    Seagull attacks are on the rise!
  </div>
  <button type="button" class="cr-hu-alert__dismiss" aria-label="Dismiss"></button>
</div>
{% endexample %}
