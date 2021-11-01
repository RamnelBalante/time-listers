import button from "./ui/button";
const addToDo = function() {

const foot = document.createElement('footer')
const btn = button("Add","add-button")
foot.append(btn)

return foot

}
export default addToDo