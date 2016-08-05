$(document).ready(function(){
	$("#change").click(function(){
	//grab input
	
	
	//var price = parseFloat($("#cost").val());
	//var giam = parseFloat($("#givenamount").val());

	//var remainder = giam - price;
	
	//var dollar = Math.floor(remainder);
		var amountDue = $("#amountDue").val();                    //Set variables for input
        var amountPaid = $("#amountPaid").val();
        var amountReturn = amountPaid - amountDue;                

        var dollar = Math.floor(amountReturn);                    
       
        var coins = Math.round((amountReturn % 1) * 100);        
  
        var quarter = Math.floor(coins / 25);                    

        var dime = Math.floor((coins - (quarter * 25)) / 10);    
   
        var nickel = Math.floor((coins -(quarter*25)-(dime*10)) / 5); 
    
        var penny = Math.floor((coins -(quarter*25)-(dime*10)-(nickel*5)) / 1);
      
	
	

	
	
		

	$("#dollars").html( dollar );
	$("#quarters").html(quarter );
	$("#dimes").html(dime );
	$("#nickels").html(nickel);
	$("#penny").html( penny );

	


	
	});
});


/*var dollar = remainder/100;
	remainder =  dollar % remainder;
	
	var quarter = remainder /25; 
	remainder = quarter % remainder ;
	
	var dime = remainder /10;
	remainder = dime % remainder ;
	
	var nickel = remainder/5;
	remainder = nickel % remainder ;
	

	var penny = remainder/1;
	remainder = penny % remainder;
	
	penny = remainder;*/

/*var total = parseInt(totalboxID.value, 10); 
var remainder = total; 
var quarter = Math.floor( remainder / 25 ); 
remainder -= 25*quarter; 
var dimes = Math.floor( remainder / 10 ); 
remainder -= 10*dimes; 
var nickels = Math.floor( remainder / 5 ); 
 remainder -= 5*nickels; 
var pennies = remainder; 

quartersID.value = quarters.toFixed(0); 
dimesID.value = dimes.toFixed(0); 
nickelsID.value = nickels.toFixed(0); 
penniesID.value = pennies.toFixed(0)*/

