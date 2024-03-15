const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`server started at port: ${port}`);
})

app.use(express.json());

//import routes
const routes = require('./Routes/todo.route')
app.use('/api/v1' , routes);

const DATABASE = require('./Config/Database').connect();


