$(function () {
    console.log('vi tri chapter 1:');
    console.log($('.chapter1').offset().top);

    for (let i = 1; i <= 4; i++) {

        $('.menu-tren ul li:nth-child(' + i + ') a').on('click', function (event) {
            event.preventDefault();
            console.log('Vi tri chapter ' + i + ': ' + $('.chapter' + i).offset().top);
            $("html, body").animate({ scrollTop: $('.chapter' + i).offset().top }, 1000);
        });

    }
});