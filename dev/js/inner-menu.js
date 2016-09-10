import $ from 'jquery';


const initInnerMenu = function() {
  const $menu = $('.js-inner-menu'),
        $triggers = $('.js-inner-menu-trigger');


  const setMaxHeight = () => {
    $menu.each(function(){
      let max = 0;
      const $items = $(this).find('.innerMenu-item');

      $items.removeAttr('style').each(function(){
        const hgt = $(this).height();
        if (hgt > max) max = hgt;
      });

      $items.height(max);
    });
  };


  setMaxHeight();

  $(window).resize(function() {
    setMaxHeight();
  });


  $triggers.on('mouseenter', function(e){
    const list = $(this).attr('data-innermenu');
    $menu.removeClass('is-active');
    $('.js-inner-menu[data-innermenu="'+list+'"]').addClass('is-active');

  }).on('mouseleave', function(){
    $menu.removeClass('is-active');
  });

  $menu.on('mouseenter', function(e){
    $(this).addClass('is-active');

  }).on('mouseleave', function(e){
    $(this).removeClass('is-active');
  });

};


export default initInnerMenu;
