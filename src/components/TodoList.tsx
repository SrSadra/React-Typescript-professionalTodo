import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model"
import { SingleTodo } from "./singleTodo";

interface Props {
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos : Todo[];
    setCompleted : React.Dispatch<React.SetStateAction<Todo[]>>;

}

export const TodoList : React.FC<Props>  = ({todos , setTodos , completedTodos , setCompleted})  => { // React.Fc should have input param as it is in our function
    return (
        <div className="container">
            <Droppable droppableId="TodoListt">
                { (provided) => (
                    <div className="todos-active" ref={provided.innerRef} {...provided.droppableProps}>
                    <span className="container-span">active Tasks</span>
                    {todos.map((el , index) => ( // we should use () instead of {}
                        <SingleTodo todo={el} todos={todos} setTodos={setTodos} index={index}/> // the name of param and the name of its variable should be same
                    ))}
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="CompletedListt">
                {
                    (provided) => (
                        <div className="todos-completed" ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="container-span">completed Tasks</span>
                            {completedTodos.map((el , index) => ( // we should use () instead of {}
                                <SingleTodo todo={el} todos={todos} setTodos={setCompleted} index={index}/> // the name of param and the name of its variable should be same
                            ))}
                            {provided.placeholder} {/*this makes place for droping object */}
                        </div>
                    )
                }
            </Droppable>
        </div>
    )
}


