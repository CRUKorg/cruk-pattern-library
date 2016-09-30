---
layout: page
title: Pagination
---

Pagination is used when we are viewing large amounts of data. Data is split into multiple pages and pagination is used to easily navigate through these pages.

## Behaviour
When a user clicks 'next' or 'previous' the view is immediately scrolled to the top element of the listing. When a user is on the first page of the listing the 'previous' button is not visible.

#### Simple Pagination

Search pagination is can be found at the bottom of the search results page.<br>
The previous button will not be visible on the first page of the results and has a <code>.disabled</code> class (second example below).

{% example html %}
<ul class="cr-simple-pager">
  <li class="cr-simple-pager__previous">
    <a class="cr-simple-pager__link" href="#">
      <span class="glyphicon glyphicon-chevron-left"></span> Prev
    </a>
  </li>
  <li class="cr-simple-pager__current">
    <span class="cr-simple-pager__indicator" href="#2">Page 2 of 421</span>
  </li>
  <li class="cr-simple-pager__next">
    <a class="cr-simple-pager__link" href="#">
      Next <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
  </li>
</ul>
<hr />
<ul class="cr-simple-pager">
  <li class="cr-simple-pager__previous disabled">
    <a class="cr-simple-pager__link" href="#">
      <span class="glyphicon glyphicon-chevron-left"></span> Prev
    </a>
  </li>
  <li class="cr-simple-pager__current">
    <span class="cr-simple-pager__indicator" href="#1">Page 1 of 421</span>
  </li>
  <li class="cr-simple-pager__next">
    <a class="cr-simple-pager__link" href="#">
      Next <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
  </li>
</ul>
{% endexample %}