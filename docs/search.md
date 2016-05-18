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
User testing has been conducted for this component to check that the absence of a text submit button isn't an issue (it's not). When a user has submitted the form/field if appropriate the search icon can change into an X which is only available on touch devices. This is because not one person used it on desktop.
{% endrationale %}

<div class="alert alert-warning" role="alert">When using forms with search, don't forget to set the <code>role</code> attribute to <code>search</code>.</div>

<div class="alert alert-warning" role="alert">Depending on your use case, it's likely you'll want to set both <code>autocomplete</code> and <code>autocorrect</code> off on the search input field to avoid unwanted behaviour.</div>

{% example html %}
<div class="row">
  <div class="col-xs-6">
    <form role="search" action="#" id="search-field-combined-example">
      <div class="cr-input-group cr-search-input" data-search-field="combined-ip">
        <label for="search-input" id="search-label">Search...</label>
        <input type="search" class="cr-input-group__input cr-search-input__input" id="search-input" placeholder="Search..." aria-describedby="search-label" autocomplete="off" autocorrect="off">
        <span class="cr-input-group__button cr-search-input__button">
          <button type="submit" class="btn"><span class="cr-input-group__icon glyphicon glyphicon-search" aria-hidden="true" aria-label="Submit"></span></button>
        </span>
      </div>
    </form>
  </div>
</div>
{% endexample %}

