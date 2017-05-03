---
layout: page
title: Collapsable box
---

Collapsable box has the title section and the description text section that is collapsable.

## Behaviour
By clicking anywhere on the box area we collapse or open the box. Each collapsable box on the screen can be collapsed or opened at any time.

## Example

{% example html %}
<div class="cr-collbox">
  <div class="cr-collbox__heading" id="heading-88074">
    <div class="cr-collbox__title">
      <h3>
        <a role="button" data-toggle="collapse" data-parent="#accordion-88074" href="#collapse-88074" aria-expanded="false" aria-controls="collapse-88074" class="collapse-toggle collapsed">Pain in the area of the cancer
        </a>
      </h3>
    </div>
  </div>
  <div id="collapse-88074" class="cr-collbox__collapse collapse" role="tabpanel" aria-labelledby="heading-88074" aria-expanded="false">
    <div class="cr-collbox__body">
      <p>You may have pain in the area of your&nbsp;cancer.&nbsp;Let your doctor or nurse know. Painkillers can help.</p>
    </div>
  </div>
</div>
<div class="cr-collbox">
    <div class="cr-collbox__heading" id="heading-88050">
      <div class="cr-collbox__title">
        <h3><a role="button" data-toggle="collapse" data-parent="#accordion-88050" href="#collapse-88050" aria-expanded="false" aria-controls="collapse-88050" class="collapse-toggle collapsed">Increased risk of getting an infection </a></h3>
      </div>
    </div>
    <div id="collapse-88050" class="cr-collbox__collapse collapse" role="tabpanel" aria-labelledby="heading-88050">
      <div class="cr-collbox__body">
        <p>Signs of an infection include headaches, aching muscles, a cough, a sore throat, pain passing urine, or feeling cold and shivery.</p>
        <p>Biological therapies can&nbsp;reduce&nbsp;the number of white blood cells in the blood. This increases your risk of infections. White blood cells help fight infections.</p>
        <p>Your white blood cell level begins to fall after each treatment. It’s lowest about 7 to 14 days after your treatment. Then it gradually goes up again.</p>
        <p>When the level is very low it is called neutropenia (pronounced new-troh-pee-nee-ah).</p>
        <p>You have antibiotics if you develop an infection. You might have them as tablets or as injections into the bloodstream (intravenously). To have them into your bloodstream you need to go into hospital.</p>
      </div>
    </div>
  </div>
  <div class="cr-collbox">
    <div class="cr-collbox__heading" id="heading-88058">
      <div class="cr-collbox__title">
        <h3><a role="button" data-toggle="collapse" data-parent="#accordion-88058" href="#collapse-88058" aria-expanded="false" aria-controls="collapse-88058" class="collapse-toggle collapsed">Raised blood pressure (hypertension) </a></h3>
      </div>
    </div>
    <div id="collapse-88058" class="cr-collbox__collapse collapse" role="tabpanel" aria-labelledby="heading-88058" aria-expanded="false" style="height: 0px;">
      <div class="cr-collbox__body">
        <p>Tell your doctor or nurse if you have headaches, nose bleeds, blurred or double vision or shortness of breath. Your nurse checks your blood pressure regularly.&nbsp;</p>
      </div>
    </div>
  </div>
{% endexample %}
