const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true, //버튼으로 페이지 이동
    type:'fraction' //페이지 버튼대신 슬라이드번호
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  spaceBetween : 30, // 패널사이의 간격
  grabCursor : true,//스와이프시 마우스 포인터 모양변경
  slidesPerView : 'auto', //css에 지정한 슬라이더의 크기를 반영
  speed : 1000, 
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});