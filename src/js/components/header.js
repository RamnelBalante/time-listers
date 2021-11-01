import makeElement from "../utils/makeElement"


const header = function (title = "uiHeader", className = "heading"){
    const template = ` <h1 class="${className}">${title}</h1>`
    const element = makeElement(template)
    console.log(element.nodeType)

    return makeElement(template)
}

export default header