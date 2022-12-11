
const Todoitem = ({todo, onDelete, onEdit }) => {
    return(
        <div className="items">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.date}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
            <button className="btn btn-sm btn-primary mx-2" onClick={() => {onEdit(todo)}}>Edit</button>
        </div>
    );
}
export default Todoitem;