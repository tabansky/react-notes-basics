import './Edit.css'

import { useEffect, useRef, useState } from "react";

function Edit({ note, onSave, onClose }) {
    const [title, setTitle] = useState(note.title);
    const [text, setText] = useState(note.text);
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current?.focus();
    }, []);

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h2>Edit Note</h2>
          <input
            type="text"
            ref={inputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
          />
          <div className="modal-buttons">
            <button onClick={() => onSave(note.id, title, text)}>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
}

export default Edit;