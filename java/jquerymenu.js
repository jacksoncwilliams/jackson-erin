jQuery(document).ready(function() {
jQuery('.toggle-nav').click(function(e) {
jQuery(this).toggleClass('active');
jQuery('.menu ul').toggleClass('active');
e.preventDefault();  
              var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
});
