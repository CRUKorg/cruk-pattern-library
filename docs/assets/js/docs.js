
jQuery(function() {
  if (!$('body').hasClass('example')) {
    /*if (!window.location.origin) {
      window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }

    $('.docs-example').each(function(){
      var html = $(this).html();
      $(this).html('');

      var full_html = '<!DOCTYPE html><html lang="en"><head><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="' + document.location.origin + '/cruk-pattern-library/assets/css/docs.css"><script src="https://use.typekit.net/bgw6lhg.js"></script><script>try{Typekit.load({ async: true });}catch(e){}</script></head><body class="example">' + html + '<script src="' + document.location.origin + '/cruk-pattern-library/bower_components/jquery/dist/jquery.min.js"></script><script src="' + document.location.origin + '/cruk-pattern-library/assets/js/cruk-base.min.js"></script></body></html>';
      var $iframe = $('<iframe class="cr-pattern-library-code-example" width="1024" height="100%" />').appendTo($(this));
      $iframe[0].contentWindow.document.write(full_html);
      iframe_height = typeof $iframe[0].contentWindow.document.body.scrollHeight != 'undefined' ? $iframe[0].contentWindow.document.body.scrollHeight : 50;
      $iframe.attr('height', iframe_height + 'px');
    });*/

    var selector = '.markdown-body h2, .markdown-body h3';
    anchors.options = {
      placement: 'left',
      class: 'anchor-link'
    };
    anchors.add(selector);

    /**
     * Supporting JavaScript for examples.
     */
    $('#search-field-combined-example').on('submit', function(){
      return false;
    });
  }
});
