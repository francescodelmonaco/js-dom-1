let btn = document.getElementById("btn");
let lamp = document.getElementById("lampImg");

btn.addEventListener ("click", () => {
    btn.innerHTML = "Spegni";
    lamp.src = "./img/yellow_lamp.png";
} )