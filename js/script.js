const menuBarra = document.getElementById("menuBarra");
const mainMenu= document.getElementById("mainMenu");

menuBarra.addEventListener("click", function(){
    if(mainMenu.classList.contains("menu-principal-oculto")){
        mainMenu.classList.add("menu-principal");
        mainMenu.classList.remove("menu-principal-oculto");
    }else{
        mainMenu.classList.remove("menu-principal");
        mainMenu.classList.add("menu-principal-oculto");
    }
   
})