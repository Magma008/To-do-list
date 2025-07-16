const input = document.getElementById("input")
const createBtn = document.getElementById("createBtn")
const ul = document.getElementById("ul")
const deleteAll = document.getElementById("deleteAll")
const edit = document.getElementById("edit")
const del = document.getElementById("del")
let todoList = []
let key = 0



createBtn.addEventListener("click", () => {
    let inputText = `${input.value}`
    if (inputText.trim() != "") {
        todoList.push({
            id: key += 1,
            todoText: inputText.trim()
        })
    // todoList.forEach((newElem) => {
    //     localStorage.setItem(`Elem${newElem.id}`, JSON.stringify(newElem.todoText))
    // })

    addElems()
} else {
    alert("Enter something...")
}
    input.value = ""
    console.log(todoList);
})

const clearAll = () => {
    confirm("Are you really want to erase all of this?!") ? ul.innerHTML = "" : ul
    input.value = ""
    localStorage.clear()
}

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        ul.removeChild(e.target.parentElement.parentElement.parentElement)
        // let b = (e.target.parentElement.parentElement.parentElement.getAttribute("key"));
        // localStorage.removeItem(`Elem${b}`)
    }
})

const addElems = () => { 
    ul.innerHTML = ""
    todoList.forEach((elem) => {
        ul.innerHTML += `
        <li class="elem" key=${elem.id}>
        <p>${elem.todoText}</p>
        <div>
                    <button id="edit" type="button" class="btns pencil"><img src="Images/pencil.png" class="edit  alt="Edit"></i> </button>
                    <button id="del" type="button" class="btns"><img src="Images/trash.png" class="delete" alt="Delete"></button>
            </div>
        </li>
        `
    })
    input.value = ""
}

// localeList = localStorage.getItem("Elem")

// try {
//     todoList = localeList ? JSON.parse(localeList) : []
// } catch (error) {
//     console.log("Local Storage data type error!!!");
// }
// addElems()