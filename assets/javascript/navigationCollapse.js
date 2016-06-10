jQuery(function() {
    $(".collapseToggle").click(function () {
        var collapseContainer = $(this).parent(".collapseContainer");
        $(collapseContainer).children(".collapse").each(function () {
	        if($(this).is(":hidden")) {
	            $(this).show();
	            $(collapseContainer).addClass("open");
	        } else {
	            $(this).hide();
	            $(collapseContainer).removeClass("open");
	        }
	    });
	});
});