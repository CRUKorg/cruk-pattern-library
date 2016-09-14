jQuery(document).ready(function($) {
  'use strict';

  $(document).on('show.bs.collapse', '.cr-accordion .cr-accordion__content', function (e) {
    // Find all accordions other than the just revealed one.
    var $otherAccordions = $('.cr-accordion .collapse').not(e.target);

    // Collapse the other accordions.
    $otherAccordions.collapse('hide');

    // Wait until the accordion is fully revealed before scrolling to it so we can scroll to the correct position.
    $(e.target).one('shown.bs.collapse', function(e) {
      var $accordionHeader = $(e.target).siblings('.cr-accordion__header');
      $('html, body').animate({
        scrollTop: $accordionHeader.offset().top - parseInt($accordionHeader.css('font-size'), 10)
      }, 'slow');
    });
  });
});
