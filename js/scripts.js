$(document).ready(function() {

  // $("button#factorial").click(function() {
  //   var input = parseInt($("#input").val());
  //   console.log(input);
  //   output = factorial(input);
  //   $("#output").append(output);
  // });

  $("button#palindrome").click(function() {
    inputString = $("#inputString").val();
    // console.log(inputString);
    outputString = stringToArray(inputString);
    $("#outputString").text(outputString);
    palindromeTest(inputArray);
  });

  $("#refresh").click(function(){
    location.reload();
  });

});

// factorial machine
// var output = 0;
//
// var factorial = function(input){
//   var total = 1;
//
//   for (i = input; i>0; i--) {
//     console.log(i);
//   total = total * i;
//   };
//   return total;
// };

// palindrome maker
var outputString = "";
var inputArray = [];
var inputString = "";
var newArray = [];

var stringToArray = function(inputString) {
  for (i = 0; i<inputString.length; i++) {
    inputArray.push(inputString[i]);
  };
  console.log(inputArray);
};

// var inputArray = ["a", "b", "c", "d"];
// var temp = "";
var palindromeTest = function(inputArray) {
  for (i = inputArray.length - 1; i >= 0; i--) {
    newArray.push(inputArray[i]);
    // temp = inputArray[i];
    // inputArray[i] = inputArray[inputArray.length-(1+i)];
    // inputArray[inputArray.length-(1+i)] = inputArray[i];

    // alert(inputArray);

  };
  console.log(newArray);
};
// alert(inputArray);
