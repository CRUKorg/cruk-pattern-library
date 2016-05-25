---
layout: page
title: Threads
---

Patterns and guidelines for thread functionality.

## Pagination

### Purpose
Thread pagination is optimised to allow for three key movement actions:

 * Relative movement to next and previous thread pages
 * Direct movement to other nearby pages
 * Direct movement to first and last pages

### Implementation
Below is a fully interactive pagination widget for some imaginary thread of 9 pages.

Note that the items that are hidden via inline styles should not be rendered into the pages markup if possible and are only used for the purpose of making this interactive via JavaScript. JavaScript for this makes use of the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and thus does not support IE9.

{% example html %}
<nav class="thread-pagination">
  <a href="#" class="thread-pagination__previous" aria-label="Previous page">Prev</a>
  <li class="thread-pagination__item is-first-item"><a href="#" class="js-thread-pagination-item" data-target-item="1" aria-label="First page">1</a></li>
  <li class="thread-pagination__item"><a href="#" class="js-thread-pagination-item" data-target-item="2"><span class="sr-only">Page </span>2</a></li>
  <span class="thread-pagination__ellipsis--first" aria-hidden="true">...</span>
  <li class="thread-pagination__item"><a href="#" class="js-thread-pagination-item" data-target-item="3"><span class="sr-only">Page </span>3</a></li>
  <li class="thread-pagination__item"><a href="#" class="js-thread-pagination-item" data-target-item="4"><span class="sr-only">Page </span>4</a></li>
  <li class="thread-pagination__item"><a href="#" class="js-thread-pagination-item" data-target-item="5"><span class="sr-only">Page </span>5</a></li>
  <li class="thread-pagination__item"><a href="#" class="js-thread-pagination-item" data-target-item="6"><span class="sr-only">Page </span>6</a></li>
  <li class="thread-pagination__item"><a href="#" class="js-thread-pagination-item" data-target-item="7"><span class="sr-only">Page </span>7</a></li>
  <span class="thread-pagination__ellipsis--last" aria-hidden="true">...</span>
  <li class="thread-pagination__item"><a href="#" class="js-thread-pagination-item" data-target-item="8"><span class="sr-only">Page </span>8</a></li>
  <li class="thread-pagination__item is-last-item"><a href="#" class="js-thread-pagination-item" data-target-item="9" aria-label="Last page">9</a></li>
  <a href="#" class="thread-pagination__next" aria-label="Next page">Next</a>
</nav>
{% endexample %}
