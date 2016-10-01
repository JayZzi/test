// $('document').ready(function () {
//     $('body').append('<a href="http://google.com">jQuery</a>');
//
//     var value1,value2;
//
//     jQuery('#first').on('click',function () {
//         value1 = jQuery('#val1').val();
//         value2 = jQuery('#val2').val();
//
//         alert(parseInt(value1) + parseInt(value2));
//     })
//
//
// });

jQuery(document).ready(function () {
    jQuery('input').on('keyup',function () {
        var value1 = parseInt(jQuery('#val1').val());
        var value2 = parseInt(jQuery('#val2').val());
        var value3 = value1+value2;

        jQuery('#answer').html(value3);
        // jQuery('#answer').val(value3);только для элементов с заполнением содержимого
        // jQuery('#answer').remove();
        // jQuery('body').append('<div id="answer">'+value3+'</div>')

    })
});

function rekurs(i){
    if(i> 1)
        return i+rekurs(i-1);
    else
        return 1;
}
var k = rekurs(Math.random()*10);
console.log(k);


