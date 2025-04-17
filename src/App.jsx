import './App.css'
import Note from './components/Note'

function App() {
  const notes = [
    { id: 1, title: "Name of the note", text: "Content of the note" },
    { id: 2, title: "Name of the note 2", text: "Content of the note 2" },
    { id: 3, title: "New note", text: "Need to use useEffect!" },
    { id: 4, title: "Map", text: "Map works" },
  ]

  return (
    <div className='app'>
      <h1>React Notes Basics</h1>

      {notes.map((note) => (
        <Note key={note.id} title={note.title} text={note.text} />
      ))}
    </div>
  )
}

export default App
