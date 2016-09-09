import $ from 'jquery';


const initMobileMenu = function() {
  const $html = $('html'),
        $menu = $('.js-mobile-menu'),
        $triggers = $('.js-search-icon, .js-menu-icon'),
        $searchIcon = $('.js-search-icon'),
        $menuIcon = $('.js-menu-icon'),
        activeClass = 'is-active',
        ohClass = 'is-oh',
        timer = 250;


  $triggers.on('click', function(e){
    e.preventDefault();
    const $this = $(this);

    if (!$this.hasClass(activeClass)) {
      $html.addClass(ohClass);
      $menu.fadeIn(timer);
      $triggers.addClass(activeClass);
    }
    else {
      $html.removeClass(ohClass);
      $menu.fadeOut(timer);
      $triggers.removeClass(activeClass);
    }

    if ($this.hasClass('js-search-icon')) {
      setTimeout(() => {
        $menu.find('input:first').focus();
      }, timer)
    }
  });
};


export default initMobileMenu;
