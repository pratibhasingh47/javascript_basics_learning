let heading = document.getElementById("heading");
console.dir(heading);

let helo = document.getElementsByClassName("hello");
console.dir(helo);

let p = document.getElementsByTagName("p");
console.dir(p);

let pa = document.querySelector("p");
console.dir(pa);

let par = document.querySelectorAll("p");
console.dir(par);

let a = document.querySelector("h1");
console.log(a.innerText);

let div = document.querySelector("div");
console.log(div.innerText);
console.log(div.innerHTML);

// ------------------------------------------

let h1 = document.querySelector("h1");
console.dir(h1.innerText);
h1.innerText = h1.innerText + "from Pratibha Singh";

// ------------------------------------------

let divv = document.querySelector("div");
console.log(divv);

let d = divv.getAttribute("name");
console.log(d);

let para = document.querySelector("p");
console.log(para.getAttribute("class" , "Newclass"));
console.log(para.setAttribute("class" , "Newclass"));

// ------------------------------------------

let dive = document.querySelector("div");
console.log(dive);
console.log(dive.style);
dive.style.backgroundColor="pink";
dive.innerText="Hello";

let newb = document.createElement("button");
newb.innerText="Click me";
console.log(newb);

let divve = document.querySelector("div");
divve.before(newb);

let newh = document.createElement("h1");
newh.innerHTML="<i>Hello Guys</i>";
document.querySelector("body").prepend(newh);

let parag = document.querySelector("p");
parag.remove();

// ------------------------------------------


let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=>{
    console.log("Btn1 was clicked");
}

let diversion = document.querySelector("div");
diversion.onmouseover = ()=>{
    console.log("You are inside div");
}

btn1.addEventListener("dblclick",(e)=>{
    console.log("button 1 was clicked");
    console.log(e);
    console.log(e.type);
})

// ------------------------------------------


let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let cmode = "light";

modebtn.addEventListener("click",() =>{
    if(cmode === "light"){
        cmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        cmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(cmode);
})