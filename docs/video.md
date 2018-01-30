---
layout: page
title: Video
---

This pattern is to use when adding video content on the site.

Youtube embed settings

* Disable the suggested/related videos feature
* Enable player controls
* Enable the video title

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Video pattern


{% example html %}

<div class="cr-video">
  <div class="cr-video__holder">
  <iframe width="640" height="360"
    src="https://www.youtube-nocookie.com/embed/tS4a6I4-Yjo?rel=0"
    frameborder="0"
    allowfullscreen></iframe>
    </div>
</div>
{% endexample %}



### Video with transcript

{% example html %}

<div class="cr-video">
  <div class="cr-video__holder">
    <iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/tS4a6I4-Yjo?rel=0" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="cr-video-transcript">
    <div class="cr-video-transcript__heading" id="heading-14182">
      <h3 class="cr-video-transcript__title">
        <a role="button" data-toggle="collapse" href="#collapse-14182" aria-expanded="true" aria-controls="collapse-14182" class="collapse-toggle collapsed">
        <span class="cr-video-transcript__text"></span>
        </a>
      </h3>
    </div>
    <div id="collapse-14182" class="cr-video-transcript__body--outer collapse" role="tabpanel" aria-labelledby="heading-14182" aria-expanded="false" style="height: 15px;">
      <div class="cr-video-transcript__body--inner">
        <p>A CT scan helps your doctor make a diagnosis, decide about what treatment you need or find out if your treatment is working.</p>
        <p>This type of scan takes a series of x-rays and uses a computer to put them together.</p>
        <p>Before your scan you may need to drink either half a litre of water or a type of dye called a contrast medium. This helps to make the scan clearer.</p>
        <p>Before most scans you have a small tube put into your vein, which connects to a drip containing the dye. Again, this helps to show up the inside of your body more clearly on the scan.</p>
        <p>During the scan the bed moves in and out of the scanner. You may find it a bit noisy.</p>
        <p>As the drip goes in you’ll probably get a metallic taste in your mouth, feel warm and you might think you are passing urine, you’re not. These feelings pass quickly.</p>
      </div>
    </div>
  </div>
</div>
{% endexample %}
