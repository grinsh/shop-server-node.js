const express = require('express');
const cors = require('cors');

const  {productsRouter}  = require("./routers/productsRouter")
const {sentencesRouter} = require("./routers/sentencesRouter");

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);
app.use("/sentences" , sentencesRouter);


app.listen(PORT, () => console.log(`Server is up at ${PORT}`));