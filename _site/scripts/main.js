jQuery(document).ready(function ($) {

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function projectControl() {

    var windowHeight = $(window).outerHeight(true);
    var headerHeight = $('header').outerHeight(true);
    var projectExcerptHeight = $('.project-content[aria-expanded="true"] > .project-excerpt').outerHeight(true);
    var projectContentVisibleAreaHeight = windowHeight - (headerHeight + projectExcerptHeight)
    var projectFirstFigureWidth = $('.project-content[aria-expanded="true"] > ul > li:nth-of-type(1)').width();

    $('.project-content[aria-expanded="true"] > .project-control').css({
      'height': projectContentVisibleAreaHeight,
      'top': projectExcerptHeight
    });

    $('.project-content[aria-expanded="true"] > .project-control > .wrapper').css({
      'width': projectFirstFigureWidth,
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function projectControlButtons() {

    var wrapperWidthTrue = $('.project-content[aria-expanded="true"] > .project-control > .wrapper').outerWidth(true);
    var wrapperWidth = $('.project-content[aria-expanded="true"] > .project-control > .wrapper').innerWidth();
    var wrapperMargin = (wrapperWidthTrue - wrapperWidth) / 3;

    $('.smaller-than-one-thousand-one-hundred-fifteen .project-content[aria-expanded="true"] > .project-control > .wrapper > .left-project-control').css({
      'width': 'auto',
      'margin-left': -wrapperMargin
    });
    $('.smaller-than-one-thousand-one-hundred-fifteen .project-content[aria-expanded="true"] > .project-control > .wrapper > .right-project-control').css({
      'width': 'auto',
      'margin-right': -wrapperMargin
    });

    $('.larger-than-one-thousand-one-hundred-fifteen .project-content[aria-expanded="true"] > .project-control > .wrapper > .left-project-control').css({
      'width': (wrapperWidthTrue - wrapperWidth) / 2,
      'margin-left': -(wrapperWidthTrue - wrapperWidth) / 2
    });
    $('.larger-than-one-thousand-one-hundred-fifteen .project-content[aria-expanded="true"] > .project-control > .wrapper > .right-project-control').css({
      'width': (wrapperWidthTrue - wrapperWidth) / 2,
      'margin-right': -(wrapperWidthTrue - wrapperWidth) / 2
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function projectControlClick() {

    $('.project-control a.right-project-control').click(function () {

      var nextProject = $(this).attr('href');
      var $curr = $('.project-content[aria-expanded="true"]');
      var $next = $(nextProject);

      $curr.removeClass('show visible').addClass('hide invisible').attr('aria-expanded', 'false');
      $next.removeClass('hide invisble').addClass('show visible').attr('aria-expanded', 'true');
    });

    $('.project-control a.left-project-control').click(function () {

      var previousProject = $(this).attr('href');
      var $curr = $('.project-content[aria-expanded="true"]');
      var $previous = $(previousProject);

      $curr.removeClass('show visible').addClass('hide invisible').attr('aria-expanded', 'false');
      $previous.removeClass('hide invisble').addClass('show visible').attr('aria-expanded', 'true');
    });

//    var currentProject = $('.project-content[aria-expanded="true"]');
//    var previousProject = currentProject.prev();
//    var nextProject = currentProject.next();
//
//    $('.project-control a:nth-of-type(1)').click(function() {
//      $('.project-content[aria-expanded="true"]').removeClass('show visible').addClass('hide invisible').attr('aria-expanded', 'false');
//      $(previousProject).removeClass('hide invisble').addClass('show visible').attr('aria-expanded', 'true');
//      return false;
//    });
//
//    $('.project-control a:nth-of-type(2)').click(function() {
//      $('.project-content[aria-expanded="true"]').removeClass('show visible').addClass('hide invisible').attr('aria-expanded', 'false');
//      $(nextProjectName).removeClass('hide invisble').addClass('show visible').attr('aria-expanded', 'true');
//      return false;
//    });

//    $('.project-control a.left-project-control').click(function () {
//      var $curr = $('.project-content[aria-expanded="true"]'),
//          $prev = ($curr.prev().length) ? $curr.prev() : $curr;
//
//     $curr.removeClass('show visible').addClass('hide invisible').attr('aria-expanded', 'false');
//     $prev.removeClass('hide invisble').addClass('show visible').attr('aria-expanded', 'true');
//    });
//
//    $('.project-control a.right-project-control').click(function () {
//
//     var $curr = $('.project-content[aria-expanded="true"]'),
//         $next = ($curr.next().length) ? $curr.next() : $curr;
//
//     $curr.removeClass('show visible').addClass('hide invisible').attr('aria-expanded', 'false');
//     $next.removeClass('hide invisble').addClass('show visible').attr('aria-expanded', 'true');
//   });

  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

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
          $('html, body').animate({
            scrollTop: target.offset().top + 1
          }, 1000);
          return false;
        }
      }
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function fireHash() {

    if ( window.location.hash ) {
      var hash = window.location.hash.slice(1); // get the hash, and strip out the "#"
      $('.project-thumbnail a[data-project-name="' + hash + '"]').attr('data-project-name', hash).trigger('click');
    }
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function hamburgerAnimation() {

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

function hashStuff() {

  $('.project-thumbnail a').click(function(e){
    e.preventDefault();
    var slug = $(this).attr('data-project-name');
    window.location.hash = slug;
  })

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  $('.project-content .project-excerpt button').click(function(e){
    e.preventDefault();
    window.location.hash = ''; // for older browsers, leaves the '#' behind
    history.pushState('', document.title, window.location.pathname); // nice and clean
  })
};

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function langToggle() {

    $('.language-change-ca a').click(function() {
      $('html').attr('xml:lang', 'ca').attr('lang', 'ca');
      $('body').removeClass('en').addClass('ca');
      $('body').removeClass('es').addClass('ca');
      return false;
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('.language-change-en a').click(function() {
      $('html').attr('xml:lang', 'en').attr('lang', 'en');
      $('body').removeClass('ca').addClass('en');
      $('body').removeClass('es').addClass('en');
      return false;
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('.language-change-es a').click(function() {
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

  function largeImages() {

    var siteUrl = document.domain + ':4000';
    $('.project-content[aria-expanded="true"] ul li img').attr('data-src-base', 'http://' + siteUrl + '/images/temp/');

    $('.project-content[aria-expanded="true"] ul li img').each(function() {

      var fileFullname = $(this).attr('src').split('/')[4];
      var fileName = fileFullname.slice(0,-4);
      var fileExtension = fileFullname.substr(fileFullname.length - 4);

      var newFileFullname320 = fileName + '_320' + fileExtension;
      var newFileFullname480 = fileName + '_480' + fileExtension;
      var newFileFullname640 = fileName + '_640' + fileExtension;
      var newFileFullname800 = fileName + '_800' + fileExtension;
      var newFileFullname1024 = fileName + '_1024' + fileExtension;
      var newFileFullname1120 = fileName + '_1120' + fileExtension;

      $(this).attr('data-src', '<320:' + newFileFullname320 + ', <480:' + newFileFullname480 + ', <640:' + newFileFullname640 + ', <800:' + newFileFullname800 + ', <1024:' + newFileFullname1024 + ', >1024:' + newFileFullname1120);
    });

  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function mapKeyboardChars() {

    $('.project-content[aria-expanded="true"] .project-excerpt button').mapKey('esc', {trigger: 'click'});
    $('.project-content[aria-expanded="true"] .left-project-control').mapKey('left', {trigger: 'click'});
    $('.project-content[aria-expanded="true"] .right-project-control').mapKey('right', {trigger: 'click'});
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

  function oneThousandOneHundredFifteen() {

    if ($(window).width() < 1115) {
      return $('html').removeClass('larger-than-one-thousand-one-hundred-fifteen').addClass('smaller-than-one-thousand-one-hundred-fifteen');
    }
    $('html').removeClass('smaller-than-one-thousand-one-hundred-fifteen').addClass('larger-than-one-thousand-one-hundred-fifteen');
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function projectStuff() {

    var projectThumbnailHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
    var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    if ($('.summer .container-fluid .row:nth-of-type(2)').hasClass('invisible')){
      $('.summer .container-fluid .row:nth-of-type(2)').css('margin-top', projectThumbnailHeight);
      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
    }
    if ($('.summer .container-fluid .row:nth-of-type(2)').hasClass('visible')){
      $('.summer .container-fluid .row:nth-of-type(2)').css('margin-top', '0' - springHeight);
      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('visible').addClass('invisible');
    }

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

      return false;
    });

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
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    if ($('html').hasClass('smaller-than-six-hundred-forty')){
      var valueWidth = $('body').parent().width();
      valueWidth *= 1;
      var valueHeight = Math.round((valueWidth/16)*9);
      $('iframe[src^="//player.vimeo.com"], object, embed').css({ 'min-height': valueHeight + 'px', 'min-width': valueWidth + 'px' });
    }

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    if ($('html').hasClass('larger-than-six-hundred-forty')){
      var valueWidth = $('header').innerWidth();
      valueWidth *= 1;
      var valueHeight = Math.round((valueWidth/16)*9);
      $('iframe[src^="//player.vimeo.com"], object, embed').css({ 'min-height': valueHeight + 'px', 'min-width': valueWidth + 'px' });
    }

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

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

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

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

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    randomWhat = what00[Math.floor(Math.random() * what00.length)];
    $('.randomWhatCa').text(randomWhat[0]);
    $('.randomWhatEn').text(randomWhat[1]);
    $('.randomWhatEs').text(randomWhat[2]);
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function scrollToTop() {

    $('.project-content > a.scroll-to-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: 0}, 300);
    });
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

  function sixHundredFortyListerner() {

    if ($(window).width() < 640) {
      return $('html').removeClass('larger-than-six-hundred-forty').addClass('smaller-than-six-hundred-forty');
    }
    $('html').removeClass('smaller-than-six-hundred-forty').addClass('larger-than-six-hundred-forty');
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function tooltipToggle() {

    if (!('ontouchstart' in window)) {
      $('[data-toggle="tooltip"]').tooltip()
    }
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function vimeoWhatever() {

    var $allVideos = $('iframe[src^="//player.vimeo.com"], object, embed'),
        $fluidEl = $('figure');
    $allVideos.each(function() {
      $(this).attr('data-aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    function vimeoWhateverResponsive() {

      var newWidth = $fluidEl.width();
      $allVideos.each(function() {
        var $el = $(this);
        $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
      });
    };

  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  anchorLinkScrollAnimation();
  hamburgerAnimation();
  hashStuff();
  langToggle();
  mapKeyboardChars();
  oneThousandOneHundredFifteen();
  randomCity();
  randomWhat();
  setWinterHeight();
  scrollToTop();
  sixHundredFortyListerner();
  tooltipToggle();
  vimeoWhatever();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $(window).load(function() {

    makeImagesResponsive(); // responsive-img.min.js

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    setTimeout(function() {
      projectStuff();
      fireHash();
      $('body').removeClass('invisible').addClass('visible');
    }, 300);
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $(window).resize(function() {

    makeImagesResponsive(); // responsive-img.min.js

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    var projectThumbnailHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
    var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    if ($('.summer .container-fluid .row:nth-of-type(2)').hasClass('invisible')){
      $('.summer .container-fluid .row:nth-of-type(2)').css('margin-top', projectThumbnailHeight);
      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
    }
    if ($('.summer .container-fluid .row:nth-of-type(2)').hasClass('visible')){
      $('.summer .container-fluid .row:nth-of-type(2)').css('margin-top', '0' - springHeight);
      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('visible').addClass('invisible');
    }

  });

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

    oneThousandOneHundredFifteen();
    projectControl();
    projectControlButtons();
    projectControlClick();
    projectStuff();
    setWinterHeight();
    sixHundredFortyListerner();
    vimeoWhatever();

    ////////////////////////////////////////////////////////////////

    $('.project-content .project-excerpt button').click(function() {

      var projectThumbnailHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
      var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();

      ////////////////////////////////////////////////////////////////

      event.preventDefault();
      var projectName = $('.project-content[aria-expanded="true"]').attr('id');
      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
      $('.summer .container-fluid .row:nth-of-type(2)').animate({'margin-top': projectThumbnailHeight}, 400).queue(function(next) {
        $('#' + projectName).removeClass('show').addClass('hide').attr('aria-expanded', 'false');
        $(this).stop().removeClass('visible').addClass('invisible');
        next();
      });

      ////////////////////////////////////////////////////////////////

      return false;
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.language-change a').on('click', function() {

    projectStuff();
    projectControl();
    projectControlButtons();
    projectControlClick();

  });

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  $('.project-thumbnail a').on('click', function() {

    $('html, body').stop().animate({scrollTop: 0}, 300);

    setTimeout(function() {

      largeImages();
      makeImagesResponsive(); // responsive-img.min.js
      projectControl();
      projectControlButtons();
      projectControlClick();

    }, 50);
  });

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  $('.project-content .project-excerpt button').on('click', function() {

    ////////////////////////////////////////////////////////////////

    $('.project-content[aria-expanded="true"] ul li img').each(function() {

      var src1stPart = $(this).attr('src').split('_')[0];
      var src2ndPart = $(this).attr('src').split('_')[1];
      var fileName = src1stPart.replace('/temp', '');
      var fileExtension = src2ndPart.substr(src2ndPart.length - 4);

      $(this).attr('src', fileName + fileExtension);
    });

    ////////////////////////////////////////////////////////////////

    var projectThumbnailHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
    var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();

    ////////////////////////////////////////////////////////////////

    var projectName = $('.project-content[aria-expanded="true"]').attr('id');
    $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
    $('.summer .container-fluid .row:nth-of-type(2)').animate({'margin-top': projectThumbnailHeight}, 400).queue(function(next) {
      $('#' + projectName).removeClass('show').addClass('hide').attr('aria-expanded', 'false');
      $(this).stop().removeClass('visible').addClass('invisible');
      next();
    });

    ////////////////////////////////////////////////////////////////

    return false;
  });

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  $('.project-control a[role="button"]').on('click', function() {

    ////////////////////////////////////////////////////////////////

    $('.project-content[aria-expanded="true"] ul li img').each(function() {

      var src1stPart = $(this).attr('src').split('_')[0];
      var src2ndPart = $(this).attr('src').split('_')[1];
      var fileName = src1stPart.replace('/temp', '');
      var fileExtension = src2ndPart.substr(src2ndPart.length - 4);

      $(this).attr('src', fileName + fileExtension);
    });

    ////////////////////////////////////////////////////////////////

    var slug = $(this).attr('data-project-name');
    window.location.hash = slug;

    ////////////////////////////////////////////////////////////////

    $('html, body').stop().animate({scrollTop: 0}, 300);

    ////////////////////////////////////////////////////////////////

    setTimeout(function() {

      makeImagesResponsive(); // responsive-img.min.js
      projectControl();
      projectControlButtons();
      projectControlClick();
      largeImages();

    }, 300);

    ////////////////////////////////////////////////////////////////

    return false;
  });

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  $('.project-thumbnail.sota-la-paraula a').on('click', function() {

    $('#sota-la-paraula > ul > li').slice(6,10).wrapAll('<li><ul class="wrapper" />');

  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

});
