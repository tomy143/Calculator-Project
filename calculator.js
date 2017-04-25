$(document).ready(function(){
  var testNumLength = function(number) { //this function will ensure that total.div wont overflow
    if (number.length > 9) {
      totaldiv.text(number.substr(number.length-9,9));
      if(number.length > 15) {
        number = "";
        totaldiv.text("Err"); //if digits are over 15, "Err" will appear on #total screen
      }
    }
  };
var number= ""; //this is an empty string. Will produce the digit when button is pressed.
var newnumber= "";//when user clicks an operator, the first inputted number will be saved into this
var operator = "";//when user clicks an operator this var will set the operator, input the first number into var newnumber and will also set var number to an empty string
var totaldiv = $("#total"); //this is the answer to the equation
totaldiv.text("0");//sets the produced number into the #total

//first .click() listener is used so that when users click a #numbers, it will take the .text() of the button, append that to var number, set the .text() of var total div to var number, and finally call testNumLength, passing in var number as the parameter
$("#numbers a").not("#clear, #clearall").click(function() { //.not is used to exclude seeing the clear and clearall on #total when clicked
  number +=$ (this).text(); //+= is used to append and assign strings
  totaldiv.text(number);
  testNumLength(number);
});
//second .click listener is used so that when users click on #operators, operator var will take the operator clicked. First number inputted wil lbe saved into var newnumber.
$("#operators a").not("#equals").click(function() {
  operator =$ (this).text(); //this os where var operator takes on the clicked #operators
  newnumber = number; //when #operators is clicked, the number previously selected is saved into var newnumber
  number = ""; //
  totaldiv.text("0");

});
$("#clear").click(function() {
  number =""; //when #clear is clicked it only needs to delete the number currently being inputted
  totaldiv.text("0");
});
$("#clearall").click(function() {
  number="";
  totaldiv.text("0");
  newnumber=""; //this is included in #clearall so that both numbers are cleared
});
//the final .click() will output the final answer to the inputted problem.
$("#equals").click(function(){
    if (operator === "+"){ //if else statements to check which operator is being used
      number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10); //parseInt with radix of 10 is used to convert number, which is a string into an integer. The radix prevents reader confusion.
    } else if (operator === "-") { //after the operation is completed .toString(10) is used to convert it back into a string.
      number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
    } else if (operator === "/"){
      number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
    } else if (operator === "*"){
      number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
    }
    totaldiv.text(number); //this checks the answer
    testNumLength(number);//this checks whether the answer is overflowing or not
    number = ""; //string
    newnumber = "";//string 
  });
});
