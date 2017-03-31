// Maximum and Minimum Numbers (Precision is not guaranteed past 16 digits)
document.write(Number.MAX_VALUE+"<br />");
document.write(Number.MIN_VALUE+"<br />");

// Strings - Series of characters surrounded by quotes
var samp_str = "Here are escaped characters \' \" \\ \t \n";
document.write(samp_str+"<br />"); // Newlines have no control in html

// String Functions
var first_str = "First String ";
var second_str = "and Second String";

var combined = first_str + second_str;
document.write(combined+"<br />");

document.write("Length of string: " + combined.length+"<br />");
document.write("Substring " + combined.substring(6,12) +"<br />"); // Go 1 more than needed
document.write("Last character " + combined.charAt(combined.length-1)+"<br />");
document.write("Index of T " + combined.indexOf('t') +"<br />");

// Variable Conversion is Automatic
var str_var = "5";
var num_var = 10;
var total = num_var + str_var; // Converts a number into a string
var mult_total = num_var * str_var; // Converts a number into a string

document.write("5 + 10 = " + total +"<br />");
document.write("5 * 10 = " + mult_total +"<br />");

// Force Datatype Conversion

total = num_var + Number(str_var);
document.write("5 + 10 = " + total +"<br />");

var num_var2 = String(num_var);
document.write(num_var + num_var +"<br />");
document.write(num_var + num_var2 +"<br />");

// Convert Float to Fixed Length String
var float_var = 3.141592653589793238;
var float_str = float_var.toFixed(5);
document.write("Shortened PI " + float_str +"<br />");

document.write("Integer PI " + parseInt(float_var) +"<br />");

// Find Datatype of Variable

document.write("Datatype of float_var " + typeof(float_var) +"<br />");
document.write("Datatype of float_str " + typeof(float_str) +"<br />");

// Boolean Variables are false (0 or NaN) or true (Every Other Value)
bool_var = Boolean(23);
document.write("Boolean of 23 " + bool_var +"<br />");

// Comparison Operators
var rand_num1 = 5;
var rand_num2 = 10;

document.write("Is 5 > 10: " + (rand_num1 > rand_num2) +"<br />");
document.write("Is 5 >= 10: " + (rand_num1 >= rand_num2) +"<br />");
document.write("Is 5 < 10: " + (rand_num1 < rand_num2) +"<br />");
document.write("Is 5 <= 10: " + (rand_num1 <= rand_num2) +"<br />");
document.write("Is 5 == 10: " + (rand_num1 == rand_num2) +"<br />");
document.write("Is 5 != 10: " + (rand_num1 != rand_num2) +"<br />");

// Logical Operators

document.write("Is 5 > 10 and 5 != 10: " + ((rand_num1 > rand_num2) && (rand_num1 != rand_num2))+"<br />");
document.write("Is 5 > 10 or 5 != 10: " + ((rand_num1 > rand_num2) || (rand_num1 != rand_num2))+"<br />");
document.write("Opposite of 5 != 10: " + !(rand_num1 != rand_num2) +"<br />");

// Array Basics

var vehicles = new Array("car", "truck", "van");
document.write("The second item in the array is: " + vehicles[1] +"<br />");
for(i in vehicles) {
	document.write("Value " + i + " in array: " + vehicles[i] + "<br />");
}

// Conditional operators
var rand_var = (5 < 10) ? "5 is less than 10" : "5 is greater than 10";
document.write("rand_var = " + rand_var + "<br />");
if (5 > 10) {
	document.write("5 > 10");
} else if (5 == 10) {
	document.write("5 = 10");
} else {
	document.write("5 < 10");
}
document.write("<br />");

// case statement
var state = "Pennsylvania";
switch(state) {
	case "California" :
		document.write("California" + "<br />");
		break;
	case "Pennsylvania" :
		document.write("Pennsylvania" + "<br />");
		break;

	default :
		document.write("None" + "<br />");
		break;
}

// loops
var count = 1;
while (count <= 10) {
	if (count == 10) {
		document.write("count is " + count + "<br />");
	} else {
		document.write("count is " + count + ", ");
	}
	++count;
}

count = 10;
do {
	if (count == 10) {
		document.write("count " + count);
	} else {
		document.write(", count " + count);
	}
	--count;
} while (count >= 1);
document.write("<br />");

for (var count = 1; count <= 10; ++count) {
	if (count == 10) {
		document.write("The count is " + count + "<br />");
	} else {
		document.write("The count is " + count + ", ");	
	}
}

function addThese(numberOne, numberTwo) {
	return numberOne + numberTwo;
}

document.write("5 + 10 = " + addThese(5, 10) + "<br />");






