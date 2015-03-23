jQuery(document).ready(function($) {
    
	$('body'). removeClass('hidden').addClass('fadeIn');
    
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
    
    $("a[href='#llegir-mes']").click(function() {
        if ($(this).text() == 'Llegir més →') { // It's case sensitive!
            $(this).text('Llegir menys ←');
        } else {
            $(this).text('Llegir més →');
        }
    });
    
    $("a[href='#read-more']").click(function() {
        if ($(this).text() == 'Read more →') { // It's case sensitive!
            $(this).text('Read less ←');
        } else {
            $(this).text('Read more →');
        }
    });
    
    $("a[href='#leer-mas']").click(function() {
        if ($(this).text() == 'Leer más →') { // It's case sensitive!
            $(this).text('Leer menos ←');
        } else {
            $(this).text('Leer más →');
        }
    });
    
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    var graphicCa = 'Publi i Comunicació,<br>Identitat Corporativa,<br>Disseny Editorial,<br>Disseny d\'Entorns i Exposicions, i<br>UX/UI.';
    var graphicEn = 'Ad & Communication,<br>Brand Identity,<br>Editorial Design,<br>Environmental & Exhibitions, and<br>UX/UI Design.';
    var graphicEs = 'Publi y Comunicación,<br>Identidad Corporativa,<br>Diseño Editorial,<br>Diseño Ambiental y Exposiciones, y<br>UX/UI.';
    
    var digitalCa = 'Programació Creativa,<br>Disseny i Desenvolupament Web,<br>i implementació de CMS<br>a partir d\'Estàndards Oberts.';
    var digitalEn = 'Creative Coding,<br>Web Design & Development,<br>and CMS Implementation<br>powered by Open Standards.';
    var digitalEs = 'Programación Creativa,<br>Diseño y Desarrollo Web,<br>e Implementación de CMS<br>a partir de Estándares Abiertos.';
    
    $( '.graphicCa' ).attr( 'title', graphicCa );
    $( '.graphicEn' ).attr( 'title', graphicEn );
    $( '.graphicEs' ).attr( 'title', graphicEs );
    $( '.digitalCa' ).attr( 'title', digitalCa );
    $( '.digitalEn' ).attr( 'title', digitalEn );
    $( '.digitalEs' ).attr( 'title', digitalEs );
    
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // randomWhoCa
    var whoCa = new Array(
        'un equip multi-disciplinar',
        'gent de profit'
    ),
    randomWhoCa = whoCa[Math.floor( Math.random() * whoCa.length )];
    $('.randomWhoCa').text( randomWhoCa );
    
    // randomWhoEn
    var whoEn = new Array(
        'a multi-disciplinary team',
        'interesting people'
    ),
    randomWhoEn = whoEn[Math.floor( Math.random() * whoEn.length )];
    $('.randomWhoEn').text( randomWhoEn );
    
    // randomWhoEs
    var whoEs = new Array(
        'un equipo multidisciplinar',
        'gente sensible'
    ),
    randomWhoEs = whoEs[Math.floor( Math.random() * whoEs.length )];
    $('.randomWhoEs').text( randomWhoEs );
    
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // randomHowCa
    var HowCa = new Array(
        'fabricar',
        'desenvolupar',
        'fer',
        'produïr'
    ),
    randomHowCa = HowCa[Math.floor( Math.random() * HowCa.length )];
    $('.randomHowCa').text( randomHowCa );
    
    // randomHowEn
    var HowEn = new Array(
        'craft',
        'develop',
        'make',
        'produce'
    ),
    randomHowEn = HowEn[Math.floor( Math.random() * HowEn.length )];
    $('.randomHowEn').text( randomHowEn );
    
    // randomHowEs
    var HowEs = new Array(
        'elaborar',
        'desarrollar',
        'hacer',
        'producir'
    ),
    randomHowEs = HowEs[Math.floor( Math.random() * HowEs.length )];
    $('.randomHowEs').text( randomHowEs );
    
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // randomWhatCa
    var WhatCa = new Array(
        'efectiu',
        'enèrgic',
        'notable',
        'llampant'
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
        'efectivo',
        'firme',
        'notable',
        'llamativo'
    ),
    randomWhatEs = WhatEs[Math.floor( Math.random() * WhatEs.length )];
    $('.randomWhatEs').text( randomWhatEs );
    
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // randomWhatelseCa
    var whatelseCa = new Array(
        'creatiu',
        'imaginatiu',
        'innovador',
        'poc convencional'
    ),
    randomWhatelseCa = whatelseCa[Math.floor( Math.random() * whatelseCa.length )];
    $('.randomWhatelseCa').text( randomWhatelseCa );
    
    // randomWhatelseEn
    var whatelseEn = new Array(
        'creative',
        'imaginative',
        'innovative',
        'unconventional'
    ),
    randomWhatelseEn = whatelseEn[Math.floor( Math.random() * whatelseEn.length )];
    $('.randomWhatelseEn').text( randomWhatelseEn );
    
    // randomWhatelseEs
    var whatelseEs = new Array(
        'y creativo',
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
        'Port Reial',
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
    
});