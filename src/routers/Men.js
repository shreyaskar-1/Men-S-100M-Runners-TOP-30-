const express = require("express");
const Mensranking = require("../models/Mens");
const router = new express.Router();





// handling post req
router.post("/mens", async (req, res) => {
    try {
        const { body } = req;

        if (Array.isArray(body)) {
            // Batch insertion if req.body is an array of records
            const insertedRecords = await Mensranking.insertMany(body);
            res.status(201).send(insertedRecords);
        } else {
            // Single record insertion if req.body is a single object
            const newRecord = new Mensranking(body);
            const insertedRecord = await newRecord.save();
            res.status(201).send(insertedRecord);
        }
    } catch (e) {
        console.error("Error inserting Mensranking:", e);
        res.status(400).send({ error: e.message });
    }
});

// reading data
router.get("/mens", async (req, res) => {
    try {
        const getMens = await Mensranking.find({});
        res.send(getMens); 
    } catch (e) {
        res.status(400).send(e.message);
    }
});

// reading data individually
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await Mensranking.findById({_id});
        res.send(getMen); 
    } catch (e) {
        res.status(400).send(e.message);
    }
});

// updating the data
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateMen = await Mensranking.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updateMen);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

// delete the data
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteMen = await Mensranking.findByIdAndDelete(_id);
        res.send(deleteMen);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});

module.exports = router;