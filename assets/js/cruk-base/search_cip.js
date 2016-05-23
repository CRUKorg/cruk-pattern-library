+function ($) {
  'use strict';

  /**
   * Search combined in place class.
   */
  var SearchCIP = function (element, options) {
    this.$element    = $(element)
    this.$form       = this.$element.closest('form')
    this.$input      = this.$element.find('.cr-search-input__input')
    this.$icon       = this.$element.find('.cr-input-group__icon')
    this.options     = options
    // Store the last search value.
    this.last_search = null
    // Has a search been submitted?
    this.active      = false
    // Store the aria label value for the submit button.
    this.submit_aria_label = this.$element.find('button').attr('aria-label');

    /**
     * Bind the events.
     */
    this.$form.on('submit', $.proxy(this.submitHandler, this))
    this.$input.on('input', $.proxy(this.inputChange, this))
    this.$icon.on('click', $.proxy(this.iconClick, this))
  }

  SearchCIP.VERSION  = '0.0.1'

  SearchCIP.DEFAULTS = {
    // Boolean. Force touch behaviour to be active on non-touch devices.
    force_touch_device: false
  }

  /**
   * Determine if the string passed in would consistute a new search if
   * submitted.
   *
   * @param  {String}  input_value - The string to check against the last search.
   * @return {Boolean}
   */
  SearchCIP.prototype.isNewSearch = function(input_value) {
    if (this.active && input_value !== '' && input_value !== this.last_search) {
      // Invalidate the current active search.
      this.active = false

      return true
    }

    return false
  }

  /**
   * Change the icons within the combined search field, only happens on touch
   * devices or when touch device behaviour is being forced.
   */
  SearchCIP.prototype.switchIcons = function() {
    var input_value = this.$input.val().trim()

    /**
     * Restore the magnifying glass icon as either:
     * 1. The field is blank
     * 2. The input doesn't match the previous search
     */
    if ((input_value === '' || this.isNewSearch(input_value)) && this.$icon.hasClass('glyphicon-remove')) {
      var button_aria_label = this.submit_aria_label
      this.$icon.fadeOut('fast', function(){
        $(this).removeClass('glyphicon-remove').addClass('glyphicon-search').fadeIn('fast').parent().attr('aria-label', button_aria_label)
      })
    }

    /**
     * A valid search is being done but we've still got the search icon in
     * place so switch it for an 'x'.
     */
    if (this.active && this.$icon.hasClass('glyphicon-search')) {
      this.$icon.fadeOut('fast', function(){
        $(this).removeClass('glyphicon-search').addClass('glyphicon-remove').fadeIn('fast').parent().attr('aria-label', 'Clear your current search')
      })
    }
  }

  /**
   * React to the icon within the combined search field when it is clicked. On
   * touch devices it will clear the current search field value and re-focus to
   * the textfield input.
   */
  SearchCIP.prototype.iconClick = function() {
    if (this.$icon.hasClass('glyphicon-remove')) {
      this.last_search = null
      this.active = false
      this.$input.val('').focus()
      this.switchIcons()
      this.$element.trigger('search_cip:search_cleared')
    }
  }

  /**
   * React to the value within the textfield changing, if on a touch device
   * this is when we'd switch to the icon.
   */
  SearchCIP.prototype.inputChange = function() {
    var input_value = this.$input.val()

    if ((cruk_base.is_touch_device || this.options.force_touch_device)) {
      this.switchIcons()
    }
  }

  /**
   * Submit handler for the form.
   */
  SearchCIP.prototype.submitHandler = function (e) {
    e.preventDefault()
    var input_value = this.$input.val().trim()

    if (input_value === '' || this.last_search !== '' && this.last_search === input_value) {
      return false
    }

    this.last_search = input_value
    this.active = true
    this.$element.trigger('search_cip:search_execute', input_value)

    if (cruk_base.is_touch_device || this.options.force_touch_device) {
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

  /**
   * Apply our plugin to any elements that want it!
   */
  $(window).on('load', function () {
    $('[data-search-field="combined-ip"]').each(function () {
      var $search_cip = $(this)
      Plugin.call($search_cip, $search_cip.data())
    })
  })

}(jQuery);