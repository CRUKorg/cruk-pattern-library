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
    var dataKey = 'crukInputDynamicState';

    $.fn.crukInputDynamicClear = function crukInputDynamicClear() {
        return this.each(function() {
            if ($(this).crukInputDynamicState() !== null) {
                $(this).crukInputDynamicSpin(false);
                $(this).crukInputDynamicSuccess(false);
            }
        });
    };

    $.fn.crukInputDynamicSuccess = function crukInputDynamicSuccess(remove) {
        return this.each(function() {
            var stateValue = 'success';

            if (remove === false) {
                if ($(this).crukInputDynamicState() === stateValue) {
                    $(this).siblings('span.form-control-feedback').removeClass('cr-i').removeClass('cr-i--checkmark');
                    $(this).siblings('span.sr-only').text('');
                    $(this).data(dataKey, null);
                }
            } else {
                if ($(this).crukInputDynamicState() !== stateValue) {
                    // It may well be that we need to clear a throbber... so, just in case...
                    $(this).crukInputDynamicClear();

                    // Now tick away!

                    $(this).siblings('span.form-control-feedback').addClass('cr-i').addClass('cr-i--checkmark');
                    $(this).siblings('span.sr-only').text('(success)');
                    $(this).data(dataKey, stateValue);
                }
            }
        });
    };

    $.fn.crukInputDynamicSpin = function crukInputDynamicSpin(remove) {
        return this.each(function() {
            var stateValue = 'checking';

            if (remove === false) {
                if ($(this).crukInputDynamicState() === stateValue) {
                    $(this).siblings('span.form-control-feedback').spin(false);
                    $(this).siblings('span.sr-only').text('');
                    $(this).data(dataKey, null);
                }
            } else {
                if ($(this).crukInputDynamicState() !== stateValue) {
                    // Remove any ticks we may have
                    $(this).crukInputDynamicClear();

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

                    $(this).siblings('span.form-control-feedback').spin(opts);
                    $(this).siblings('span.sr-only').text('(checking)');
                    $(this).data(dataKey, stateValue);
                }
            }
        });
    };

    $.fn.crukInputDynamicState = function() {
        var state = $(this).data(dataKey);
        if (typeof state === 'undefined') {
            state = null;
        }

        return state;
    };
})(jQuery);
