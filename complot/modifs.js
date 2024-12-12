btn1.addEventListener('click', changerTexte);

function changerTexte(){
    document.getElementById('textecaché1').innerHTML = 'Renseignez vos infos personnelles...'
}


console.log("Hello World!")

function affiche() {
    const nom = document.getElementsByName('nom')[0].value;
    const prenom = formul.prenom.value;
    const cb = formul.cb.value;
    const villeD = formul.depart.value;
    const lieupref = formul.poste.value;
    var txt = "";
    for (let i=6; i<10; i++){
        if (formul[i].checked) {
            txt += formul[i].value;
        }
    }
    var pigeon_bool = "n'êtes pas un pigeon !";
    if ((txt === "pigeon") && (lieupref == "Près du siège des illuminatis")) {
        pigeon_bool = "êtes un pigeon !";
    }
    alert("Bienvenue " + prenom + " " + nom + "\n\nVos identifiants de CB sont : " + cb + "\n\nVos caractéristiques physiques indiquent que vous êtes un : " + txt + "\n\nVotre poste préféré est '" + lieupref + "'\n\nDonc vous......... " + pigeon_bool);
}