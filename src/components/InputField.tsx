import React, { useRef } from "react"
import "./styles.css"

interface TodoProp {
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>
    addTodos : (e : React.FormEvent) => void
}



export const InputField : React.FC<TodoProp> = ({todo , setTodo , addTodos} : TodoProp) => {
    const inputRef = useRef<HTMLInputElement>(null) // react hooks should always be called inside components

    return <form className="input" onSubmit={(e) => { // onSubmit has event as input so we should pass it for addTodos 
        addTodos(e);
        inputRef.current?.blur();
    }}>
        <input ref={inputRef} type={"text"} className="input_box"></input>
        <button className="input_submit" onClick={(event) => setTodo(event.target.value)}>go</button>
    </form>
}