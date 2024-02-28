import { useEffect, useState } from 'react';
import BookList from './components/BookList';

import './App.css'

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://openlibrary.org/subjects/science_fiction.json?limit=100");
        const dataBooks = await response.json();
        setBooks(dataBooks.works)
      } catch (error) {
        console.error("erreur lors de la récupération de la liste des livres", error);
        
      }
    })();
  }, []);


  return (
    <>
     <header></header>
     <main>
      <BookList books={books} />
     </main>
     <footer></footer>
    </>
  )
}

export default App
