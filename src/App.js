import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import React from 'react';
import { useState } from 'react';
import Footer from './Components/Footer';
import './Components/Footer.css'
import Addtodoitems from './Components/Addtodoitems';
import './Components/Addtodoitems.css';

function App() {
  const onDelete = (todo) => {
    console.log("Delete item",todo);
    setTodos(todos.filter((item) => {
      return item !== todo;
    }));
  }
  const addTodo = (title, description, date) => {
    console.log("Add Todo", title, description, date)
    const todosItems = {
      title: title,
      description: description,
      date: date,
    }
    setTodos([...todos, todosItems]);
  }
  const [todos, setTodos] = useState([]) 
  return (
    <>
    <Header/>
    <Addtodoitems addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
