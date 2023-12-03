import React,{useContext} from 'react'
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import noteContext from '../Context/notes/noteContext.js';

const NotesItem = (props) => {
  const context=useContext(noteContext);
  const {deleteNote}=context;
  const { note,updateNote } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3 border border-dark">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div className="card-text overflow-hidden text-ellipsis">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.description}</p>
            </div>
            <div className="d-flex">
              <i className="mx-2 px-2" onClick={()=>{deleteNote(note._id)}}><MdDelete /></i>
              <i className="mx-2 px-2" onClick={()=>{updateNote(note)}}><BiEdit /></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesItem;
