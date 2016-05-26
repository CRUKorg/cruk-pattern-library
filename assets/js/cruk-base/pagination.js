jQuery( document ).ready(function( $ ) {
  'use strict';

  /*
   * This script is for demonstration purposes only. Pagination is typically handled by backend.
   * If you wish to use JS to handle pagination, take note that this is not intended for use on production sites.
   */

  /**
   * Pagination constructor.
   * @param {jQuery} element
   *   Element to paginate.
   * @param {object} [options]
   * @param {int} [options.maximumRange=2]
   *   The maximum range of a nearby item. Items at this range will be hidden on smaller devices.
   * @param {int} [options.minimumRange=1]
   *   The minimum range of a nearby item.
   *
   * @constructor
   */
  var Pagination = function (element, options) {
    this.$element = $(element);
    this.$firstEllipsis = this.$element.find('.cr-pagination__ellipsis--first');
    this.$lastEllipsis = this.$element.find('.cr-pagination__ellipsis--last');
    this.$previousLink = this.$element.find('.cr-pagination__previous');
    this.$nextLink = this.$element.find('.cr-pagination__next');

    // Total number of items.
    this.itemCount = this.$element.find('.is-last-item a').data('targetItem');

    // Maximum number of adjacent items before & after current item.
    this.maximumRange = options.maximumRange;

    // Minimum number of adjacent items before & after current item.
    this.minimumRange = options.minimumRange;

    // Starting item, if no item specified.
    var defaultItem = Math.ceil(this.itemCount / 2);

    this.currentItem = parseInt(this.getQueryParameter('page'), 10);
    if (this.currentItem === false || isNaN(this.currentItem)) {
      this.currentItem = defaultItem;
    }

    this.goToItem(this.currentItem);

    // Bind each link to point to the appropriate page.
    this.$element.find('.js-pagination-item').on('click', $.proxy(function () {
      self.goToItem($(this).data('targetItem'));

      // Return false to avoid appending unwanted href "#".
      return false;
    }, this));

    this.$previousLink.on('click', $.proxy(this.goToPreviousItem, this));
    this.$nextLink.on('click', $.proxy(this.goToNextItem, this));
  };

  Pagination.VERSION = '0.0.1';

  Pagination.DEFAULTS = {
    maximumRange: 2,
    minimumRange: 1
  };

  /**
   * Go to the next item.
   *
   * Will do nothing if there are no items to go to.
   *
   * @return {boolean}
   *   This always returns false so it can be used in lieu of anchor tags href.
   */
  Pagination.prototype.goToNextItem = function() {
    if (this.currentItem >= this.itemCount) {
      return false;
    }

    this.goToItem(this.currentItem + 1);

    return false;
  }

  /**
   * Go to the previous page.
   *
   * Will do nothing if there are no pages to go to.
   *
   * @return {boolean}
   *   This always returns false so it can be used in lieu of anchor tags href.
   */
  Pagination.prototype.goToPreviousItem = function() {
    if (this.currentItem <= 1) {
      return false;
    }

    this.goToItem(this.currentItem - 1);

    return false;
  }

  /**
   * Go to a target item.
   *
   * @param {int} targetItem
   *   The destination page.
   */
  Pagination.prototype.goToItem = function(targetItem) {
    var self = this;
    var $currentItem = this.$element.find('.cr-pagination__item--current');

    // If targetItem is invalid or the page is already active, bail early.
    if (typeof targetItem !== 'number' || $currentItem.find('a').data('targetItem') === targetItem) {
      return false;
    }

    // Reset any 'far' links.
    this.$element.find('.cr-pagination__item--far').removeClass('cr-pagination__item--far').addClass('cr-pagination__item');

    // Update the page URL to allow for easy direct linking.
    window.history.replaceState({'page': targetItem}, 'Page ' + targetItem, '?page=' + targetItem);

    // Update the current item.
    $currentItem.removeClass('cr-pagination__item--current').addClass('cr-pagination__item');
    this.$element.find('[data-target-item=' + targetItem + ']').parent('.cr-pagination__item').removeClass('cr-pagination__item').addClass('cr-pagination__item--current');

    // Hide all pages and reveal the adjacent ones.
    this.$element.find('.cr-pagination__item').hide();

    this.getAdjacentItems(targetItem).forEach(function(element) {
      var adjacentItemNumber = self.$element.find(element).find('a').data('targetItem');

      if (self.isFarNeighbour(adjacentItemNumber, targetItem) && adjacentItemNumber > 2 && adjacentItemNumber < self.itemCount - 1) {
        $(element).removeClass('cr-pagination__item').addClass('cr-pagination__item--far');
      }

      $(element).show();
    });

    this.$previousLink.toggleClass('is-disabled', targetItem === 1);
    this.$nextLink.toggleClass('is-disabled', targetItem === this.itemCount);

    // If we need to hide an ellipsis, do so!
    if (this.isNearPaginationStart(targetItem, this.maximumRange + 1)) {
      this.$firstEllipsis.hide();

      if (!this.isNearPaginationEnd(targetItem, this.maximumRange + 1)) {
        this.$lastEllipsis.show();
      }
    } else if (this.isNearPaginationEnd(targetItem, this.maximumRange + 1)) {
      this.$lastEllipsis.hide();
      this.$firstEllipsis.show();
    } else {
      this.$element.find('.cr-pagination__ellipsis--first, .cr-pagination__ellipsis--last').show();
    }

    // First and last pages must always be visible.
    this.$element.find('.is-first-item, .is-last-item').show();

    this.currentItem = targetItem;
  };

  /**
   * Determines if an item is close to the start of the pagination.
   *
   * For a definition of 'close', refer to the optional range variable.
   * This is useful for determining whether the first ellipsis and/or 'Previous' links need to be disabled.
   *
   * @param {int} item
   *   The item to find.
   * @param {int} [range]
   *   (Optional) The maximum distance from the first item.
   * @returns {boolean}
   *   Flag indicating that the given item is close to the start of the pagination.
   */
  Pagination.prototype.isNearPaginationStart = function(item, range) {
    range = range || this.maximumRange;
    return item <= 1 + range;
  };

  /**
   * Determines if an item is close to the end of the pagination.
   *
   * For a definition of 'close', refer to the optional range variable.
   * This is useful for determining whether the last ellipsis and/or 'Next' links need to be disabled.
   *
   * @param {int} item
   *   The item to find.
   * @param {int} [range]
   *   (Optional) The maximum distance from the last page.
   * @returns {boolean}
   *   Flag indicating that the given page is close to the end of the pagination (TRUE) or not (FALSE).
   */
  Pagination.prototype.isNearPaginationEnd = function(item, range) {
    range = range || this.maximumRange;
    return item + range >= this.itemCount;
  };

  /**
   * Determines if an item is 'far' from another item.
   *
   * 'Far' is defined as greater than the minimum range setting.
   *
   * @param {int} neighbouringItem
   *   The item under consideration to determine whether it is 'far'.
   *
   * @param {int} relativeItem
   *   The page that neighbouringItem is to be considered a neighbour of.
   *
   * @return {boolean}
   *   Flag indicating that the neighbouringItem is 'far' (TRUE) or not (FALSE).
   */
  Pagination.prototype.isFarNeighbour = function(neighbouringItem, relativeItem) {
    if (neighbouringItem > relativeItem) {
      return neighbouringItem - relativeItem > this.minimumRange;
    }

    return relativeItem - neighbouringItem > this.minimumRange;
  }

  /**
   * Fetches the links to neighbouring items.
   *
   * @param {int} item
   *   The page that the links are neighbours of.
   *
   * @return {jQuery[]}
   *   A list of jQuery objects referencing the links that neighbour the requested item.
   */
  Pagination.prototype.getAdjacentItems = function(item) {
    var adjacentItems = [];
    var offset;

    if (typeof item !== 'number' || item < 1) {
      return adjacentItems;
    }

    var minimumItem = this.isNearPaginationStart(item) ? 1 : item - this.maximumRange;
    var maximumItem = this.isNearPaginationEnd(item) ? this.itemCount : item + this.maximumRange;

    if (this.itemCount - item <= this.maximumRange) {
      offset = 1 + this.maximumRange - (this.itemCount - item);
      minimumItem = minimumItem - offset < 1 ? 1 : minimumItem - offset;
    } else if (item <= this.maximumRange + 2) {
      // Count the pages between the minimum item & the current item.
      offset = (this.maximumRange + 2) - item;
      maximumItem = maximumItem + offset > this.itemCount ? this.itemCount : maximumItem + offset;
    }

    for (var count = minimumItem; count <= maximumItem; count++) {
      // Only fetch the neighbours; skip the current item.
      if (count === item) {
        continue;
      }

      var adjacentPage = this.$element.find('[data-target-item=' + count + ']').parent('.cr-pagination__item');

      if (adjacentPage.length) {
        adjacentItems.push(adjacentPage);
      }
    }

    return adjacentItems;
  };

  /**
   * Gets the value of a specified parameter available in the URL's query string.
   *
   * @param {string} parameter
   *   The parameter to retrieve the value of.
   * @returns {*}
   *   The value of the parameter, or false if the parameter was not found.
   */
  Pagination.prototype.getQueryParameter = function(parameter) {
    var query = window.location.search.substring(1);
    var params = query.split('&');
    for (var i = 0; i < params.length; i++) {
      var pair = params[i].split('=');
      if (pair[0] == parameter) {
        return pair[1];
      }
    }
    return false;
  };

  /**
   * Plugin definition.
   */
  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('cruk.pagination')
      var options = $.extend({}, Pagination.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('cruk.pagination', (data = new Pagination(this, options)))
    })
  }

  var old = $.fn.Pagination;

  $.fn.pagination = Plugin;
  $.fn.pagination.Constructor = Pagination;

  $.fn.pagination.noConflict = function() {
    $.fn.pagination = old;
    return this;
  };

  $(window).on('load', function () {
    $('.cr-pagination').each(function () {
      var $pagination = $(this);
      Plugin.call($pagination, $pagination.data())
    });
  });
});
