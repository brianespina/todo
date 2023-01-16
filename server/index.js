const express = require("express");
const cors = require("cors");
const PORT = 3000;

// initialize app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send("Root");
})


app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`);
})