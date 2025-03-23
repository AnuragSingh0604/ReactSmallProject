import TodoItem from "./TodoItem";
function todoItems({ todoItems }) {
  return (
    todoItems.map((item) =>
      <TodoItem todoName={item.name} todoDate={item.dueDate} ></TodoItem>)
  );

}
export default todoItems;