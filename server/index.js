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
    const todos = await pool.query(
        'SELECT * FROM todos'
    )
    res.json(todos.rows)
})


app.listen(port, ()=>{
    console.log(`listening on PORT ${port}`);
})