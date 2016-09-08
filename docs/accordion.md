---
layout: page
title: Accordion
---

The Accordion pattern is to be used for the purpose of displaying content which is useful for supporters but not deemed essential knowledge and thus is collapsed by default in order to conserve space & prioritise other content.

Upon page load, the accordion will only show the accordion header, which can be clicked to reveal its supporting content. An accordion should contain no more than two paragraphs of text, though typically one will suffice. An optional image can also be used, which will appear to the left of the supporting text content.

The accordion content should have a white background with no border but will be used in practice on pages with non-white backgrounds so it can be distinguished from neighbouring content.

## Behaviour
Only one accordion should be open on a page at any time. When this accordion fully completes its transition from collapsed to expanded, the page will automatically scroll to position the accordion to the top of the page, if the page is large enough to do so.

## Example

{% example html %}
  <div class="cr-accordion">
    <h2 class="cr-accordion__header"><button data-target="#accordion-1" data-toggle="collapse" aria-expanded="false" aria-controls="accordion-1">About this event</button></h2>
    <div id="accordion-1" class="collapse cr-accordion__content">
      <div class="cr-accordion__image">
        <img src="{{ site.baseurl }}/assets/images/rfl.jpg" alt="A collection of pledges for Race for Life" />
      </div>
      <div class="cr-accordion__summary">Accordions contain few lines of text, ideally 1 or 2 paragraphs, which can be revealed/dismissed by clicking the accordion header above. Accordion content should always have text, with an optional image on the left hand side.</div>
    </div>
  </div>

  <div class="cr-accordion">
    <h2 class="cr-accordion__header"><button data-target="#accordion-2" data-toggle="collapse" aria-expanded="false" aria-controls="accordion-1">About this event #2</button></h2>
    <div id="accordion-2" class="collapse cr-accordion__content">
      <div class="cr-accordion__image">
        <img src="{{ site.baseurl }}/assets/images/rfl.jpg" alt="A collection of pledges for Race for Life" />
      </div>
      <div class="cr-accordion__summary">Accordions contain few lines of text, ideally 1 or 2 paragraphs, which can be revealed/dismissed by clicking the accordion header above. Accordion content should always have text, with an optional image on the left hand side.</div>
    </div>
  </div>

  <div class="cr-accordion">
      <h2 class="cr-accordion__header"><button data-target="#accordion-3" data-toggle="collapse" aria-expanded="false" aria-controls="accordion-1">About this event #3</button></h2>
      <div id="accordion-3" class="collapse cr-accordion__content">
        <div class="cr-accordion__image">
          <img src="{{ site.baseurl }}/assets/images/rfl.jpg" alt="A collection of pledges for Race for Life" />
        </div>
        <div class="cr-accordion__summary">Accordions contain few lines of text, ideally 1 or 2 paragraphs, which can be revealed/dismissed by clicking the accordion header above. Accordion content should always have text, with an optional image on the left hand side.</div>
      </div>
    </div>
{% endexample %}

