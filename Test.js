var MyClass = (function () {
// the self-invoking function is the// environment that will be remembered// by the closure
function MyClass() {
    // MyClass is the inner function,the closure
}
MyClass.prototype.add = function (x, y) {
return x + y;
};
return MyClass;
}());
var classInstance = new MyClass();
var result = classInstance.add(1, 2);
console.log("add(1,2) returns " + result);