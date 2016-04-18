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

  var whatelseCa = new Array(
    'imaginatiu',
    'innovador',
    'poc convencional'
  ),
  randomWhatelseCa = whatelseCa[Math.floor( Math.random() * whatelseCa.length )];
  $('.randomWhatelseCa').text( randomWhatelseCa );

  var whatelseEn = new Array(
    'imaginative',
    'innovative',
    'unconventional'
  ),
  randomWhatelseEn = whatelseEn[Math.floor( Math.random() * whatelseEn.length )];
  $('.randomWhatelseEn').text( randomWhatelseEn );

  var whatelseEs = new Array(
    'e imaginativo',
    'e innovador',
    'y poco convencional'
  ),
  randomWhatelseEs = whatelseEs[Math.floor( Math.random() * whatelseEs.length )];
  $('.randomWhatelseEs').text( randomWhatelseEs );

  $('#randomWhatelse').attrchange({
    trackValues: true,
    callback: function(evnt) {
      if(evnt.attributeName == 'class') {
        if(evnt.newValue.search(/inline/i) == -1) {

          $('.randomWhatelseCa').text( randomWhatelseCa );
          $('.randomWhatelseEn').text( randomWhatelseEn );
          $('.randomWhatelseEs').text( randomWhatelseEs );
        }
      }
    }
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  var cityCa = new Array(
    'Fons de Bikini',
    'Coruscant',
    'Ciutat Maragda',
    'Ciutat Gotham',
    'Hivèrnia',
    'Metropolis',
    'Neo Tokyo',
    'Nova Nova York',
    'Raccoon City',
    'San Fransokyo',
    'Twin Peaks',
    'la Vila del Pingüí'
  ),
  randomCityCa = cityCa[Math.floor(Math.random() * cityCa.length)];
  $('.randomCityCa').text(randomCityCa);

  var cityEn = new Array(
    'Bikini Bottom',
    'Coruscant',
    'Emerald City',
    'Gotham City',
    'King\'s Landing',
    'Metropolis',
    'Neo Tokyo',
    'New New York',
    'Penguin Village',
    'Raccoon City',
    'San Fransokyo',
    'Twin Peaks',
    'Winterfell'
  ),
  randomCityEn = cityEn[Math.floor(Math.random() * cityEn.length)];
  $('.randomCityEn').text(randomCityEn);

  var cityEs = new Array(
    'Fondo de Bikini',
    'Coruscant',
    'Ciudad Esmeralda',
    'Gotham City',
    'Invernalia',
    'Desembarco del Rey',
    'Metropolis',
    'Neo Tokyo',
    'Nueva Nueva York',
    'Raccoon City',
    'San Fransokyo',
    'Twin Peaks',
    'Villa Pingüino'
  ),
  randomCityEs = cityEs[Math.floor(Math.random() * cityEs.length)];
  $('.randomCityEs').text(randomCityEs);

  $('#randomCity').attrchange({
    trackValues: true,
    callback: function(evnt) {
      if(evnt.attributeName == 'class') {
        if(evnt.newValue.search(/inline/i) == -1) {

          $('.randomCityCa').text( randomCityCa );
          $('.randomCityEn').text( randomCityEn );
          $('.randomCityEs').text( randomCityEs );
        }
      }
    }
  });

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
      $('.winter').css('min-height', windowHeight);
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

  $('body').removeClass('hide').addClass('fadeIn');

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

});
