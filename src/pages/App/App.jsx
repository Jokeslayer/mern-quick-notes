import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm"
import NoteList from '../../components/NoteList/NoteList';
import AuthPage from "../AuthPage/AuthPage";
import * as notesAPI from '../../utilities/notes-api.js';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  }, []);

  async function addNote(note) {
    const newNote = await notesAPI.create(note);
    setNotes([...notes, newNote]);
  }

  return (
    <main className="App">
      {user ?
        <>

          <h1>MY NOTEBOOK</h1>

          <h1>ADD NEW NOTE</h1>

          <NewNoteForm handleAddNote={addNote} />

          <NoteList notes={notes} setNotes={setNotes}/>

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
