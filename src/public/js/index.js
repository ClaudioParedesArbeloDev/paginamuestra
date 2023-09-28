const background = document.getElementById("background");
const caricatura = document.getElementById("caricatura");
const sidebar = document.getElementById("sidebar");
const redesSociales = document.getElementById("socialmedia");

setTimeout(() => {
    caricatura.style.opacity = 1; 
}, 500); 

setTimeout(() => {
    sidebar.style.opacity = 1; 
}, 1200); 

setTimeout(() => {
    redesSociales.style.opacity = 1; 
}, 1500); 

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX / window.innerWidth;
    
    
    if (mouseX < 0.5) {
       
        background.style.backgroundImage = "url('/img/imagenizquierda.gif')";

    } else {
       
        background.style.backgroundImage = "url('/img/imagenderecha.gif')";
    }
});

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX / window.innerWidth;

   
    if (mouseX < 0.5) {
        
        caricatura.style.opacity = 0.5; 
    } else {
        
        caricatura.style.opacity = 0.5; 
    }
});