import makeElement from "../../utils/makeElement";

const remove = function () {
     const template = `<button class="edit"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
   </svg><p>Delete Category</p></button>`
     const element = makeElement(template);

     return element

     
}

export default remove