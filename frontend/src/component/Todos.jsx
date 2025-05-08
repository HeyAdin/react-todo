export function Todos({ todos , setTodos}) {
        return todos.map((todo) => {
                return <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={() => {
                                fetch("http://localhost:3002/completed", {
                                        method: "PUT",
                                        headers: {
                                                "Content-type": "application/json"
                                        },
                                        body: JSON.stringify({
                                                id:todo._id
                                        })
                                })
                                        .then(async (res) => {
                                                const json = res.json();
                                                alert("completed");

                                        });
                                        
                        }}>{todo.completed == true ? "Done" : "Mark as done"}</button>
                </div>
        })
}