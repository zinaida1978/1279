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

document.getElementById("text").value = "Гобой";
document.getElementsByClassName("button mini-suggest__button")[0].click();
let links = document.links;
for(let i=0; i<links.length; i++){
    let link = links[i];
    if(link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
        link.removeAttribute('target');
        link.click();
        break;
     }
}
