jQuery(document).ready(function ($) {

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  // Can bootstrap tooltips be turned off based on device screen size?
  // http://stackoverflow.com/questions/23048990/can-bootstrap-tooltips-be-turned-off-based-on-device-screen-size
  if (!('ontouchstart' in window)) {
    $('[data-toggle="tooltip"]').tooltip()
  }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  var what01 = new Array('imaginatiu', 'imaginative', 'e imaginativo')
  var what02 = new Array('innovador', 'innovative', 'e innovador')
  var what03 = new Array('poc convencional', 'unconventional', 'y poco convencional')
  var what00 = new Array(what01, what02, what03)

  randomWhat = what00[Math.floor(Math.random() * what00.length)];
  $('.randomWhatCa').text(randomWhat[0]);
  $('.randomWhatEn').text(randomWhat[1]);
  $('.randomWhatEs').text(randomWhat[2]);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $(function() {
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
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $(document).ready(function() {
    function setHeight() {
      windowHeight = $(window).innerHeight();
      summerHeight = $('body .container-fluid .row:nth-of-type(2)').innerHeight();
      $('.winter').css('min-height', windowHeight);
      $('.summer .container-fluid .row:nth-of-type(2)').css('margin-top', -summerHeight);
    };
    setHeight();

    $(window).resize(function() {
      setHeight();
    });
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.navbar-toggle.collapsed').hover(
    function () {
      $('.navbar-toggle.collapsed svg .top-bread').removeClass('top-bread-out').addClass('top-bread-in');
      $('.navbar-toggle.collapsed svg .bottom-bread').removeClass('bottom-bread-out').addClass('bottom-bread-in');
    },
    function () {
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

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('.post-thumbnail a').click(function() {
    $(this).each(function() {
      var postName = $(this).attr('data-post-name');
//      if ( $('.navbar-header button').attr('aria-expanded') == 'true' ) {
//        $('.navbar-header button span').click();
//      }
      $('#' + postName).removeClass('hide').removeClass('slideDown').addClass('show').addClass('slideUp').attr('aria-expanded', 'true');
      $('.post-thumbnail').parent().removeClass('show').addClass('hide');
    });
  });

  $('.post-content .post-excerpt button').click(function() {
    $('.post-content').removeClass('slideUp').removeClass('show').addClass('slideDown').addClass('hide').attr('aria-expanded', 'true');
    $('.post-thumbnail').parent().removeClass('hide').addClass('show');
  });

//  $('.navbar-header button').click(function() {
//    $('.post-content').removeClass('show').addClass('slideDown').addClass('hide').attr('aria-expanded', 'false');
//    $('.post-thumbnail').parent().removeClass('hide').addClass('show');
//  });


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $('body').removeClass('hide').addClass('fadeIn');

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

});
