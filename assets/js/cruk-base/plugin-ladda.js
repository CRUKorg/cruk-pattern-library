jQuery(document).ready(function(){
    var selector = 'button.ladda-button';
    Ladda.bind(selector, { timeout: 60000 });

    jQuery(selector).parents('form').delegate('input, select, textarea', 'clientsideValidationInvalid', function (e) {
        Ladda.stopAll();
    });
});