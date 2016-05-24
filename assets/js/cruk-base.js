+function ($) {
  'use strict';

  /**
   * Define our global var.
   */
  window.cruk_base = {};
  cruk_base.is_touch_device = 'ontouchstart' in document.documentElement;

  /**
   * Forms!
   */

  /**
   * Simulate focus for input groups.
   */
  $('.cr-input-group__input').on('focus', function(){
    $(this).parent().addClass('cr-input-group--focused');
  }).on('blur', function(){
    $(this).parent().removeClass('cr-input-group--focused');
  });

}(jQuery);