$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
        autoPlay: true,
        autoplaySpeed: 500,
        fade:true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" alt="right"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
});
