+function ($) {
  'use strict';

  /**
   * Alerts class.
   */
  var CRUKAlerts = function (element, options) {
    this.$element    = $(element);
    this.$icon       = this.$element.find('.cr-hu-alert__dismiss');

    /**
     * Bind the events.
     */
    this.$icon.on('click', $.proxy(this.dismissAlert, this));
  }

  CRUKAlerts.VERSION  = '0.0.1'

  CRUKAlerts.DEFAULTS = {
    // Boolean. Force touch behaviour to be active on non-touch devices.
    force_touch_device: false
  }

  /**
   * Remove an alert from the DOM.
   */
  CRUKAlerts.prototype.dismissAlert = function() {
    this.$element.remove();
  }

  /**
   * Plugin definition.
   */
  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('cruk.cruk_alerts')
      var options = $.extend({}, CRUKAlerts.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('cruk.cruk_alerts', (data = new CRUKAlerts(this, options)))
    })
  }

  var old = $.fn.cruk_alerts

  $.fn.cruk_alerts             = Plugin
  $.fn.cruk_alerts.Constructor = CRUKAlerts

  /**
   * Pass the plugin to no conflict.
   */
  $.fn.cruk_alerts.noConflict = function () {
    $.fn.cruk_alerts = old
    return this
  }

  /**
   * Apply our plugin to any elements that want it!
   */
  $(window).on('load', function () {
    $('.cr-hu-alert--dismissible').each(function () {
      var $cruk_alerts = $(this)
      Plugin.call($cruk_alerts, $cruk_alerts.data())
    })
  })

}(jQuery);