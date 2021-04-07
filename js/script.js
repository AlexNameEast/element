'use strict';

const box = document.getElementById("box");    

console.log(box);


const btns = document.getElementsByTagName("button");

console.log(btns[1]);


const circle = document.getElementsByClassName("circle");

console.log(circle);


const heart = document.querySelectorAll(".heart");//html коллекция с методом forEach

heart.forEach( item => {
    console.log(item);
});

const oneHeart = document.querySelector(".heart");

console.log(oneHeart);

