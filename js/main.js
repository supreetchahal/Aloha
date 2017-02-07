$(function() {

        $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top - 115
        }, 400)
    });

    $('.button').on('click', function(event){
       event.preventDefault();
       confirm('hello world');
    });


    $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        freescroll: true,
        groupCells: 1,
        prevNextButtons: false,
        pageDots: true,
        resize: true,
        autoPlay: true,
        });
});
