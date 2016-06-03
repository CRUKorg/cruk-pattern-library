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

<nav class="cr-pagination">
  <li class="cr-pagination__previous"><a href="#" aria-label="Previous page">Prev</a></li>
  <li class="cr-pagination__item is-first-item"><a href="#" aria-label="First page">1</a></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>2</a></li>
  <li class="cr-pagination__ellipsis" aria-hidden="true"><span>...</span></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>3</a></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>4</a></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>5</a></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>6</a></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>7</a></li>
  <li class="cr-pagination__ellipsis" aria-hidden="true"><span>...</span></li>
  <li class="cr-pagination__item"><a href="#"><span class="sr-only">Page </span>8</a></li>
  <li class="cr-pagination__item is-last-item"><a href="#" aria-label="Last page">9</a></li>
  <li class="cr-pagination__next"><a href="#" aria-label="Next page">Next</a></li>
</nav>
<br />
<pre><code>&lt;nav class="cr-pagination"&gt;
  &lt;li class="cr-pagination__previous"&gt;&lt;a href="#" aria-label="Previous page"&gt;Prev&lt;/a&gt;&lt;/li&gt;
  &lt;li class="cr-pagination__item"&gt;&lt;a href="#" aria-label="First page"&gt;1&lt;/a&gt;&lt;/li&gt;
  &lt;li class="cr-pagination__ellipsis--first" aria-hidden="true"&gt;&lt;span&gt;...&lt;/span&gt;&lt;/li&gt;
  &lt;li class="cr-pagination__item"&gt;&lt;a href="#"&gt;&lt;span class="sr-only"&gt;Page &lt;/span&gt;3&lt;/a&gt;&lt;/li&gt;
  &lt;li class="cr-pagination__item"&gt;&lt;a href="#"&gt;&lt;span class="sr-only"&gt;Page &lt;/span&gt;4&lt;/a&gt;&lt;/li&gt;
  &lt;li class="cr-pagination__item--current"&gt;&lt;a href="#"&gt;&lt;span class="sr-only"&gt;Page &lt;/span&gt;5&lt;/a&gt;&lt;/li&gt;
  &lt;li class="cr-pagination__item"&gt;&lt;a href="#"&gt;&lt;span class="sr-only"&gt;Page &lt;/span&gt;6&lt;/a&gt;&lt;/li&gt;
  &lt;li class="cr-pagination__item"&gt;&lt;a href="#"&gt;&lt;span class="sr-only"&gt;Page &lt;/span&gt;7&lt;/a&gt;&lt;/li&gt;
  &lt;li class="cr-pagination__ellipsis--last" aria-hidden="true"&gt;&lt;span&gt;...&lt;/span&gt;&lt;/li&gt;
  &lt;li class="cr-pagination__item"&gt;&lt;a href="#" aria-label="Last page"&gt;9&lt;/a&gt;&lt;/li&gt;
  &lt;li class="cr-pagination__next"&gt;&lt;a href="#" aria-label="Next page"&gt;Next&lt;/a&gt;&lt;/li&gt;
&lt;/nav&gt;</code></pre>
