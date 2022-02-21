import { MdDeleteForever } from 'react-icons/md';
const Note = ({id, title, text, date, handleDeleteNote}) =>{
    //span for note section , the footer for date and delete icon
    return <div className='note'>
        <div className='note-title'>{title} </div>
        <span>
            {text}
        </span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever onClick={()=>handleDeleteNote(id)} className='delete-icon' size='1.3em'></MdDeleteForever>
        </div>
    </div>
};
export default Note;