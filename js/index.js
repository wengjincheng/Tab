/**
 * Created by 翁锦程 on 2016/11/1.
 */
$('#ul_1').on('click',function (e) {
    var x = $(e.target).html();
    if(x=='Tab One'){
        $('.li_1').addClass('background_color');
        $('ul').not('.li_1').removeClass('background_color');
        $('#p_1').html('This is the one');
    }else if(x=='Tab Two'){
        $('.li_2').addClass('background_color');
        $('ul').not('.li_2').removeClass('background_color');
        $('#p_1').html('This is the two');
    }else if(x=='Tab Three'){
        $('.li_3').addClass('background_color');
        $('ul').not('.li_3').removeClass('background_color');
        $('#p_1').html('This is the three');
    }else if(x=='Tab Four'){
        $('.li_4').addClass('background_color');
        $('ul').not('.li_4').removeClass('background_color');
        $('#p_1').html('This is the four');
    }
})