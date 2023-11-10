const btnMenu = document.querySelector(".btn-menu");
const btnCerrarMenu = document.querySelector(".boton-cerrar");
const contendorMenu = document.querySelector(".contenedor-menu");
const menuContainer = document.querySelector(".nav-cantainer");
const logo = document.querySelector(".logo");
let estadoMenu = false;

const itemHome = document.querySelector(".home");
const itemAbout = document.querySelector(".About");
const itemServices = document.querySelector(".Services");
const itemPortfolio = document.querySelector(".Gallery");
const itemContact = document.querySelector(".Contact");

const itemImgMenu = document.querySelector(".img-menu");

const descriptionHome = document.querySelector(".descripcion");
const about = document.querySelector(".about")

btnMenu.addEventListener("click", () =>{
   clickBtnMenu();
   console.log(estadoMenu);
})


btnCerrarMenu.addEventListener("click", () =>{
    clickBtnMenu();
    console.log(estadoMenu);
})

const clickBtnMenu = () => {
    estadoMenu = !estadoMenu;

    if(estadoMenu === true) {
        contendorMenu.style.display = "flex";
    }else{
        contendorMenu.style.display = "none";
    }

}
//Home
itemHome.addEventListener("mouseover", (e) => {
    itemImgMenu.src = "../img/foto-1.jpg";
})

//About
itemAbout.addEventListener("mouseover", (e) => {
    itemImgMenu.src = "../img/foto-about.jpg";
})

//Service
itemServices.addEventListener("mouseover", (e) => {
    itemImgMenu.src = "../../img/foto-service.jpg";
})

//Portfolio
itemPortfolio.addEventListener("mouseover", (e) => {
    itemImgMenu.src = "./img/foto-portfolio.jpg";
})

//Contact
itemContact.addEventListener("mouseover", (e) => {
    itemImgMenu.src = "../../img/foto-contacto.jpg";
})