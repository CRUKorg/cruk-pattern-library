---
layout: page
title: Accordion
---

The Accordion pattern is to be used for the purpose of displaying content which is useful for supporters but not deemed essential knowledge and thus is collapsed by default in order to conserve space & prioritise other content.

Upon page load, the accordion will only show the accordion header, which can be clicked to reveal its supporting content. An accordion should contain no more than two paragraphs of text, though typically one will suffice. An optional image can also be used, which will appear to the left of the supporting text content.

The accordion content should have a white background with no border but will be used in practice on pages with non-white backgrounds so it can be distinguished from neighbouring content.

## Behaviour
Only one accordion should be open on a page at any time. When this accordion fully completes its transition from collapsed to expanded, the page will automatically scroll to position the accordion to the top of the page, if the page is large enough to do so.

## Example for acordion with blue style

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

## Example for acordion with grey style

{% example html %}
<div class="panel panel-default panel-accordion" xmlns="http://www.w3.org/1999/html">
  <div class="panel-heading" id="heading-88074">
    <div class="panel-title">
      <h3>
        <a role="button" data-toggle="collapse" data-parent="#accordion-88074" href="#collapse-88074" aria-expanded="false" aria-controls="collapse-88074" class="collapse-toggle collapsed">
          Pain in the area of the cancer
        </a>
      </h3>
    </div>
  </div>
  <div id="collapse-88074" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-88074" aria-expanded="false">
    <div class="panel-body">
      <p>You may have pain in the area of your&nbsp;cancer.&nbsp;Let your doctor or nurse know. Painkillers can help.</p>
    </div>
  </div>
</div>
<div class="panel panel-default panel-accordion" xmlns="http://www.w3.org/1999/html">
    <div class="panel-heading" id="heading-88050">
      <div class="panel-title">
        <h3><a role="button" data-toggle="collapse" data-parent="#accordion-88050" href="#collapse-88050" aria-expanded="false" aria-controls="collapse-88050" class="collapse-toggle collapsed">
          Increased risk of getting an infection </a></h3>
      </div>
    </div>
    <div id="collapse-88050" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-88050">
      <div class="panel-body">
        <p>Signs of an infection include headaches, aching muscles, a cough, a sore throat, pain passing urine, or feeling cold and shivery.</p>
        <div class="panel panel-important level-4" role="help"><div class="panel-body">Contact your treatment centre straight away if you have any of these signs or if your temperature goes above 38C. Severe infections can be life threatening.</div></div>
        <p>Biological therapies can&nbsp;reduce&nbsp;the number of white blood cells in the blood. This increases your risk of infections. White blood cells help fight infections.</p>
        <p>Your white blood cell level begins to fall after each treatment. It’s lowest about 7 to 14 days after your treatment. Then it gradually goes up again.</p>
        <p>When the level is very low it is called neutropenia (pronounced new-troh-pee-nee-ah).</p>
        <p>You have antibiotics if you develop an infection. You might have them as tablets or as injections into the bloodstream (intravenously). To have them into your bloodstream you need to go into hospital.</p>
      </div>
    </div>
  </div>
  <div class="panel panel-default panel-accordion" xmlns="http://www.w3.org/1999/html">
    <div class="panel-heading" id="heading-88058">
      <div class="panel-title">
        <h3><a role="button" data-toggle="collapse" data-parent="#accordion-88058" href="#collapse-88058" aria-expanded="false" aria-controls="collapse-88058" class="collapse-toggle collapsed">
          Raised blood pressure (hypertension) </a></h3>
      </div>
    </div>
    <div id="collapse-88058" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-88058" aria-expanded="false" style="height: 0px;">
      <div class="panel-body">
        <p>Tell your doctor or nurse if you have headaches, nose bleeds, blurred or double vision or shortness of breath. Your nurse checks your blood pressure regularly.&nbsp;</p>
      </div>
    </div>
  </div>
{% endexample %}
