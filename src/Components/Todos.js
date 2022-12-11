import React from 'react'
import Todoitem from "./Todoitem";

const Todos = (props) => {
    return (
        <div className="container">
            <h2 className="text-center">Todo's List</h2>
            {props.todos.length === 0 ? "No Todo's to display" :
                props.todos.map((todo) => {
                    return (
                        <>
                            <Todoitem todo={todo} key={todo.title} onDelete={props.onDelete} />
                        </>
                    )
                })
            }
        </div>
    );
}
export default Todos;