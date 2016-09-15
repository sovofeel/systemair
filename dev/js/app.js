import AppCnstns from './constants';
import AppHelpers from './helpers';

import initPeppermint from './init-peppermint';
import initmageSize from './image-size'
import initScrollTo from './scroll-to';
import initCatMenu from './catalog-menu';
import initCatToggle from './catalog-toggle';
import initTabs from './tabs';
import initThumbs from './thumbs';
import initExpand from './expand';
import initPopups from './popup';
import initCopier from './copier';
import initMobileMenu from './mobile-menu';
import initCatmobmenu from './catmobmenu';
import initInnerMenu from './inner-menu';

$(function(){

  const isIE = /*@cc_on!@*/false || !!document.documentMode;
  if (isIE) $('html').addClass('ie');

  const is_touch_device = 'ontouchstart' in document.documentElement;
  const is_windows_touch = window.navigator.msPointerEnabled;
  const ua = navigator.userAgent.toLowerCase();
  const is_android = ua.indexOf("android") > -1;

  if (is_touch_device || is_windows_touch || is_android) $('html').addClass('is-touch-device');

  initCopier();
  initPeppermint();
  initmageSize();
  initScrollTo();
  initCatMenu();
  initCatToggle();
  initTabs();
  initThumbs();
  initExpand();
  initPopups();
  initMobileMenu();
  initCatmobmenu();
  initInnerMenu();

});
