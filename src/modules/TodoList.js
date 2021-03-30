import { createAction, handleActions } from 'redux-actions';

export const ADD = 'todoList/ADD';
export const REMOVE = 'todoList/REMOVE';
export const TOGGLE = 'todoList/TOGGLE';
export const CHANGEINPUT = 'todoList/CHANGEINPUT'
let id = 4;

export const add = createAction(ADD, input => ({
    id : id++,
    text: input,
    checked : false,
}));
export const remove = createAction(REMOVE, id => (id));
export const toggle = createAction(TOGGLE, id => (id));
export const changeInput = createAction(CHANGEINPUT, input => (input));

const initialState = 
{
    input:'',
    todos :[
        {
        id : 1,
        text : `dummy 1`,
        checked : false,
        },
        {
        id : 2,
        text : `dummy 2`,
        checked : false,
        },
        {
        id : 3,
        text : `dummy 3`,
        checked : false,
        },
    ]
};

const todos = handleActions({
    [ADD]:(state, action) => ({...state, 
        todos : state.todos.concat(action.payload)}),
    [REMOVE]:(state, action) => ({...state, 
        todos : state.todos.filter(todo => action.payload !== todo.id)}),
    [TOGGLE]:(state, action) =>  ({...state, todos : state.todos.map(todo => todo.id === action.payload
        ?{...todo, checked:!todo.checked}
        :todo)}),
    [CHANGEINPUT]:(state, action) => ({...state, 
        input : action.payload})
},initialState)

export default todos;