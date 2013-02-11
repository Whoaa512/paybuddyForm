$(document).ready(function(){

  var formHandler = function(event){
  	if($("#desc").val() == ""){
  		$("#desc-error").text("Please enter a description.");
  	} else {
  		$("#desc-error").text("Valid");
  	}

	
  	var price = $("#amount").val();
  	var amountCheck = /^\d+(\.\d{2})?$/;
 	if(amountCheck.test(price)) {
		$("#amount-error").text("Valid");
 	} else {
		$("#amount-error").text("Not Valid");
 	}

 	var ccNum = $("#cc_number").val();
  	var amountCheck = /^\d+$/;
 	if(amountCheck.test(ccNum)) {
		//valid
 	} else {
		$("#cc_err").text("Not Valid");
 	}

 	var ccv = $("#ccv").val();
  	var amountCheck = /^\d+$/;
 	if(amountCheck.test(ccv)) {
 		//Valid
 	} else {
		$("#ccv_err").text("Not Valid");
 	}

 	var exp_date = $("#exp").val();
 	var dateCheck = /^((0[1-9])|(1[0-2]))\/(20[1-2][0-9])$/;
 	if(dateCheck.test(exp_date)) {
 		//Valid
 	}
 	else {
 		$("#exp_err").text(" Not Valid");
 	}
/*
 	var month = $("#exp-mm").val();
  	var year = $("#exp-yy").val();

 	if(month <= 12) {
 		//Valid
 	} 
 	if(year >=12 && year <= 50)
		//
 	}
*/
    event.preventDefault(); // prevents the page from reloading
  };

  $("form").submit(formHandler); // register a callback
});