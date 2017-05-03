---
layout: page
title: Loaders
---

Loaders are used after some user interaction that we assume will take some time to complete. They inform the user that their request is beeing processed and that they should wait.

## Behaviour
Loader can be placed anywhere on the page and should be removed or hidden immediately after the targeted action has been completed.

#### Simple Loader

Search loader appears briefly before results are retrieved from the elasticsearch.

{% example html %}
<div class="cr-simple-loader">
  <div class="cr-simple-loader__spinner">
    <div class="cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce1"></div>
    <div class="cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce2"></div>
    <div class="cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce3"></div>
  </div>
</div>
{% endexample %}