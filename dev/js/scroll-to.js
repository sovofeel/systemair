import $ from 'jquery';


const initScrollTo = function() {

  const $sct = $('.js-scroll-to'),
        timer = 500;

  $sct.each(function(){
    const $self = $(this),
          target = $self.attr('data-to') || 'body';

    $self.on('click', (e) => {
      e.preventDefault();
      $('html, body').animate({scrollTop: $(target).offset().top}, timer);
    })
  })

}


export default initScrollTo;
