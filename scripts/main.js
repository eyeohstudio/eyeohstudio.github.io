jQuery(document).ready(function ($) {

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  var projectThumbnailHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
  var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();

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

  function scrollToTop() {
    $('.project-content > a[type="button"]').on('click', function(event) {
      event.preventDefault();
      $('html, body').stop().animate({scrollTop: 0}, 300);
    });
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

  function langToggle() {
    $('.language-change-ca a').click(function() {
      $('html').attr('xml:lang', 'ca').attr('lang', 'ca');
      $('body').removeClass('en').addClass('ca');
      $('body').removeClass('es').addClass('ca');
      return false;
    });

    $('.language-change-en a').click(function() {
      $('html').attr('xml:lang', 'en').attr('lang', 'en');
      $('body').removeClass('ca').addClass('en');
      $('body').removeClass('es').addClass('en');
      return false;
    });

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

      $('.summer .container-fluid .row:nth-of-type(2)').removeClass('invisible').addClass('visible').queue(function(next) {
        $(this).stop().animate({'margin-top': '0' - springHeight}, 400);
        $('#' + projectName).removeClass('hide imvisble').addClass('show visible').attr('aria-expanded', 'true');
        $('.summer .container-fluid .row:nth-of-type(1)').removeClass('visible').addClass('invisible');
        next();
      });
      return false;
    });

    $('.project-content .project-excerpt button').click(function(event) {
      event.preventDefault();
      var projectName = $('.project-content[aria-expanded="true"]').attr('id');
      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
      $('.summer .container-fluid .row:nth-of-type(2)').animate({'margin-top': projectThumbnailHeight}, 400).queue(function(next) {
        $('#' + projectName).removeClass('show').addClass('hide').attr('aria-expanded', 'false');
        $(this).stop().removeClass('visible').addClass('invisible');
        next();
      });
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

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  anchorLinkScrollAnimation();
  scrollToTop();
  hamburgerAnimation();
  langToggle();
  randomCity();
  randomWhat();
  setWinterHeight();
  sixHundredFortyListerner();
  tooltipToggle();
  vimeoWhatever();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $(window).load(function() {
    projectStuff();
    $('body').removeClass('invisible').addClass('visible');
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $(window).resize(function() {

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    var projectThumbnailHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
    var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();

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

  });

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
    projectStuff();
    setWinterHeight();
    sixHundredFortyListerner();
    vimeoWhatever();

    $('.project-content .project-excerpt button').click(function() {
      var projectThumbnailHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
      var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();
      event.preventDefault();
      var projectName = $('.project-content[aria-expanded="true"]').attr('id');
      $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
      $('.summer .container-fluid .row:nth-of-type(2)').animate({'margin-top': projectThumbnailHeight}, 400).queue(function(next) {
        $('#' + projectName).removeClass('show').addClass('hide').attr('aria-expanded', 'false');
        $(this).stop().removeClass('visible').addClass('invisible');
        next();
      });
      return false;
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.language-change a').click(function() {
    projectStuff();
  });

  $('.project-content .project-excerpt button').click(function() {
    var projectThumbnailHeight = $('.summer .container-fluid .row:nth-of-type(1)').outerHeight();
    var springHeight = $('body > .container-fluid > .row:nth-of-type(2)').outerHeight();
    event.preventDefault();
    var projectName = $('.project-content[aria-expanded="true"]').attr('id');
    $('.summer .container-fluid .row:nth-of-type(1)').removeClass('invisible').addClass('visible');
    $('.summer .container-fluid .row:nth-of-type(2)').animate({'margin-top': projectThumbnailHeight}, 400).queue(function(next) {
      $('#' + projectName).removeClass('show').addClass('hide').attr('aria-expanded', 'false');
      $(this).stop().removeClass('visible').addClass('invisible');
      next();
    });
    return false;
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

});
