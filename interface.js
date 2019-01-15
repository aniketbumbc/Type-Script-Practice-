console.log("Welcome to interface");
var student;
student = { Snumber: 1010, Sname: "  Bunny ",
    TestDisplay: function () {
        console.log(" Hello form Interface  ");
    } };
console.log(student);
console.log("Welcome to class");
3;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log("The name is " + this.name + " and  ID is " + this.id);
    };
    return Student;
}());
var s1 = new Student();
s1.id = 231;
s1.name = " Bunny";
s1.display();
//  function printClass(a:Iprint){
//      a.print();
//  }
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () {
        console.log(" hello form class A and interface ");
    };
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () {
        console.log(" hello form class BV and interface ");
    };
    return ClassB;
}());
var aclass = new ClassA();
var bclass = new ClassB();
//  printClass(aclass);
//  printClass(bclass);
aclass.print();
bclass.print();
//# sourceMappingURL=interface.js.map