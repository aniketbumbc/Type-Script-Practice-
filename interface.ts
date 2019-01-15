console.log("Welcome to interface");


interface Istudent{
    Snumber:number,
    Sname:string
    TestDisplay();
}

let student : Istudent

student = {Snumber:1010, Sname:"  Bunny ",
TestDisplay(){
    console.log(" Hello form Interface  ");
}};

console.log(student);

console.log("Welcome to class");3

class Student{
    id:number;
    name:string;

    display():void{
        console.log("The name is " +this.name+ " and  ID is " +this.id );
    }
}

 let s1 = new Student();

 s1.id = 231;
 s1.name = " Bunny";
 s1.display();


 interface Iprint{
     print();
 }

//  function printClass(a:Iprint){
//      a.print();
//  }

 class ClassA implements Iprint{
     print(){
         console.log (" hello form class A and interface ");
     }
 }


 class ClassB implements Iprint{
    print(){
        console.log (" hello form class BV and interface ");
    }
}

 let aclass = new ClassA();
 let bclass = new ClassB();

//  printClass(aclass);

//  printClass(bclass);

aclass.print();
bclass.print();