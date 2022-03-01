import { MdDeleteForever, MdEdit } from "react-icons/md";
const Note = ({ note, handleDeleteNote, handleClickEdit }) => {
  //span for note section , the footer for date and delete icon
  return (
    <div className="note">
      <div>
        <h3 className="note-title">{note.title} </h3>
        <p className="note-text">{note.text} </p>
        <div>
          {note.image !== undefined && (
            <img src={note.image} className="photo" />
          )}
        </div>
      </div>
      <div className="note-footer">
        <small>{note.date}</small>
        <div>
          <MdEdit
            onClick={() => handleClickEdit(note.id)}
            className="edit-icon"
            size="1.3em"
          ></MdEdit>
          <MdDeleteForever
            onClick={() => handleDeleteNote(note.id)}
            className="delete-icon"
            size="1.3em"
          ></MdDeleteForever>
        </div>
      </div>
    </div>
  );
};
export default Note;
