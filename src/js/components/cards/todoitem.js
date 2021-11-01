import makeElement from "../../utils/makeElement"
import edit from "../ui/editButton"
import remove from "../ui/deleteButton"

const todoTemplate = function ({id,category,title,isCompleted,endDate}) {
const edt = edit()
const del = remove()
    const template =   `
     <li class="${category}" data-key="${id}">
        <div class="list-item">
            <h2>${title}</h2> 
            <p class="${isCompleted}">completed</p> 
            <p>${endDate}</p>
        </div>
     </li>
    `
const temp = makeElement(template)
temp.append(edt)
temp.append(del)

return temp
}

export {todoTemplate}