import './NewNoteForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function NewNoteForm({handleAddNote }) {
    const navigate = useNavigate();
    const [newNote, setNewNote] = useState({
        content: ''
    });

    async function handleSubmit(evt) {
        evt.preventDefault();
        handleAddNote(newNote);
        navigate('/');
    }

    async function handleChange(evt) {
        setNewNote({ [evt.target.name]: evt.target.value });
    }

    return (
        <div>
            <form id="add-note-form" onSubmit={handleSubmit}>
<textarea name="content" value={newNote.content} onChange={handleChange}></textarea>
                <input type="submit" value="Add Review" />
            </form>
        </div>
    );
}