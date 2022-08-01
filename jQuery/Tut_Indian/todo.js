$(document).ready(()=>{

    $('#button').click(()=>{
        var toAdd = $('input[name="listItem"]').val();
        $('ul').append('<li>'+toAdd+'</li>');
        // $('input').focus(function(){
        //     $(this).val('');
        // })
    })
    $(document).on('keypress',function(e){
        if(e.which == 13){
            e.preventDefault();
            var toAdd = $('input[name="listItem"]').val();
            $('ul').append('<li>'+toAdd+'</li>');
            $('input').val('');
        }
    })
    $('ul').on('dblclick','li',function(){
        $(this).toggleClass('strike').fadeOut('slow');
    })
    $('input').focus(function(){
        $(this).val('');
    })
    $('ul').sortable();
})