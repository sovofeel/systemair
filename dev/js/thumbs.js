import $ from 'jquery';


const initThumbs = function() {
  const $thumbWrap = $('.js-thumbs-wrapper'),
        activeClass = 'is-active';

  $thumbWrap.each(function(){
    const $tw = $(this),
          $tmbs = $tw.find('.js-thumb'),
          $target = $tw.find('.js-thumbs-target');

    $tmbs.on('click', function(e){
      e.preventDefault();
      const src = $(this).attr('data-photo');
      const big = $(this).attr('data-bigphoto');
      $target.find('img').attr('src', src);
      $tmbs.removeClass(activeClass);
      $(this).addClass(activeClass);
      $('.js-popup-image').attr('src', big)
    });
  });
};


export default initThumbs;
