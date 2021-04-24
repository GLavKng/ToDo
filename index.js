const addButton = document.querySelector("#addButton");
const input = document.querySelector("#input");
const toDoList = document.querySelector(".toDoList");
let notes = [];

function addNotice() {
    if (input.value !== "") {
        notes.push(input.value);
        localStorage.setItem("notes", JSON.stringify(notes));
        input.value = "";
        location.reload();
        return false;
    }
    else {
        alert("Ați introdus o notiță goală!")
    }

}

function getNotes() {
    if (JSON.parse(localStorage.getItem("notes")) !== null) {
        notes = JSON.parse(localStorage.getItem("notes"));
        for (let i = 0; i < notes.length; i++) {
            noteCreator(notes[i], i);
        }
    }
}

function noteCreator(e, i) {
    const note = document.createElement("div");
    const ContentNote = document.createElement("div");
    const del = document.createElement("div");
    const ready = document.createElement("div");
    const button = document.createElement("div");

    note.classList.add("note");
    ContentNote.classList.add("ContentNote");
    del.classList.add("del");
    ready.classList.add("ready");
    button.classList.add("buttons");

    del.addEventListener("click", () => {
    
    if(confirm("Are you sure you want to delete the note?")){
      deleteNote(i);  
    }
        
    })
        

    ready.addEventListener("click", () => {
        deleteNote(i);
    })

    const newContentNote = document.createTextNode(e);
    const delContentNote = document.createTextNode("X");
    const readyContentNote = document.createTextNode("✔");

    ContentNote.appendChild(newContentNote);
    del.appendChild(delContentNote);
    ready.appendChild(readyContentNote);
    button.appendChild(del);
    button.appendChild(ready);
    note.appendChild(ContentNote);
    note.appendChild(button);
    toDoList.appendChild(note);
}
const deleteNote = (i) => {
    
    notes.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    location.reload();
    return false;
}
getNotes();
addButton.addEventListener("click", addNotice);