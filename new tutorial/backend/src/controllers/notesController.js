import Note from "../models/Notes.js"

export async function getAllNotes(req,res){
    try{
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    }catch (error){
       res.status(200).send("internal server error1");

    }
}

export async function getNoteById(req,res){
    try{
        const note = await Note.findById(req.params.id)
        if(!Note) return res.status(404).json({message:"note not found"})
        res.json(note);
    }catch(error){
        console.error("error in get note", error)
        res.status(500).json({message:"internal error"})
    }
}

export async function create(req,res){
    try{
        const {title,content} = req.body
        const note = new Note({title, content})
        // console.log(title, content)

        const savedNote = await note.save()
        res.status(201).json(savedNote);
    }catch(error){}
       res.status(200).send("internal server error2");

}

export async function update(req,res){
    try{
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {title,content},
        {
            new: true,
        })
        if(!updatedNote) return res.status(404).json({message:"note not found"})
        res.status(200).json(updatedNote)
    }catch(error){
       res.status(200).send(error);

    }
}

export async function deleted(req, res){
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message:"note not deleted"})
        res.status(200).json("note deleted")
    }catch(error){
       res.status(200).send(error);
    }
    
    res.status(200).json({ message :" notes delete"});
}
