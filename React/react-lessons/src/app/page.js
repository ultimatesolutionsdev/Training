import TodoList from "../components/Example23";
export default function Home() {
  const todoList = [
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
  ];
  return (
    <div>
      <TodoList todos={todoList} />
    </div>
  );
}
