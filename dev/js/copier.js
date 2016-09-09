import $ from 'jquery';


const initCopier = function() {

  // news slider on main page

  (function() {
    const $news = $('.js-mobile-news'),
          $items = $news.find('.js-mobile-news-item');

    if (!$news.length) return false;

    let html = '';
    $items.each(function(i, itm){
      html += ('<figure><div class="peppermint-slide"><a href="'+$(itm).attr('href')+'">'+$(itm).html().toString()+'</a></div></figure>');
    });

    $news.after('<div class="peppermint is-mobile-only rnews-mobileSlide">'+html+'</div>');
  }());


  // catalog menu

  (function() {
    const $catmenu = $('.js-catmenu'),
          $list1 = $catmenu.find('> ul > li'),
          $wrapper = $('.js-catalog-menu-target');

    if (!$catmenu.length) return false;

    let html = '<div class="catalog-mobileMenu catmobmenu js-catmobmenu">';
    let placeholder = '<div class="catmobmenu-placeholder">';
    let list = '<div class="catmobmenu-list">';

    $list1.each(function(){
      const $this = $(this);
      list +=
        '<div class="catmobmenu-lvl1"><a href="' + $this.find('> a').attr('href') +
        '">' + $this.find('> a').text()+'</a>';

      if ($this.find('ul').length) {
        const $ul = $this.find('ul');

        $ul.find('a').each(function(){
          const $link = $(this);
          list +=
            '<div class="catmobmenu-lvl2"><a href="' + $link.attr('href') +
            '">' + $link.text()+'</a></div>';
        });
      }

      list += '</div>';
    });

    if ($list1.find('a.is-active').length) placeholder += $list1.find('a.is-active').text();
    else placeholder += 'Выберите категорию';

    placeholder += '</div>';
    html += (placeholder + list + '</div>');
    $wrapper.append(html);
  }());
};

export default initCopier;
