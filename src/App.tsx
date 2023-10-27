import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { Todo } from './model';


let arr: [number , string] = [12 , "alooo"];

let arr2: (string | boolean | number)[] = [12 , "aloosd", true];

type Person = {
  name : string;
  age? : number;
}

let tmp : Person = {
  name : "hello",
}

// let helloPrint : Function;

// function helloPrint(str : string){
//   console.log(`hellloooo ${str}`);
// }

type Animal = {
  type : string;
  age : number;
}

type tmp2 =  Animal & Person & {
  number : number
}

let tmp1 = () => 3;




const App : React.FC  = () => { // since App is react component so we decleare it as FC  
  const [todo , setTodo] = useState<string>("") // the input should always be string
  const [todos , setTodos] = useState<Todo[]>([]);
  const [completedTodos , setCompleted] = useState<Todo[]>([]);



  function addTodos (){
    if (todo) {
      setTodos([...todos , {id : Date.now() , title : todo , isDone : false}]);
      setTodo("");
    }
  }


  function onDragEnd(result : DropResult){
    console.log(result);

    const {destination , source} = result;

    if (destination == null){
      return;
    }
    if (destination.droppableId === source.droppableId){
      return;
    }

    let completed = completedTodos , active = todos;
    if (destination.droppableId === 'TodoListt' && source.droppableId === 'CompletedListt'){
      let tmp = completed[source.index];
      completed.splice( source.index , 1); // index is row number in table
      active.push(tmp);
    }
    if (destination.droppableId === 'CompletedListt' && source.droppableId === 'TodoListt'){
      let tmp = active[source.index];
      active.splice(source.index , 1);
      completed.push(tmp);
    }
    setCompleted(completed);
    setTodos(active);
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <InputField todo={todo} setTodo={setTodo} addTodos={addTodos}/>
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompleted={setCompleted}/>
    </div>
    </DragDropContext>
  );
}

export default App;
