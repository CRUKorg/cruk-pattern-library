/*
 Intentionally commented out for now. We were using the Ladda library for fancy 'something is happening' buttony
 goodness, but there were two issues with it
 1.) In Safari on both MacOS and iOS, it wasn't rendering at all (although when tested in isolation, the ladda code
 does work with both of these platforms
 2.) In the stock Samsung Galaxy Browser, the spinning animation doesn't work at all. (I suspect that it doesn't fully
 support CSS animations)
 So, we went for the "zomg we're running out of time" fire and brimstone approach and simply wrote our own button
 disable code. Please feel free to spend some quality hours debuging this yourself if you want some button fanciness!
 NOTE: You'll need to add all the Ladda-Bootstrap stuff back into gulp/bower

 jQuery(document).ready(function(){

    var selector = 'button.ladda-button';

    Ladda.bind(selector, { timeout: 60000 });

    jQuery(selector).parents('form').on('clientsideValidationInvalid', ':input', function (e) {
        Ladda.stopAll();
    });
});
*/