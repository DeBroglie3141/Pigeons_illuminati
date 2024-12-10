btn1.addEventListener('click', changerTexte);
btn2.addEventListener('click', submitTexte(this.form));

function changerTexte(){
    document.getElementById('textecaché1').innerHTML = 'Renseignez vos infos personnelles...'
}


function submitTexte(f){
    console.log(f.poste_préféré.value)
}

console.log("Hello World!")
