import { useState, useEffect } from "react";
const AddNote = ({ handleClickSave, note = undefined }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState();
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  useEffect(() => {
    if (!selectedFile && note === undefined) {
      setImage(undefined);
      return;
    }

    if (note !== undefined && selectedFile === undefined) {
      setNoteTitle(note.title);
      setNoteText(note.text);
      setImage(note.image);
      return;
    }

   //const objectUrl = URL.createObjectURL(selectedFile);
   // setImage(objectUrl);

    // free memory when ever this component is unmounted
   // return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const noteChange = (e) => {
    setNoteText(e.target.value);
  };

  const noteTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const onSaveClicked = () => {
    if (
      noteTitle.trim().length > 0 ||
      noteText.trim().length > 0 ||
      image !== undefined
    ) {
      if (note !== undefined) {
        handleClickSave(noteTitle, noteText, image, note.id);
      } else {
        handleClickSave(noteTitle, noteText, image);
      }
    }
    setNoteText("");
    setNoteTitle("");
    setSelectedFile(undefined);
    setImage(undefined);
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
      setImage(reader.result)
    });
    reader.readAsDataURL(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="note new">
      <div>
        <textarea
          className="edit-title"
          placeholder="Title"
          value={noteTitle}
          onChange={noteTitleChange}
          wrap="off"
        ></textarea>
        <br />
        <textarea
          className="edit-text"
          placeholder="Content"
          value={noteText}
          onChange={noteChange}
        ></textarea>
      </div>
      <div className="note-footer add">
        <div>
          <input type="file" onChange={onSelectFile} />
          {image !== undefined && <img src={image} className="photo" />}
        </div>
        <div>
          <button className="save" onClick={onSaveClicked}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddNote;
