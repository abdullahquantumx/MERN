import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
  const host ="http://localhost:5000"
   const notesInitial=[]
  const [notes, setNotes] = useState(notesInitial)

  //get a Note
  const getNotes=async ()=>{
    // Api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json=await response.json(); 
    console.log(json)
    setNotes(json)
  }

  //Add a Note
  const addNote=async (title,description,tag,id)=>{
    //Api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json=await response.json();
    const note=json;
    setNotes(notes.concat(note))
    console.log(json); 
  }
  //Delete a Note
  const deleteNote=async(id)=>{
     // Api call
     const response = await fetch(`${host}/api/notes/Deletenote/${id}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json=await response.json(); 
    console.log(json);

    console.log("deleting note"+id);
    const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }
  //Edit a Note
  const editNote=async (id,title,description,tag)=>{
    //Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json= await response.json();
    console.log(json) 

    let newNotes=JSON.parse(JSON.stringify(notes))
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if(element._id===id){
        newNotes[index].title=title;
        newNotes[index].description=description;
        newNotes[index].tag=tag;
        break;
      }
    }
    setNotes(newNotes)
  }
    
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState