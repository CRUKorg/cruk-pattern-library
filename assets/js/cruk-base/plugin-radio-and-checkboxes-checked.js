jQuery( document ).ready(function( $ ) {
    'use strict';
    // First, apply to any pre-checked options
    $('form').find('input[type=radio]:checked, input[type=checkbox]:checked').each(function() {
        checkIt($(this));
    });

    // Now set up listeners to ensure that any changes are also checked
    $('form').on('change', 'input[type=radio], input[type=checkbox]', function() {
        checkIt($(this));
    });

    // For a given jQuery input object, ensure that it's checked
    function checkIt($input) {
        var type = $input.attr('type');
        if (type === 'radio') {
            checkItRadio($input);
        } else if (type === 'checkbox') {
            checkItCheckbox($input);
        }
    }

    function checkItRadio($input) {
        // Turn off all styling for this radio group

        var name = $input.attr('name');
        var id = $input.attr('id');
        $('input[name=' + name + ']').not('#' + id).parents('.radio').removeClass('radio-selected');

        // Now apply it to the current one
        $input.parents('.radio').addClass('radio-selected');
    }

    function checkItCheckbox($input) {
        if ($input.is(':checked')) {
            $input.parents('.checkbox').addClass('checkbox-selected');
        } else {
            $input.parents('.checkbox').removeClass('checkbox-selected');
        }
    }
});
