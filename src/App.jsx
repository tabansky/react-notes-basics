import './App.css'

import { useEffect, useState } from 'react'
import Note from './components/Note'
import Form from './components/Form'
import Sort from './components/Sort'
import Search from './components/Search'
import defaultNotes from './notes.json'
import { SortTypes } from './constants'
import { getSortCallbackByType } from './helpers/sort'

function App() {
  const [query, setQuery] = useState('');
  const [sortMethod, setSortMethod] = useState(SortTypes.NEWEST);
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : defaultNotes;
  });

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

      <div className="controls">
        <div className="left">
          <Search value={query} onChange={setQuery} />
        </div>
        <div className="right">
          <Sort value={sortMethod} onChange={setSortMethod} />
        </div>
      </div>

      {
        notes.length 
          ? notes
            .filter(note => note.title.toLowerCase().includes(query.toLowerCase()))
            .sort(getSortCallbackByType(sortMethod))
            .map((note) => (<Note key={note.id} title={note.title} text={note.text} onDelete={() => handleDeleteNote(note.id)} />))
          : <p>No notes yet</p>
      }
    </div>
  )
}

export default App
