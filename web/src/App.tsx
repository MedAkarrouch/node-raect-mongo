import "./App.css"
import Todos from "./todos/Todos"
import AddTodo from "./todos/AddTodo"

function App() {
  return (
    <>
      <h1>Todo App</h1>
      <div className="wrapper">
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
