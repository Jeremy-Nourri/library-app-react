/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams, Link } from "react-router-dom";

function BookDetail() {
  const { bookId } = useParams();

  const [singleBook, setSingleBook] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
        const dataBook = await response.json();
        setSingleBook(dataBook);

        const bookAuthor = await fetch(`https://openlibrary.org${dataBook.authors[0].author.key}.json`);
        const dataAuthor = await bookAuthor.json();
        setAuthor(dataAuthor.name)

      } catch (error) {
            console.error("erreur lors de la récupération d'un livre", error);
      }
    })();
  }, [bookId]);

  return (
    <div className="text-center">
        {
            singleBook &&
            (
                <article className="card card-side bg-base-100 shadow-xl w-3/4 my-6 mx-auto" key={singleBook.key}>
                    <figure className="p-3 bg-slate-400">
                    <img
                        className="w-3/4"
                        src={`https://covers.openlibrary.org/b/id/${singleBook.covers[0]}-L.jpg`}
                        alt="Movie"
                    />
                    </figure>
                    <div className="card-body text-left w-3/4">
                        <h2 className="card-title">{singleBook.title}</h2>
                        <p>Auteur : {author}</p>
                        <p><Markdown >{singleBook.description}</Markdown> </p>
                    </div>
                </article>
            )
        }
        <Link to="/" className="mx-auto btn btn-primary text-white">Revenir à l'accueil</Link>
    </div>
  )
}

export default BookDetail;
