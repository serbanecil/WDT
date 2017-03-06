var myList = ['apples', 'oranges', 'bananas'];
var apples = myList[0];
//go(apples, 0);

myList[3] = 'pineapples';
myList[0] = 'watermelon';

var myNewList = ['apples', 22, go];
//go(myNewList[2], myList[1]);


// Functions
function go(name, age) {
	alert(name + " " + age);
}

function add(first, second) {
	return first + second;
}

// Run the function go stored in myNewList:
myNewList[2]("Name", 25);

myLastList = ['apples', 'oranges', ['Will', 'Laura'] ];
//go(myLastList[2], 11);

//Array-Functions
var firstElem = myList.shift // Removes the first item and passes it to vars for example
var lastElem = myList.pop; // Remove the last item and passes it to var for example

// forEach is a newer Method, may in work on older browsers
myList.forEach(function(value, index) {
	alert('I have ' + value + ' in my shopping bag');
});

//while () {

//}

for (var i = 0; i < myList.length; ++i) {
	console.log(myList[i]);
}