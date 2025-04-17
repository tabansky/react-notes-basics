import './App.css'

import { useEffect, useState } from 'react'
import Note from './components/Note'
import Form from './components/Form'
import defaultNotes from './notes.json'

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : defaultNotes;
  })

  function handleDeleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  }

  function handleAddNote(title, text) {
    console.log(title, text);
    

    const newNote = { id: Date.now(), title, text };
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='app'>
      <h1>React Notes Basics</h1>

      <Form onAdd={handleAddNote} />

      {
        notes.length 
          ? notes.map((note) => (<Note key={note.id} title={note.title} text={note.text} onDelete={() => handleDeleteNote(note.id)} />))
          : <p>No notes yet</p>
      }
    </div>
  )
}

export default App
