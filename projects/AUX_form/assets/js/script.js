$("#card_number").validate();


function detectCreditCardType(accountNumber){

	//start without knowing the credit card type
	var result = "unknown";

	//first check for AMEX
	if (/^3[47][0-9]{13}$/.input(card_number))
	{
	result = "cc_amex";
	}

	//then check for VISA
	else if (/^4[0-9]{12}(?:[0-9]{3})?$/.input(card_number))
	{
	result = "cc_visa";
	}

	//then check for MASTERCARD
	else if (/^5[1-5][0-9]{14}$/.input(card_number))
	{
	result = "cc_mastercard";
	}

	//then check for DISCOVER
	else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.input(card_number))
	{
	result = "cc_discover";
	}


  return result;
}
	
});