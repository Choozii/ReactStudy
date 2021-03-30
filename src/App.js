import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import ContainerTodoList from './containers/ContainerTodoList'


const App = () => {
  

  return <TodoTemplate>
    <ContainerTodoList />
  </TodoTemplate>
}

export default App;