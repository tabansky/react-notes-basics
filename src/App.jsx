import './App.css'
import Note from './components/Note'

function App() {
  return (
    <div className='app'>
      <h1>React Notes Basics</h1>

      <Note title = "Name of the note" text = "Content of the note"></Note>
      <Note title = "Name of the note 2" text = "Content of the note 2"></Note>
      <Note title="New note" text="Need to use useEffect!" />
    </div>
  )
}

export default App
