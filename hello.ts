console.log("Welcome To Type Script");


function doCalcualtion( a:number, b:number, c:number){
    return(a+b)*c;
}
var arrayNumbers:number[] = [1,2,3,4,5];


var result = doCalcualtion(3,4,5);
console.log("The Final Result is " + result);
console.log("Test of Array  " + arrayNumbers);

console.log("The Game of Array");

//double[] balance = { 2340.0, 4523.69, 3421.0};

var arrayString:string[] = ['Test 1','Test 2','Test 3','Test 4','Test 5','Test 6','Test 7','Test 8' ];

console.log("The String  Array is " +arrayString );

for(var item in arrayString){
    var itemValue = arrayString[item];
    var itemIndex = arrayString.indexOf(itemValue);
    console.log(' item Index ' +itemIndex  + '  The value is  ' +itemValue );
}

console.log( 'Enums');

enum DooreState{
    Open,
    Closed,
    Middle
}

var openDoor = DooreState.Open;
console.log('The value of openDoor is ' +openDoor);


let bunny = 500;

console.log(bunny);

if(bunny == 500){
    let bunny = 0;
    console.log(bunny);
}
console.log(bunny);
