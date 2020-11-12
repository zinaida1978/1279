// ==UserScript==
// @name         Yandex bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

let keywords = ["Гобой","Саксофон","Валторна","Фагот","Флейта","Как звучит флейта","Скрипка"];
let keyword = keywords[getRandom(0, keywords.length)];
let yandexInput = document.getElementById("text");
let button = document.getElementsByClassName("button mini-suggest__button")[0];
let links = document.links;
let i = 0;
let timertId = setInterval(()=>{
     yandexInput.value += keyword[i++];
       if(i == keyword.length){
           clearInterval(timertId);
           button.click();
       }
     },500);
location.hostname == "yandex.ru";
let flag = true;
let numPage = document.getElementsByClassName("pager__item pager")[0];
for(let i=0; i<links.length; i++){
    let link = links[i++];
    if(link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
        flag = false;
        link.removeAttribute('target');
        setTimeout(()=>link.click(), 2000);
        break;
     }
}
     let none = document.getElementsByClassName("link link_theme_none")[0];
     if (numPage == "10") location.href = "https://yandex.ru/";
     if(flag) setTimeout(()=>none.click(),2000);
     if(getRandom(0,100)>=80) location.href = "https://yandex.ru/";
        setInterval(()=>{
            let link = links[getRandom(0,links.length)];
            if(link.href.indexOf(location.hostname) != -1)
                link.click();
        },5000);
