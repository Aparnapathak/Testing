import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  //Add the Todos
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };


  //Update the Todos
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };


  //Delete the Todos
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };


  //Complete the Todos
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div class="container">
      <nav class="navbar navbar-fixed-top">
      </nav>

      <div class="row" id="title">
        <div class="col-md-6">
          <h3>To Do List</h3>
        </div>
        <div class="col-md-6">
          <TodoForm onSubmit={addTodo} />
        </div>
      </div>

      <div class="search">
        <input type="text" placeholder="Search to do" id="search" /><i class="fa fa-search" id="icon" />
      </div>

      <div class="main">
        <h5>To Do</h5>
        <hr></hr>

        <div class="card">
          <div class="card-body">
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
          </div>
        </div>
      </div>


     <div class="main">
        <h5>Completed</h5>
        <hr></hr>

        <div class="card">
          <div class="card-body">
          
           <div class="row">
            <div class="col-md-1">
             <input type="radio" checked="checked" name="radio"/>
             <span class="checkmark"></span>
           </div>
           <div class="col-md-4">
           <p id="completed">Take the scheduled interviews</p>
           </div>
           <div class="col-md-7">
           <p id="grayed">Task Completed on 18 Aug</p>
           </div>
           </div>

           <div class="row">
            <div class="col-md-1">
             <input type="radio" checked="checked" name="radio"/>
             <span class="checkmark"></span>
           </div>
           <div class="col-md-4">
           <p id="completed">Prepare for the coming Assessments</p>
           </div>
           <div class="col-md-7">
           <p id="grayed">Task Completed on 12 Aug</p>
           </div>
           </div>

           <div class="row">
            <div class="col-md-1">
             <input type="radio" checked="checked" name="radio"/>
             <span class="checkmark"></span>
           </div>
           <div class="col-md-4">
           <p id="completed">Make Important Calls for the day</p>
           </div>
           <div class="col-md-6">
           <p id="grayed">Task Completed on 10 Aug</p>
           </div>
           </div>

           <div class="row">
            <div class="col-md-1">
             <input type="radio" checked="checked" name="radio"/>
             <span class="checkmark"></span>
           </div>
           <div class="col-md-4">
           <p id="completed">Take Note of the changes done</p>
           </div>
           <div class="col-md-7">
           <p id="grayed">Task Completed on 8 Aug</p>
           </div>
           </div>


          </div>
        </div>


      </div>
  </div>

  );
}

export default TodoList
