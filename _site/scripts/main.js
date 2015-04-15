jQuery(document).ready(function($) {

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  /*
  // randomWhatCa
  var WhatCa = new Array(
      'efectiu'
  ),
  randomWhatCa = WhatCa[Math.floor( Math.random() * WhatCa.length )];
  $('.randomWhatCa').text( randomWhatCa );

  // randomWhatEn
  var WhatEn = new Array(
      'effective',
      'powerful',
      'remarkable',
      'striking'
  ),
  randomWhatEn = WhatEn[Math.floor( Math.random() * WhatEn.length )];
  $('.randomWhatEn').text( randomWhatEn );

  // randomWhatEs
  var WhatEs = new Array(
      'efectivo'
  ),
  randomWhatEs = WhatEs[Math.floor( Math.random() * WhatEs.length )];
  $('.randomWhatEs').text( randomWhatEs );
  */

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  // randomWhatelseCa
  var whatelseCa = new Array(
    //'creatiu',
    'imaginatiu',
    'innovador',
    'poc convencional'
  ),
  randomWhatelseCa = whatelseCa[Math.floor( Math.random() * whatelseCa.length )];
  $('.randomWhatelseCa').text( randomWhatelseCa );

  // randomWhatelseEn
  var whatelseEn = new Array(
    //'creative',
    'imaginative',
    'innovative',
    'unconventional'
  ),
  randomWhatelseEn = whatelseEn[Math.floor( Math.random() * whatelseEn.length )];
  $('.randomWhatelseEn').text( randomWhatelseEn );

  // randomWhatelseEs
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

  // randomCityCa
  var cityCa = new Array(
    'Arkham',
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
    'Twin Peaks'
  ),
  randomCityCa = cityCa[Math.floor( Math.random() * cityCa.length )];
  $('.randomCityCa').text( randomCityCa );

  // randomCityEn
  var cityEn = new Array(
    'Arkham',
    'Bikini Bottom',
    'Coruscant',
    'Emerald City',
    'Gotham City',
    'King\'s Landing',
    'Metropolis',
    'Neo Tokyo',
    'New New York',
    'Raccoon City',
    'San Fransokyo',
    'Twin Peaks',
    'Winterfell'
  ),
  randomCityEn = cityEn[Math.floor( Math.random() * cityEn.length )];
  $('.randomCityEn').text( randomCityEn );

  // randomCityEs
  var cityEs = new Array(
    'Arkham',
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
    'Twin Peaks'
  ),
  randomCityEs = cityEs[Math.floor( Math.random() * cityEs.length )];
  $('.randomCityEs').text( randomCityEs );

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
    
  $(document).on('click', '.giraffe-toggle', function(event) {
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

  $('body').removeClass('hidden').addClass('fadeIn');

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

});
