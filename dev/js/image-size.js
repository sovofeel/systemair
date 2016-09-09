import $ from 'jquery';


const initmageSize = function() {
  const $blocks = $('.js-image-size');

  $blocks.each(function(){
    const $self = $(this),
          $image = $self.find('img'),
          src = $image.attr('src'),
          fit = 'cover';

    $image.hide();

    $self.css({
      'background': 'url('+src+') no-repeat center',
      'background-size': fit
    })
  })
}


export default initmageSize;
