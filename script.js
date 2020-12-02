let tab = [];

let submit = document.getElementById("submit");
let add = document.getElementById("element-list");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (add.value.trim() === "") {
        document.getElementById("alert").textContent = "Veuillez saisir un element";
    } else {
        addList(add.value);
    }
    document.getElementById('element-list').value = "";
})

function addList(add) {
    tab.push(add);
    affichage();
}

function deleteList(id) {
    tab.splice(id, 1);
    affichage();
}

function affichage() {
    document.getElementById("list").innerHTML = "";

    let list = document.getElementById('list');

    let li;
    let button;

    for (let i = 0; i < tab.length; i++) {
        li = document.createElement('li');
        button = document.createElement('button');

        button.textContent = " - ";

        button.setAttribute('class', 'btn btn-danger');
        button.setAttribute('onclick', 'deleteList(' + i + ')');

        li.textContent = tab[i];
        li.style.color = 'red';

        li.appendChild(button);

        list.appendChild(li);
    }
}