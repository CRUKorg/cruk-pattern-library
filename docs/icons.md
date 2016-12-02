---
layout: page
title: Icons
---

Iconography for use in your projects!

Whilst we make use of icons from various sources we no longer blanket include either <a href="http://glyphicons.com/">Glyphicons</a> or <a href="http://fontawesome.io/">Font Awesome</a> icons. Instead we've constructed a custom font via <a href="https://icomoon.io/app">IcoMoon</a> so that we load only icons which are relevant to what we need.

The markup and style code is the same as <a href="http://fontawesome.io/">Font Awesome</a> (<3) though the intention is that BEM classes are used and any required icons would be <code>@extended</code> within the SCSS.

The CRUKIcons font is created via the <a href="https://icomoon.io/app">IcoMoon app</a>, if you wish to add more icons then you can import the config.json to do so.


## Icon markup

{% example html %}
<i class="cr-i cr-i--chevron-left" aria-hidden="true"></i>
{% endexample %}

## The icons

<div class="row cr-pattern-library-icon-grid">
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--chevron-left" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--chevron-left</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--chevron-right" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--chevron-right</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--chevron-up" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--chevron-up</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--chevron-down" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--chevron-down</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--times" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--times</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--pencil-square" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--pencil-square</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--plus" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--plus</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--plus-2" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--plus-2</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--minus" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--minus</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--minus-2" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--minus-2</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--link" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--link</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--search" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--search</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--checkmark" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--checkmark</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--check-circle" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--check-circle</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--credit-card" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--credit-card</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--eye" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--eye</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--ticket" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--ticket</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--info" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--info</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--notification" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--notification</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--warning" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--warning</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--warning2" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--warning2</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--info" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--info</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--square" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--square</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--checkbox-checked" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--checkbox-checked</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--checkbox-unchecked" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--checkbox-unchecked</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--radio-unchecked" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--radio-unchecked</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--radio-checked" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--radio-checked</code>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <i class="cr-i cr-i--radio-checked2" aria-hidden="true"></i> <span class="sr-only">example of</span> <code>.cr-i--radio-checked2</code>
  </div>
</div>
