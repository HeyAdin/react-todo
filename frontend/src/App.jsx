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
  }, [])
  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  )
}

export default App
