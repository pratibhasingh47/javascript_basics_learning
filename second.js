const student ={
    fullName : "Pratibha Singh",
    marks : 97,
    printMarks : function (){
        console.log(this.marks);
    },
};
console.log(student.printMarks());


// ------------------------------------------


const emp ={
    cacTax(){
        console.log("tax is 10%");
    },
};

const e1={
    salary :50000,
    cacTax(){
        console.log("tax is 20%");
    },
};

e1.__proto__ = emp;


// ------------------------------------------


class car{
    constructor(){
        console.log("Constructor is created");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

let car1 = new car();
car1.setBrand("fortuner");

let car2 = new car();
car2.setBrand("lexus");


// ------------------------------------------


/*class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{}

let obj = new Child();

class Person{
    constructor(){
        this.species="Hono-Saphiens";
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
}

class Eng extends Person {
    constructor(branch){
        super();
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("Solve problems");
    }
}
let shradha = new Eng();*/

/*let data = "secret information";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewdata(){
        console.log("Data = ",data)
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "some new value";
    }
}

let st1 = new User("Pratibha","abc@gmail.com");
let st2 = new User("shradha","abc@gmail.com");

let admin1 = new Admin("admin","adbhf@gmail.com");*/