// ==UserScript==
// @name        New Ponychan GIF loader
// @namespace   www.ponychan.net/
// @description Loads GIFs in the new Ponychan because it's apparently incapable
// @include     http://www.ponychan.net/*
// @version     1.00
// @grant       none
// ==/UserScript==

var GIFpics = 0; 
function loadGIFs(){
    var GIFlength = document.getElementsByClassName("postimg").length;
    if(GIFpics != GIFlength){
        for(var GIFi = GIFpics; GIFi < GIFlength; GIFi++){
            var GIFelement = document.getElementsByClassName("postimg")[GIFi];
            if(GIFelement.src.substr(GIFelement.src.length - 3).toLowerCase() == "gif"){
                GIFelement.src = GIFelement.parentNode.href;
            }     
        }
    }
    GIFpics = GIFlength;
}
window.setInterval(function () {loadGIFs()}, 500);

