//Create a function for the checked radio buttons
$.fn.checked = function(value){
        if (value === true || value === false){

            $(this).each(function(){

                this.checked = value; 

            });
        }
    };

//Retrieve CC Type from Card Number Input   
function getCCType(){
    $('#card_number').keyup(function(){
        var card = $(this).val();
        var card_number = (card).slice(0,1);

        console.log(card_number);

        if (card_number === '3'){

            $('input#cc_amex').checked(true);
            $('.CVC').addClass('amexside');
        } 
        else if (card_number === '4'){

            $('input#cc_visa').checked(true);
            $('.CVC').removeClass('amexside');
        } 
        else if (card_number === '5'){

            $('input#cc_mastercard').checked(true);
            $('.CVC').removeClass('amexside')
        } 
        else if (card_number === '6'){

            $('input#cc_discover').checked(true);
            $('.CVC').removeClass('amexside');
        }
    });
};


getCCType();

//Switch the Icon for the CVC to Amex
$('input#cc_amex').change(function(){
    if ($(this).prop('checked')){

        CVC.addClass('amexside'); 

    } else{

        CVC.removeClass('amexside')
    }
});

//jquery.validate plugin
$("#myform").validate();




            
