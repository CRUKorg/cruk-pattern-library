jQuery(document).ready(function(){
    var selector = 'button.ladda-button';

    jQuery('form').on('click', selector, function() {
        // Disable the button
        var $button = jQuery(this);
        $button.addClass('disabled').attr('disabled', 'disabled');

        // Set up a timeout so that we don't totally lock the form up if something goes wrong
        var timeout = setTimeout(function() {
            $button.removeClass('disabled').removeAttr('disabled');
        }, 60000);

        // And also, add a listener for the clientsideValidationInvalid event so that if there are any invalid
        // form elements, we re-enable the button immediately

        jQuery(selector).parents('form').on('clientsideValidationInvalid', ':input', function() {
            $button.removeClass('disabled').removeAttr('disabled');

            // Also, remove that timeout! We don't want that randomly firing!
            clearTimeout(timeout);
        });
    });

    /*
    Intentionally commented out for now. We were using the Ladda library for fancy 'something is happening' buttony
    goodness, but there were two issues with it
    1.) In Safari on both MacOS and iOS, it wasn't rendering at all (although when tested in isolation, the ladda code
        does work with both of these platforms
    2.) In the stock Samsung Galaxy Browser, the spinning animation doesn't work at all. (I suspect that it doesn't fully
        support CSS animations)
    So, we went for the "zomg we're running out of time" fire and brimstone approach and simply wrote our own button
    disable code. Please feel free to spend some quality hours debuging this yourself if you want some button fanciness!

    Ladda.bind(selector, { timeout: 60000 });

    jQuery(selector).parents('form').on('clientsideValidationInvalid', ':input', function (e) {
        Ladda.stopAll();
    });
    */
});