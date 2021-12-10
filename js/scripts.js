/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//function popup
// declarer ID Soft
let softBouton = document.getElementById('softBouton');
let blocPopupSoft = document.getElementById('blocPopupSoft');
let popupCloseSoft = document.getElementById('popupCloseSoft');
let popupSuivantSoft = document.getElementById('popupSuivantSoft');
let popupRetourSoft = document.getElementById('popupRetourSoft');
let fromSoftText1 = document.getElementById('formSoftText1');
let fromSoftText2 = document.getElementById('formSoftText2');

//Hot
let popupSuivantHot = document.getElementById('popupSuivantHot');
let popupRetourHot = document.getElementById('popupRetourHot');
let hotBouton = document.getElementById('hotBouton');
let blocPopupHot = document.getElementById('blocPopupHot');
let popupCloseHot = document.getElementById('popupCloseHot');
let fromHotText1 = document.getElementById('formHotText1');
let fromHotText2 = document.getElementById('formHotText2');


//Vip
let popupSuivantVip = document.getElementById('popupSuivantVip');
let popupRetourVip = document.getElementById('popupRetourVip');
let vipBouton = document.getElementById('vipBouton');
let blocPopupVip = document.getElementById('blocPopupVip');
let popupCloseVip = document.getElementById('popupCloseVip');
let fromVipText1 = document.getElementById('formVipText1');
let fromVipText2 = document.getElementById('formVipText2');

//Connexion
let boutonConnexion = document.getElementById('boutonConnexion');
let formulaireConnexion = document.getElementById('formulaireConnexion');
let closeConnexion = document.getElementById('closeConnexion');
let container = document.getElementById('container');

//carousel


boutonConnexion.addEventListener('click',openModalConnexion);
boutonConnexion.addEventListener("touchstart", openModalConnexion);

function closeModalConnexion(){
    formulaireConnexion.style.display = 'none';
    container.style.opacity = 1;
}
function openModalConnexion(){
  
    formulaireConnexion.style.display = 'flex';
    container.style.opacity = 0.5;
}


//Soft
softBouton.addEventListener('click',openModal2);
popupCloseSoft.addEventListener('click',closePopup2);

function openModal2(){
    blocPopupSoft.style.display = 'block';
    softBouton.style.display = 'none';
    fromSoftText1.style.display = 'block';
}
function closePopup2(){
    blocPopupSoft.style.display = 'none'
    softBouton.style.display = 'block'
    fromSoftText1.style.display = 'none';
    fromSoftText2.style.display = 'none';
}
popupSuivantSoft.addEventListener('click',suivantModal2);
popupRetourSoft.addEventListener('click',retourModal2);

function suivantModal2(){
    fromSoftText1.style.display = 'none';
    fromSoftText2.style.display = 'block';
}
function retourModal2(){
    fromSoftText1.style.display = 'block';
    fromSoftText2.style.display = 'none';
}


//Hot
hotBouton.addEventListener('click',openModal1);
popupCloseHot.addEventListener('click',closePopup1);

function openModal1(){
    blocPopupHot.style.display = 'block';
    hotBouton.style.display = 'none';
    fromHotText1.style.display = 'block';
}
function closePopup1(){
    blocPopupHot.style.display = 'none'
    hotBouton.style.display = 'block'
    fromHotText1.style.display = 'none';
    fromHotText2.style.display = 'none';
}
popupSuivantHot.addEventListener('click',suivantModal1);
popupRetourHot.addEventListener('click',retourModal1);

function suivantModal1(){
    fromHotText1.style.display = 'none';
    fromHotText2.style.display = 'block';3
}
function retourModal1(){
    fromHotText1.style.display = 'block';
    fromHotText2.style.display = 'none';
}

//VIP


vipBouton.addEventListener('click',openModal3);
popupCloseVip.addEventListener('click',closePopup3);

function openModal3(){
    blocPopupVip.style.display = 'block';
    vipBouton.style.display = 'none';
    fromVipText1.style.display = 'block';
}
function closePopup3(){
    blocPopupVip.style.display = 'none'
    vipBouton.style.display = 'block'
    fromVipText1.style.display = 'none';
    fromVipText2.style.display = 'none';
}
popupSuivantVip.addEventListener('click',suivantModal3);
popupRetourVip.addEventListener('click',retourModal3);

function suivantModal3(){
    fromVipText1.style.display = 'none';
    fromVipText2.style.display = 'block';
}
function retourModal3(){
    fromVipText1.style.display = 'block';
    fromVipText2.style.display = 'none';
}

