import $ from 'jquery';


const initPopups = function() {
  const $overlay = $('.js-overlay'),
        $popups = $('.js-popup'),
        $link = $('.js-popup-link'),
        timer = 300;


  $link.on('click', function(e){
    e.preventDefault();
    const popup = $(this).attr('data-popup');
    $overlay.fadeIn(timer)
    $('#'+popup).fadeIn(timer);
  });

  $('.js-popup-close').on('click', function(e){
    e.preventDefault();
    $overlay.fadeOut(timer)
    $popups.fadeOut(timer);
  });
};


export default initPopups;
