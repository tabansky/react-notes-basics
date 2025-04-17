function Note({ title, text }) {
  return (
    <div className='note'>
      <h2>{ title }</h2>
      <p>{ text }</p>
    </div> 
)
}

export default Note;