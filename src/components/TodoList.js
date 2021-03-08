// your components will all go in this `component` directory.
// feel free to change this component into TodoList

import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return(
        <div>
            <div className='todo-list'>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleItem} />
            ))}
            
            
          
                <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed</button>
            </div>
        </div>
    )
}

export default TodoList