import { useState } from "react";
const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    const noteChange = (e) => {
        setNoteText(e.target.value);
    }

    const noteTitleChange = (e) => {
        setNoteTitle(e.target.value);
    }

    const onSaveClicked = () =>{
        if (noteTitle.trim().length > 0 || noteText.trim().length > 0 )
        handleAddNote(noteTitle,noteText);
        setNoteText('');
        setNoteTitle('');
    }
    return (<div className="note new">
         <textarea rows='1'
        cols='10'
        placeholder='type here to add a note title'
        value={noteTitle}
        onChange={noteTitleChange}
        wrap="off">
        </textarea>
        <textarea rows='9'
        cols='10'
        placeholder='type here to add a note'
        value={noteText}
        onChange={noteChange}>
        </textarea>
         <div className='note-footer'>
        <small>New Note </small>
        <button className='save' onClick={onSaveClicked}>Save</button>
    </div>
    </div>
   );
};
export default AddNote;