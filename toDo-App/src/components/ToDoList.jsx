import React from "react";
import ToDoItem from "./ToDoItem.jsx";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [toEdit,setEdit] = useState(null);
  const handleChange = (e) => {
    setToDo(e.target.value);
  };

  const handleClick = () => {
    if(toDo == "") return alert("add task first then press [add+]");
    if (toEdit) {
      
      const updatedTask = toDoList.find((task) => task.id === toEdit);
      updatedTask.toDo = toDo;
      setToDoList([...toDoList]);
      setEdit(null);
      setToDo("");
    } else {
      // Add a new task
      setToDoList([...toDoList, { toDo, isDone: false, id: uuidv4() }]);
      setToDo("");
    }
  };
  const checkKey = (e) => {
      if(e.key == 'Enter'){
        handleClick();
      }
  }
  const handleCheck = (id) =>{
    const updatedTasks = toDoList.map((toDo)=>{
       return toDo.id == id ? {...toDo,isDone: !toDo.isDone}:toDo
    })
    setToDoList(updatedTasks);
    
  }

  const handleDelete = (id) => {
     confirm("Are you sure you want to remove this task?");
     const updatedTasks = toDoList.filter((toDo)=>{
       return toDo.id != id;
     });
     setToDoList(updatedTasks);
  }
  const handleEdit = (id) => {
    setEdit(id);
    const taskToEdit = toDoList.find((task) => task.id === id);
    setToDo(taskToEdit.toDo);
  };
  return (
    <React.Fragment>
      
      <div className="container mx-auto bg-violet-200 my-5 rounded p-5 min-h-[80vh] flex  flex-col md:w-1/3 max-lg:text-2xl">
        <div className="addTodo">
         
          <h2 className="text-lg font-bold">Add a Todo</h2>

          <div className="flex gap-1">
            <input
              type="text"
              className="rounded outline-none px-2 py-1 w-96"
              placeholder="Add a new task"
              onChange={handleChange}
              id="task-in"
              value={toDo}
              onKeyDown={checkKey}
            />
            <button
              className="bg-slate-500 rounded text-white px-2 cursor-pointer"
              onClick={handleClick}
            >
              Add+
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">Your Todos</h2>

          <div className="todos">
          {toDoList.length === 0 && <div>No tasks to display</div>}
            {toDoList.map((item) => {
              return < ToDoItem data={item} key={item.id} onCheck={handleCheck} onDelete={handleDelete} onEdit={handleEdit}/>;
            })}
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default ToDoList;
