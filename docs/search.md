---
layout: page
title: Search
---

Patterns and guidelines for creating usable search functionality.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Search inputs

### Combined search field

<span class="label label-danger">Experimental</span>

Anywhere that a chance is presented to interact with search functionality you'll likely want an input. The search input is a combination of two fields, the input and the submit button which is represented by an icon.

{% rationale %}
<p>User testing has been conducted for this component to check that the absence of a text submit button isn't an issue (it's not). When a user has submitted the form/field if appropriate the search icon can change into an X which is only available on touch devices. This is because not one person used it on desktop.</p>
<p>Testing has also been conducted with a submit button which has text versus an icon, in all tests both on Desktop and touch devices the magnifying glass icon was understood. In most instances users hit enter or submit on their keyboard to execute the search.</p>
{% endrationale %}

<div class="alert alert-warning" role="alert">When using forms with search, don't forget to set the <code>role</code> attribute to <code>search</code>.</div>

<div class="alert alert-warning" role="alert">Depending on your use case, it's likely you'll want to set both <code>autocomplete</code> and <code>autocorrect</code> off on the search input field to avoid unwanted behaviour.</div>

{% example html %}
<div class="row">
  <div class="col-xs-6">
    <form role="search" action="#" id="search-field-combined-example">
      <div class="cr-input-group cr-search-input" data-search-field="combined-ip" data-force_touch_device="true">
        <label for="search-input" id="search-label">Search CancerResearchUK.org...</label>
        <input type="search" class="cr-input-group__input cr-search-input__input" id="search-input" placeholder="Search CancerResearchUK.org..." aria-describedby="search-label" autocomplete="off" autocorrect="off">
        <span class="cr-input-group__button cr-search-input__button">
          <button type="submit" class="btn" aria-label="Submit your search"><span class="cr-input-group__icon glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </span>
      </div>
    </form>
  </div>
</div>
{% endexample %}

#### Alternate field sizes

The combined search field (as with the Bootstrap input groups) can be displayed in smaller or larger versions. Here are some examples.

{% example html %}
<div class="row">
  <div class="col-xs-12">
    <form role="search" action="#" id="search-field-combined-example-2">
      <div class="cr-input-group cr-input-group--lg cr-search-input">
        <label for="search-input-2" id="search-label-2">Search...</label>
        <input type="search" class="cr-input-group__input cr-search-input__input" id="search-input-2" placeholder="Search..." aria-describedby="search-label-2" autocomplete="off" autocorrect="off">
        <span class="cr-input-group__button cr-search-input__button">
          <button type="submit" class="btn" aria-label="Submit your search"><span class="cr-input-group__icon glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </span>
      </div>
    </form>
  </div>
</div>

<div class="row">
  <div class="col-xs-4">
    <form role="search" action="#" id="search-field-combined-example-3">
      <div class="cr-input-group cr-input-group--sm cr-search-input">
        <label for="search-input-3" id="search-label-3">Search...</label>
        <input type="search" class="cr-input-group__input cr-search-input__input" id="search-input-3" placeholder="Search..." aria-describedby="search-label" autocomplete="off" autocorrect="off">
        <span class="cr-input-group__button cr-search-input__button">
          <button type="submit" class="btn" aria-label="Submit your search"><span class="cr-input-group__icon glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </span>
      </div>
    </form>
  </div>
</div>
{% endexample %}


#### Colour variations

The combined search field can be used in a number of places. When the default border would look unusual within a block of colour that isn't white the default border colour can be changed to match. The focused state should however remain.

There are two colour variations, one for the within the masthead grey bar and the second for the CRUK blue.

{% example html %}
<div class="row">
  <div class="col-xs-6">
    <form role="search" action="#" id="search-field-combined-example-4">
      <div class="cr-input-group cr-search-input cr-input-group--primary">
        <label for="search-input-4" id="search-label-4">Search...</label>
        <input type="search" class="cr-input-group__input cr-search-input__input" id="search-input-4" placeholder="Search..." aria-describedby="search-label-2" autocomplete="off" autocorrect="off">
        <span class="cr-input-group__button cr-search-input__button">
          <button type="submit" class="btn" aria-label="Submit your search"><span class="cr-input-group__icon glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </span>
      </div>
    </form>
  </div>
</div>

<div class="row">
  <div class="col-xs-4">
    <form role="search" action="#" id="search-field-combined-example-5">
      <div class="cr-input-group cr-input-group--sm cr-search-input cr-input-group--masthead">
        <label for="search-input-5" id="search-label-5">Search...</label>
        <input type="search" class="cr-input-group__input cr-search-input__input" id="search-input-5" placeholder="Search..." aria-describedby="search-label" autocomplete="off" autocorrect="off">
        <span class="cr-input-group__button cr-search-input__button">
          <button type="submit" class="btn" aria-label="Submit your search"><span class="cr-input-group__icon glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </span>
      </div>
    </form>
  </div>
</div>
{% endexample %}


#### In place supporting JavaScript

This pattern is used in different ways, one of which is within an <abbr title="Single Page Application">SPA</abbr> where the user would enter a value into the combined search field and can alter and re-submit via that search field. When this happens if on a touch enabled device the magnifying glass icon changes into an X/clear icon. This is done with JavaScript.

To make use of this functionality add the <code>data-search-field</code> attribute to the relevant div with the value <code>combined-ip</code> which stands for combined in place.

<code><div class="cr-input-group cr-search-input" data-search-field="combined-ip"></code>

The only option at the moment is the ability to force "on" the touch device behaviour which is done in the first example on this page.

