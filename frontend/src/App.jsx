import { useEffect, useState } from "react"
import { CreateTodo } from "./component/CreateTodo"
import { Todos } from "./component/Todos"
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/todo")
      .then((response) => {
        response.json()
          .then((data) => {
            setTodos(data);
          })
      });
  }, [todos])
  return (
    <div style={{display:"flex", gap: "100px"}}>
      <div>
        <CreateTodo setTodos={setTodos} todos={todos} />
      </div>
      <div>
        <Todos setTodos={setTodos} todos={todos} />
      </div>
    </div>
  )
}

export default App
