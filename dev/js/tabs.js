import $ from 'jquery';


const initTabs = function() {
  const $tabs = $('.js-tabs'),
        activeClass = 'is-active';

  $tabs.each(function(){
    const $this = $(this),
          $tab = $this.find('.js-tabs-tab'),
          $links = $this.find('.js-tabs-link');

    const activeStart = $this.find('.js-tabs-tab.'+activeClass).index();
    $links.removeClass(activeClass);
    $this.find('.js-tabs-link:eq('+activeStart+')').addClass(activeClass);


    $links.on('click', function(e){
      e.preventDefault();
      $links.removeClass(activeClass);
      $(this).addClass(activeClass);

      const idx = $(this).index();
      $tab.removeClass(activeClass)
      $this.find('.js-tabs-tab:eq('+idx+')').addClass(activeClass);
    });
  });
};


export default initTabs;
