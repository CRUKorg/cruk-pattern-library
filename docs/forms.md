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

### Text lines

All text line input (i.e. not text areas) should use proper [HTML 5 input types](https://robertnyman.com/html5/forms/input-types.html) where applicable. The examples below are just for text lines. I can adjust these to your needs.

#### Small

{% example html %}
<form>
  <div class="form-group">
    <div class="row">
      <div class="col-sm-12">
        <label for="input-id-1">Label goes here</label>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <input placeholder="Useful example" class="form-control" type="text" id="input-id-1" name="input-id-1">
      </div>
    </div>
  </div>
</form>
{% endexample %}

#### Medium

This is the default size for all text boxes

{% example html %}
<form>
  <div class="form-group">
    <div class="row">
      <div class="col-sm-12">
        <label for="input-id-1">Label goes here</label>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <input placeholder="Useful example" class="form-control" type="text" id="input-id-1" name="input-id-1">
      </div>
    </div>
  </div>
</form>
{% endexample %}

#### Large

{% example html %}
<form>
  <div class="form-group">
    <div class="row">
      <div class="col-sm-12">
        <label for="input-id-1">Label goes here</label>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <input placeholder="Useful example" class="form-control" type="text" id="input-id-1" name="input-id-1">
      </div>
    </div>
  </div>
</form>
{% endexample %}

or, if you want to make things a little 'leaner', you can use less markup for a full width text input

{% example html %}
<form>
  <div class="form-group">
    <label for="input-id-1">Label goes here</label>
    <input placeholder="Useful example" class="form-control" type="text" id="input-id-1" name="input-id-1">
  </div>
</form>
{% endexample %}
