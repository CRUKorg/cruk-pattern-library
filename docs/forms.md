---
layout: page
title: Forms
---

To be expanded!

Whilst the markup matches Bootstrap as of now, we include examples to give a sense of what our customised form elements look like.

Mostly achieved through configuration of variables, further changes are within `partials/_forms.scss`.

*NOTE* In the examples, widths are controlled by using [bootstrap's col-sm-* grid system](http://getbootstrap.com/css/#grid). This means that it is *relative to the parent container*. The examples below are assuming that the the fields are contained within the pattern library's [standard form layout](#layout) (col-sm-6, col-sm-offset-3) and have been scaled accordingly. If you want to use these code snippets outside of the standard col-sm-6 panel then you will need to use different values!

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Layout

Forms should be contained within a central 6 grid width box with an offset of 3.

{% example html %}
<form>
  <fieldset class="panel panel-default">
    <div class="panel-body col-sm-6 col-sm-offset-3">

      <h2>Form goes here</h2>

    </div>
  </fieldset>
</form>
{% endexample %}

## Labels

All forms inputs should have labels. They're great.

### Required fields

It is important to note that instead of marking form elements as 'required' we actually mark optional fields as 'Optional'

{% example html %}
<form>
  <div class="form-group has-feedback">
    <label for="input-id-1">Madatory field</label>
    <input placeholder="Useful example" class="form-control" type="text" id="input-id-1" name="input-id-1">
  </div>

  <div class="form-group">
    <label for="input-id-2">Optional one <span class="input-optional">(Optional)</span></label>
    <input placeholder="Useful example" class="form-control" type="text" id="input-id-2" name="input-id-2">
  </div>
</form>
{% endexample %}

### Help text

Where possible/sensible you should use help text. It should be positioned between the Label and the Input.

{% example html %}
<form>
  <div class="form-group">
    <label for="input-id-shoe">Shoe size</label>
    <p class="help-block">Example block-level help text here.</p>
    <input placeholder="Useful example" class="form-control" type="text" id="input-id-shoe" name="input-id-shoe">
  </div>
</form>
{% endexample %}

## Basic inputs

### Textfields

Textfields (i.e. not text areas) should use proper [HTML 5 input types](https://robertnyman.com/html5/forms/input-types.html) where applicable. The examples below are just for single line inputs.

{% example html %}
<form>
  <div class="form-group">
    <label for="input-id-3">Label goes here</label>
    <input placeholder="Useful example" class="form-control" type="text" id="input-id-3" name="input-id-3">
  </div>
</form>
{% endexample %}

NOTE: The mark up above does not take into account [Dynamic Feedback](dynamic-feedback/). Please look at that section if you require it.

### Radio buttons

Radio buttons are a little more complex as they require some javascript to be running in order to get their styles
to change when they are clicked

{% example html %}
<form>
  <div class="form-group">
    <div class="row">
      <div class="col-sm-12">
        <label class="control-label" for="radio-id-1">Are radio buttons?</label>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div id="radio-id-1" class="form-radios">
          <div class="radio">
            <label>
              <input type="radio" id="radio-id-1-yes" name="answer" value="1">Yes
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" id="radio-id-1-no" name="answer" value="0">No
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
{% endexample %}

### Checkboxes

Much the same as radio buttons, checkboxes also require the javascript to run.

{% example html %}
<form>
  <div class="form-group">
    <div class="row">
      <div class="col-sm-12">
        <label class="control-label" for="radio-id-1">Which of the following is an Oxbow lake?</label>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div id="radio-id-1" class="form-radios">
          <div class="checkbox">
            <label>
              <input type="checkbox" id="radio-id-1-yes" name="radio-id-1-dunno" checked="checked">Dunno
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" id="radio-id-1-no" name="radio-id-1-u">A u-shaped lake
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" id="radio-id-1-no" name="radio-id-1-man-u">Manchester United Football Club
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
{% endexample %}

## Buttons

Press them. They are great

{% example html %}
<div class="container-fluid">
  <div class="row">
    <a class="btn btn-default col-sm-6 col-xs-12" href="#" role="button">Link</a>
  </div>
  <br/>
  <div class="row">
    <button class="btn btn-default col-sm-6 col-xs-12 ladda-button" data-style="zoom-out" type="submit">Button</button>
  </div>
  <br/>
  <div class="row">
    <input class="btn btn-default col-sm-6 col-xs-12" type="button" value="Input">
  </div>
  <br/>
  <div class="row">
    <input class="btn btn-default col-sm-6 col-xs-12" type="submit" value="Submit">
  </div>
  <br/>
  <div class="row">
    <input class="btn btn-default col-sm-6 col-xs-12" type="submit" value="Disabled" disabled="disabled">
  </div>
</div>
{% endexample %}

### Button with inline link

Press me too!

{% example html %}
<div class="container-fluid">
  <div class="row">
    <button class="btn btn-default col-sm-6 col-xs-12" type="submit">Primary action button</button>
    <a class="btn btn-link col-sm-6 col-xs-12" href="#" role="button">Secondary action link</a>
  </div>
</div>
{% endexample %}


## Restricting form item widths

Depending on the situation the width of inputs should be restricted, this should be done using the [Bootstrap grid](http://getbootstrap.com/css/#forms-horizontal). What follows are examples of "small", "medium" and "large" widths.

{% example html %}
<div class="container-fluid">
  <form>
    <div class="form-group">
      <div class="row">
        <div class="col-sm-12">
          <label for="input-id-4">Label goes here</label>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <input placeholder="Large width" class="form-control" type="text" id="input-id-4" name="input-id-4">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-12">
          <label for="input-id-3">Label goes here</label>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <input placeholder="Medium width" class="form-control" type="text" id="input-id-3" name="input-id-3">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-12">
          <label for="input-id-2">Label goes here</label>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <input placeholder="Small width" class="form-control" type="text" id="input-id-2" name="input-id-2">
        </div>
      </div>
    </div>
  </form>
</div>
{% endexample %}

## Progress bar

Uses Javscript to calculate the number of steps and the width of each step required to fit the progress bar in the parent container.

{% example html %}
<form>
  <div class="row">
    <div class="col-xs-12">
      <ol class="cr-progress-bar">
        <li class="cr-progress-bar__step">
          <div class="cr-progress-bar__step__graphic done">
            <hr><i class="cr-progress-bar__step__graphic__icon done"></i><hr>
          </div>
          <div class="cr-progress-bar__step__title">Details</div>
        </li>
        <li class="cr-progress-bar__step">
          <div class="cr-progress-bar__step__graphic current">
            <hr><i class="cr-progress-bar__step__graphic__icon current"></i><hr>
          </div>
          <div class="cr-progress-bar__step__title">Fundraise</div>
        </li>
        <li class="cr-progress-bar__step">
          <div class="cr-progress-bar__step__graphic">
            <hr><i class="cr-progress-bar__step__graphic__icon"></i><hr>
          </div>
          <div class="cr-progress-bar__step__title">Party</div>
        </li>
      </ol>
    </div>
  </div>
</form>
{% endexample %}

## Date of birth

A single text input with an input mask applied

{% example html %}
<form>
  <input class="datepicker form-control" data-inputmask-mask="d/m/y" data-inputmask-placeholder="DD/MM/YYYY" placeholder="DD/MM/YYYY" type="text">
</form>
{% endexample %}

_`assets/js/cruk-base/plugin-progress-bar.js`_

``` js
(function ($) {
  $.fn.crukProgressBar = function crukProgressBar() {
    var steps = $('li', this);

    steps.width(Math.floor(100 / steps.length) + '%');
    this.css('visibility', 'visible');

    return this;
  };
})(jQuery);

// Call the plugin function to set the widths of the step <li> elements.
$('.cr-progress-bar').crukProgressBar();
```
