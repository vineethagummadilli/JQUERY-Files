// Show + Hide
$('#btn-1').click(function() {
    if($(this).text() === 'HIDE'){
        $(this).text('SHOW');
        $('#card-1').hide();
    }
    else{
        $(this).text('HIDE');
        $('#card-1').show();
    }
});


// Show + Hide => Toggle()
$('#btn-2').click(function() {
    $('#card-2').toggle();
    ($(this).text() === 'HIDE') ? $(this).text('SHOW') : $(this).text('HIDE');
});

// fadeIn() , fadeOut() -> fadeToggle()
// slideup() , slideDown() -> slideToggle()