let btn = document.getElementById("btn");
let lamp = document.getElementById("lampImg");

btn.addEventListener ("click", () => {

    if (lamp.src.includes("yellow_lamp.png")) {
        btn.innerHTML = "Accendi";
        lamp.src = "./img/white_lamp.png";
    } else {
        btn.innerHTML = "Spegni";
        lamp.src = "./img/yellow_lamp.png";
    }

} );