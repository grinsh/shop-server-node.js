const express = require('express');
const cors = require('cors');

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/sayHello", (req, res) => {
    res.send("Hello to you!");
})

app.listen(PORT, () => console.log(`Server is up at ${PORT}`));