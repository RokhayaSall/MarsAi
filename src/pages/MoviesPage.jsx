import React, { useEffect, useState } from 'react';
import { CardMovie } from '../components/ui/Cards';
import { IoIosSearch } from 'react-icons/io';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let cancelled = false;
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `http://localhost:3000/api/movies-and-directors`
        );
        const data = await response.json();

        console.log(data);

        if (!cancelled) {
          setMovies(data);
          setError('');
        }
      } catch (err) {
        if (!cancelled) {
          setError('Erreur lors du chargement des movies');
          setMovies([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    fetchMovies();
    return () => {
      cancelled = true;
    };
  }, []);

  //barre de nav toutes en miniscules.
  const filtredMoviesWithDirectors = movies.filter(movieWithDirectors => {
    return (
      movieWithDirectors.original_title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      movieWithDirectors.english_title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      movieWithDirectors.director_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });

  //chargement en cours
  if (loading) {
    return <div>Chargement en cours......</div>;
  }

  //les erreurs
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="flex justify-end">
        <div className="flex items-center bg-[#F2F3F5] p-1 pl-2 rounded-lg size-fit">
          <IoIosSearch className="text-[#94A3B8]" />
          <input
            type="text"
            className="focus:outline-hidden align-middle"
            placeholder="Recherche"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 p-10 gap-10">
        {filtredMoviesWithDirectors.map(movie => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
