jQuery(document).ready(function ($) {

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

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

  function backToTop() {

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

  function languageChange() {

    $('.language-change-ca a').click(function(e) {
      e.preventDefault();
      $('html').attr('xml:lang', 'ca').attr('lang', 'ca');
      $('body').removeClass('en').addClass('ca');
      $('body').removeClass('es').addClass('ca');
      return false;
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('.language-change-en a').click(function(e) {
      e.preventDefault();
      $('html').attr('xml:lang', 'en').attr('lang', 'en');
      $('body').removeClass('ca').addClass('en');
      $('body').removeClass('es').addClass('en');
      return false;
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('.language-change-es a').click(function(e) {
      e.preventDefault();
      $('html').attr('xml:lang', 'es').attr('lang', 'es');
      $('body').removeClass('ca').addClass('es');
      $('body').removeClass('en').addClass('es');
      return false;
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function linkExternal() {
    $('.project-excerpt p a').attr('target', '_blank');
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

  function mapKeyboardChars() {

    $('.project-content.show.visible .project-excerpt button').mapKey('esc', {trigger: 'click'});
    $('.project-content.show.visible .left-project-control').mapKey('left', {trigger: 'click'});
    $('.project-content.show.visible .right-project-control').mapKey('right', {trigger: 'click'});
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

  function projectContentContainerHeight() {

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

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

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

    $('.project-content.slick-slide.slick-current.slick-active .right-project-control').on('click', function() {

      $('.slider').slick('slickNext');

      //var nextProject = $(this).attr('href');
      //var $curr = $('.project-content.show.visible');
      //var $next = $(nextProject);
      //
      //$curr.removeClass('show visible goRight').addClass('hide invisible goLeft').attr('aria-expanded', 'false');
      //$next.removeClass('hide invisible goRight').addClass('show visible goLeft').attr('aria-expanded', 'true');

    });

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

    $('.project-content.slick-slide.slick-current.slick-active .left-project-control').on('click', function() {

      $('.slider').slick('slickPrev');

      //var previousProject = $(this).attr('href');
      //var $curr = $('.project-content.show.visible');
      //var $previous = $(previousProject);
      //
      //$curr.removeClass('show visible goLeft').addClass('hide invisible goRight').attr('aria-expanded', 'false');
      //$previous.removeClass('hide invisible goLeft').addClass('show visible goRight').attr('aria-expanded', 'true');
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
    });

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

//  function swipeProjects() {
//
//    $('.project-content[aria-expanded="true"]').swipe( {
//      swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
//        $('.project-content[aria-expanded="true"] .right-project-control').trigger('click');
//      },
//      threshold:0
//    });
//
//    $('.project-content[aria-expanded="true"]').swipe( {
//      swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
//        $('.project-content[aria-expanded="true"] .left-project-control').trigger('click');
//      },
//      threshold:0
//    });
//  };

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

  function vimeoCustom() {

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

/*
La ginesta altra vegada
la ginesta amb tanta olor
es la meva enamorada
que ve al temps de la calor. */

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  anchorLinkScrollAnimation();
  backToTop();
  hamburgerButtonAnimation();
  languageChange();
  mapKeyboardChars();
  randomCity();
  randomWhat();
  setWinterHeight();
  tooltipTouchRemove();
  ListernerSixHundredForty();
  ListenerOneThousandOneHundredFifteen();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $(window).load(function() {

    makeImagesResponsive(); // responsive-img.min.js
    vimeoCustom();

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    setTimeout(function() {

      mapKeyboardChars();
      projectControlButtonsPosition();
      projectControlButtonsClick();
      windowLocationHashOpenProject();

      ////////////////////////////////////////////////////////////////

      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');

    }, 300);

    setTimeout(function() {

      projectContentContainerHeight();

      $('body').removeClass('invisible').addClass('visible');

    }, 1000);
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

  // Forever in debt with Alvaro Trigo
  // http://alvarotrigo.com/blog/firing-resize-event-only-once-when-resizing-is-finished/
  var resizeId;

  $(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 300);
  });

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  function doneResizing(){

    ListernerSixHundredForty();
    ListenerOneThousandOneHundredFifteen();
    makeImagesResponsive(); // responsive-img.min.js
    projectContentContainerHeight();
    projectControlContainerSize();
    projectControlButtonsPosition();
    setWinterHeight();
    vimeoCustom();

  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.language-change a').on('click', function() {

    projectContentContainerHeight();
    projectControlContainerSize();
    projectControlButtonsPosition();

  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.project-thumbnail a').on('click', function() {

    var slug = $(this).attr('data-project-name');
    window.location.hash = slug;

    ////////////////////////////////////////////////////////////////

    //$('html, body').stop().animate({scrollTop: 0}, 300);

    ////////////////////////////////////////////////////////////////

    var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();
    var projectName = $(this).attr('data-project-name');
    $('.summer .container-fluid .row:nth-of-type(2)').removeClass('invisible').addClass('visible').queue(function() {
      $(this).animate({'margin-top': '0' - springHeight}, 300).queue(function() {
        $('#' + projectName).removeClass('hide invisible').addClass('show visible').attr('aria-expanded', 'true');
        $('.summer .container-fluid .row:nth-of-type(1)').removeClass('visible').addClass('invisible');
        $(this).dequeue();
      });
      $(this).dequeue();
    });

    ////////////////////////////////////////////////////////////////

    $('.slider').slick({
      adaptiveHeight: true,
      arrows: false,
      infinite: false
    });

    var goToTabindex = $(this).parent().attr('tabindex');
    $('.slider').slick('slickGoTo', goToTabindex);

    ////////////////////////////////////////////////////////////////

    setTimeout(function() {

      linkExternal();
      mapKeyboardChars();
      projectContentContainerHeight();
      projectControlContainerSize();
      projectControlButtonsPosition();
      projectControlButtonsClick();
      //swipeProjects();
      $('.slider').slick({
        accessibility: false,
        adaptiveHeight: true,
        arrows: false,
        infinite: false
      });

    }, 300);
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.project-content .project-excerpt button').on('click', function() {

    window.location.hash = ''; // for older browsers, leaves the '#' behind
    history.pushState('', document.title, window.location.pathname); // nice and clean

    ////////////////////////////////////////////////////////////////

    var projectThumbnailContainerHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
    var projectName = $('.project-content.show.visible').attr('id');
    $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
    $('.summer .container-fluid .row:nth-of-type(2)').stop().animate({'margin-top': projectThumbnailContainerHeight}, 300).queue(function(next) {
      $('#' + projectName).removeClass('show visible').addClass('hide invisible').attr('aria-expanded', 'false');
      $(this).removeClass('visible').addClass('invisible');
      next();
    });
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.project-control a[role="button"]').on('click', function() {

    var slug = $(this).attr('data-project-name');
    window.location.hash = slug;

    ////////////////////////////////////////////////////////////////

    //$('html, body').stop().animate({scrollTop: 0}, 300);

    ////////////////////////////////////////////////////////////////

    setTimeout(function() {

      linkExternal();
      mapKeyboardChars();
      projectContentContainerHeight();
      projectControlContainerSize();
      projectControlButtonsPosition();
      projectControlButtonsClick();
      //swipeProjects();

    }, 300);
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.project-thumbnail.sota-la-paraula a').on('click', function() {

    $('#sota-la-paraula > ul > li').slice(6,10).wrapAll('<li><ul class="wrapper" />');
  });


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function isTouchDevice(){
    return true == ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
  }

  if(isTouchDevice()===true) {
    $('footer').hide();
  }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.summer .container-fluid .row:nth-of-type(1) .project-thumbnail').each(function(n) {
    $(this).attr('tabindex', n);
  });

});
