import { MdDeleteForever } from 'react-icons/md';
const Note = () =>{
    //span for note section , the footer for date and delete icon
    return <div className='note'>
        <div className='note-title'>title: </div>
        <span>
            Testing title
        </span>
        <div className='note-footer'>
            <small>2022-2-17</small>
            <MdDeleteForever className='delete-icon' size='1.3em'></MdDeleteForever>
        </div>
    </div>
};
export default Note;