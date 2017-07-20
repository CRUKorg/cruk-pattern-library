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
  <div class="col-md-6">
    <form>
      <div class="cr-input-group cr-filter-input">
        <label for="filter-input" id="filter-label">Start typing ...</label>
        <input type="search" class="cr-input-group__input cr-filter-input__input" id="filter-input" placeholder="Start typing ..." aria-describedby="filter-label" autocomplete="off" autocorrect="off">
        <span class="cr-input-group__button cr-filter-input__button">
          <button type="reset" class="btn btn-default btn-reset" aria-label="Reset filter">
            <span class="sr-only">Reset</span>
            <span class="cr-input-group__icon" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    </form>
  </div>
</div>
{% endexample %}

## List

The list is separated by letter to allow for easy visual scanning.

Flow is top-to-bottom, left-to-right.

{% example html %}
<ul class="cr-index">
    <li class="cr-index__category">
        <h2 class="cr-index__category-label">A</h2>
        <ul class="cr-index__list">
            <li class="cr-index__list-item"><a href="#">Adam Ant</a></li>
            <li class="cr-index__list-item"><a href="#">Alpaca</a></li>
            <li class="cr-index__list-item"><a href="#">Apple</a></li>
        </ul>
    </li>
    <li class="cr-index__category">
        <h2 class="cr-index__category-label">B</h2>
        <ul class="cr-index__list">
            <li class="cr-index__list-item"><a href="#">Banana</a></li>
            <li class="cr-index__list-item"><a href="#">Bear</a></li>  
            <li class="cr-index__list-item"><a href="#">Boris Bikes</a></li>
        </ul>
    </li>
    <li class="cr-index__category">
        <h2 class="cr-index__category-label">C</h2>
        <ul class="cr-index__list">
            <li class="cr-index__list-item"><a href="#">Carrot</a></li>
            <li class="cr-index__list-item"><a href="#">Chess Champion</a></li>
            <li class="cr-index__list-item"><a href="#">Cockatoo</a></li>  
        </ul>
    </li>
    <li class="cr-index__category">
        <h2 class="cr-index__category-label">D</h2>
        <ul class="cr-index__list">
            <li class="cr-index__list-item"><a href="#">Dachshound</a></li>  
            <li class="cr-index__list-item"><a href="#">Daikon</a></li>
            <li class="cr-index__list-item"><a href="#">Damn Daniel</a></li>
        </ul>
    </li>
    <li class="cr-index__category">
        <h2 class="cr-index__category-label">E</h2>
        <ul class="cr-index__list">
            <li class="cr-index__list-item"><a href="#">Eagle</a></li>  
            <li class="cr-index__list-item"><a href="#">Easy Eats</a></li>
            <li class="cr-index__list-item"><a href="#">Egg</a></li>
        </ul>
    </li>
    <li class="cr-index__category">
        <h2 class="cr-index__category-label">Z</h2>
        <ul class="cr-index__list">
            <li class="cr-index__list-item"><a href="#">Zeno of Citium</a></li>  
            <li class="cr-index__list-item"><a href="#">Zeno of Elea</a></li>
            <li class="cr-index__list-item"><a href="#">Zero Cool</a></li>
        </ul>
    </li>
</ul>
{% endexample %}
