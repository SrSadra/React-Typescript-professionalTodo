import { Todo } from "../model"
import {FiEdit3} from "react-icons/fi"
import {MdDelete} from "react-icons/md"
import {BsCheckLg} from "react-icons/bs"
import React, { useEffect, useRef, useState } from "react"
import { Draggable } from "react-beautiful-dnd"


type singleProp = {
    index : number; // ??
    todo: Todo,
    todos : Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}






export const SingleTodo : React.FC<singleProp> = ({index ,todo , todos, setTodos}) => {
    const [edit , setEdit] = useState(false);
    const [editValue , setEditValue] = useState(todo.title);

    const inputRef = useRef<HTMLInputElement>(null); // we take the ref type from tag we refrence to

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    function doneFunc(){
        setTodos(todos.map((el) => { // in map you always have a return for each element
            if (el.id === todo.id) {
                return {...todo , isDone : true}; 
            }
            else {
                return el;
            }
        }));
    }

    function handleEdit(event : React.FormEvent , id : number){
        event.preventDefault(); // it stops default action of an event from happening (stops subbmitting the form)
        setTodos(todos.map((el) => {
            if (el.id === id) {
                return {...todo , title : editValue};
            }
            return todo;
        }));

        setEdit(false);
    }

    function deleteFunc(){
        console.log("alo");
        setTodos(todos.filter((element) => element.id !== todo.id));
    }

    return (
        <Draggable draggableId={todo.id.toString()} index={index} >
            {
                (provided) => (
                    <form className="todo-form" onSubmit={(e) => handleEdit(e , todo.id)} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}> {/*Wrapping the elements inside parentheses can make it clear that the entire expression represents a single unit to be rendered. */}
                    { edit ? (<input ref={inputRef} value={editValue} onChange={(e) => setEditValue(e.target.value)}></input>):
                    (todo.isDone ? 
                    (<s className="todo-name">{todo.title}</s>) 
                    :
                    (<div  className="todo-name">{todo.title}</div>)
                    )}
                    <div>
                        <span className="todo-prop" onClick={() => {
                            if (!edit && !todo.isDone){
                                setEdit(true);
                            }
                        }
                        }> <FiEdit3 /></span>
                        <span className="todo-prop" onClick={() => deleteFunc()}> <MdDelete /></span>
                        <span className="todo-prop" onClick={() => doneFunc()}><BsCheckLg /></span> {/*if you dont want to use event as onlick param you should use it like this */}
                    </div>
                </form>
                )
            }

        </Draggable>
    )
}