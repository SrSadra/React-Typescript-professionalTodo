import { Todo } from "../model"
import { SingleTodo } from "./singleTodo";

interface Props {
    todos : Todo[];
    addTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList1 : React.FC<Props>  = ({todos , addTodos} : Props)  => { // React.Fc should have input param as it is in our function
    return (
        <div className="todo">
            {todos.map((el) => {
                <SingleTodo />
            })}
        </div>
    )
}


