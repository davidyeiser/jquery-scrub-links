(function ($) {

  $.fn.scrubLinks = function(dumpLocation) {

    this.filter('a').each(function() {
      var linkText;
      var linkURL;
      var linkTitle;

      linkText  = $(this).text();
      linkURL   = $(this).attr("href");
      linkTitle = $(this).attr("title");

      $(this).contents().unwrap();

      if (typeof linkTitle != 'undefined') {
        $(dumpLocation).append('<li class="post-content-link-item"><a class="post-content-link" href="' + linkURL + '">' + linkTitle + '</a></li>');
      }
      else {
        $(dumpLocation).append('<li class="post-content-link-item"><a class="post-content-link" href="' + linkURL + '">' + linkText + '</a></li>');
      }
    });

    if (this.filter('a').length > 0) {
      $(dumpLocation).prepend('<li class="title-holder"><h4 class="post-content-link-list-title">Referenced Links</h4></li>');
    }

    return this;

  };

}(jQuery));