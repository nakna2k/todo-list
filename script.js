const fieldBtn = document.getElementById("btnSubmit")
const fieldTitle = document.querySelector("#FieldTitle")
const fieldDesc = document.querySelector('#FieldDesc')

const toggleBtn = document.querySelector(".show-pane-btn")
const noteForm = document.querySelector(".addNotePane")

const addNote = () =>{
    
    createCard(fieldTitle.value,fieldDesc.value);
    fieldTitle.value = "";
    fieldDesc.value = "";
    toggle();
}

fieldBtn.addEventListener("click",addNote);

const toggle = () => {
    noteForm.classList.toggle("showNoteForm");
    
}
toggleBtn.addEventListener("click",toggle);



const  createCard = (titleText, descText) =>{
    const tasksBox = document.querySelector("#TasksBox");

    const task = document.createElement("article");
    task.classList.add("taskCard");

    const title = document.createElement("h3");
    title.textContent = titleText;

    const desc = document.createElement("p");
    desc.textContent = descText;

    tasksBox.appendChild(task);
    task.appendChild(title);
    task.appendChild(desc);

}


// const showInfo = () => console.log("Kliknieto");



