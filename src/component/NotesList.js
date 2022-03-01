import Note from "./Note";
import AddNote from "./AddNote";
import { useState, useEffect } from "react";
import produce from "immer";
import { nanoid } from "nanoid";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = getLocalStorage();

    if (getNotes !== "" && getNotes !== null) {
      let notes = JSON.parse(getNotes);
      const nextState = produce(notes, (draftState) => {
        draftState.map((note) => (note.editing = false));
      });
      return setNotes(nextState);
    }
    return setNotes([]);
  }, []);

  const getLocalStorage = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("notes");
    }
    return null;
  };

  const setLocalStorage = (nextState) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("notes", JSON.stringify(nextState));
    }
  };

  const handleClickSave = (title, text, image, id = "") => {
    if (id === "") {
      addNote(title, text, image);
    } else {
      editNote(title, text, image, id);
    }
  };

  const addNote = (title, text, image) => {
    const date = new Date();
    const nextState = produce(notes, (draftState) => {
      draftState.push({
        id: nanoid(),
        title: title,
        text: text,
        image: image,
        date: date.toLocaleDateString(),
        editing: false,
      });
    });

    setLocalStorage(nextState);
    setNotes(nextState);
  };

  const editNote = (title, text, image, id) => {
    const nextState = produce(notes, (draftState) => {
      const index = draftState.findIndex((note) => note.id === id);
      if (index !== -1) {
        draftState[index].title = title;
        draftState[index].text = text;
        draftState[index].image = image;
        draftState[index].editing = false;
      }
    });

    setLocalStorage(nextState);
    setNotes(nextState);
  };

  const deleteNote = (id) => {
    const nextState = produce(notes, (draftState) => {
      const index = draftState.findIndex((note) => note.id === id);
      if (index !== -1) {
        draftState.splice(index, 1);
      }
    });

    setLocalStorage(nextState);
    setNotes(nextState);
  };

  const handleClickEdit = (id) => {
    const nextState = produce(notes, (draftState) => {
      const index = draftState.findIndex((note) => note.id === id);
      if (index !== -1) {
        draftState[index].editing = true;
      }
    });

    setLocalStorage(nextState);
    setNotes(nextState);
  };

  return (
    <div className="notes-list">
      {notes.map((note) =>
        note.editing !== true ? (
          <Note
            key={note.id}
            note={note}
            handleDeleteNote={deleteNote}
            handleClickEdit={handleClickEdit}
          ></Note>
        ) : (
          <AddNote
            key={note.id}
            note={note}
            handleClickSave={handleClickSave}
          />
        )
      )}
      <AddNote handleClickSave={handleClickSave} />
    </div>
  );
}
export default NotesList;
