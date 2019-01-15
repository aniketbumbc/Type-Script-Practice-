console.log("Welcome To Type Script");
function doCalcualtion(a, b, c) {
    return (a + b) * c;
}
var arrayNumbers = [1, 2, 3, 4, 5];
var result = doCalcualtion(3, 4, 5);
console.log("The Final Result is " + result);
console.log("Test of Array  " + arrayNumbers);
console.log("The Game of Array");
//double[] balance = { 2340.0, 4523.69, 3421.0};
var arrayString = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7', 'Test 8'];
console.log("The String  Array is " + arrayString);
for (var item in arrayString) {
    var itemValue = arrayString[item];
    var itemIndex = arrayString.indexOf(itemValue);
    console.log(' item Index ' + itemIndex + '  The value is  ' + itemValue);
}
console.log('Enums');
var DooreState;
(function (DooreState) {
    DooreState[DooreState["Open"] = 0] = "Open";
    DooreState[DooreState["Closed"] = 1] = "Closed";
    DooreState[DooreState["Middle"] = 2] = "Middle";
})(DooreState || (DooreState = {}));
var openDoor = DooreState.Open;
console.log('The value of openDoor is ' + openDoor);
var bunny = 500;
console.log(bunny);
if (bunny == 500) {
    var bunny_1 = 0;
    console.log(bunny_1);
}
console.log(bunny);
function addName(Fname, Lname) {
    console.log('Hello This is Full name ' + Fname + " " + Lname);
}
addName("Bunnyy", "Bugssss");
function addNumber(a, b, c) {
    console.log("Optional parameter function start ");
    console.log(a);
    console.log(b);
    console.log(c);
    var result = a + b + c;
    console.log(result);
}
addNumber(10, 20);
console.log("Callback function");
var callbackFucntion = function () {
    console.log('inside callback text');
    var a = 10, b = 20;
    console.log("the result of addition is " + (a + b));
    console.log("Call backsend");
};
function doSomethingWithACallback(Itext, callback) {
    console.log('inside doSomething' + Itext);
    callback();
}
doSomethingWithACallback(' This is Text ', callbackFucntion);
console.log("TYPE script Arrow Function ");
function callNewback(text) {
    console.log('outside new Call Back ' + text);
}
function doSomethingNewCallback(InitialText, callback) {
    console.log('Indside new Call Back ' + InitialText);
    callNewback(InitialText);
}
doSomethingNewCallback("hello bunny", callNewback);
//# sourceMappingURL=hello.js.map