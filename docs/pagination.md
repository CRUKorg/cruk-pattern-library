---
layout: page
title: Pagination
---

Patterns and guidelines for pagination functionality.

## Full Pagination

### Purpose
Full pagination features Previous/Next controls and shows First/Last items in a collection of items by displaying the item number so users know how long a collection of items is. This is useful in cases such as threads where users might want to see latest responses to the discussion, whereas in a search context this makes less sense as the last page of results would show the least relevant content.

### Implementation
Below is a fully interactive pagination widget for some imaginary thread of 9 pages.

Note that the logic for this widget should be done on the backend to avoid unneeded markup. This demonstration widget requires &gt;IE9 due to use of the history API.

{% example html %}
<nav class="cr-pagination">
  <li class="cr-pagination__previous"><a href="#" aria-label="Previous page">Prev</a></li>
  <li class="cr-pagination__item"><a href="#" aria-label="First page">1</a></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>2</a></li>
  <li class="cr-pagination__ellipsis" aria-hidden="true"><span>...</span></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>3</a></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>4</a></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>5</a></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>6</a></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>7</a></li>
  <li class="cr-pagination__ellipsis" aria-hidden="true"><span>...</span></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>8</a></li>
  <li class="cr-pagination__item"><a href="#" aria-label="Last page">9</a></li>
  <li class="cr-pagination__next"><a href="#" aria-label="Next page">Next</a></li>
</nav>
{% endexample %}
