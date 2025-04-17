import './Search.css';

function Search({ value, onChange }) {
  return (
    <div className="search-container">
      Search for a note &nbsp; 
      <input 
        type="text"
        placeholder="Search by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default Search;