const swiper = new Swiper('.swiper', {
          spaceBetween: 60,
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 1,
        effect: 'coverflow',
  pagination: {
    el: '.project-pagination',
    bulletClass: 'project-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true
  },
});
