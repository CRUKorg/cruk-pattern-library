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
<p>User testing has been conducted to check...</p>
<ul>
  <li>That the absence of a text submit button isn't an issue (it's not). When a user has submitted the form/field if appropriate the search icon can change into an X which is only available on touch devices. This is because not one person used it on desktop.</li>
  <li>A submit button which has text versus an icon would be understood. In most instances users hit enter or submit on their keyboard to execute the search.</li>
  <li>Screen readers can interpret the pattern and relay useful guidance.</li>
  <li>The colour change of icons within the combined search pattern is visible to those with colour blindness.</li>
</ul>
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
          <button type="submit" class="btn" aria-label="Submit your search"><span class="cr-input-group__icon" aria-hidden="true"></span></button>
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
          <button type="submit" class="btn" aria-label="Submit your search"><span class="cr-input-group__icon" aria-hidden="true"></span></button>
        </span>
      </div>
    </form>
  </div>
</div>

<hr>

<div class="row">
  <div class="col-xs-4">
    <form role="search" action="#" id="search-field-combined-example-3">
      <div class="cr-input-group cr-input-group--sm cr-search-input">
        <label for="search-input-3" id="search-label-3">Search...</label>
        <input type="search" class="cr-input-group__input cr-search-input__input" id="search-input-3" placeholder="Search..." aria-describedby="search-label" autocomplete="off" autocorrect="off">
        <span class="cr-input-group__button cr-search-input__button">
          <button type="submit" class="btn" aria-label="Submit your search"><span class="cr-input-group__icon" aria-hidden="true"></span></button>
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
          <button type="submit" class="btn" aria-label="Submit your search"><span class="cr-input-group__icon" aria-hidden="true"></span></button>
        </span>
      </div>
    </form>
  </div>
</div>

<hr>

<div class="row">
  <div class="col-xs-4">
    <form role="search" action="#" id="search-field-combined-example-5">
      <div class="cr-input-group cr-input-group--sm cr-search-input cr-input-group--masthead">
        <label for="search-input-5" id="search-label-5">Search...</label>
        <input type="search" class="cr-input-group__input cr-search-input__input" id="search-input-5" placeholder="Search..." aria-describedby="search-label" autocomplete="off" autocorrect="off">
        <span class="cr-input-group__button cr-search-input__button">
          <button type="submit" class="btn" aria-label="Submit your search"><span class="cr-input-group__icon" aria-hidden="true"></span></button>
        </span>
      </div>
    </form>
  </div>
</div>
{% endexample %}


#### Search summary

Search summary is the small text snippet that is placed above the search results.

{% example html %}
<div class="cr-search-summary">
  <div class="cr-search-summary__info">
    4,210 search results for <strong>cancer</strong>
  </div>
</div>
{% endexample %}


#### Search result

Search results use bootstrap <code>media</code> and <code>media-list</code> class styling.<br />
For bootstrap media classes lke <code>media-left</code> or <code>media-right</code> just use the <code>cr-search-result</code> prefix <code>cr-search-result__media-left</code>

{% example html %}
<article class="cr-search-result">
  <div class="cr-search-result__media-body">
    <h4 class="cr-search-result__title">
      <a class="cr-search-result__link" href="http://www.cancerresearchuk.org/node/38191">Resurrecting stalled cancer drugs</a>
    </h4>
    <p class="cr-search-result__excerpt">
      Developing new drugs is tough. But as illustrated by the results of an early stage trial of a new vaccine for brain tumours, our Clinical Development Partnersh…
     </p>
   </div>
 </article>
 <article class="cr-search-result">
  <div class="cr-search-result__media-body">
    <h4 class="cr-search-result__title">
      <a class="cr-search-result__link" href="http://www.cancerresearchuk.org/node/28266">Progress in prostate cancer, skin cancer warning</a>
    </h4>
    <p class="cr-search-result__excerpt">
      Transcript Kat: This is the <strong>Cancer</strong> Research UK podcast for September 2013. This month we’re discussing a huge genetic study looking at the cau…
    </p>
   </div>
 </article>
{% endexample %}

## Autocomplete search box

Here we have the markup and styling for the autocomplete field. Javascript logic is omitted and needs to be done seperately by projct implementing this field.
There is an animated gif under the markup that shows autocomplete behaviour.

{% example html %}
<div class="cr-input-group cr-input-group--lg cr-search-input cr-input-group--focused">
  <label for="search-input" id="search-label">Search...</label>
  <input type="search" data-qa="query" id="search-input" class="cr-input-group__input cr-search-input__input" placeholder="Search..." value="can" aria-describedby="search-label" autocomplete="off" autocorrect="off" tabindex="1">
  <span class="cr-input-group__button cr-search-input__button">
    <button type="submit" class="btn" aria-label="Submit your search" data-qa="submit">
      <span class="cr-input-group__icon glyphicon glyphicon-search" aria-hidden="true"></span>
    </button>
  </span>
  <ul class="cr-autocomplete">
    <li class="cr-autocomplete__list-item">Cancer and blood calcium levels</li>
    <li class="cr-autocomplete__list-item">Cancer and fever</li>
    <li class="cr-autocomplete__list-item">Cancer and pain control</li>
    <li class="cr-autocomplete__list-item">Cancer and sickness (nausea)</li>
    <li class="cr-autocomplete__list-item">Cancer and your emotions</li>
  </ul>
</div>
<div style="height:200px;width: 100%;">
  &nbsp;
</div>
{% endexample %}

{% example html %}
<div class="autocomplete-animated-gif">
  &nbsp;
</div>
{% endexample %}

## Did you mean suggestion text

{% example html %}
<p class="cr-did-you-mean">
  Did you mean&nbsp;<a href="#t" class="cr-did-you-mean__link">bone cancer</a>?
</p>
{% endexample %}

#### In place supporting JavaScript

This pattern is used in different ways, one of which is within an <abbr title="Single Page Application">SPA</abbr> where the user would enter a value into the combined search field and can alter and re-submit via that search field. When this happens if on a touch enabled device the magnifying glass icon changes into an X/clear icon. This is done with JavaScript.

To make use of this functionality add the <code>data-search-field</code> attribute to the relevant div with the value <code>combined-ip</code> which stands for combined in place.

<code><div class="cr-input-group cr-search-input" data-search-field="combined-ip"></code>

The only option at the moment is the ability to force "on" the touch device behaviour which is done in the first example on this page.

