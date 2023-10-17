import React, { useState } from 'react';
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



  function addTodos (){
    if (todo) {
      setTodos([...todos , {id : Date.now() , title : todo , isDone : false}]);
      setTodo("");
    }
  }


  return (
    <div className="App">
      <InputField todo={todo} setTodo={setTodo} addTodos={addTodos}/>
      <TodoList todos={todos} addtodos={addTodos}/>
    </div>
  );
}

export default App;
