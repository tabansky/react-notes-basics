function Note({ title, text, onDelete }) {
  return (
    <div className='note'>
      <h2>{ title }</h2>
      <p>{ text }</p>
      <button onClick={onDelete}>Delete</button>
    </div> 
)
}

export default Note;