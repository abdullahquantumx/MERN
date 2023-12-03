import React, { useContext, useEffect,useRef,useState } from "react";
import NotesItem from "./NotesItem.js";
import AddNote from "./AddNote.js";
import noteContext from "../Context/notes/noteContext.js";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;
  const navigate= useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate("/login")
    }

    //eslint-disable-next-line
  }, []);
  const ref=useRef(null)
  const refClose=useRef(null)
  const [note, setNote] = useState({id:'',etitle:'',edescription:'',etag:''})

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle: currentNote.title,edescription: currentNote.edescription,etag: currentNote.etag})
  }

  const handleClick=(e)=>{
    console.log(note)
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
    e.preventDefault();
    // editNote(note.etitle,note.edescription,note.etag);
}
const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
}


  return (
    <>
      <AddNote />


<button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>         
      <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle}  onChange={onChange} minLength={5}required/>
      </div>
      <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5}required/>
      </div>
      <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
      </div>
    
    </form>
      </div>
      <div className="modal-footer">
      <button ref={refClose}type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button  type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
      <div className="container row my-3">
        <h1>Add your note</h1>
        <div className="conatiner">
        {notes.length===0 && 'No notes to dispaly'}
        </div>
        {notes.map((note) => {
          return <NotesItem key={note._id} note={note} updateNote={updateNote}/>;
        })}
      </div>
    </>
  );
};

export default Notes;
