const fs = require('fs')
var addNote = (title,body)=>{
    var notes = []
    var note = {
        title,
        body
    }
    try{
    var notesString = fs.readFileSync("notes-data.json")
    notes = JSON.parse(notesString)
    }catch(e){
        console.log(e)
    }  
    var duplicateString = notes.filter((note)=>{
        return note.title === title
    })
    if(duplicateString.length===0){
        notes.push(note)
        fs.writeFileSync("notes-data.json",JSON.stringify(notes))
    }  
}
var listNote = (title)=>{
    console.log("Listing Note",title)
}
var readNote = (title)=>{
    console.log("Reading notes",title)
}
var removeNote = (title)=>{
    console.log("Removing note",title)
}
module.exports ={
    addNote,
    listNote,
    readNote,
    removeNote
}