---
layout: page
title: Progress Bar
---

Visually show where a user is in a multi-step process.

Uses Javscript to calculate the number of steps and the width of each step required to fit the progress bar in the parent container.

{% example html %}
<form>
  <div class="row">
    <div class="col-xs-12">
      <ol class="cr-progress-bar">
        <li class="cr-progress-bar__step">
          <div class="cr-progress-bar__step__graphic done">
            <hr><i class="cr-progress-bar__step__graphic__icon done"></i><hr>
          </div>
          <div class="cr-progress-bar__step__title">Details</div>
        </li>
        <li class="cr-progress-bar__step">
          <div class="cr-progress-bar__step__graphic current">
            <hr><i class="cr-progress-bar__step__graphic__icon current"></i><hr>
          </div>
          <div class="cr-progress-bar__step__title">Fundraise</div>
        </li>
        <li class="cr-progress-bar__step">
          <div class="cr-progress-bar__step__graphic">
            <hr><i class="cr-progress-bar__step__graphic__icon"></i><hr>
          </div>
          <div class="cr-progress-bar__step__title">Party</div>
        </li>
      </ol>
    </div>
  </div>
</form>
{% endexample %}
