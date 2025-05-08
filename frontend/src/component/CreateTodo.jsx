import { useState } from "react";
export function CreateTodo({ setTodos, todos }) {
    const [titileInput, setTitleInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");

    return <div>
            <input style={{
                margin: "10px 0",
                padding: "10px 8px",
                fontSize: "17px",
                border: "none",
                borderBottom: "2px solid gray",
                fontFamily: "monospace"
            }} onChange={(e) => {
                setTitleInput(e.target.value);
                console.log(titileInput);
            }} type="text" placeholder="title" /> <br />
            <input style={{
                margin: "10px 0",
                padding: "10px 8px",
                fontSize: "14px",
                border: "none",
                borderBottom: "2px solid gray",
                fontFamily: "monospace"
            }} onChange={(e) => {
                setDescriptionInput(e.target.value);
                console.log(descriptionInput)
            }} type="text" placeholder="description" /> <br />
            <button type={"submit"} style={{
                margin: "10px 0",
                padding: "10px 8px",
                fontSize: "17px",
                fontFamily: "monospace"
            }} onClick={() => {
                fetch("http://localhost:3002/create-todo", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        title: titileInput,
                        description: descriptionInput
                    })
                })
                    .then(async (res) => {
                        const json = await res.json();
                        alert("todo added");
                    })
                setTodos([...todos, {
                    title: titileInput,
                    description: descriptionInput
                }]);
            }}>Add todo</button>
    </div>
}