import React, {useState} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
const App = () =>{
  const [todos, setTodos] = useState([
    {id:1, text:'잠자기', checked : true},
    {id:2, text:'리액트 공부', checked : true},
    {id:3, text:'7시 기상', checked : true},
    {id:4, text:'출근하기', checked : false}
  ]);
  return <TodoTemplate>
    <TodoInsert/>
    <TodoList todos={todos}/>
    </TodoTemplate>
}

export default App;