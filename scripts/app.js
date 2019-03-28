
var px = 200  ;
$(document).ready(function ()
{


    $('.skills').mouseover(function ()
    {

       let currentPositionOfElement =  $(this).offset().top ;

       $(this).next().show().css({

            "position" : "absolute",
            "margin-top" : (currentPositionOfElement - px)

       });
       // alert($(this).offset().top);


    });

    $('.skills').mouseout(function ()
    {
        $('.hidden-desc').hide();
    });
});
