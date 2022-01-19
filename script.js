$(() => {
  const slidingText = $('.sliding-text');
  const list = slidingText.find('ul');
  
  list.clone().appendTo(slidingText).clone().appendTo(slidingText).clone().appendTo(slidingText).clone().appendTo(slidingText).clone().appendTo(slidingText).clone().appendTo(slidingText).clone().appendTo(slidingText).clone().appendTo(slidingText).clone().appendTo(slidingText).clone().appendTo(slidingText);
  
  const totalLength = list.outerWidth(true);
  
  const animationStart = (isResume = false) => {
    let duration = 30000;
    
    if(!isResume) {
      slidingText.scrollLeft(0);
    } else {
      duration = ((list.outerWidth(true) - slidingText.scrollLeft()) * duration) / list.outerWidth(true)
    }
    
    slidingText.animate({
      scrollLeft: list.outerWidth(true)
    }, {
      duration,
      easing: 'linear',
      complete: animationStart
    });
  }
  
  slidingText.on('mouseenter', () => {
    slidingText.stop(true);
  })
  
  slidingText.on('mouseout', () => {
    animationStart(true);
  })

  slidingText.on('click', () => {
    setTimeout(function(){
      $('#tinyguy').addClass('animation');
  })
  
  setTimeout(function(){
    $('#tinyguy').removeClass('animation');
  }, 12000);
  })
  
  animationStart();
});

var menu = $(".mainnet_button");
$(window).scroll(function(){
  //more then or equals to
  if($(window).scrollTop() >= 400 ){
    menu.addClass('sticky');

  //less then 100px from top
  } else {
     menu.removeClass('sticky');

  }
});


$('.announcement_button').on('click', function(){
  $('body').removeClass('announcement');
});