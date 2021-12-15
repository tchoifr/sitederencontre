

var radius = 240;
var autoRotate = true;
var rotateSpeed = -60;
var imgWidth = 120; 
var imgHeight = 170;






setTimeout(init, 100);

let obox = document.getElementById('drag-container');
let ospin = document.getElementById('spin-container');
let aImg = ospin.getElementsByTagName('img');
let aVid = ospin.getElementsByTagName('video');
let aEle = [...aImg, ...aVid];
let testTof = document.getElementById('testTof');
let testTof1 = document.getElementById('testTof1');
let testTof2 = document.getElementById('testTof2');
let testTof3 = document.getElementById('testTof3');

testTof.addEventListener('click',openModalImg)
testTof1.addEventListener('click',openModalImg1)
testTof2.addEventListener('click',openModalImg2)
testTof3.addEventListener('click',openModalImg3)

function openModalImg(){
  window.location.href = "https://tchoifr.github.io/sitederencontre/";
}

function openModalImg1(){
  window.location.href = "https://tchoifr.github.io/sitederencontre/profilSoft/pageProfilSoft.html";
}

function openModalImg2(){
  window.location.href = "https://tchoifr.github.io/sitederencontre/profilHot/pageProfilHot.html";
}

function openModalImg3(){
  window.location.href = "https://tchoifr.github.io/sitederencontre/profilElite/pageProfilElite.html";
}







ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";


var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {

  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;


if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}





document.onpointerdown = function (e) {
  clearInterval(obox.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(obox);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    obox.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(obox);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(obox.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function(e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};
