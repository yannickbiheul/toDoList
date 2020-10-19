const form = document.querySelector("form");
const liste = document.querySelector("ul");
const input = document.querySelector("form input");
let toutesLesTaches = [];

form.addEventListener('submit', event => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
        rajouterUneTache(text);
        input.value = '';
    }
})

function rajouterUneTache(texte) {
    const todo = {
        text,
        // La méthode Date.now() renvoie le nombre de millisecondes écoulées depuis le 1er janvier 1970
        id: Date.now()
    }
    afficherListe(todo);
}

function afficherListe(todo) {
    const item = document.createElement("li");
    item.setAttribute("data-key", todo.id);

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.addEventListener("click", tacheFaite);
    item.appendChild(txt);

    const txt = document.createElement("span");
    txt.innerText = todo.text;
    item.appendChild(txt);

    const btn = document.createElement("button");
    btn.addEventListener("click", supprimerTache);
    const img = document.createElement("img");
    
}