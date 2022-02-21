import NotesList from "./component/NotesList";
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes]= useState([{
    id: nanoid(),
    title: "title 1",
    text: "note text 1 ",
    date: "20-2-2022"
  },
  {
    id: nanoid(),
    title: "title 2",
    text: "note text 2",
    date: "20-2-2022"
  }]);

  const addNote = (title,text)=>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote]; //reducer create new array
    setNotes(newNotes);//this update it
    console.log(text);
  }

  const deleteNote = (id) =>{
   const newNotes = notes.filter((note)=>note.id !== id);
   setNotes(newNotes);
  }
  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}>
      </NotesList>   
     </div>
  );
}

export default App;
