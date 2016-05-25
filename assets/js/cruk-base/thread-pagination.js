jQuery( document ).ready(function( $ ) {
  'use strict';

  /*
   * This script is for demonstration purposes only. Pagination is typically handled by backend.
   * If you wish to use JS to handle pagination, take note that this is not intended for use on production sites.
   */

  // Total number of items.
  var itemCount = $('.is-last-item').find('a').data('targetItem');

  // Maximum number of adjacent items before & after current item.
  var maximumRange = 2;

  // Minimum number of adjacent items before & after current item.
  var minimumRange = 1;

  // Starting item, if no item specified.
  var defaultItem = Math.ceil(itemCount / 2);

  var currentItem = parseInt(getQueryParameter('page'), 10);

  if (currentItem === false || isNaN(currentItem)) {
    currentItem = defaultItem;
  }

  var $firstEllipsis = $('.thread-pagination__ellipsis--first');
  var $lastEllipsis = $('.thread-pagination__ellipsis--last');

  var $previousLink = $('.thread-pagination__previous');
  var $nextLink = $('.thread-pagination__next');

  goToItem(currentItem);

  // Bind each link to point to the appropriate page.
  $('.js-thread-pagination-item').click(function () {
    goToItem($(this).data('targetItem'));

    // Return false to avoid appending unwanted href "#".
    return false;
  });

  $previousLink.click(goToPreviousItem);
  $nextLink.click(goToNextItem);

  /**
   * Go to the next item.
   *
   * Will do nothing if there are no items to go to.
   *
   * @return {boolean}
   *   This always returns false so it can be used in lieu of anchor tags href.
   */
  function goToNextItem() {
    if (currentItem >= itemCount) {
      return false;
    }

    goToItem(currentItem + 1);

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
  function goToPreviousItem() {
    if (currentItem <= 1) {
      return false;
    }

    goToItem(currentItem - 1);

    return false;
  }

  /**
   * Go to a target page.
   *
   * @param {int} targetItem
   *   The destination page.
   */
  function goToItem(targetItem) {
    var $currentItem = $('.thread-pagination__item--current');

    // If targetItem is invalid or the page is already active, bail early.
    if (typeof targetItem !== 'number' || $currentItem.find('a').data('targetItem') === targetItem) {
      return false;
    }

    // Reset any 'far' links.
    $('.thread-pagination__item--far').removeClass('thread-pagination__item--far').addClass('thread-pagination__item');

    // Update the page URL to allow for easy direct linking.
    window.history.replaceState({'page': targetItem}, 'Page ' + targetItem, '?page=' + targetItem);

    // Update the current page.
    $currentItem.removeClass('thread-pagination__item--current').addClass('thread-pagination__item');
    $('[data-target-item=' + targetItem + ']').parent('.thread-pagination__item').removeClass('thread-pagination__item').addClass('thread-pagination__item--current');

    // Hide all pages and reveal the adjacent ones.
    $('.thread-pagination__item').hide();

    getAdjacentItems(targetItem).forEach(function(element) {
      var adjacentItemNumber = $(element).find('a').data('targetItem');

      if (isFarNeighbour(adjacentItemNumber, targetItem) && adjacentItemNumber > 2 && adjacentItemNumber < itemCount - 1) {
        $(element).removeClass('thread-pagination__item').addClass('thread-pagination__item--far');
      }

      $(element).show();
    });

    $previousLink.toggleClass('is-disabled', targetItem === 1);
    $nextLink.toggleClass('is-disabled', targetItem === itemCount);

    // If we need to hide an ellipsis, do so!
    if (isNearPaginationStart(targetItem, maximumRange + 1)) {
      $firstEllipsis.hide();

      if (!isNearPaginationEnd(targetItem, maximumRange + 1)) {
        $lastEllipsis.show();
      }
    } else if (isNearPaginationEnd(targetItem, maximumRange + 1)) {
      $lastEllipsis.hide();
      $firstEllipsis.show();
    } else {
      $('.thread-pagination__ellipsis--first, .thread-pagination__ellipsis--last').show();
    }

    // First and last pages must always be visible.
    $('.thread-pagination').find('.is-first-item, .is-last-item').show();

    currentItem = targetItem;
  }

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
  function isNearPaginationStart(item, range) {
    range = range || maximumRange;
    return item <= 1 + range;
  }

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
  function isNearPaginationEnd(item, range) {
    range = range || maximumRange;
    return item + range >= itemCount;
  }

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
  function isFarNeighbour(neighbouringItem, relativeItem) {
    if (neighbouringItem > relativeItem) {
      return neighbouringItem - relativeItem > minimumRange;
    }

    return relativeItem - neighbouringItem > minimumRange;
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
  function getAdjacentItems(item) {
    var adjacentItems = [];
    var offset;

    if (typeof item !== 'number' || item < 1) {
      return adjacentItems;
    }

    var minimumItem = isNearPaginationStart(item) ? 1 : item - maximumRange;
    var maximumItem = isNearPaginationEnd(item) ? itemCount : item + maximumRange;

    if (itemCount - item <= maximumRange) {
      offset = 1 + maximumRange - (itemCount - item);
      minimumItem = minimumItem - offset < 1 ? 1 : minimumItem - offset;
    } else if (item <= maximumRange + 2) {
      // Count the pages between the minimum item & the current item.
      offset = (maximumRange + 2) - item;
      maximumItem = maximumItem + offset > itemCount ? itemCount : maximumItem + offset;
    }

    for (var count = minimumItem; count <= maximumItem; count++) {
      // Only fetch the neighbours; skip the current item.
      if (count === item) {
        continue;
      }

      var adjacentPage = $('[data-target-item=' + count + ']').parent('.thread-pagination__item');

      if (adjacentPage.length) {
        adjacentItems.push(adjacentPage);
      }
    }

    return adjacentItems;
  }

  /**
   * Gets the value of a specified parameter available in the URL's query string.
   *
   * @param {string} parameter
   *   The parameter to retrieve the value of.
   * @returns {*}
   *   The value of the parameter, or false if the parameter was not found.
   */
  function getQueryParameter(parameter) {
    var query = window.location.search.substring(1);
    var params = query.split('&');
    for (var i = 0; i < params.length; i++) {
      var pair = params[i].split('=');
      if (pair[0] == parameter) {
        return pair[1];
      }
    }
    return false;
  }
});
