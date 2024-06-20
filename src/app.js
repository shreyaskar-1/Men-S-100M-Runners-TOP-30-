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

// reading data
app.get("/mens", async (req, res) => {
    try {
        const getMens = await Mensranking.find({});
        res.send(getMens); 
    } catch (e) {
        res.status(400).send(e.message);
    }
});

// reading data individually
app.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await Mensranking.findById({_id});
        res.send(getMen); 
    } catch (e) {
        res.status(400).send(e.message);
    }
});

// updating the data




app.listen(port, () => {
    console.log(`Connection Is Successful At ${port}`);
});
