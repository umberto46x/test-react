

/* use state, use effet, use ref */

import { useEffect, useRef, useState } from "react"


export function ToDo (){
    // states
const [toDoCount,setToDoCount] = useState(0)
const [toDo,setToDo] = useState([])
const [addButton,setAddButton] = useState(true)


    // effects
useEffect (()=>{




},[toDoCount])

    // refs
const buttonRef = useRef<HTMLButtonElement | null>(null)
const textRef = useRef<HTMLInputElement | null>(null)

    return(
        <div className="container mt-5">
                <h2 className="d-block text-center">To Do List</h2>
                <label htmlFor="todoInput" className="me-5">Insert a To Do</label>
                <input type="text" className="me-2" name="todoInput" id="todoInput" ref={textRef} />
                <button ref={buttonRef}>Add</button>
        </div>
    )
}