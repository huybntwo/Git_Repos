$(document).ready(() => {
    // $('#btn1').click(() => {
    //     $('#img1').hide(2000);
    // })
    // $('#btn2').click(() => {
    //     $('#img1').show(2000);
    // })
    // $('#btn3').click(() => {
    //     $('#img1').toggle(2000);
    // })
    // $('#btn4').click(() => {
    //     $('#img1').fadeIn(2000);
    // })
    // $('#btn5').click(() => {
    //     $('#img1').fadeOut(2000);
    // })
    // $('#btn6').click(() => {
    //     $('#img1').fadeToggle(2000);
    // })
    // $('#btn7').click(() => {
    //     $('#img1').slideUp(2000);
    // })
    // $('#btn8').click(() => {
    //     $('#img1').slideDown(2000);
    // })
    // $('#btn9').click(() => {
    //     $('#img1').slideToggle(2000);
    // })
    // $('#btn10').click(() => {
    //     $('#img1').stop();
    // })
    // $('#btn11').click(() => {
    //     $('#img1').animate({
    //         left:'150px',
    //         opacity:'0.5',
    //         height:'400px',
    //         width:'400px'
    //     },'slow',() => {
    //         alert('Animated')
    //     });
    // })
    //callback is A function to be executed after the animation completes
    // $('#btn11').click(()=>{
    //     // $('#img1').slideUp(2000,()=>{
    //     //     $('#img1').slideDown(2000);
    //     // })
    //     $('#img1').slideUp(2000).css('opacity','0.5').slideDown(2000).fadeOut(2000).fadeIn(2000);
    // })
    // $('.div1').click(()=>{
    //     // var txt = $('.p1').html();
    //     // $('#span1').text(txt);
    //     // $('#span1').text($('.p1').text());

    // })

    // $('.p1').click(()=>{
    //     alert($('.p1').attr('id'));//get the id or class of p tags
    //     $('.p1').attr('id','p1id');//set the id 
    //     alert($('.p1').attr('id'));//get the id or class of p tags
    // })
    $('#btn1').click(()=>{
        // $('.div1').append('<p style="color:green">This is a para2</p>');
        $('.div1').append('<p style="color:green">This is a para is append</p>');
    })
    $('#btn2').click(()=>{
        $('.div1').prepend('<p style="color:blue">This is a para is prepend</p>');
    })
    $('#btn3').click(()=>{
        $('.div1').before('<p style="color:blue">This is a para is before this tag</p>');
    })
    $('#btn4').click(()=>{
        $('.div1').after('<p style="color:blue">This is a para is after this tag</p>');
    })
    $('#btn5').click(()=>{
        $('.div1').remove();
    })
    $('#btn6').click(()=>{
        $('.div1').empty();
    })
})