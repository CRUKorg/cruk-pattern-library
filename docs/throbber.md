---
layout: page
title: Throbber
---

DOCUMENTATION TO FOLLOW. SORRY!

## Stand alone

{% example html %}
<div class="sk-fading-circle">
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
</div>
{% endexample %}

## In a text field

{% example html %}
<form>
    <div class="form-group has-feedback">
      <label class="control-label" for="inputWarning2">Input with spinner</label>
      <input type="text" class="form-control" id="inputThing" aria-describedby="inputThingStatus">
      <span class="form-control-feedback">
          <div class="sk-fading-circle">
            <div class="sk-circle1 sk-circle"></div>
            <div class="sk-circle2 sk-circle"></div>
            <div class="sk-circle3 sk-circle"></div>
            <div class="sk-circle4 sk-circle"></div>
            <div class="sk-circle5 sk-circle"></div>
            <div class="sk-circle6 sk-circle"></div>
            <div class="sk-circle7 sk-circle"></div>
            <div class="sk-circle8 sk-circle"></div>
            <div class="sk-circle9 sk-circle"></div>
            <div class="sk-circle10 sk-circle"></div>
            <div class="sk-circle11 sk-circle"></div>
            <div class="sk-circle12 sk-circle"></div>
          </div>
      </span>
      <span id="inputThingStatus" class="sr-only">(updating)</span>
    </div>
<form>
{% endexample %}

## In a short text field

{% example html %}
<form>
  <div class="form-group">
      <div class="row">
        <div class="col-sm-12">
          <label for="input-id-3">Label goes here</label>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <input placeholder="Medium width" class="form-control" type="text" id="input-id-3" name="input-id-3">
                <span class="form-control-feedback">
                    <div class="sk-fading-circle">
                      <div class="sk-circle1 sk-circle"></div>
                      <div class="sk-circle2 sk-circle"></div>
                      <div class="sk-circle3 sk-circle"></div>
                      <div class="sk-circle4 sk-circle"></div>
                      <div class="sk-circle5 sk-circle"></div>
                      <div class="sk-circle6 sk-circle"></div>
                      <div class="sk-circle7 sk-circle"></div>
                      <div class="sk-circle8 sk-circle"></div>
                      <div class="sk-circle9 sk-circle"></div>
                      <div class="sk-circle10 sk-circle"></div>
                      <div class="sk-circle11 sk-circle"></div>
                      <div class="sk-circle12 sk-circle"></div>
                    </div>
                </span>
        </div>
      </div>
  </div>
</form>
{% endexample %}
