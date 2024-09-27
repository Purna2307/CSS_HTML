const contenu = document.getElementById('contenu');
const texte = document.getElementById('texte');
var cpt = 0;

const changements = {
    '\n' : '<br/>',
    ';)' : '&#x1F609',
    ':(' : '&#128545;',
    ':)' : '&#128512;',
    'mdr' : '<i>mort de rire</i>',
    'jpp' : '<i>j\'en peux plus</i>',
    'omg' : '<i>oh ! mon dieu !</i>'
};
  
function remplacer(matched) {
    return changements[matched];
}

function ajouter() {
    if(texte.value != "") {
        cpt++;
        
        //str = texte.value.replace("\n", "<br/>");
        //str = texte.value.replace(/\n/g, "<br/>");
        //str = texte.value.replace(/\n|;\)/g, remplacer);
        str = texte.value.replace(/\n|;\)|:\(|:\)|mdr|jpp|omg/g, remplacer);
        
        if(cpt % 2 == 0)
            contenu.innerHTML += "<div class=\"message gauche\">" + str + "</div>";
        else
            contenu.innerHTML += "<div class=\"message droite\">" + str + "</div>";
        
        texte.value = "";
        texte.focus();
        contenu.scrollTop = contenu.scrollHeight;
    }
}

function inserer(chaine) {
    var position = texte.selectionStart;
    var contenu = texte.value;
    
    texte.value = contenu.substring(0, position) + chaine + contenu.substring(position, contenu.length);
    texte.focus();
}

function capturer(e) {
    var key = e.which;
    if(key == 13) {
        e.preventDefault();
        ajouter();
    }
}