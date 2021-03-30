import React, {useCallback, useState} from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert, onChangeInput, input }) => {
    
    const onChange = useCallback(e => {
        onChangeInput(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            onInsert(input);
            onChangeInput('');
        },
        [onInsert, input],
    );

    return(
    <form className="TodoInsert" onSubmit={onSubmit}>
        <input placeholder="할 일을 입력하세요" onChange={onChange} value={input}/>
        <button type="submit">
            <MdAdd />
        </button>
    </form>
    )
}

export default TodoInsert;