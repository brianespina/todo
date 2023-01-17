const express = require("express");
// initialize app
const app = express();
const cors = require("cors");
const pool =  require("./db");
const port = 3080;


//middlewares
app.use(cors());
app.use(express.json());

//routes

//todos get all todos 
app.get('/todos', async (req, res) => {
    try {
        const todos = await pool.query(
            'SELECT * FROM todos'
        )
        res.json(todos.rows)
    } catch (error) {
        console.error(error.message)
    }
    
})

// create a todo
app.post('/todos', async(req,res)=>{
    try {
        const {description, status} = req.body
        const newTodo = await pool.query(
            "INSERT INTO todos (description, status) VALUES($1, $2) RETURNING *", 
            [description, status]
        )
        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// delete a todo
app.delete("/todos/:id", async (req, res) =>{
    try {
        const {id} = req.params
        const deleteTodo = await pool.query(
            "DELETE FROM todos WHERE todo_id = $1",
            [id]
        )
        res.json("todo deleted")
    } catch (error) {
        console.error(error.message)  
    }
})


// update a todo 
app.put("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params
        const {description, status} = req.body
        const updateTodo = await pool.query(
            "UPDATE todos SET description = $1, status = $2 WHERE todo_id = $3",
            [description, status, id]
        )
        res.json("todo updated")
    } catch (error) {
        console.error(error.message)  
    }
})


app.listen(port, ()=>{
    console.log(`listening on PORT ${port}`);
})