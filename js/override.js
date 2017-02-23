$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });
  })

  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.nav-bar').addClass('show-background');
    } else {
        $('.nav-bar').removeClass('show-background');
    }
});