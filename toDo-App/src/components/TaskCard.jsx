import React from "react";

function TaskCard({data}) {
     console.log(data);
     
    const handleEdit = () => {
        let input = document.getElementById("task-in")
        input.value = data.toDo;
      }
    const handleDelete = () => {
       
    }
  return (
    <div key={data.toDo} className="todo flex justify-between bg-violet-100 my-1 px-1 rounded items-center text-[red]">
      <div className="flex gap-2 items-center">
      <input type="checkbox" name="" id="" className="bg-red-600" />
      <div className={data.isDone ? "line-through":""}>{data.toDo}</div>
      </div>
      <div className="buttons flex gap-5">
        <button className="bg-slate-500 rounded text-white px-2 cursor-pointer my-2" onClick={handleEdit}>
          Edit
        </button>
        <button className="bg-slate-500 rounded text-white px-2 cursor-pointer my-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
