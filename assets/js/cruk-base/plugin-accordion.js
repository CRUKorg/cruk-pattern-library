jQuery( document ).ready(function( $ ) {
    'use strict';

    var states = {
        hide: {
            icon: 'fa-chevron-circle-down',
            text: 'Add details'
        },
        show: {
            icon: 'fa-chevron-circle-up',
            text: 'Hide details'
        }
    };

    $('.accordion').on('show.bs.collapse', function (e) {
        var target = $(e.currentTarget);
        target.find('i.' + states.hide.icon).addClass(states.show.icon).removeClass(states.hide.icon);
        target.find('.add-details').text(states.show.text);
    });

    $('.accordion').on('hide.bs.collapse', function (e) {
        var target = $(e.currentTarget);
        target.find('i.' + states.show.icon).addClass(states.hide.icon).removeClass(states.show.icon);
        target.find('.add-details').text(states.hide.text);
    });

});