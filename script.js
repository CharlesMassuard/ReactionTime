texte = document.getElementById("wait");
indication = document.getElementById("indication");
finish = false;
en_cours = false;
en_attente = false;

window.addEventListener('load', function() {
    lancerLeJeu();
});

function lancerLeJeu(){
    duree_attente = getRandomArbitrary(2000, 6000);
    en_cours = true;
    en_attente = true;
    this.setTimeout(function() {
        if(en_cours){
            document.body.style.backgroundColor = "green";
            texte.innerHTML = "Cliquez sur l'écran";
            start = new Date().getTime();
            en_attente = false;
            document.addEventListener("click", function(){
                if(en_cours && !finish){
                    end = new Date().getTime();
                    temps = (end - start);
                    texte.innerHTML = "Votre temps de réaction est de " + temps + "ms";
                    indication.style.display = "block";
                    finish = true;
                    en_cours = false;
                }
            })
        }
    }, duree_attente);
}

document.addEventListener("click", function(){
    if(!finish && en_attente){
        texte.innerHTML = "Trop tôt";
        finish = true;
        en_cours = false;
    } else if(finish && !en_cours){
        document.body.style.backgroundColor = "red";
        indication.style.display = "none";
        texte.innerHTML = "Attendez que l'écran devienne vert";
        lancerLeJeu();
        finish = false; 
    }
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  