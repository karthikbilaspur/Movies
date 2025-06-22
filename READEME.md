
Movie App
A React-based movie app that allows users to search for movies, view trending movies, and explore movie details.
Features
Search for movies using a debounced search input
View trending movies based on user searches
Display movie details, including title, rating, release date, and language
Pagination for search results
Loading indicator for API requests
Error handling for API requests
Technologies Used
React
Appwrite (for storing trending movies and search counts)
The Movie Database (TMDB) API (for fetching movie data)
Tailwind CSS (for styling)
Axios (for making API requests)
Getting Started
Clone the repository: git clone https://github.com/your-username/movie-app.git
Install dependencies: npm install
Create a .env file with the following variables:
VITE_TMDB_API_KEY: Your TMDB API key
VITE_APPWRITE_PROJECT_ID: Your Appwrite project ID
VITE_APPWRITE_DATABASE_ID: Your Appwrite database ID
VITE_APPWRITE_COLLECTION_ID: Your Appwrite collection ID
Start the development server: npm run dev
API Endpoints
TMDB API: https://api.themoviedb.org/3
Appwrite API: https://fra.cloud.appwrite.io/v1
Components
App: The main application component
Search: The search input component
Movie: The movie card component
Spinner: The loading indicator component
Contributing
Contributions are welcome! Please submit a pull request with your changes and a brief description of what you've added or fixed.
License
This project is licensed under the MIT License. See LICENSE for details.
