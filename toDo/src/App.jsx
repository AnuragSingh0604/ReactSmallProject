import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";

function App() {
  const todoItems = [{
    name: "Buy milk",
    dueDate: "04/10/2023"
  }, {
    name: "Go To College",
    dueDate: "05/10/2023"
  }]


  return (
    <center className="todo-container">
      <AppName />
      <div className="container text-center">
        <AddToDo></AddToDo>
        <ToDoItems todoItems={todoItems} ></ToDoItems>


      </div>

    </center>
  )
}

export default App
