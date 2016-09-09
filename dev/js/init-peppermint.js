const initPeppermint = function() {
  const timer = 100,
        wdt = 20;

  $('.peppermint').each(function(){
    const $self = $(this);

    $self.Peppermint({
      dots: true,
      onSlideChange: function(idx) {
        const $dot = $self.find('.js-dot');
        const active = parseInt($dot.attr('data-active'));
        const marg = 22 * idx;
        const wdth = 28 * Math.abs(idx - active);

        if (idx > active) {
          $dot
            .css('opacity', '1')
            .animate({'width': wdth+'px'}, timer)
            .animate({'margin-left': marg+'px', 'width':'10px'}, timer, function(){
              $dot.css('opacity', '0');
            });
        }
        else {
          $dot
            .css('opacity', '1')
            .animate({'width': wdth+'px', 'margin-left': marg+'px'}, timer)
            .animate({'width':'10px'}, timer,
            function(){
              $dot.css('opacity', '0');
            });
        }

        $dot.attr('data-active', idx);
      }
    });

    $self.find('.peppermint-dots').append('<div class="js-dot" data-active="0" />');
  });

}


export default initPeppermint;
