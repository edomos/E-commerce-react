import Nav from "./components/Nav"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data"
import BookInfo from './pages/BookInfo'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books" element={<Books books={ books }/>} />
           <Route path="/books/:id" element={<BookInfo books={ books } />} />
           {/* addToCart= { addToCart } cart={ cart }  */}
          {/* <Route path="/cart" element={<Cart books={ books } cart={ cart }
          changeQuantity={changeQuantity } />} />  */}
          {/* <Footer /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
