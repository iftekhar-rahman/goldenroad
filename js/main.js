jQuery(document).ready(function($){

    $('select').niceSelect();

    jQuery('.main-menu').meanmenu({
      meanMenuContainer : '.mobile-menu-container',
      meanScreenWidth: "991"
    });
  if ($(window).width() < 991) {
    $('#section2').remove();
  }
  $('#fullpage').fullpage({
		//options here
      autoScrolling:true,
      scrollHorizontally: true,
      scrollingSpeed: 1000,
      navigation: true,
  });
  if($('.site-wrapper').hasClass('offcanvas-active')){
    offcanvasMenu();
  }else{
    $('body').addClass('offcanvas-disable');
  }

function offcanvasMenu(){
  
    // Offcanvase menu
    $('.menu-trigger').on('click', function(){
      $('.close-btn').addClass('open');
      $('.site-navigation, .offcanvase-overlay').toggleClass('active');
      // $('.site-navigation').css('z-index','9999');
    });

    $('.close-btn').on('click', function(){
      $(this).removeClass('open');
      $('.site-navigation, .offcanvase-overlay').removeClass('active');
    });

    $('.offcanvase-overlay').on('click', function(){
      $('.site-navigation, .offcanvase-overlay, .site-search-wrap').removeClass('active');
      $('.close-btn').removeClass('open');
      $('.site-navigation').css('z-index','99999999999');
    });

    $('.header-search-icon i.fa').on('click', function(){
      $('.site-search-wrap, .offcanvase-overlay').addClass('active');
      $('.site-navigation').removeClass('active');
      $('.site-navigation').css('z-index','998');
    });

    $('.search-trigger').on('click', function(){
      $('.site-search-wrap').removeClass('active');
      $('.offcanvase-overlay').removeClass('active');
      $('.site-navigation').css('z-index','99999999999');
    });
    
}



 

  // $('#section1 .section-title').animate({'opacity':'0'},350);
  $('.loading #section1 .section-title').animate({'opacity':'1'},350);
  $('.loading .section-bg-1').animate({
    'transform':'scale(1.08)',
    'transition':'all 1s ease'
  },300);
  setTimeout(function(){
    $('#fullpage').removeClass('loading');
    $('#section1 .section-title').animate({'opacity':'0'});
    $('.loading .section-bg-1').animate({
      'transform':'scale(1)',
      'transition':'all 1s ease'
    },300);
},300)


  
}); 



