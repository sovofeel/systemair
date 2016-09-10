import $ from 'jquery';


const initCatToggle = function() {
  const $sort = $('.js-sort-button'),
        $sorting = $('.showcase-sorting'),
        $wrapper = $('.js-showcase-wrapper'),
        activeClass = 'sort-button--active',
        wrapperActiveClass = 'showcase--list';
  let state = 'list';

  $sort.on('click', function() {
    $sort.removeClass(activeClass);
    $(this).addClass(activeClass);

    if ($(this).attr('data-sort') == 'list') {
      state = 'list';
      $wrapper.addClass(wrapperActiveClass);
    }
    else {
      state = 'table';
      $wrapper.removeClass(wrapperActiveClass);
    }
  });


  $sort.removeClass(activeClass);
  if ($wrapper.hasClass(wrapperActiveClass)) {
    $('[data-sort="list"]').addClass(activeClass);
    state = 'list';
  }
  else {
    $('[data-sort="table"]').addClass(activeClass);
    state = 'table';
  }


  const checkAdaptive = () => {
    if ($sorting.css('display') !== 'none') {
      if (state == 'table') $wrapper.removeClass(wrapperActiveClass);
      else $wrapper.addClass(wrapperActiveClass);
    }
    else $wrapper.addClass(wrapperActiveClass);
  }


  $(window).resize(function() {
    checkAdaptive();
  });

  checkAdaptive();
};


export default initCatToggle;
