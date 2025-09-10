import express from "express";
import { getAllNotes , create ,  update , deleted , getNoteById} from "../controllers/notesController.js"

const router = express.Router();

router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.post("/", create);
router.put("/:id" , update);
router.delete("/:id", deleted);



// router.get("/s1" , (req,res) => {
//  res.status(200).send("you got your notes there");
//  });

 router.post("/s2" , (req,res) => {
    res.sent(201).json({message:"note created successfully"});
 });


export  default router;