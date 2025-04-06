import { useState } from "react";

function addToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }
  const handleDateChange = (event) => {
    setDueDate(event.target.value)
  }
  const handleAddButtononClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  }
  return <div className="row">
    <div className="col-6">
      <input value={todoName} type="text" placeholder="Enter ToDo here" onChange={handleNameChange}></input>
    </div>
    <div className="col-4">
      <input value={dueDate} type="date" onChange={handleDateChange}></input>
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success" onClick={handleAddButtononClicked}>Add</button>
    </div>
  </div>
}
export default addToDo;