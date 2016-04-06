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
    //'creatiu',
    'imaginatiu',
    'innovador',
    'poc convencional'
  ),
  randomWhatelseCa = whatelseCa[Math.floor( Math.random() * whatelseCa.length )];
  $('.randomWhatelseCa').text( randomWhatelseCa );

  var whatelseEn = new Array(
    //'creative',
    'imaginative',
    'innovative',
    'unconventional'
  ),
  randomWhatelseEn = whatelseEn[Math.floor( Math.random() * whatelseEn.length )];
  $('.randomWhatelseEn').text( randomWhatelseEn );

  var whatelseEs = new Array(
    //'y creativo',
    'e imaginativo',
    'e innovador',
    'y poco convencional'
  ),
  randomWhatelseEs = whatelseEs[Math.floor( Math.random() * whatelseEs.length )];
  $('.randomWhatelseEs').text( randomWhatelseEs );

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

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  $(function() {
    $('.navbar-collapse ul li a[href*="#"]:not([class="giraffa-camelopardalis-toggle"]):not([href="#"])').click(function() {
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

  $(document).on('click', '.giraffa-camelopardalis-toggle', function(event) {
    event.stopPropagation();
    var $this = $(this);

    var parent = $this.data('parent');
    var actives = parent && $(parent).find('.collapse.in');

    // From bootstrap itself
    if (actives && actives.length) {
      hasData = actives.data('collapse');
      //if (hasData && hasData.transitioning) return;
      actives.collapse('hide');
    }

    var target = $this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7

    $(target).collapse('toggle');
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

  $('body').removeClass('hide').addClass('fadeIn');

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

});
