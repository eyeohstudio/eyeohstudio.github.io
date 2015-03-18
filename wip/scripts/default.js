jQuery(document).ready(function($) {
    
    //
	$('body'). removeClass('hidden').addClass('fadeIn');
    
    //
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    
    //
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
    
    // randomWho
    var who = new Array(
        'a multi-disciplinary team',
        'interesting people'
    ),
    randomWho = who[Math.floor( Math.random() * who.length )];
    $('.randomWho').text( randomWho );
    
    // randomHow
    var how = new Array(
        'craft',
        'develop',
        'make',
        'produce'
    ),
    randomHow = how[Math.floor( Math.random() * how.length )];
    $('.randomHow').text( randomHow );
    
    // randomWhat
    var what = new Array(
        'effective',
        'powerful',
        'remarkable',
        'striking'
    ),
    randomWhat = what[Math.floor( Math.random() * what.length )];
    $('.randomWhat').text( randomWhat );
    
    // randomWhatelse
    var whatelse = new Array(
        'creative',
        'imaginative',
        'innovative',
        'unconventional'
    ),
    randomWhatelse = whatelse[Math.floor( Math.random() * whatelse.length )];
    $('.randomWhatelse').text( randomWhatelse );
    
    // randomCity
    var city = new Array(
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
    randomCity = city[Math.floor( Math.random() * city.length )];
    $('.randomCity').text( randomCity );
    
    //
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