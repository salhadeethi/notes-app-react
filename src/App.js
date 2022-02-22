import NotesList from "./component/NotesList";
import { useState, useEffect } from 'react';
import produce from 'immer';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes]= useState([]);

  const addNote = (title,text)=>{
    const date = new Date();
    const nextState = produce(notes, draftState => {
      draftState.push({ 
        id: nanoid(),
        title: title,
        text: text,
        date: date.toLocaleDateString() });
    });

    if (typeof window !== 'undefined') {
      localStorage.setItem('notes', JSON.stringify(nextState));
    }
    setNotes(nextState);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getNotes = localStorage.getItem('notes');

      if (getNotes !== '' && getNotes !== null) {
        return setNotes(JSON.parse(getNotes));
      }
      return setNotes([]);
    }
  }, []);

  const deleteNote = (id) =>{
   
   const nextState = produce(notes, draftState => {
      const index = draftState.findIndex(note => note.id === id);
      if (index !== -1) {
        draftState.splice(index, 1);
      }
  });

   if (typeof window !== 'undefined') {
      localStorage.setItem('notes', JSON.stringify(nextState));
    }

    setNotes(nextState);
  }
  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}>
      </NotesList>   
     </div>
  );
}

export default App;
