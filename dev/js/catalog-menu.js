import $ from 'jquery';


const initCatMenu = function() {
  const $menu = $('.js-catmenu'),
        $items = $menu.find('> ul > li');

  $items.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('is-active');
  });
};


export default initCatMenu;
