/**
 * A very simple plugin to handle dynamic feedback in forms in one place.
 *
 * $('#some-id').crukInputDynamicSpin();
 *
 * To remove it when you're done:
 *
 * $('#some-id').crukInputDynamicSpin(false);
 *
 */
(function ($) {
    $.fn.crukInputDynamicClear = function crukInputDynamicClear() {
        $(this).crukInputDynamicSpin(false);
        $(this).crukInputDynamicSuccess(false);
    };

    $.fn.crukInputDynamicSuccess = function crukInputDynamicSuccess(remove) {
        return this.each(function() {
            if (remove === false) {
                $(this).siblings('span.form-control-feedback').removeClass('fa').removeClass('fa-check');
                $(this).siblings('span.sr-only').text('');
            } else {
                // It may well be that we need to clear a throbber... so, just in case...

                $(this).crukInputDynamicSpin(false);

                // Now tick away!

                $(this).siblings('span.form-control-feedback').addClass('fa').addClass('fa-check');
                $(this).siblings('span.sr-only').text('(success)');
            }
        });
    };

    $.fn.crukInputDynamicSpin = function crukInputDynamicSpin(remove) {
        return this.each(function() {
            var height = $(this).outerHeight();
            if (height > 32) {
                height *= 0.8;
            }
            var lines = 12, radius = height * 0.2, length = radius * 0.6, width = radius < 7 ? 2 : 3;
            var opts = {
                color: "#000",
                lines: lines,
                radius: radius,
                length: length,
                width: width,
                zIndex: "auto",
                top: "auto",
                left: "auto",
                className: ""
            };

            if (remove === false) {
                $(this).siblings('span.form-control-feedback').spin(false);
                $(this).siblings('span.sr-only').text('');
            } else {
                $(this).siblings('span.form-control-feedback').spin(opts);
                $(this).siblings('span.sr-only').text('(checking)');
            }
        });
    };
})(jQuery);
