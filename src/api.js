import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const fetchMovies = async (query = '', page = 1) => {
  const endpoint = query
    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`
    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&page=${page}`;

  const response = await axios.get(endpoint, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.data;
};

export { fetchMovies };