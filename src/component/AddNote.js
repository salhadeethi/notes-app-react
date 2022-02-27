import { useState, useEffect } from "react";

const AddNote = ({ handleAddNote }) => {
  const [selectedFile, setSelectedFile] = useState()
  const [image, setImage] = useState()
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
      handleAddNote(noteTitle,noteText,image);
      setNoteText('');
      setNoteTitle('');
      setImage(undefined);
  }

  useEffect(() => {
    if (!selectedFile) {
        setImage(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    console.log("file url "+ objectUrl);
    setImage(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      setSelectedFile(e.target.files[0])
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
        <div>
            <input type='file' onChange={onSelectFile} />
            {selectedFile &&  <img src={image} className="photo" /> }
        </div>
         <div className='note-footer'>      
        <button className='save' onClick={onSaveClicked}>Save</button>
        </div>
    </div>
   );
};
export default AddNote;