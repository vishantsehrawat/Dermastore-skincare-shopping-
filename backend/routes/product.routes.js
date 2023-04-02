const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');
const { ProductModel } = require("../model/product.model");
const productRouter = express();
productRouter.use(express.json());

// add a new note 
productRouter.post("/add",async (req,res)=>{
    const newNote = req.body;
    console.log(newNote)
    try {
        const note= ProductModel(newNote);
        await note.save();
        res.status(200).send({msg:"Note created"})
    } catch (error) {
        console.log(error)
        res.status(200).send({msg:"Cannot create note"})
    }
})


// get all the notes of the particular user
productRouter.get("/",async (req,res)=>{
    // const userId = decoded.userId;
    // console.log(userId);
    const newNote = req.body;
    // console.log(newNote)
    try {
        const myNotes= await ProductModel.find({userId:newNote.userId});
        // console.log(myNotes);
        res.status(200).send({msg:"Note fetched successfully",data:myNotes})
    } catch (error) {
        console.log(error)
        res.status(200).send({msg:"Cannot fetch notes"})
    }
})

//delete a note
productRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedNote = await ProductModel.findByIdAndDelete(id);
      if (!deletedNote) {
        return res.status(404).send({ msg: 'Productnot found' });
      }
      return res.status(200).send({ msg: 'Productdeleted', deletedNote });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ msg: 'Unable to delete note' });
    }
  });

module.exports={
    productRouter
}