//Profil
//
let textProfilNom = document.getElementById('textProfilNom');
let receptionNom = document.getElementById('receptionNom');

textProfilNom.addEventListener('input',()=>{
    receptionNom.innerHTML= textProfilNom.value
    console.log(textProfilNom.value)
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

    
    