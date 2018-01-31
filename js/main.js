"use strict";

console.log("xhr main.js");
//Date property built into JS
//.now is a method on Date that will tell us the date right now
let startTime = Date.now();
console.log("start-time: ", startTime);

//going to check to see how long things load

for(let i = 0; i < 2000000; i++){
    let x = i + i/2 * 6;
};

console.log("newTime: ", Date.now());

let bigDataRequest = new XMLHttpRequest();

bigDataRequest.addEventListener("load", bigDataComplete);
bigDataRequest.addEventListener("error", bigDataFail);

function bigDataComplete(event){
    console.log("event: ", event);
    if(event.target.status === 200){
        let bigData = JSON.parse(event.target.responseText);
        console.log("Time of Big Data", Date.now() - startTime);
        console.log("data", bigData);
    }else{
        console.log("check the spelling of your file");
    }
}

function bigDataFail(event){
    console.log("oops ¯\_(ツ)_/¯ something went wrong!", event);
}

bigDataRequest.open("GET", "JEOPARDY_QUESTIONS1.json");
bigDataRequest.send();

let dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataComplete);
dataRequest.addEventListener("load", dataFail);



function dataComplete(event) {
    console.log("colors have loaded");
    let colorData = JSON.parse(event.target.responseText);
    console.log("colorData", colorData);
    showData(colorData);
}

function showData(taco){
    let colorDiv = document.getElementById("all-my-colors");
    let colorData = '';

    for(let item in taco){
        let colorItem = taco[item];
        colorData += `<div><h2>${colorItem.color}: ${colorItem.value}</h2></div>`
    };

    colorDiv.innerHTML = colorData;
    console.log("the colors are done", Date.now() - startTime);
}

function dataFail(event) {
    console.log("colors have not loaded", event);
}

dataRequest.open("GET", "color.json");
dataRequest.send();























