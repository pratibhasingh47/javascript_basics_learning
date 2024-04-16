console.log("Hello World");

age = 19;
Name = "Pratibha Singh";
a = null;
y = undefined;
console.log(age);
console.log(Name);
console.log(a);
console.log(y);

const pi = 3.14;
Name = "Tony Stark";
age = 20;
console.log(Name);
console.log(age);
console.log(pi);

// ----------------------------------------

let b;
console.log(b);
console.log(typeof age);

let x = BigInt("123");
console.log(x);

// ----------------------------------------

const student = {
    fullName: "Rahul",
    age: 20,
    cgpa: 8.9,
    isPass: true,
};

console.log(student);
console.log(student.fullName);
console.log(student["cgpa"]);

student.age = student.age + 2;
console.log(student.age);

const product = {
    title: "Ball Pen",
    price: 250,
    offer: 5,
    rating: 4,
};

console.log(product);

const profile = {
    userName: "@pratibhasingh_47",
    isFollow: false,
    followers: 123,
    following: 123,
};

console.log(profile);
console.log(typeof profile["userName"]);

// ------------------------------------------------------

let q = 5;
let p = 10;

console.log(p + q);
console.log(p - q);
console.log(p / q);
console.log(p * q);
console.log(p % q);
console.log(p ** q); //Square to power

console.log(p++);
console.log(p--);
console.log(--p);
console.log(++p);

console.log((q += 3));
console.log((q *= 3));

//-----------------------------------------------------

let aa1 = 10;
let aa2 = 20;
let bb1 = "10";

console.log(aa1 == bb1);
console.log(aa1 === bb1);
console.log(aa1 !== bb1);
c1 = aa1 < aa2;
c2 = aa2 > aa1;
console.log(c1 && c2);

let age = 25;
if (age >= 18) {
    console.log("Can vote");
} else if (age > 60) {
    console.log("Senior");
} else {
    console.log("Cannot vote");
}

let mode = "dark";
if (mode == "dark") {
    color = "black";
} else {
    color = "White";
}
console.log(color);

age > 18 ? console.log("Adult") : console.log("Not Adult");

let Name = prompt("Hello !");
console.log(Name);

let numm = prompt("Enter a number");
if (numm % 5 === 0) {
    console.log("Multiple of 5");
} else {
    console.log("Not a Multiple of 5");
}

// ------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
    console.log("Value of i is ", i);
}

let j = 0;
while (j < 11) {
    console.log("Value of j : ", j);
    j++;
}

let k = 20;
do {
    console.log(k);
} while (k <= 10);

let str = "Tony Stark"; // FOR OF LOOP to print string and i is iterator
let size = 0;
for (let i of str) {
    console.log(i);
    size++;
}
console.log(size);

let student = {
    //FOR IN LOOP
    Name: "Pratibha Singh",
    age: 19,
    isPass: true,
};

for (let key in student) {
    console.log(key, student[key]);
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// --------------------------------------------

let strr = "Pratibha Singh";
let str2 = "JS";
console.log(str.length);
console.log(str[7]);

//TENPLATE LITERAL
let sen = `this is template literal`;
console.log(sen);
console.log(typeof sen);

let obj = {
    item: "pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("Pratibha\nSingh");

console.log(strr.toUpperCase());
console.log(strr.toLowerCase());
console.log(strr.trim());
console.log(strr.slice(2, 7));
console.log(strstrrr.concat(str2));
console.log(strr + str2);
console.log(strr.replace("bha", "ohh"));

// -----------------------------------------------

let heroes = ["ironman", "Hulk", "Captain America"];
let number = [1, 2, 3, 4, 5];
console.log(number.length);
console.log(typeof nuberm);
console.log(heroes[1]);
console.log(heroes[2]);
heroes[3] = "hello";
console.log(heroes[3]);

for (let i = 0; i < 5; i++) {
    console.log(heroes[i]);
    console.log(number[i]);
}

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

for (let el of heroes) {
    console.log(el.toUpperCase());
}

let marks = [18, 87, 65, 47, 41, 65];
let sum = 0;

for (let m of marks) {
    sum = sum + m;
}
console.log(sum);
let avg = sum / marks.length;
console.log(`Average is ${avg}`);

let arrr = [50, 60, 84, 95, 100, 74, 41];
arrr.push(578);
console.log(arrr);
let del = arrr.pop(arrr);
console.log(arrr);
console.log(del);
console.log(arrr.toString());
console.log(arrr.slice(2, 6));

let a1 = [15, 84];
let a2 = [1, 2, 3, 4, 5, 6, 7];
console.log(a2);
console.log(a2.splice(2, 1, 100));
console.log(a2);
console.log(a2.splice(3));
a2 = a1.concat(a2);
console.log(a2);

let com = ["Bloomerg", "Microsoft", "Uber", "Google", "IBM"];
com.shift();
console.log(com);
com.splice(2, 1, "ola");
console.log(com);
com.push("Amazon");
console.log(com);

// ------------------------------------------------------

function myfun() {
    console.log("Hello");
    console.log("this is a function");
}
myfun();

function mfun(msg) {
    console.log(msg);
}
mfun("Helllloooooooo");
mfun(4778);

function mfun(msg, n) {
    console.log(msg * n);
}
mfun("ohh", 7);

function sum(a, b) {
    console.log(a + b);
}
sum(10, 20);

function sum(a, b) {
    return a + b;
}

const arrowsum = (a, b) => {
    console.log(a + b);
};
arrowsum(10, 80);

function mul(a, b) {
    return a * b;
}

const amul = (x, y) => {
    console.log(x * y);
};
amul(100, 500);

const printh = () => {
    console.log("Hellooooooo");
};
printh();

function strc(msg) {
    sum = 0;
    console.log(msg.length);
    for (let i = msg[0]; i < msg.length; i++) {
        if (
            msg[i] == "a" ||
            msg[i] == "e" ||
            msg[i] == "i" ||
            msg[i] == "o" ||
            msg[i] == "u"
        ) {
            sum++;
        }
    }
    console.log(sum);
}
strc("ohhhwooooww");

function strc(msg) {
    sum = 0;
    for (const char of msg) {
        if (
            char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u"
        ) {
            sum++;
        }
    }
    return sum;
}
strc("aeiouaeiou");

// ---------------------------------------------

let arr = [1, 2, 3, 4, 5];

arr.forEach(function printval(val) {
    console.log(val);
});

let ar = ["pune", "delhi", "mumbai"];

ar.forEach((val, ar) => {
    console.log(val.toUpperCase(), ar);
});

let num = [45, 85, 32, 11];
num.forEach((num) => {
    console.log(num * num);
});

let na = [10, 20, 30, 40, 50];

let newarr = na.map((val) => {
    //for returning array
    return val;
});
console.log(newarr);

let array = [1, 2, 3, 4, 5, 6];
let newa = array.filter((val) => {
    return val % 2 === 0;
});
console.log(newa);
