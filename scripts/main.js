/**
 * Created by nnc on 13.04.2018.
 */


var menu_btn_open = document.querySelector('.main-nav__trigger');

var menu = document.querySelector('.main-menu-list');





menu_btn_open.addEventListener('click',function(evt){

    evt.preventDefault();

    menu.classList.toggle('main-menu-list--active');

});


WebFontConfig = {

    custom: {
        families: ['ralewaybold:b7','ralewayregular:n4','roboto_slabregular:n4'],
        urls: ['./fonts/stylesheet.css']
    }


};


(function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);


})(document);


/*
*
 (function(d) {
 var wf = d.createElement('script'), s = d.scripts[0];
 wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
 wf.async = true;
 s.parentNode.insertBefore(wf, s);


 })(document);

 (function(window, document) {
 'use strict';
 var file = 'assets/svg/symbols.svg', // путь к файлу спрайта на сервере
 revision = 1.004;            // версия спрайта
 if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
 var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
 request,
 data,
 insertIT = function() {
 document.body.insertAdjacentHTML('afterbegin', data);
 },
 insert = function() {
 if (document.body) insertIT();
 else document.addEventListener('DOMContentLoaded', insertIT);
 };
 if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
 data = localStorage.getItem('inlineSVGdata');
 if (data) {
 insert();
 return true;
 }
 }
 try {
 request = new XMLHttpRequest();
 request.open('GET', file, true);
 request.onload = function() {
 if (request.status >= 200 && request.status < 400) {
 data = request.responseText;
 insert();
 if (isLocalStorage) {
 localStorage.setItem('inlineSVGdata', data);
 localStorage.setItem('inlineSVGrev', revision);
 }
 }
 }
 request.send();
 } catch (e) {}

 //    main-header__mobile-toggle








 }(window, document));
 */