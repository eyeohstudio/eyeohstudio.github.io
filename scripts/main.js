jQuery(document).ready(function ($) {

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  function addBodyClass() {

    if ($('.slider').hasClass('hide')){
      $('body').removeClass('slider-is-open').addClass('slider-is-closed');
    }
    if ($('.slider').hasClass('show')){
      $('body').removeClass('slider-is-closed').addClass('slider-is-open');
    }
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function addDataSlickIndex() {

    $('.summer .project-thumbnail').each(function(n) {
      $(this).attr('data-slick-index', n);
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function addTargetBlank() {

    $('.project-excerpt p a').attr('target', '_blank');
  };

>>>>>>> master
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

<<<<<<< HEAD
=======
>>>>>>> origin/sid
=======
>>>>>>> origin/sid
=======
>>>>>>> master
  function anchorLinkScrollAnimation() {

    $('.navbar-collapse ul li a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').stop().animate({
            scrollTop: target.offset().top + 1
          }, 900);
          return false;
        }
      }
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

<<<<<<< HEAD
<<<<<<< HEAD
  function fireHash() {
=======
  function backToTop() {
>>>>>>> origin/sid
=======
  function backToTop() {
>>>>>>> origin/sid

    $('.project-content > a.scroll-to-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: 0}, 300);
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function hamburgerButtonAnimation() {

    $('.navbar-toggle.collapsed').hover(
      function () {
        $('.navbar-toggle.collapsed svg .top-bread').removeClass('top-bread-out').addClass('top-bread-in');
        $('.navbar-toggle.collapsed svg .bottom-bread').removeClass('bottom-bread-out').addClass('bottom-bread-in');
      }, function () {
        $('.navbar-toggle.collapsed svg .top-bread').removeClass('top-bread-in').addClass('top-bread-out');
        $('.navbar-toggle.collapsed svg .bottom-bread').removeClass('bottom-bread-in').addClass('bottom-bread-out');
      }
    );

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('.navbar-toggle.collapsed').click(
      function () {
        $('.navbar-toggle.collapsed svg .top-bread').removeClass('top-bread-in').addClass('top-bread-out');
        $('.navbar-toggle.collapsed svg .bottom-bread').removeClass('bottom-bread-in').addClass('bottom-bread-out');
      }
    );
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function isTouchDevice() {
    return true == ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
  }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function languageChange() {

    $('.language-change-ca a').click(function(e) {
      e.preventDefault();
      $('html').attr('xml:lang', 'ca').attr('lang', 'ca');
      $('body').removeClass('en').addClass('ca');
      $('body').removeClass('es').addClass('ca');
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('.language-change-en a').click(function(e) {
      e.preventDefault();
      $('html').attr('xml:lang', 'en').attr('lang', 'en');
      $('body').removeClass('ca').addClass('en');
      $('body').removeClass('es').addClass('en');
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/sid
		
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

=======
=======
>>>>>>> origin/sid

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
>>>>>>> origin/sid

=======
=======
>>>>>>> origin/sid

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

>>>>>>> origin/sid
<<<<<<< HEAD
>>>>>>> origin/sid
=======
>>>>>>> origin/sid
    $('.language-change-es a').click(function(e) {
      e.preventDefault();
      $('html').attr('xml:lang', 'es').attr('lang', 'es');
      $('body').removeClass('ca').addClass('es');
      $('body').removeClass('en').addClass('es');
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function ListernerSixHundredForty() {

    if ($(window).width() < 640) {
      return $('html').removeClass('larger-than-six-hundred-forty').addClass('smaller-than-six-hundred-forty');
    }
    $('html').removeClass('smaller-than-six-hundred-forty').addClass('larger-than-six-hundred-forty');
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function ListenerOneThousandOneHundredFifteen() {

    if ($(window).width() < 1115) {
      return $('html').removeClass('larger-than-one-thousand-one-hundred-fifteen').addClass('smaller-than-one-thousand-one-hundred-fifteen');
    }
    $('html').removeClass('smaller-than-one-thousand-one-hundred-fifteen').addClass('larger-than-one-thousand-one-hundred-fifteen');
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function randomCity() {

    var city01 = new Array('Fons de Bikini', 'Bikini Bottom', 'Fondo de Bikini')
    var city02 = new Array('Coruscant', 'Coruscant', 'Coruscant')
    var city03 = new Array('Ciutat Maragda','Emerald City','Ciudad Esmeralda')
    var city04 = new Array('Ciutat Gotham', 'Gotham City', 'Gotham City')
    var city05 = new Array('Hivèrnia', 'Winterfell', 'Invernalia')
    var city06 = new Array('Metropolis', 'Metropolis', 'Metropolis')
    var city07 = new Array('Neo Tokyo', 'Neo Tokyo', 'Neo Tokyo')
    var city08 = new Array('Nova Nova York', 'New New York', 'Nueva Nueva York')
    var city09 = new Array('Raccoon City', 'Raccoon City', 'Raccoon City')
    var city10 = new Array('San Fransokyo', 'San Fransokyo', 'San Fransokyo')
    var city11 = new Array('Twin Peaks', 'Twin Peaks', 'Twin Peaks')
    var city12 = new Array('la Vila del Pingüí', 'Penguin Village', 'Villa Pingüino')
    var city13 = new Array('Port Reial', 'King\'s Landing', 'Desembarco del Rey')
    var city00 = new Array(city01, city02, city03, city04, city05, city06, city07, city08, city09, city10, city11, city12, city13)

    randomCity = city00[Math.floor(Math.random() * city00.length)];
    $('.randomCityCa').text(randomCity[0]);
    $('.randomCityEn').text(randomCity[1]);
    $('.randomCityEs').text(randomCity[2]);
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function randomWhat() {

    var what01 = new Array('imaginatiu', 'imaginative', 'e imaginativo')
    var what02 = new Array('innovador', 'innovative', 'e innovador')
    var what03 = new Array('poc convencional', 'unconventional', 'y poco convencional')
    var what00 = new Array(what01, what02, what03)

    randomWhat = what00[Math.floor(Math.random() * what00.length)];
    $('.randomWhatCa').text(randomWhat[0]);
    $('.randomWhatEn').text(randomWhat[1]);
    $('.randomWhatEs').text(randomWhat[2]);
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function setWinterHeight() {

    windowHeight = $(window).innerHeight();
    $('.winter').css('min-height', windowHeight);
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function tooltipTouchRemove() {

    if (!('ontouchstart' in window)) {
      $('[data-toggle="tooltip"]').tooltip()
    }
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function vimeoResponsive() {

    if ($('html').hasClass('smaller-than-six-hundred-forty')){
      var valueWidth = $('body').parent().width();
      valueWidth *= 1;
      var valueHeight = Math.round((valueWidth/16)*9);
      $('iframe[src^="//player.vimeo.com"], object, embed').css({ 'min-height': valueHeight + 'px', 'min-width': valueWidth + 'px' });
    }
    if ($('html').hasClass('larger-than-six-hundred-forty')){
      var valueWidth = $('header').innerWidth();
      valueWidth *= 1;
      var valueHeight = Math.round((valueWidth/16)*9);
      $('iframe[src^="//player.vimeo.com"], object, embed').css({ 'min-height': valueHeight + 'px', 'min-width': valueWidth + 'px' });
    }
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function windowLocationHashOpenProject() {

    if ( window.location.hash ) {
      var hash = window.location.hash.slice(1); // get the hash, and strip out the "#"
      $('.project-thumbnail a[data-project-name="' + hash + '"]').attr('data-project-name', hash).trigger('click');
    }
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//  function makeImagesAdapt() {
//
//    var siteUrl = document.domain + ':4000';
//    $('.project-content ul li img').attr('data-src-base', 'http://' + siteUrl + '/images/projects/');
//
//    ////////////////////////////////////////////////////////////////
//    ////////////////////////////////////////////////////////////////
//
//    $('.project-content ul li img').each(function() {
//
//      var fileFullname = $(this).attr('src').split('/')[4];
//      var fileName = fileFullname.slice(0,-4);
//      var fileExtension = fileFullname.substr(fileFullname.length - 4);
//
//      var newFileFullname320 = fileName + '_320' + fileExtension;
//      var newFileFullname480 = fileName + '_480' + fileExtension;
//      var newFileFullname640 = fileName + '_640' + fileExtension;
//      var newFileFullname800 = fileName + '_800' + fileExtension;
//      var newFileFullname1024 = fileName + '_1024' + fileExtension;
//      var newFileFullname1120 = fileName + '_1120' + fileExtension;
//
//      $(this).attr('data-src', '<320:' + newFileFullname320 + ', <480:' + newFileFullname480 + ', <640:' + newFileFullname640 + ', <800:' + newFileFullname800 + ', <1024:' + newFileFullname1024 + ', >1024:' + newFileFullname1120);
//    });
//  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function keydownTrigger() {

    $('.slider').on('swipe', function(event, slick, direction){
      setTimeout(function() {
        addTargetBlank();
        projectContentContainerHeight();
        projectControlContainerSize();
        projectControlButtonsPosition();
        projectControlButtonsClick();
      }, 300);

      ////////////////////////////////////////////////////////////////

      setTimeout(function() {
        var scrollmem = $('html,body').scrollTop();
        var slug = $('.project-content.slick-slide.slick-current.slick-active').attr('id');
        window.location.hash = slug;
        $('html,body').scrollTop(scrollmem);
      }, 600);
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('body.slider-is-open').keydown(function(e) {
      if (e.which == 39){
        setTimeout(function() {
          addTargetBlank();
          projectContentContainerHeight();
          projectControlContainerSize();
          projectControlButtonsPosition();
          projectControlButtonsClick();
        }, 300);

        ////////////////////////////////////////////////////////////////

        setTimeout(function() {
          var scrollmem = $('html,body').scrollTop();
          var slug = $('.project-content.slick-slide.slick-current.slick-active').attr('id');
          window.location.hash = slug;
          $('html,body').scrollTop(scrollmem);
        }, 600);
      }
      if (e.which == 37){
        setTimeout(function() {
          addTargetBlank();
          projectContentContainerHeight();
          projectControlContainerSize();
          projectControlButtonsPosition();
          projectControlButtonsClick();
        }, 300);

        ////////////////////////////////////////////////////////////////

        setTimeout(function() {
          var scrollmem = $('html,body').scrollTop();
          var slug = $('.project-content.slick-slide.slick-current.slick-active').attr('id');
          window.location.hash = slug;
          $('html,body').scrollTop(scrollmem);
        }, 600);
      }
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function mapKeyboardChars() {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    $('.project-content[aria-expanded="true"] .project-excerpt button').mapKey('esc', {trigger: 'click'});
    $('.project-content[aria-expanded="true"] .left-project-control').mapKey('left', {trigger: 'click'});
    $('.project-content[aria-expanded="true"] .right-project-control').mapKey('right', {trigger: 'click'});
=======
    $('.project-content.show.visible .project-excerpt button').mapKey('esc', {trigger: 'click'});
    $('.project-content.show.visible .left-project-control').mapKey('left', {trigger: 'click'});
    $('.project-content.show.visible .right-project-control').mapKey('right', {trigger: 'click'});
>>>>>>> origin/sid
=======
    $('.project-content.show.visible .project-excerpt button').mapKey('esc', {trigger: 'click'});
    $('.project-content.show.visible .left-project-control').mapKey('left', {trigger: 'click'});
    $('.project-content.show.visible .right-project-control').mapKey('right', {trigger: 'click'});
>>>>>>> origin/sid
=======
    $('.project-content.slick-slide.slick-current.slick-active .project-excerpt button').mapKey('esc', {trigger: 'click'});
    //$('.project-content.slick-slide.slick-current.slick-active .left-project-control').mapKey('left', {trigger: 'click'});
    //$('.project-content.slick-slide.slick-current.slick-active .right-project-control').mapKey('right', {trigger: 'click'});
>>>>>>> master
    $('.scroll-to-top').mapKey('up', {trigger: 'click'});
    $('.language-change-ca a').mapKey('lang_ca', {trigger: 'click'});
    $('.language-change-en a').mapKey('lang_en', {trigger: 'click'});
    $('.language-change-es a').mapKey('lang_es', {trigger: 'click'});
    $('.nav li:nth-of-type(1) a').mapKey('p', {trigger: 'click'});
    $('.nav li:nth-of-type(1) a').mapKey('w', {trigger: 'click'});
    $('.nav li:nth-of-type(2) a').mapKey('c', {trigger: 'click'});
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

<<<<<<< HEAD
<<<<<<< HEAD
  function oneThousandOneHundredFifteen() {
=======
  function projectContentContainerHeight() {
>>>>>>> origin/sid
=======
  function projectContentContainerHeight() {
>>>>>>> origin/sid

    var projectThumbnailContainerHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
    var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();

    if ($('.summer .container-fluid .row:nth-of-type(2)').hasClass('invisible')){
      $('.summer .container-fluid .row:nth-of-type(2)').css('margin-top', projectThumbnailContainerHeight);
      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
    }
    if ($('.summer .container-fluid .row:nth-of-type(2)').hasClass('visible')){
      $('.summer .container-fluid .row:nth-of-type(2)').css('margin-top', '0' - springHeight);
      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('visible').addClass('invisible');
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function projectControlButtonsPosition() {

    var wrapperWidthTrue = $('.project-content.slick-slide.slick-current.slick-active > .project-control > .wrapper').outerWidth(true);
    var wrapperWidth = $('.project-content.slick-slide.slick-current.slick-active > .project-control > .wrapper').innerWidth();
    var wrapperMargin = (wrapperWidthTrue - wrapperWidth) / 3;

    $('.smaller-than-one-thousand-one-hundred-fifteen .project-content.slick-slide.slick-current.slick-active > .project-control > .wrapper > .left-project-control').css({
      'width': 'auto',
      'margin-left': -wrapperMargin
    });
    $('.smaller-than-one-thousand-one-hundred-fifteen .project-content.slick-slide.slick-current.slick-active > .project-control > .wrapper > .right-project-control').css({
      'width': 'auto',
      'margin-right': -wrapperMargin
    });
    $('.larger-than-one-thousand-one-hundred-fifteen .project-content.slick-slide.slick-current.slick-active > .project-control > .wrapper > .left-project-control').css({
      'width': (wrapperWidthTrue - wrapperWidth) / 2,
      'margin-left': -(wrapperWidthTrue - wrapperWidth) / 2
    });
    $('.larger-than-one-thousand-one-hundred-fifteen .project-content.slick-slide.slick-current.slick-active > .project-control > .wrapper > .right-project-control').css({
      'width': (wrapperWidthTrue - wrapperWidth) / 2,
      'margin-right': -(wrapperWidthTrue - wrapperWidth) / 2
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function projectControlButtonsClick() {

    $('.project-content.slick-slide.slick-current.slick-active .right-project-control').click(function(e) {
      e.preventDefault();
      $('.slider').slick('slickNext');

      setTimeout(function() {
        addTargetBlank();
        projectContentContainerHeight();
        projectControlContainerSize();
        projectControlButtonsPosition();
        projectControlButtonsClick();
      }, 300);

      ////////////////////////////////////////////////////////////////

      setTimeout(function() {
        var scrollmem = $('html,body').scrollTop();
        var slug = $('.project-content.slick-slide.slick-current.slick-active').attr('id');
        window.location.hash = slug;
        $('html,body').scrollTop(scrollmem);
      }, 600);
    });

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

    $('.project-content.slick-slide.slick-current.slick-active .left-project-control').click(function(e) {
      e.preventDefault();
      $('.slider').slick('slickPrev');

      setTimeout(function() {
        addTargetBlank();
        projectContentContainerHeight();
        projectControlContainerSize();
        projectControlButtonsPosition();
        projectControlButtonsClick();
      }, 300);

      ////////////////////////////////////////////////////////////////

        setTimeout(function() {
        var scrollmem = $('html,body').scrollTop();
        var slug = $('.project-content.slick-slide.slick-current.slick-active').attr('id');
        window.location.hash = slug;
        $('html,body').scrollTop(scrollmem);
      }, 600);
    });
  };

=======

>>>>>>> origin/sid
=======

>>>>>>> origin/sid
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
<<<<<<< HEAD
<<<<<<< HEAD

  function projectControlContainerSize() {

<<<<<<< HEAD
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('.project-thumbnail a').click(function(event) {

      event.preventDefault();
      var projectName = $(this).attr('data-project-name');

			////////////////////////////////////////////////////////////////

      $('.summer .container-fluid .row:nth-of-type(2)').removeClass('invisible').addClass('visible').queue(function(next) {
        $(this).stop().animate({'margin-top': '0' - springHeight}, 400);
        $('#' + projectName).removeClass('hide invisble').addClass('show visible').attr('aria-expanded', 'true');
        $('.summer .container-fluid .row:nth-of-type(1)').removeClass('visible').addClass('invisible');
        next();
      });

      ////////////////////////////////////////////////////////////////
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/sid
    var windowHeight = $(window).outerHeight(true);
    var headerHeight = $('header').outerHeight(true);
    var projectExcerptHeight = $('.project-content.slick-slide.slick-current.slick-active > .project-excerpt').outerHeight(true);
    var projectContentVisibleAreaHeight = windowHeight - (headerHeight + projectExcerptHeight)
<<<<<<< HEAD
    var projectFirstFigureWidth = $('.project-content.show.visible > ul > li:nth-of-type(1)').width();
>>>>>>> origin/sid
<<<<<<< HEAD
>>>>>>> origin/sid
=======
>>>>>>> origin/sid
=======
    var projectFirstFigureWidth = $('.project-content.slick-slide.slick-current.slick-active > ul > li:nth-of-type(1)').width();
>>>>>>> master

    $('.project-content.slick-slide.slick-current.slick-active > .project-control').css({
        'height': projectContentVisibleAreaHeight,
        'top': projectExcerptHeight
    });
<<<<<<< HEAD
<<<<<<< HEAD

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('.project-content .project-excerpt button').click(function(event) {

      event.preventDefault();
      var projectName = $('.project-content[aria-expanded="true"]').attr('id');

			////////////////////////////////////////////////////////////////

      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
      $('.summer .container-fluid .row:nth-of-type(2)').animate({'margin-top': projectThumbnailHeight}, 400).queue(function(next) {
        $('#' + projectName).removeClass('show').addClass('hide').attr('aria-expanded', 'false');
        $(this).stop().removeClass('visible').addClass('invisible');
        next();
      });

      ////////////////////////////////////////////////////////////////

      return false;
=======
    $('.project-content.show.visible > .project-control > .wrapper').css({
=======
    $('.project-content.slick-slide.slick-current.slick-active > .project-control > .wrapper').css({
>>>>>>> master
        'width': projectFirstFigureWidth,
>>>>>>> origin/sid
=======

  function projectControlButtonsPosition() {

    var wrapperWidthTrue = $('.project-content.show.visible > .project-control > .wrapper').outerWidth(true);
    var wrapperWidth = $('.project-content.show.visible > .project-control > .wrapper').innerWidth();
    var wrapperMargin = (wrapperWidthTrue - wrapperWidth) / 3;

    $('.smaller-than-one-thousand-one-hundred-fifteen .project-content.show.visible > .project-control > .wrapper > .left-project-control').css({
      'width': 'auto',
      'margin-left': -wrapperMargin
<<<<<<< HEAD
    });
    $('.smaller-than-one-thousand-one-hundred-fifteen .project-content.show.visible > .project-control > .wrapper > .right-project-control').css({
      'width': 'auto',
      'margin-right': -wrapperMargin
    });
    $('.larger-than-one-thousand-one-hundred-fifteen .project-content.show.visible > .project-control > .wrapper > .left-project-control').css({
      'width': (wrapperWidthTrue - wrapperWidth) / 2,
      'margin-left': -(wrapperWidthTrue - wrapperWidth) / 2
    });
=======
    });
    $('.smaller-than-one-thousand-one-hundred-fifteen .project-content.show.visible > .project-control > .wrapper > .right-project-control').css({
      'width': 'auto',
      'margin-right': -wrapperMargin
    });
    $('.larger-than-one-thousand-one-hundred-fifteen .project-content.show.visible > .project-control > .wrapper > .left-project-control').css({
      'width': (wrapperWidthTrue - wrapperWidth) / 2,
      'margin-left': -(wrapperWidthTrue - wrapperWidth) / 2
    });
>>>>>>> origin/sid
    $('.larger-than-one-thousand-one-hundred-fifteen .project-content.show.visible > .project-control > .wrapper > .right-project-control').css({
      'width': (wrapperWidthTrue - wrapperWidth) / 2,
      'margin-right': -(wrapperWidthTrue - wrapperWidth) / 2
=======

  function projectControlButtonsPosition() {

    var wrapperWidthTrue = $('.project-content.show.visible > .project-control > .wrapper').outerWidth(true);
    var wrapperWidth = $('.project-content.show.visible > .project-control > .wrapper').innerWidth();
    var wrapperMargin = (wrapperWidthTrue - wrapperWidth) / 3;

    $('.smaller-than-one-thousand-one-hundred-fifteen .project-content.show.visible > .project-control > .wrapper > .left-project-control').css({
      'width': 'auto',
      'margin-left': -wrapperMargin
    });
    $('.smaller-than-one-thousand-one-hundred-fifteen .project-content.show.visible > .project-control > .wrapper > .right-project-control').css({
      'width': 'auto',
      'margin-right': -wrapperMargin
    });
    $('.larger-than-one-thousand-one-hundred-fifteen .project-content.show.visible > .project-control > .wrapper > .left-project-control').css({
      'width': (wrapperWidthTrue - wrapperWidth) / 2,
      'margin-left': -(wrapperWidthTrue - wrapperWidth) / 2
    });
    $('.larger-than-one-thousand-one-hundred-fifteen .project-content.show.visible > .project-control > .wrapper > .right-project-control').css({
      'width': (wrapperWidthTrue - wrapperWidth) / 2,
      'margin-right': -(wrapperWidthTrue - wrapperWidth) / 2
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function projectControlButtonsClick() {

    $('.project-content[aria-expanded="true"] .right-project-control').on('click', function() {

      var nextProject = $(this).attr('href');
      var $curr = $('.project-content.show.visible');
      var $next = $(nextProject);

      $curr.removeClass('show visible').addClass('hide invisible').attr('aria-expanded', 'false');
      $next.removeClass('hide invisible').addClass('show visible').attr('aria-expanded', 'true');
>>>>>>> origin/sid
    });
  };

<<<<<<< HEAD
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function projectControlButtonsClick() {

    $('.project-content[aria-expanded="true"] .right-project-control').on('click', function() {

      var nextProject = $(this).attr('href');
      var $curr = $('.project-content.show.visible');
      var $next = $(nextProject);

      $curr.removeClass('show visible').addClass('hide invisible').attr('aria-expanded', 'false');
      $next.removeClass('hide invisible').addClass('show visible').attr('aria-expanded', 'true');
    });

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

    $('.project-content[aria-expanded="true"] .left-project-control').on('click', function() {

<<<<<<< HEAD
<<<<<<< HEAD
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
=======
=======
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
>>>>>>> origin/sid
=======
=======
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
>>>>>>> origin/sid

    $('.project-content[aria-expanded="true"] .left-project-control').on('click', function() {

>>>>>>> origin/sid
      var previousProject = $(this).attr('href');
      var $curr = $('.project-content.show.visible');
      var $previous = $(previousProject);

      $curr.removeClass('show visible').addClass('hide invisible').attr('aria-expanded', 'false');
      $previous.removeClass('hide invisible').addClass('show visible').attr('aria-expanded', 'true');
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function projectControlContainerSize() {

    var windowHeight = $(window).outerHeight(true);
    var headerHeight = $('header').outerHeight(true);
    var projectExcerptHeight = $('.project-content.show.visible > .project-excerpt').outerHeight(true);
    var projectContentVisibleAreaHeight = windowHeight - (headerHeight + projectExcerptHeight)
    var projectFirstFigureWidth = $('.project-content.show.visible > ul > li:nth-of-type(1)').width();

    $('.project-content.show.visible > .project-control').css({
        'height': projectContentVisibleAreaHeight,
        'top': projectExcerptHeight
    });
    $('.project-content.show.visible > .project-control > .wrapper').css({
        'width': projectFirstFigureWidth,
<<<<<<< HEAD
>>>>>>> origin/sid
=======
>>>>>>> origin/sid
    });

  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function sliderInit() {

    $('.slider').slick({
      adaptiveHeight: true,
      arrows: false,
      infinite: false,
      focusOnSelect: false
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function hideFooter() {
    if ('ontouchstart' in window) {
      $('footer').addClass('hide');
    }
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  addBodyClass();
  addDataSlickIndex();
  anchorLinkScrollAnimation();
  backToTop();
  hamburgerButtonAnimation();
  isTouchDevice();
  languageChange();
  mapKeyboardChars();
  randomCity();
  randomWhat();
  setWinterHeight();
  tooltipTouchRemove();
  ListernerSixHundredForty();
  ListenerOneThousandOneHundredFifteen();
  hideFooter();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $(window).load(function() {
    makeImagesResponsive(); // responsive-img.min.js
    projectContentContainerHeight();
    vimeoResponsive();
    sliderInit();

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    setTimeout(function() {
      projectContentContainerHeight();
      windowLocationHashOpenProject();
      hideFooter();

      ////////////////////////////////////////////////////////////////

      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
      projectContentContainerHeight();
    }, 300);

    setTimeout(function() {
      $('body').removeClass('invisible').addClass('visible');
      projectContentContainerHeight();
    }, 900);
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//  $(window).resize(function() {
//
//  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function doneResizing(){

    ListernerSixHundredForty();
    ListenerOneThousandOneHundredFifteen();
    makeImagesResponsive(); // responsive-img.min.js
    projectContentContainerHeight();
    projectControlContainerSize();
    projectControlButtonsPosition();
    projectControlButtonsClick();
    setWinterHeight();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    sixHundredFortyListerner();
    vimeoWhatever();

//    ////////////////////////////////////////////////////////////////
//
//    $('.project-content .project-excerpt button').click(function() {
//
//      var projectThumbnailHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
//      var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();
//
//      ////////////////////////////////////////////////////////////////
//
//      event.preventDefault();
//      var projectName = $('.project-content[aria-expanded="true"]').attr('id');
//      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
//      $('.summer .container-fluid .row:nth-of-type(2)').animate({'margin-top': projectThumbnailHeight}, 400).queue(function(next) {
//        $('#' + projectName).removeClass('show').addClass('hide').attr('aria-expanded', 'false');
//        $(this).stop().removeClass('visible').addClass('invisible');
//        next();
//      });
//
//      ////////////////////////////////////////////////////////////////
//
//      return false;
//    });
=======
    vimeoCustom();

>>>>>>> origin/sid
=======
    vimeoCustom();
=======
    vimeoResponsive();
>>>>>>> master

>>>>>>> origin/sid
  };

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  var resizeId;
  $(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 300);
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.language-change a').on('click', function() {
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
    projectStuff();
    projectControl();
    projectControlButtons();
    projectControlClick();
=======
    projectContentContainerHeight();
    projectControlContainerSize();
    projectControlButtonsPosition();
>>>>>>> origin/sid
=======
    projectContentContainerHeight();
    projectControlContainerSize();
    projectControlButtonsPosition();
>>>>>>> origin/sid

=======
    projectContentContainerHeight();
    projectControlContainerSize();
    projectControlButtonsPosition();
    projectControlButtonsClick();
>>>>>>> master
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.project-thumbnail a').on('click', function(e) {
    e.preventDefault();

    projectContentContainerHeight();

    ////////////////////////////////////////////////////////////////

    var slug = $(this).attr('data-project-name');
    window.location.hash = slug;

    ////////////////////////////////////////////////////////////////

    $('html, body').stop().animate({scrollTop: 0}, 300);

    ////////////////////////////////////////////////////////////////

    var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();
    $('.summer .container-fluid .row:nth-of-type(2)').removeClass('invisible').addClass('visible').queue(function() {
      $(this).stop().animate({'margin-top': '0' - springHeight}, 300).queue(function() {
        $('.summer .container-fluid .row:nth-of-type(1)').removeClass('visible').addClass('invisible');
        $('.slider').removeClass('hide').addClass('show');
        $(this).dequeue();
      });
      $(this).dequeue();
    });

    ////////////////////////////////////////////////////////////////

    var dataSlickIndex = $(this).parent().attr('data-slick-index');
    $('.slider').slick('slickGoTo', dataSlickIndex);
    $('.slick-slide[data-slick-index="' + dataSlickIndex + '"]').focus();

    ////////////////////////////////////////////////////////////////

    setTimeout(function() {
      addBodyClass();
      addTargetBlank();
      keydownTrigger();
      mapKeyboardChars();
      projectContentContainerHeight();
      projectControlContainerSize();
      projectControlButtonsPosition();
      projectControlButtonsClick();
    }, 600);
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.project-content .project-excerpt button').on('click', function() {

<<<<<<< HEAD
    // EMPTY
<<<<<<< HEAD

    ////////////////////////////////////////////////////////////////

    window.location.hash = ''; // for older browsers, leaves the '#' behind
    history.pushState('', document.title, window.location.pathname); // nice and clean

    ////////////////////////////////////////////////////////////////

=======
=======
    projectContentContainerHeight();
>>>>>>> master

    ////////////////////////////////////////////////////////////////

    window.location.hash = ''; // for older browsers, leaves the '#' behind
    history.pushState('', document.title, window.location.pathname); // nice and clean

    ////////////////////////////////////////////////////////////////

>>>>>>> origin/sid
    var projectThumbnailContainerHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
    $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
    $('.summer .container-fluid .row:nth-of-type(2)').stop().animate({'margin-top': projectThumbnailContainerHeight}, 300).queue(function() {
      $('.summer .container-fluid .row:nth-of-type(2)').removeClass('visible').addClass('invisible');
      $('.slider').removeClass('show').addClass('hide');
      $(this).dequeue();
    });

    ////////////////////////////////////////////////////////////////

    setTimeout(function() {
      addBodyClass();
    }, 300);
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//  $('.project-control a[role="button"]').click(function(e) {
//    e.preventDefault();
//
//    var scrollmem = $('html,body').scrollTop();
//    var slug = $(this).attr('data-project-name');
//    window.location.hash = slug;
//    $('html,body').scrollTop(scrollmem);
//
//    ////////////////////////////////////////////////////////////////
//
//    setTimeout(function() {
//      addTargetBlank();
//      projectContentContainerHeight();
//      projectControlContainerSize();
//      projectControlButtonsPosition();
//      projectControlButtonsClick();
//    }, 600);
//  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//  $('.project-thumbnail.sota-la-paraula a').on('click', function() {
//    $('#sota-la-paraula > ul > li').slice(6,10).wrapAll('<li><ul class="wrapper" />');
//  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//  if ($('.no-svg .navbar-collapse.collapse')) {
//    $('.no-svg navbar-header button span .menu-cross').removeClass('hide').addClass('show');
//  }
//  if ($('.no-svg .navbar-collapse.collapse.in')) {
//    $('.no-svg navbar-header button span .menu-cross').removeClass('hide').addClass('show');
//  }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

});
