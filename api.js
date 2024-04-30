const URL = "https://cat-fact.herokuapp.com/facts";
const fact = document.querySelector("#fact");

const getFacts = async () => {
    console.log("Getting Data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
    fact.innerText = data[0].text;
};
