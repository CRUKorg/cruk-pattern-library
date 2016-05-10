---
layout: page
title: Forms
---

To be expanded!

Whilst the markup matches Bootstrap as of now, we include examples to give a sense of what our customised form elements look like.

Mostly achieved through configuration of variables, further changes are within `partials/_forms.scss`.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic inputs

### Text

{% example html %}
<form>
  <div class="form-group">
    <label for="example_text_input">Example!</label>
    <input type="text" class="form-control" id="example_text_input" placeholder="Enter a value...">
  </div>
</form>
{% endexample %}
