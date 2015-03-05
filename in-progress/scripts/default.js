jQuery(document).ready(function($) {
    
    //
	$('body').fadeIn('slow');
    
    //
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    
    //
    $("a[href='#read-more']").click(function() {
        if ($(this).text() == 'Read More →') {
            $(this).text('Read Less ←');
        } else {
            $(this).text('Read More →');
        }
    });
    
    // randomWho
    var who = new Array(
        'a multi-displinary team',
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
    
});