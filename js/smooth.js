$("body").on('click', '[href*="#"]', function(e){
    $.scrollTo($(this.hash), 500);
});