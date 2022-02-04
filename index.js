// Gestion de la nav-bar

const navbar = document.querySelector('#nav-on-top');

window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
};

//--------------------------------------
// Animation de l'image en background
//--------------------------------------

//Valeurs initiales et sélecteurs fixes
const arrayBackground = [
    "/public/img/profil.jpg", 
    "/public/img/magento.jpg", 
    "/public/img/challenge.jpg",
    "/public/img/success.jpg",
    "/public/img/teamwork.jpg",
];
var indexSlider = 0;

const backgroundCible = document.getElementById("slider--background");
const tousSlides = document.getElementsByClassName("slider--slide");
const toutesBullet = document.querySelectorAll(".fas.fa-circle");

/* for (var mi = 0; mi < toutesBullet.length; mi++) {
    toutesBullet[mi].addEventListener("click", () => {
        indexSlider = [mi];
        console.log(indexSlider)
    });
}; */ // Ne marche pas encore


//Slide initial
var slideCible = document.getElementById("slide" + indexSlider + "");
slideCible.style.display = "block";

//Fonction pour switch
const changeBackground = () => {
    //mise à jour de l'index
    indexSlider = indexSlider + 1;
    if (indexSlider == arrayBackground.length) {
        indexSlider = 0;
    }

    // Mise à jour texte correct
    for (i = 0; i < tousSlides.length; i++) {
        tousSlides[i].style.display = "none"
    };
    backgroundCible.style.backgroundImage = "url(" + arrayBackground[indexSlider] + ")";
    slideCible = document.getElementById("slide" + indexSlider + "");
    slideCible.style.display = "block";
    
    //Mise à jour bullets
    for (var j = 0; j < toutesBullet.length; j++) { 
        toutesBullet[j].style.color = "#808080";
    };
    var bulletCible = document.getElementById("circle" + indexSlider + "");
    bulletCible.style.color = "#3950FF";

};
setInterval(changeBackground, 5000);