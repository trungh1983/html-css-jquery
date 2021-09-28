$(function() {
    $('.nd-motkhoi').slideUp();
    $('.motkhoi h3').click(function (e) { 
        $(this).next().slideToggle();
        $(this).toggleClass('color-blue');        
    });
});