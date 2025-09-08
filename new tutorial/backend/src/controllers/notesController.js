export function getAllNotes(req,res){
    res.status(200).send("you fetched through controller");
}

export function create(req,res){
    res.status(201).json({ message :" notes created"});
}

export function update(req,res){
    res.status(202).json({ message :" notes update"});
}

export function deleted(req, res){
    res.status(200).json({ message :" notes delete"});
}
