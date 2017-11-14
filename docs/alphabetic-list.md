---
layout: page
title: Alphabetic List
---

This pattern is used for an alphabetic list of links, e.g. an A-Z Index.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Filter input

Above long lists it is a good idea to include a quicksearch.

{% example html %}
<div class="row">
    <form class="cr-filter-form col-md-6">
      <div role="search" class="cr-input-group cr-filter-input">
        <label for="filter-input" id="filter-label">Filter list items</label>
        <input data-cr-filter-list="foo" type="search" class="cr-input-group__input cr-filter-input__input" id="filter-input" placeholder="Start typing ..." aria-describedby="filter-label" autocomplete="off" autocorrect="off">
        <span class="cr-input-group__button cr-filter-input__button">
          <button type="reset" class="btn btn-default btn-reset" aria-label="Reset filter">
            <span class="sr-only">Reset</span>
            <span class="cr-input-group__icon" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    </form>
</div>
{% endexample %}

## List

The list is separated by letter to allow for easy visual scanning.

Flow is top-to-bottom, left-to-right.

{% example html %}
<ol class="cr-index" id="foo">
    <li class="cr-index__category">
        <h2 class="cr-index__category-label" aria-hidden="true">A</h2>
        <ul class="cr-index__list" aria-label="Links starting with the letter A">
            <li class="cr-index__list-item"><a href="#">Adam Ant</a></li>
            <li class="cr-index__list-item"><a href="#">Alpaca</a></li>
            <li class="cr-index__list-item"><a href="#">Apple</a></li>
        </ul>
    </li>
    <li class="cr-index__category">
        <h2 class="cr-index__category-label" aria-hidden="true">B</h2>
        <ul class="cr-index__list" aria-label="Links starting with the letter B">
            <li class="cr-index__list-item"><a href="#">Banana</a></li>
            <li class="cr-index__list-item"><a href="#">Bear</a></li>  
            <li class="cr-index__list-item"><a href="#">Boris Bikes</a></li>
        </ul>
    </li>
    <li class="cr-index__category">
        <h2 class="cr-index__category-label" aria-hidden="true">C</h2>
        <ul class="cr-index__list" aria-label="Links starting with the letter C">
            <li class="cr-index__list-item"><a href="#">Carrot</a></li>
            <li class="cr-index__list-item"><a href="#">Chess Champion</a></li>
            <li class="cr-index__list-item"><a href="#">Cockatoo</a></li>  
        </ul>
    </li>
    <li class="cr-index__category">
        <h2 class="cr-index__category-label" aria-hidden="true">D</h2>
        <ul class="cr-index__list" aria-label="Links starting with the letter D">
            <li class="cr-index__list-item"><a href="#">Dachshund</a></li>  
            <li class="cr-index__list-item"><a href="#">Daikon</a></li>
            <li class="cr-index__list-item"><a href="#">Damn Daniel</a></li>
        </ul>
    </li>
    <li class="cr-index__category">
        <h2 class="cr-index__category-label" aria-hidden="true">E</h2>
        <ul class="cr-index__list" aria-label="Links starting with the letter E">
            <li class="cr-index__list-item"><a href="#">Eagle</a></li>  
            <li class="cr-index__list-item"><a href="#">Easy Eats</a></li>
            <li class="cr-index__list-item"><a href="#">Egg</a></li>
        </ul>
    </li>
    <li class="cr-index__category">
        <h2 class="cr-index__category-label" aria-hidden="true">Z</h2>
        <ul class="cr-index__list" aria-label="Links starting with the letter Z">
            <li class="cr-index__list-item"><a href="#">Zeno of Citium</a></li>  
            <li class="cr-index__list-item"><a href="#">Zeno of Elea</a></li>
            <li class="cr-index__list-item"><a href="#">Zero Cool</a></li>
        </ul>
    </li>
</ol>
{% endexample %}
