import './App.css'

import { useState } from 'react'
import Note from './components/Note'

function App() {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([
    { id: 1, title: "React", text: "React is a library for building user interfaces that allows you to write in a declarative style." },
    { id: 2, title: "Components + JSX", text: "A component is a function that returns markup. JSX is a JavaScript syntax extension that lets you write HTML inside JavaScript" },
    { id: 3, title: "Reusable Component + Props", text: "Props are a way to pass data from a parent to a component." },
    { id: 4, title: "Map", text: "The way to render a list of items in React, is to use the map function with specified keys" },
    { id: 5, title: "useEffect", text: "Hook that allows a component to remember data between rerenders." },
    { id: 6, title: "Controlled components", text: "Controlled components are fields whose value is managed entirely by state (useState)." },
    { id: 7, title: "Function call via props", text: "In JSX you can't pass a function call - only a reference or a wrapper (arrow function)" },
  ])

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

      {notes.map((note) => (
        <Note key={note.id} title={note.title} text={note.text} onDelete={() => handleDeleteNote(note.id)} />
      ))}
    </div>
  )
}

export default App
