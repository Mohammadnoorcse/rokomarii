import Navbar from "./component/layout/Navbar";
import {Routes,Route} from "react-router-dom"
import Home from "./component/page/Home";
import Book from "./component/book/Book";
import BookDetails from "./component/book/BookDetails";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/book" element={<Book/>}/>
      <Route path="/book/detail" element={<BookDetails/>}/>

    </Routes>
    </>
  );
}

export default App;
