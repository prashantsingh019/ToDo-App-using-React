import React from "react";
import TaskCard from "./TaskCard";
import { useState } from "react";

function TaskList() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const handleChange = (e) => {
    setToDo(e.target.value);
  };
  const handleClick = () => {
    if(toDo == "") return alert("add task first then press [add+]");
    setToDoList([...toDoList, {toDo,isDone:false}]);
    const input = document.getElementById("task-in");
    input.value = "";
  };

  return (
    <React.Fragment>
      <div className="container mx-auto bg-violet-200 my-5 rounded p-5 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>

          <div className="flex gap-1">
            <input
              type="text"
              className="rounded outline-none px-2 py-1 w-96"
              placeholder="Add a new task"
              onChange={handleChange}
              id="task-in"
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
            {toDoList.map((item) => {
              return <TaskCard data={item} />;
            })}
          </div>
        </div>
      </div>{" "}
      /* container end */
    </React.Fragment>
  );
}

export default TaskList;
