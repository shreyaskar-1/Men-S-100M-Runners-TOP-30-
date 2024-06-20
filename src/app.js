const express = require("express");
require("../src/db/conn");
const Mensranking = require("../src/models/Mens");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// handling post req
app.post("/mens", async (req, res) => {
    try {
        const addMensRecords = new Mensranking(req.body);
        const insertMens = await addMensRecords.save();
        res.status(201).send(insertMens); 
    }catch(e){
        res.status(400).send(e);
    }
});

app.listen(port, () => {
    console.log(`Connection Is Successful At ${port}`);
});
