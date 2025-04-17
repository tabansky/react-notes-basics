import './App.css'

import { useState } from 'react'
import Note from './components/Note'

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "React", text: "React is a library for building user interfaces that allows you to write in a declarative style." },
    { id: 2, title: "Components + JSX", text: "A component is a function that returns markup. JSX is a JavaScript syntax extension that lets you write HTML inside JavaScript" },
    { id: 3, title: "Reusable Component + Props", text: "Props are a way to pass data from a parent to a component." },
    { id: 4, title: "Map", text: "The way to render a list of items in React, is to use the map function with specified keys" },
    { id: 5, title: "useEffect", text: "Hook that allows a component to remember data between rerenders." },
  ])

  function handleAddNote() {
    const newNote = {
      id: Date.now(),
      title: "New note",
      text: "Content of the new note",
    };
  
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  return (
    <div className='app'>
      <h1>React Notes Basics</h1>

      {notes.map((note) => (
        <Note key={note.id} title={note.title} text={note.text} />
      ))}

      <button onClick={handleAddNote}>Add Note</button>
    </div>
  )
}

export default App
