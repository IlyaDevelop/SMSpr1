$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true
});


const burger = document.querySelector('.burger'),
    burgerActive = document.querySelector('.burgerAct'),
    bgClose = document.querySelector('.bg_close');

    burger.addEventListener('click',() => {
        burgerActive.classList.add('burger_active');
        burgerActive.style.marginLeft = '-10px';
        document.body.style.overflow = 'hidden';
    });

    bgClose.addEventListener('click',() => {
        burgerActive.classList.remove('burger_active');
        burgerActive.style.marginLeft = '-800px';
        document.body.style.overflow = '';
    });