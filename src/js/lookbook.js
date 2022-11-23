@@include('./partials/swiper-bundle.min.js')

var swiperOther= swiperOther;
var swiperOtherInit = false;


function swiperOtherMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let desktop = window.matchMedia('(min-width: 768px)');
    if (mobile.matches) {
        if(!swiperOtherInit){
            swiperOtherInit = true;
            swiperOther = new Swiper('.swiper-other-collection', {
                slidesPerView: 1.4,
                spaceBetween:6,
                initialSlide: 0,
                observer: true,
                observeParents: true,
            });

        }
    }

    else if (desktop.matches) {
        if (swiperOther) {
            swiperOther.destroy();
            swiperOtherInit = false;
        }
    }
}

var swiperItems= swiperItems;
var swiperItemsInit = false;
function swiperItemsMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let desktop = window.matchMedia('(min-width: 768px)');
    if (mobile.matches) {
        if(!swiperItemsInit){
            swiperItemsInit = true;
            document.querySelectorAll('.lookbook-items').forEach(n => {
                swiperItems = new Swiper(n.querySelector('.swiper-lookbook-items'), {
                    slidesPerView: 2.2,
                    spaceBetween:6,
                    initialSlide: 0,
                    observer: true,
                    observeParents: true,

                });
            });

        }
    }

    else if (desktop.matches) {
        if (swiperItems) {
            swiperItems.destroy();
            swiperItemsInit = false;
        }
    }
}

window.addEventListener('load', function() {
    if($('.swiper-other-collection').length){
        swiperOtherMode();
    }
    if($('.swiper-lookbook-items').length){
        swiperItemsMode();
    }
});

window.addEventListener('resize', function() {
    if($('.swiper-other-collection').length){
        swiperOtherMode();
    }
    if($('.swiper-lookbook-items').length){
        swiperItemsMode();
    }
});


