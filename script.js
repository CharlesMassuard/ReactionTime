texte = document.getElementById("wait");
indication = document.getElementById("indication");
finish = false;

window.addEventListener('load', function() {
    lancerLeJeu();
});

function lancerLeJeu(){
    duree_attente = getRandomArbitrary(2000, 15000);
    this.setTimeout(function() {
        document.body.style.backgroundColor = "green";
        texte.innerHTML = "Cliquez sur l'écran";
        texte.removeAttribute("id");
        start = new Date().getTime();
        document.addEventListener("click", function(){
            end = new Date().getTime();
            temps = (end - start);
            texte.innerHTML = "Votre temps de réaction est de " + temps + "ms";
            indication.style.display = "block";
            finish = true;
        })
    }, duree_attente);
}

document.addEventListener("click", function(){
    if(finish == false){
        texte.innerHTML = "Trop tôt";
        texte.removeAttribute("id");
        finish = true;
    } else {
        finish = false;
        document.body.style.backgroundColor = "red";
        texte.innerHTML = "Attendez que l'écran devienne vert";
        texte.setAttribute("id", "wait");
        lancerLeJeu();
    }
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  