import './NoteList.css'
import * as notesAPI from '../../utilities/notes-api'

export default function NoteList({ notes, setNotes }) {

    async function handleDelete(note) {
        const trash = await notesAPI.deleteNote(note);
        const updatedNotes = notes.filter((n) => n._id !== trash._id)
        setNotes(updatedNotes);
    }

    return (
        <div>
      {Array.isArray(notes)
        ? notes.map((note) => (
            <div className='note'>
                <p>{note.content}</p>
                <button className='delete' onClick={() => handleDelete(note)}>Delete</button>
            </div>
        ))
        : 
        null}
        </div>
    );
}