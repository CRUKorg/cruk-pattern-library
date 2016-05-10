---
layout: page
title: Layout
---

Primer's layout includes basic page containers and a single-tiered, fraction-based grid system. That sounds more complicated than it really is though—it's just containers, rows, and columns.

You can find all the below styles in `_layout.scss`.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Container

Center your page's contents with a `.container`.

{% highlight html %}
<div class="container">
  <!-- contents here -->
</div>
{% endhighlight %}

The container applies `width: 980px;` and uses horizontal `margin`s to center it.

## Grid

### How it works

For a detailed explanation of the grid system, please refer to the [Bootstrap documentation](http://getbootstrap.com/css/#grid)

### How it works here for

#### Forms

The main layout of forms should be a container of 3 + 6 + 3 with a fallback to 12 at the `@screen-sm-min` breakpoint

{% example html %}
<div class="container">
  <div class="col-md-6 col-md-offset-3">
    <h1>I am a form!</h1>
  </div>
</div>
{% endexample %}


### Demo

In practice, your columns will look like the example below.

{% example html %}
<div class="container">
  <div class="columns">
    <div class="one-fifth column">
      .one-fifth
    </div>
    <div class="four-fifths column">
      .four-fifths
    </div>
  </div>

  <div class="columns">
    <div class="one-fourth column">
      .one-fourth
    </div>
    <div class="three-fourths column">
      .three-fourths
    </div>
  </div>

  <div class="columns">
    <div class="one-third column">
      .one-third
    </div>
    <div class="two-thirds column">
      .two-thirds
    </div>
  </div>

  <div class="columns">
    <div class="one-half column">
      .one-half
    </div>
    <div class="one-half column">
      .one-half
    </div>
  </div>
</div>
{% endexample %}

### Centered

Columns can be [centered](/utilities/#centering-content) by adding `.centered` to the `.column` class.

{% example html %}
<div class="columns">
  <div class="one-half column centered">
    .one-half
  </div>
</div>
{% endexample %}