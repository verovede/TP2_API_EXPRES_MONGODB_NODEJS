const express = require('express');
const data = require('./../data/inventorsData');

const router = express.Router();

//get inventors
router.get('/', async (req, res) => {
    const inventors = await data.getInventors();
    res.json(inventors);
})

//get inventor pot ID
router.get('/:id', async (req, res) => {
    const inventor = await data.getInventor(req.params.id);
    res.json(inventor);
})

//add inventor
router.post('/', async (req, res) => {
    const inventor = req.body;    
    const result = await data.addInventor(inventor);
    res.json(result);
})

// TODO: UPDATE INVENTOR (INVENTOR)
router.put('/:id', async (req, res) => {   
    const inventorId = req.params.id; 
    console.log(inventorId)
    const inventor = req.body;
    const result = await data.updateInventor(inventorId,inventor);
    res.json(result);
})

// TODO: DELETE INVENTOR (INVENTOR)
router.delete('/:id', async (req, res) => {      
    const result = await data.deleteInventor(req.params.id);
    res.json(result);
})

module.exports = router;