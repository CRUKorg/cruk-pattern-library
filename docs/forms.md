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

## Basic inputs

### Textfields

Textfields (i.e. not text areas) should use proper [HTML 5 input types](https://robertnyman.com/html5/forms/input-types.html) where applicable. The examples below are just for single line inputs.

{% example html %}
<form>
  <div class="form-group">
    <label for="input-id-1">Label goes here</label>
    <input placeholder="Useful example" class="form-control" type="text" id="input-id-1" name="input-id-1">
  </div>
</form>
{% endexample %}

#### Restricting form item widths

Depending on the situation the width of inputs should be restricted, this should be done using the [Bootstrap grid](http://getbootstrap.com/css/#forms-horizontal). What follows are examples of "small", "medium" and "large" widths.

{% example html %}
<div class="container">
  <form>
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
      <label for="input-id-4">Label goes here</label>
      <div class="row">
        <div class="col-sm-12">
          <input placeholder="Large width" class="form-control" type="text" id="input-id-4" name="input-id-4">
        </div>
      </div>
    </div>
  </form>
</div>
{% endexample %}
