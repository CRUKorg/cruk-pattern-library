---
layout: page
title: Typography
---

Headings, paragraphs, blockquotes, lists, and more have some global resets. It's worth noting these aren't the same as our Markdown styles.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Headings

{% example html %}
<h1>Level 1 heading</h1>
<h2>Level 2 heading</h2>
<h3>Level 3 heading</h3>
<h4>Level 4 heading</h4>
<h5>Level 5 heading</h5>
<h6>Level 6 heading</h6>
{% endexample %}

## Body text

{% example html %}
<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
{% endexample %}

## Lead paragraph

Make a paragraph stand out by adding `.lead`.

{% example html %}
<p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.</p>
{% endexample %}

## Inline text elements

Styling for common inline HTML5 elements.

{% example html %}
<p>The &lt;mark&gt; element is used to <mark>highlight text</mark>.</p>
<p>The &lt;del&gt; element is used to mark up <del>deleted text</del>.</p>
<p>The &lt;s&gt; element is used mark up <s>text that is to be treated as no longer accurate</s>.</p>
<p>The &lt;ins&gt; element is used to mark up <ins>text that has been added</ins> to the document.</p>
<p>The &lt;small&gt; element is used to mark up <small>text as being less important</small>.</p>
<p>The &lt;em&gt; element is used to mark up <em>emphasised text</em>.</p>
<p>The &lt;strong&gt; element is used to mark up <strong>text as being more important</strong>.</p>
{% endexample %}

See the [complete list of inline elements](/cruk-pattern-library/inline-elements/)

## Blockquotes

Wrap `<blockquote>` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote. For straight quotes, we recommend a `<p>`.

{% example html %}
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

## Lists

<div class="flash">
  <strong>Heads up!</strong> The broken display of lists is <strong>intentional</strong> as Primer globally resets these elements for the time being. This will eventually be undone in the next major version.
</div>

### Unordered list

A list of items in which the order does *not* explicitly matter.

{% example html %}
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{% endexample %}

### Ordered list

A list of items in which the order *does* explicitly matter.

{% example html %}
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ol>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ol>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
{% endexample %}

### Description list

A list of terms and their descriptions, for instance glossaries, displaying metadata and other othe key-value pairs, etc.

{% example html %}
<dl>
<dt>A term with a single description</dt>
<dd>Aenean lacinia bibendum nulla sed consectetur.</dd>
<dt>Multiple terms can share the same description</dt>
<dt>A term with the same description as the one above</dt>
<dd>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</dd>
<dt>A term can have multiple descriptions</dt>
<dd><i>(1)</i> Vestibulum id ligula porta felis euismod semper.</dd>
<dd><i>(2)</i> Donec ullamcorper nulla non metus auctor fringilla.</dd>
</dl>
{% endexample %}

