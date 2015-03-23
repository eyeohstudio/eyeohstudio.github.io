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
        if ($(this).text() == 'Llegir més →') {
            $(this).text('Llegir menys ←');
        } else {
            $(this).text('Llegir més →');
        }
    });
    
    $("a[href='#read-more']").click(function() {
        if ($(this).text() == 'Read More →') {
            $(this).text('Read Less ←');
        } else {
            $(this).text('Read More →');
        }
    });
    
    $("a[href='#leer-mas']").click(function() {
        if ($(this).text() == 'Leer Más →') {
            $(this).text('Leer Menos ←');
        } else {
            $(this).text('Leer Más →');
        }
    });
    
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    var graphicCa = 'Text in Cat';
    var graphicEn = 'Ad & Communication,<br>Brand Identity,<br>Editorial Design,<br>Environment&Exhibitions, and<br>UX/UI Design.';
    var graphicEs = 'Text in Esp';
    var digitalCa = 'Text in Cat';
    var digitalEn = 'Creative Coding,<br>Web Design & Development,<br>and CMS Implementation<br>powered by<br>Progressive enhancement<br>and Open Standards.';
    var digitalEs = 'Text in Esp';
    
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
    
    // randomWhoEn
    var whoEn = new Array(
        'a multi-disciplinary team',
        'interesting people'
    ),
    randomWhoEn = whoEn[Math.floor( Math.random() * whoEn.length )];
    $('.randomWhoEn').text( randomWhoEn );
    
    // randomHowEn
    var HowEn = new Array(
        'craft',
        'develop',
        'make',
        'produce'
    ),
    randomHowEn = HowEn[Math.floor( Math.random() * HowEn.length )];
    $('.randomHowEn').text( randomHowEn );
    
    // randomWhatEn
    var WhatEn = new Array(
        'effective',
        'powerful',
        'remarkable',
        'striking'
    ),
    randomWhatEn = WhatEn[Math.floor( Math.random() * WhatEn.length )];
    $('.randomWhatEn').text( randomWhatEn );
    
    // randomWhatelseEn
    var whatelseEn = new Array(
        'creative',
        'imaginative',
        'innovative',
        'unconventional'
    ),
    randomWhatelseEn = whatelseEn[Math.floor( Math.random() * whatelseEn.length )];
    $('.randomWhatelseEn').text( randomWhatelseEn );
    
    // randomCityEn
    var cityEn = new Array(
        'Arkham',
        'Bikini Bottom',
        'Coruscant',
        'Emerald City',
        'Gotham City',
        'Hundred Acre Wood',
        'King\'s Landing',
        'Metropolis',
        'Neo Tokyo',
        'New New York',
        'Raccoon City',
        'San Fransokyo',
        'Twin Peaks'
    ),
    randomCityEn = cityEn[Math.floor( Math.random() * cityEn.length )];
    $('.randomCityEn').text( randomCityEn );
    
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