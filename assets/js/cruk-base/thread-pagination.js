jQuery( document ).ready(function( $ ) {
  'use strict';

  /*
   * This script is for demonstration purposes only. Pagination is typically handled by backend.
   * If you wish to use JS to handle pagination, take note that this is not intended for use on production sites.
   */

  // Total number of pages.
  var pageCount = $('.is-last-page').find('a').data('targetPage');

  // Maximum number of adjacent pages before & after current page.
  var maximumRange = 2;

  // Minimum number of adjacent pages before & after current page.
  var minimumRange = 1;

  // Starting page, if no page specified.
  var defaultPage = Math.ceil(pageCount / 2);

  var currentPage = parseInt(getQueryParameter('page'), 10);

  if (currentPage === false || isNaN(currentPage)) {
    currentPage = defaultPage;
  }

  var $firstEllipsis = $('.thread-pagination__ellipsis--first');
  var $lastEllipsis = $('.thread-pagination__ellipsis--last');

  var $previousLink = $('.thread-pagination__previous');
  var $nextLink = $('.thread-pagination__next');

  goToPage(currentPage);

  // Bind each link to point to the appropriate page.
  $('.js-thread-pagination-page').click(function () {
    goToPage($(this).data('targetPage'));

    // Return false to avoid appending unwanted href "#".
    return false;
  });

  $previousLink.click(goToPreviousPage);
  $nextLink.click(goToNextPage);

  /**
   * Go to the next page.
   *
   * Will do nothing if there are no pages to go to.
   *
   * @return {boolean}
   *   This always returns false so it can be used in lieu of anchor tags href.
   */
  function goToNextPage() {
    if (currentPage >= pageCount) {
      return false;
    }

    goToPage(currentPage + 1);

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
  function goToPreviousPage() {
    if (currentPage <= 1) {
      return false;
    }

    goToPage(currentPage - 1);

    return false;
  }

  /**
   * Go to a target page.
   *
   * @param {int} targetPage
   *   The destination page.
   */
  function goToPage(targetPage) {
    var $currentPage = $('.thread-pagination__page--current');

    // If targetPage is invalid or the page is already active, bail early.
    if (typeof targetPage !== 'number' || $currentPage.find('a').data('targetPage') === targetPage) {
      return false;
    }

    // Reset any 'far' links.
    $('.thread-pagination__page--far').removeClass('thread-pagination__page--far').addClass('thread-pagination__page');

    // Update the page URL to allow for easy direct linking.
    window.history.replaceState({'page': targetPage}, 'Page ' + targetPage, '?page=' + targetPage);

    // Update the current page.
    $currentPage.removeClass('thread-pagination__page--current').addClass('thread-pagination__page');
    $('[data-target-page=' + targetPage + ']').parent('.thread-pagination__page').removeClass('thread-pagination__page').addClass('thread-pagination__page--current');

    // Hide all pages and reveal the adjacent ones.
    $('.thread-pagination__page').hide();

    getAdjacentPages(targetPage).forEach(function(element) {
      // Unless near either side of pagination, add a class to some of the outlier links.
      // Then cry.

      var adjacentPageNumber = $(element).find('a').data('targetPage');

      if (isFarNeighbour(adjacentPageNumber, targetPage) && adjacentPageNumber > 2 && adjacentPageNumber < pageCount - 1) {
        $(element).removeClass('thread-pagination__page').addClass('thread-pagination__page--far');
      }

      $(element).show();
    });

    $previousLink.toggleClass('is-disabled', targetPage === 1);
    $nextLink.toggleClass('is-disabled', targetPage === pageCount);

    // If we need to hide an ellipsis, do so!
    if (isNearPaginationStart(targetPage, maximumRange + 1)) {
      $firstEllipsis.hide();

      if (!isNearPaginationEnd(targetPage, maximumRange + 1)) {
        $lastEllipsis.show();
      }
    } else if (isNearPaginationEnd(targetPage, maximumRange + 1)) {
      $lastEllipsis.hide();
      $firstEllipsis.show();
    } else {
      $('.thread-pagination__ellipsis--first, .thread-pagination__ellipsis--last').show();
    }

    // First and last pages must always be visible.
    $('.thread-pagination').find('.is-first-page, .is-last-page').show();

    currentPage = targetPage;
  }

  /**
   * Determines if a page is close to the start of the pagination.
   *
   * For a definition of 'close', refer to the optional range variable.
   * This is useful for determining whether the first ellipsis and/or 'Previous' links need to be disabled.
   *
   * @param {int} page
   *   The page to find.
   * @param {int} [range]
   *   (Optional) The maximum distance from the first page.
   * @returns {boolean}
   *   Flag indicating that the given page is close to the start of the pagination.
   */
  function isNearPaginationStart(page, range) {
    range = range || maximumRange;
    return page <= 1 + range;
  }

  /**
   * Determines if a page is close to the end of the pagination.
   *
   * For a definition of 'close', refer to the optional range variable.
   * This is useful for determining whether the last ellipsis and/or 'Next' links need to be disabled.
   *
   * @param {int} page
   *   The page to find.
   * @param {int} [range]
   *   (Optional) The maximum distance from the last page.
   * @returns {boolean}
   *   Flag indicating that the given page is close to the end of the pagination (TRUE) or not (FALSE).
   */
  function isNearPaginationEnd(page, range) {
    range = range || maximumRange;
    return page + range >= pageCount;
  }

  /**
   * Determines if a page number is 'far' from a page.
   *
   * 'Far' is defined as greater than the minimum range setting.
   *
   * @param {int} neighbouringPage
   *   The page under consideration to determine whether it is 'far'.
   *
   * @param {int} relativePage
   *   The page that neighbouringPage is to be considered a neighbour of.
   *
   * @return {boolean}
   *   Flag indicating that the neighbouringPage is 'far' (TRUE) or not (FALSE).
   */
  function isFarNeighbour(neighbouringPage, relativePage) {
    if (neighbouringPage > relativePage) {
      return neighbouringPage - relativePage > minimumRange;
    }

    return relativePage - neighbouringPage > minimumRange;
  }

  /**
   * Fetches the links to neighbouring pages.
   * @param {int} page
   *   The page that the links are neighbours of.
   *
   * @return {jQuery[]}
   *   A list of jQuery objects referencing the links that neighbour the requested page.
   */
  function getAdjacentPages(page) {
    var adjacentPages = [];
    var offset;

    if (typeof page !== 'number' || page < 1) {
      return adjacentPages;
    }

    var minimumPage = isNearPaginationStart(page) ? 1 : page - maximumRange;
    var maximumPage = isNearPaginationEnd(page) ? pageCount : page + maximumRange;

    if (pageCount - page <= maximumRange) {
      offset = 1 + maximumRange - (pageCount - page);
      minimumPage = minimumPage - offset < 1 ? 1 : minimumPage - offset;
    } else if (page <= maximumRange + 2) {
      // Count the pages between the minimum page & the current page.
      offset = (maximumRange + 2) - page;
      maximumPage = maximumPage + offset > pageCount ? pageCount : maximumPage + offset;
    }

    for (var count = minimumPage; count <= maximumPage; count++) {
      // Only fetch the neighbours; skip the current page.
      if (count === page) {
        continue;
      }

      var adjacentPage = $('[data-target-page=' + count + ']').parent('.thread-pagination__page');

      if (adjacentPage.length) {
        adjacentPages.push(adjacentPage);
      }
    }

    return adjacentPages;
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
