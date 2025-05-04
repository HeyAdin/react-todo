export function CreateTodo(){
    return <div>
        <input style={{
            margin: "10px 0",
            padding : "10px 8px",
            fontSize : "17px",
            border : "none",
            borderBottom : "2px solid gray",
            fontFamily: "monospace"
        }} type="text" placeholder="title"/> <br />
        <input style={{
            margin: "10px 0",
            padding : "10px 8px",
            fontSize : "14px",
            border : "none",
            borderBottom : "2px solid gray",
            fontFamily: "monospace"
        }} type="text" placeholder="description"/> <br />
        <button style={{
            margin: "10px 0",
            padding : "10px 8px",
            fontSize : "17px",
            fontFamily: "monospace"
        }}>Add todo</button>
    </div>
}