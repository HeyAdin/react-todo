require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3002;
const { createTodo, updateTodo } = require('./types');
const { todos } = require('./db');
const cors = require("cors");

app.use(express.json(),cors());

app.get('/todo', async (req, res) => {
    const allTodos = await todos.find({});
    res.status(200).json(allTodos);
});

app.post('/create-todo', async (req, res) => {
    const todoPayload = req.body;
    const parsedPayload = createTodo.safeParse(todoPayload);
    if (!parsedPayload.success) {
        res.status(411).json({ msg: "wrong input" });
        return;
    }
    const todo = new todos({
        title: todoPayload.title,
        description: todoPayload.description,
        completed: false
    });
    await todo.save();
    res.status(200).json({ msg: "todo created" });

});

app.put('/completed', async (req, res) => {
    const todoIdPayload = req.body;
    const parsedIdPayload = updateTodo.safeParse(todoIdPayload);
    if (!parsedIdPayload) {
        res.status(411).json({ msg: "wrong id input" });
        return;
    }
    await todos.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });
    res.status(200).json({msg : "todo updated"})
});

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`);
})
