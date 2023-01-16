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
        const {description} = req.body
        const newTodo = await pool.query(
            "INSERT INTO todos (description) VALUES($1) RETURNING *", 
            [description]
        )
        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})


app.listen(port, ()=>{
    console.log(`listening on PORT ${port}`);
})