(function ($) {
  var barSelector = 'ol.progress-bar-list';

  // Function to calculate the required width of each step
  var progress_bar_resize = function() {
    var steps     = $(barSelector + ' li');
    var stepWidth = Math.floor(100 / steps.length) + '%';
    steps.width(stepWidth);
  }

  // Calculate te initial width of each step
  progress_bar_resize();

  // Remove the horizontal bar from the last step
  $(barSelector).find('li > div').last().find('hr').last().remove();

  // Handle window resize events
  $(window).resize(function() {
    progress_bar_resize();
  });
})(jQuery);
