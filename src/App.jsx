import './App.css'

import { useEffect, useState } from 'react'
import Note from './components/Note'
import defaultNotes from './notes.json'

function App() {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : defaultNotes;
  })

  function handleDeleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  }

  function handleAddNote() {
    if (!noteTitle.trim() || !noteText.trim()) return;
  
    const newNote = {
      id: Date.now(),
      title: noteTitle,
      text: noteText
    };
  
    setNotes(prevNotes => [...prevNotes, newNote]);
  
    setNoteTitle('');
    setNoteText('');
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='app'>
      <h1>React Notes Basics</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          placeholder="Text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={handleAddNote}>Create</button>
      </div>

      {
        notes.length 
          ? notes.map((note) => (<Note key={note.id} title={note.title} text={note.text} onDelete={() => handleDeleteNote(note.id)} />))
          : <p>No notes yet</p>
      }
    </div>
  )
}

export default App
