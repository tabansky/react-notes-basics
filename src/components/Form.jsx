import { useState } from "react";

function Form({ onAdd }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !text.trim()) return;
  
    onAdd(title, text);
  
    setTitle('');
    setText('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      maxLength={50}
    />
    <textarea
      placeholder="Text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      maxLength={255}
    />
    <button type="submit">Create</button>
  </form>
  );
}

export default Form;