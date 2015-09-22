// /*jQuery Credit Card Validator*/
// $(function() {
// 	$('#card_number').validateCreditCard(function(result) {
// 	if(result.card_type == null)
// 	{
// 	$('#card_number').removeClass();
// 	}
// 	else
// 	{
// 	$('#card_number').addClass(result.card_type.name);
// 	}

// 	if(!result.valid)
// 	{
// 	$('#card_number').removeClass("valid");
// 	}
// 	else
// 	{
// 	$('#card_number').addClass("valid");
// 	}
// 	});
// });

// function getCreditCardType(card_number)
// {

//   //start without knowing the credit card type
//   var result = "unknown";

//   //first check for MasterCard
//   if (/^5[1-5]/.test(card_number))
//   {
//     document.getElementById("cc_mastercard").checked = true;
//   }

//   //then check for Visa
//   else if (/^4[0-9]/.test(card_number))
//   {
//     document.getElementById("cc_visa").checked = true;
//   }

//   //then check for AMEX
//   else if (/^3[47]/.test(card_number))
//   {
//     document.getElementById("cc_amex").checked = true;
//   }

//   //then check for DISCOVER
//   else if (/^6[0-9]/.test(card_number))
//   {
//     document.getElementById("cc_discover").checked = true;
//   }

//   return result;
// }


// function handleEvent(event)
// {
//   var value   = event.target.value,    
//       type    = getCreditCardType(value);

//   switch (type)
//   {
//     case "cc_mastercard":
//         //show MasterCard icon
//         break;

//     case "cc_visa":
//         //show Visa icon
//         break;

//     case "cc_amex":
//         //show American Express icon
//         break;

//     case "cc_discover":
//         //show American Express icon
//         break;

//     default:
//         //clear all icons?
//         //show error?
//   }
// }

// // or window.onload
// document.addEventListener("DOMContentLoaded", function(){
//   var textbox = document.getElementById("card_number");
//   textbox.addEventListener("keyup", handleEvent, false);
//   textbox.addEventListener("blur", handleEvent, false);
// }, false);


// function CVCchange() {
// 			if (cc_amex.is(":checked")) {
// 				CVC.addClass("amexside");
// 			} 
// 			else {
// 				CVC.removeClass("amexside");
// 			}
// 		};

function GetCardType(card_number)
{
    // visa
    var re = new RegExp("^4");
    if (number.match(re) != null)
        document.getElementById("cc_visa").checked; 

    // Mastercard
    re = new RegExp("^5[1-5]");
    if (number.match(re) != null)
        document.getElementById("cc_visa").checked;

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
        document.getElementById("cc_visa").checked;

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
        document.getElementById("cc_visa").checked;

    document.getElementById();
}
