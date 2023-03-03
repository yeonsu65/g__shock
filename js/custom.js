$(document).ready(function(){
  // 화면의 넓이와 높이값
  let ht = $(window).height();

  $('section').height(ht);
  // 화면 사이즈가 변하면 section의 높이값을 고정
  $(window).resize(function(){
    let ht = $(window).height();
    $('section').height(ht);
  });

  // 마우스의 움직임에 따라 이미지의 위치 반응
  $('section').mousemove(function(e){
    // 커서위치
    let posX = e.pageX;
    let posY = e.pageY;

    $('img.p11').css({right : 20-(posX/30), bottom : 20-(posY/30)});
    $('img.p12').css({right : 130-(posX/20), bottom : -40-(posY/20)});
    $('img.p13').css({right : 60-(posX/20), top : 180-(posY/20)});

    $('img.p21').css({right : -180-(posX/20), bottom : -180-(posY/20)});
    $('img.p22').css({right : 130+(posX/50), bottom : -40-(posY/50)});

    $('img.p31').css({right : 280-(posX/30), bottom : -30-(posY/30)});
    $('img.p32').css({right : 110+(posX/20), bottom : -270-(posY/20)});
    $('img.p33').css({right : -70+(posX/20), top : -130-(posY/20)});

    $('img.p41').css({right : 20-(posX/30), bottom : -120-(posY/30)});
    $('img.p42').css({right : 0-(posX/20), bottom : -180-(posY/20)});

  });

  // 스크롤하기
  $('ul#menu li').click(function(e){
    // 고유의 기능을 막아줌
    e.preventDefault();

    let ht = $(window).height();
    // 클릭한 요소의 인덱스값
    let i = $(this).index();
    // 인데스값* 높이값
    let nowTop = i * ht;
    // 해당위치로 스크롤 이동
    $('html, body').stop().animate({scrollTop : nowTop},1400);
  });
  // 스크롤 될떄마다 현재 영역에 해당하는 메뉴 활성화
  
  $(window).scroll(function(){
    let ht = $(window).height();
    
    let scroll = $(window).scrollTop();
    // if(scroll  >= ht * 0 && scroll < ht * 1){
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(0).addClass('on');
    // }
    // if(scroll  >= ht * 1 && scroll < ht * 2){
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(1).addClass('on');
    // }
    // if(scroll  >= ht * 2 && scroll < ht * 3){
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(2).addClass('on');
    // }
    // if(scroll  >= ht * 3 && scroll < ht * 4){
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(3).addClass('on');
    // }
    for(let i = 0; i < 5 ;i++){ 
      if(scroll  >= ht * i && scroll < ht * (i+1)){
        $('ul#menu li').removeClass();
        $('ul#menu li').eq(i).addClass('on');
      }
    }
  });

  // 마우스 휠의 움직임에 따라 화면 스크롤
  $('section').mousewheel(function(e, delta){
    console.log(e, delta);

    if(delta > 0 ){
      let prev = $(this).prev().offset().top;
      $('html, body').stop().animate({scrollTop : prev},1400);
    }
    else if(delta < 0 ){
      let next = $(this).next().offset().top;
      $('html, body').stop().animate({scrollTop : next},1400);
    }
  });
});
