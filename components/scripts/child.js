/**
 * Created by zera on 1/13/2016.
 */
$(document).ready(function(){
    $('.media-screenshots').slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        centerPadding: '60px',
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

