import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
    
   /* const rowRendere = useCallback(({index, key, style})=>{
        const todo = todos[index];
        return(<TodoListItem 
            todo={todo} 
            key={todo.id} 
            onRemove={onRemove} 
            onToggle={onToggle}
            style = {style}/>
            )
    },[todos, onRemove, onToggle]);
*/
    
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}
export default React.memo(TodoList);