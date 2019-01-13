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
//# sourceMappingURL=hello.js.map