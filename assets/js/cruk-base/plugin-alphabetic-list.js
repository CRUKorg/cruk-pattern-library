jQuery(document).ready(function($) {
    'use strict';

    $(document).on('click', '.cr-filter-input .btn-reset', function() {
        $("input.cr-filter-input__input").val('');
        $('.cr-index__list-item, .cr-index__category').show();
    });

    $(document).on('keyup', 'input.cr-filter-input__input', function() {
        var that = this,
            $allListElements = $('.cr-index__list-item, .cr-index__category');
        var $matchingListElements = $allListElements.filter(
            function(i, li) {
                var listItemText = $(li).text().toUpperCase(), searchText = that.value.toUpperCase();
                return ~listItemText.indexOf(searchText);
            }
        );

        $allListElements.hide();
        $matchingListElements.show();
    });
});
