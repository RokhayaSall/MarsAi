import { useState } from 'react';
import axios from 'axios';

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async e => {
    const value = e.target.value;
    setKeyword(value);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/movies/search?q=${value}`
      );
      setResults(response.data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={handleSearch}
        placeholder="Rechercher..."
      />

      <ul>
        {results.map(movies => (
          <li key={movies.id}>{movies.name}</li>
        ))}
      </ul>
    </div>
  );
}
