import { MdDeleteForever } from 'react-icons/md';
import { useState, useEffect } from 'react';

const Note = ({id, title, text, date, image, handleDeleteNote}) =>{
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (image !== undefined)
        setFlag(true);
      }, []); 

    //span for note section , the footer for date and delete icon
    return <div className='note'>
        <div className='note-title'>{title} </div>
        <span>
            {text}
        </span>
        <div>
            {flag && <img src={image} className="photo"/> }
        </div>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever onClick={()=>handleDeleteNote(id)} className='delete-icon' size='1.3em'></MdDeleteForever>
        </div>
    </div>
};
export default Note;