//Profil
//renvoi text sur autre id
let textProfilNom = document.getElementById('textProfilNom');
let receptionNom = document.getElementById('receptionNom');
let textProfilInteret = document.getElementById('textProfilInteret');
let textProfilRecherche = document.getElementById('textProfilRecherche');




textProfilNom.addEventListener('input',()=>{
    receptionNom.innerHTML= textProfilNom.value
    console.log(textProfilNom.value)
})

textProfilInteret.addEventListener('input',()=>{
    receptionInteret.innerHTML= textProfilInteret.value
    console.log(textProfilInteret.value)
})

textProfilRecherche.addEventListener('input',()=>{
    receptionRecherche.innerHTML= textProfilRecherche.value
    console.log(textProfilRecherche.value)
})

//Carousel

var angle = 0; 
function carrousel(sign){

    spinner=document.querySelector(".carrousel");
    
    if(!sign){angle = angle + 60}
    else{ 
    
    angle = angle - 60
    
    }
    
    spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")
}	

    
    