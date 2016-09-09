import $ from 'jquery';


const initCatmobmenu = function() {
  const $menu = $('.js-catmobmenu');

  $menu.on('click', function(e){
    if (!$(e.target).closest('a').length) {
      e.preventDefault();
      $(this).toggleClass('is-active');
    }
  });

  $('html').on('click', function(e){
    if (!$(e.target).closest('.js-catmobmenu').length) $menu.removeClass('is-active');
  });
};


export default initCatmobmenu;
