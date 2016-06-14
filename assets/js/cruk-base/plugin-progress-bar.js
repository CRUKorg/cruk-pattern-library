(function ($) {
  $.fn.crukProgressBar = function crukProgressBar() {
    var steps = $('li', this);

    steps.width(Math.floor(100 / steps.length) + '%');
    this.css('visibility', 'visible');

    return this;
  };
})(jQuery);
