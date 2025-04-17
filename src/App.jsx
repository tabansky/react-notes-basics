import './App.css'

import { useEffect, useState } from 'react'
import Note from './components/Note'
import Form from './components/Form'
import Search from './components/Search'
import defaultNotes from './notes.json'

function App() {
  const [query, setQuery] = useState('');
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : defaultNotes;
  })

  function handleDeleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  }

  function handleAddNote(title, text) {
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
      <Search value={query} onChange={setQuery} />

      {
        notes.length 
          ? notes
            .filter(note => note.title.toLowerCase().includes(query.toLowerCase()))
            .map((note) => (<Note key={note.id} title={note.title} text={note.text} onDelete={() => handleDeleteNote(note.id)} />))
          : <p>No notes yet</p>
      }
    </div>
  )
}

export default App
