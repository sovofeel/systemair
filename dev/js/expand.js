import $ from 'jquery';


const initExpand = function() {
  const $expands = $('.js-expand'),
        activeClass = 'is-active',
        text = ['Все характеристики', 'Свернуть'];

  $expands.each(function(){
    const $expand = $(this),
          $link = $expand.find('.js-expand-link');


    if ($expand.hasClass(activeClass)) $link.addClass(activeClass);

    $link.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass(activeClass);
      $expand.toggleClass(activeClass);

      if ($(this).hasClass(activeClass)) $(this).html(text[1])
      else $(this).html(text[0])
    });

  });
};


export default initExpand;
