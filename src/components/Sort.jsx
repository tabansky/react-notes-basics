import { SortTypes } from '../constants';

function Sort({ value, onChange }) {
  return (
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={SortTypes.NEWEST}>Newest first</option>
      <option value={SortTypes.OLDEST}>Oldest first</option>
      <option value={SortTypes.AZ}>A-Z</option>
      <option value={SortTypes.ZA}>Z-A</option>
    </select>
  );
}

export default Sort;