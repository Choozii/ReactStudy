import React, { useCallback } from 'react';
import TodoInsert from '../components/TodoInsert'
import TodoList from '../components/TodoList'
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, changeInput, toggle } from '../modules/TodoList'

const ContainerTodoList = () => {
    const dispatch = useDispatch();
    const input = useSelector(state => state.todoList.input);
    const todos = useSelector(state => state.todoList.todos);

    const onInsert = useCallback(text => dispatch(add(text)),[dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)),[dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)),[dispatch]);
    const onChangeInput = useCallback(input => dispatch(changeInput(input)),[dispatch]);
    
    return (
        <>
        <TodoInsert onChangeInput={onChangeInput} onInsert={onInsert} input={input}/>
        <TodoList todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}/>
        </>
    );
};

export default ContainerTodoList;