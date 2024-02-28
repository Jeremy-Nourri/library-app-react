import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookDetail from "../components/BookDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/works/:bookId",
        element: <BookDetail />
    }
])

export default router;