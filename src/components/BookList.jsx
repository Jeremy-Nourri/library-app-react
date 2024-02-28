/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function BookList({ books }) {

  return (
    <div className="flex flex-wrap justify-center">
      {books &&
        books.map((book) => (
          <article className="card card-side bg-base-100 shadow-xl w-1/4 m-2" key={book.key}>
            <figure className="w-2/4 p-2">
              <img
                className="w-[100px]"
                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                alt="Movie"
              />
            </figure>
            <div className="card-body flex justify-between">
              <h2 className="card-title text-sm">{book.title}</h2>
              <div className="card-actions">
                <Link 
                    className="btn btn-xs sm:btn-sm btn-primary h-1 text-white" 
                    to={book.key}>Voir en détails
                </Link>
              </div>
            </div>
          </article>
        ))}
    </div>
  );
}
