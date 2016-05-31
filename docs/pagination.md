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

Note that the items that are hidden via inline styles should not be rendered into the pages markup if possible and are only used for the purpose of making this interactive via JavaScript. JavaScript for this makes use of the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and thus does not support IE9.

{% example html %}
<nav class="cr-pagination">
  <li class="cr-pagination__previous"><a href="#" aria-label="Previous page">Prev</a></li>
  <li class="cr-pagination__item is-first-item"><a href="#" class="js-pagination-item" data-target-item="1" aria-label="First page">1</a></li>
  <li class="cr-pagination__item"><a href="#" class="js-cr-pagination-item" data-target-item="2"><span class="sr-only">Page </span>2</a></li>
  <li class="cr-pagination__ellipsis--first" aria-hidden="true"><span>...</span></li>
  <li class="cr-pagination__item"><a href="#" class="js-cr-pagination-item" data-target-item="3"><span class="sr-only">Page </span>3</a></li>
  <li class="cr-pagination__item"><a href="#" class="js-cr-pagination-item" data-target-item="4"><span class="sr-only">Page </span>4</a></li>
  <li class="cr-pagination__item"><a href="#" class="js-cr-pagination-item" data-target-item="5"><span class="sr-only">Page </span>5</a></li>
  <li class="cr-pagination__item"><a href="#" class="js-cr-pagination-item" data-target-item="6"><span class="sr-only">Page </span>6</a></li>
  <li class="cr-pagination__item"><a href="#" class="js-cr-pagination-item" data-target-item="7"><span class="sr-only">Page </span>7</a></li>
  <li class="cr-pagination__ellipsis--last" aria-hidden="true"><span>...</span></li>
  <li class="cr-pagination__item"><a href="#" class="js-cr-pagination-item" data-target-item="8"><span class="sr-only">Page </span>8</a></li>
  <li class="cr-pagination__item is-last-item"><a href="#" class="js-cr-pagination-item" data-target-item="9" aria-label="Last page">9</a></li>
  <li class="cr-pagination__next"><a href="#" aria-label="Next page">Next</a></li>
</nav>
{% endexample %}
