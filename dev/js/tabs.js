import $ from 'jquery';


const initTabs = function() {
  const $tabs = $('.js-tabs'),
        activeClass = 'is-active';
  let tabsCount = 0;

  $tabs.each(function(){
    const $this = $(this),
          $tab = $this.find('.js-tabs-tab'),
          $links = $this.find('.js-tabs-link');

    $tab.each(function(){
      const $tb = $(this);
      $tb.attr('data-index', tabsCount);
      tabsCount++;
    });

    const activeStart = $this.find('.js-tabs-tab.'+activeClass).attr('data-index');
    $links.removeClass(activeClass);
    $this.find('.js-tabs-link:eq('+activeStart+')').addClass(activeClass);

    $tab.each(function(){
      const $tb = $(this);
      let idx = $tb.attr('data-index');
      let text = $this.find('.js-tabs-link:eq('+idx+')').text();
      $tb.prepend('<div class="tabs-mobileHeadline"><div class="tabs-bg"></div>'+text+'</div>');
    });


    $links.on('click', function(e){
      e.preventDefault();
      $links.removeClass(activeClass);
      $(this).addClass(activeClass);

      const idx = $(this).index();
      $tab.removeClass(activeClass)
      $this.find('.js-tabs-tab:eq('+idx+')').addClass(activeClass);
    });


    $('.tabs-mobileHeadline').on('click', function(e){
      e.preventDefault();
      $(this).closest('.js-tabs-tab').toggleClass('is-expanded');
    });

  });
};


export default initTabs;
