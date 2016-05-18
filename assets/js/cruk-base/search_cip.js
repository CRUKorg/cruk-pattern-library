+function ($) {
  'use strict';

  /**
   * Search combined in place class.
   */

  var SearchCIP = function (element, options) {
    this.$element    = $(element)
    this.$form = this.$element.closest('form')
    this.$input = this.$element.find('.cr-search-input__input')
    this.$icon = this.$element.find('.cr-input-group__icon')
    this.options     = options
    this.last_search = null
    this.active      = null

    this.$form.on('submit', $.proxy(this.submitHandler, this))
    this.$input.on('input', $.proxy(this.inputChange, this))
    this.$icon.on('click', $.proxy(this.iconClick, this))
  }

  SearchCIP.VERSION  = '0.0.1'

  SearchCIP.DEFAULTS = {
    // Boolean. Force touch behaviour to be active on non-touch devices.
    force_touch: true
  }

  SearchCIP.prototype.switchIcons = function() {
    var input_value = this.$input.val()

    if (input_value !== '') {
      if (this.$icon.hasClass('glyphicon-search')) {
        this.$icon.fadeOut('fast', function(){
          $(this).removeClass('glyphicon-search').addClass('glyphicon-remove').fadeIn('fast')
        })
      }
    }
    if (input_value === '' && this.$icon.hasClass('glyphicon-remove')) {
      this.$icon.fadeOut('fast', function(){
        $(this).removeClass('glyphicon-remove').addClass('glyphicon-search').fadeIn('fast')
      })
    }
  }

  SearchCIP.prototype.iconClick = function() {
    if (this.$icon.hasClass('glyphicon-remove')) {
      this.last_search = null
      this.$input.val('').focus()
      this.switchIcons()
    }
  }

  SearchCIP.prototype.inputChange = function() {
    if ((cruk_base.is_touch_device || this.options.force_touch) && this.$input.val() === '') {
      this.switchIcons()
    }
  }

  /**
   * Submit handler for the form.
   */
  SearchCIP.prototype.submitHandler = function (e) {
    e.preventDefault()
    var input_value = this.$input.val()

    if (input_value === '' || this.last_search !== '' && this.last_search === input_value) {
      return false
    }

    this.last_search = input_value

    if (cruk_base.is_touch_device || this.options.force_touch) {
      this.switchIcons()
    }
  }


  /**
   * Plugin definition.
   */

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('cruk.search_cip')
      var options = $.extend({}, SearchCIP.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('cruk.search_cip', (data = new SearchCIP(this, options)))
    })
  }

  var old = $.fn.search_cip

  $.fn.search_cip             = Plugin
  $.fn.search_cip.Constructor = SearchCIP


  /**
   * Pass the plugin to no conflict.
   */

  $.fn.search_cip.noConflict = function () {
    $.fn.search_cip = old
    return this
  }

  $(window).on('load', function () {
    $('[data-search-field="combined-ip"]').each(function () {
      var $search_cip = $(this)
      Plugin.call($search_cip, $search_cip.data())
    })
  })

}(jQuery);
