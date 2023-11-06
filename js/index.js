const btnMenu = document.querySelector(".btn-menu");
const btnCerrarMenu = document.querySelector(".boton-cerrar");
const contendorMenu = document.querySelector(".contenedor-menu");
const menuContainer = document.querySelector(".nav-cantainer");
const logo = document.querySelector(".logo");
let estadoMenu = false;

const itemHome = document.querySelector(".home");
const itemAbout = document.querySelector(".About");
const itemServices = document.querySelector(".Services");
const itemPortfolio = document.querySelector(".Portfolio");
const itemContact = document.querySelector(".Contact");

const itemImgMenu = document.querySelector(".img-menu");


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
        btnMenu.style.display = "none";
        contendorMenu.style.display = "flex";
        logo.style.display = "none";
    }else{
        btnMenu.style.display = "block";
        contendorMenu.style.display = "none";
        logo.style.display = "flex";
    }

}

itemHome.addEventListener("mouseover", (e) => {
    itemImgMenu.src = "../img/foto-1.jpg"
    console.log("sobre Home");
})

itemAbout.addEventListener("mouseover", (e) => {
    itemImgMenu.src = "../img/foto-about.jpg"
    console.log("sobre About");
})

itemServices.addEventListener("mouseover", (e) => {
    itemImgMenu.src = "../img/foto-service.jpg";
    console.log("sobre Services");
})

itemPortfolio.addEventListener("mouseover", (e) => {
    itemImgMenu.src = "../img/foto-portfolio.jpg"
    console.log("sobre Portfolio");
})

itemContact.addEventListener("mouseover", (e) => {
    itemImgMenu.src = "../img/foto-contacto.jpg"
    console.log("sobre Contact");
})