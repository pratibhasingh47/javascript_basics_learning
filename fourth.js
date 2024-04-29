/*console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("Hello");
},4000); //1000=1sec

console.log("three");
console.log("four");


function sum(a,b){
    console.log(a+b);
};
function cal(a,b ,sumcallback){
    sumcallback(a,b);
};

cal(1,2,sum);*/

/*function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log(dataId);
        if(getNextData){
            getNextData();
        }
    },2000); 
    console.log(dataId);
}
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});*/
//CallBack - Nested callbacks stacked below one another forming pyramind structure

/*let promise = new Promise((resolve,reject)=>{
    console.log("I am a promise");
    reject("error");
    resolve(123);
});*/

/*const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am promise");
        resolve("Success");
    });
};
let promise = getPromise();
promise.then((res)=>{
    console.log("fullfilled",res);
});
promise.catch((err)=>{
    console.log("rejected",err)
})*/

/*function asyncF(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data");
            resolve("Success");
        },4000);
    });
}


function asyncF2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("Success");
        },4000);
    });
}

console.log("Fetching Data...");
let p1 = asyncF();
p1.then((res)=>{
    console.log(res);
    console.log("Fetching Data...");
    let p2 = asyncF2();
        p2.then((res)=>{
        console.log(res);
    });
});

console.log("Fetching Data...");
asyncF().then((res)=>{
    console.log("Fetching data2...");
    asyncF2().then((res)=>{});
});*/

/*console.log("Fetching Data...");
let p2 = asyncF2();
p2.then((res)=>{
    console.log(res);
});*/

/*function getData(dataId){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataId);
        resolve("Success");
    },4000); 
    console.log(dataId);
});
}*/

/*getData(1).then((res)=>{
    console.log(res);
    getData(2).then(()=>{
        console.log(res);
    })
});

getData(1)//promise chaining
    .then((res)=>{
        return getData(2);
    })
        .then((res)=>{
            return getData(3);
        })
            .then((res)=>{
            console.log(res);
            });*/

/*async function hello() {
    console.log("hello");
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 3000);
    });
}

async function getWD(){
    await api();
    await api();
}*/


/*async function getdata(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}*/