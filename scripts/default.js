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
    
});