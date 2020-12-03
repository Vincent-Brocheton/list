let tab = [];

let submit = document.getElementById("submit");
let lastName = document.getElementById("nom");
let firstName = document.getElementById("prenom");
let table = document.getElementById("listing");

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    if (lastName.value.trim() === "" || firstName.value.trim() === "") {
        document.getElementById("alert").textContent = "Veuillez saisir une identité correcte";
    } else {
        addList(lastName.value, firstName.value);
    }
    lastName.value = "";
    firstName.value = "";
})

function addList(valeur1, valeur2) {
    let add = {
        id: tab.length,
        nom: valeur1,
        prenom: valeur2
    }
    tab.push(add);
    affichage();
}

function affichage() {
    table.innerHTML = "";
    for (let i = 0; i < tab.length; i++) {

        tr = document.createElement('tr');

        tr.innerHTML = `<td>` + tab[i].id + `</td><td>` + tab[i].nom + `</td><td>` + tab[i].prenom + `</td>`;

        table.appendChild(tr);
    }
}