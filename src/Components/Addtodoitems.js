import React from 'react'
import { useState } from 'react';

export const Addtodoitems = (todo) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const add = (event) => {
        event.preventDefault();
       if(!title || !description || !date){
        alert("Please fulfil the requirments");  
       }
       else{
        todo.addTodo(title, description, date);}
       }
    return (
        <div id="form" className="container my-3">
            <h2 className="text-center">Add ToDo</h2>
            <form onSubmit={add}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(event)=>{setTitle(event.target.value)}} id="title" placeholder="Enter Title for your ToDo Item" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" value={description} onChange={(event)=>{setDescription(event.target.value)}} id="description" placeholder="Enter ToDo Description" />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Due Date</label>
                    <input className="form-control" id="date" value={date} onChange={(event)=>{setDate(event.target.value)}} placeholder="MM/DD/YYY" type="text" />
                </div>
                <button type="submit" className="btn btn-sm btn-primary my-2">Add</button>
            </form>
        </div>

    );
}
export default Addtodoitems;