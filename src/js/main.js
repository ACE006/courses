
$('ul.benefits__list').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('benefits__list-item_active').siblings().removeClass('benefits__list-item_active')
        .closest('div.benefits__tabs').find('div.benefits__content').removeClass('benefits__content_active').eq($(this).index()).addClass('benefits__content_active');
});





var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".meet__arrow_next",
        prevEl: ".meet__arrow_prev",
    },
});

let owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    center: true,
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
});

$('.students__arrow_next').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.students__arrow_prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});

let burger = document.querySelector('.burger');
let list = document.querySelector('.header__list');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    list.classList.toggle('active');
});

let login = $('.login');
let register = $('.register');
let overlay = $('.overlay');
let popupLogin = $('.popup__login');
let popupRegister = $('.popup__register');
let popupClose = $ ('.popup__close');


login.on('click', function (e) {
    e.preventDefault();
    popupRegister.fadeOut(0);
    overlay.fadeIn('slow');
    popupLogin.fadeIn('slow');
});

register.on('click', function (e) {
    e.preventDefault();
    popupLogin.fadeOut(0);
    overlay.fadeIn('slow');
    popupRegister.fadeIn('slow');
});

popupClose.on('click', function () {
    overlay.fadeOut('slow');
    popupRegister.fadeOut('slow');
    popupLogin.fadeOut('slow')
});


overlay.on('click', function (e) {
    if (e.target.className === 'overlay'){
        overlay.fadeOut('slow');
        popupRegister.fadeOut('slow');
        popupLogin.fadeOut('slow')
    }
});
