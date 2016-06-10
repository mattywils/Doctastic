jQuery(function() {
    var sectionIdentifiersAndLocation = [];
    $('.navigation li a').each(function() {
        var identifier = this.href.substring(this.href.indexOf("#")+1);
        var location = $('#'+identifier).offset().top - 30;
        var object = { identifier: identifier, location: location };
        sectionIdentifiersAndLocation.push(object);
    });

    $(window).bind('scroll', function () {
        var wS = $(this).scrollTop();

        var activeSection = "index";
        $(sectionIdentifiersAndLocation).each(function() {
            if (wS > (this.location)){
               activeSection = this.identifier;
           }
        });

        $('.navigation li a').removeClass('active');
        $('.navigation li .' + activeSection).addClass('active');
    });
});