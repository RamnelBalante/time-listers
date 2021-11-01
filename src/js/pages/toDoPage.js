import directory from '../components/cards/todolist'
import makeElement from '../utils/makeElement'
import link from '../components/ui/link'
import button from "../components/ui/button"
import logo from "../components/icons/logo"
import header from "../components/header"
import tagline from "../components/tagline"
import {getStore} from '../redux/store'
import { todoTemplate } from '../components/cards/todoitem'
import brand from '../components/brand/brandingHeader'
import addToDo from '../components/addToDo'

const todoPage = function(){
    const page = document.createElement('div')
    const brnd = brand('header')
    const add = addToDo()
    const container = directory()
    const employeeList = getStore()

    if(employeeList.length !== 0){
      const elements =  employeeList.map(emp=>{
             return todoTemplate(emp) 
        })
      const ul = container.querySelector('#todolist')
      elements.forEach(elm=>{
          ul.append(elm)
      })
      page.append(brnd)
      page.append(container)
      page.append(add)
    }
    
   
    
    return page
}

export default todoPage