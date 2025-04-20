function Note({ title, text, onDelete, onEdit }) {
  return (
    <div className='note'>
      <h2>{ title }</h2>
      <p>{ text }</p>
      <button id="edit-button" onClick={onEdit}>Edit</button>
      <button id="delete-button" onClick={onDelete}>Delete</button>
    </div> 
)
}

export default Note;