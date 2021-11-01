import {Router} from "../../routes/router";
import makeElement from "../../utils/makeElement"

const onRequestPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path);
    return false;
}

const link = function (label="ui link", path="/", className="ui-class"){
    const template = `<a href="${path}" class="${className}"data-path="${path}">${label}</a>`
    const element = makeElement(template)
    element.addEventListener('click', onRequestPage)

    return element
     
}

export default link