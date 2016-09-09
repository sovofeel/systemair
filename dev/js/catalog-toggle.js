import $ from 'jquery';


const initCatToggle = function() {
  const $sort = $('.js-sort-button'),
        $wrapper = $('.js-showcase-wrapper'),
        activeClass = 'sort-button--active',
        wrapperActiveClass = 'showcase--list';

  $sort.on('click', function() {
    $sort.removeClass(activeClass);
    $(this).addClass(activeClass);

    if ($(this).attr('data-sort') == 'list') $wrapper.addClass(wrapperActiveClass);
    else $wrapper.removeClass(wrapperActiveClass);
  });


  $sort.removeClass(activeClass);
  if ($wrapper.hasClass(wrapperActiveClass)) $('[data-sort="list"]').addClass(activeClass);
  else $('[data-sort="table"]').addClass(activeClass);
};


export default initCatToggle;
