import makeElement from "../utils/makeElement";


const tagline = function (tagline = "uiTagline", className = "classtag"){
    const template = ` <p class="${className}">${tagline}</p>`
    const element = makeElement(template)
    console.log(element.nodeType)

    return makeElement(template)
}

export default tagline