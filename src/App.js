import Nav from "./components/Nav"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data"
import BookInfo from './pages/BookInfo'
import Cart from "./pages/Cart";
import React, { useState, useEffect } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
  }

  function removeFromCart(item) {
    console.log('remove from cart', item)
    setCart(cart.filter(book => book.id !== item.id))
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
            ...item,
            quantity: +quantity,
          }
          : item
      )
    )
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  //     }

  //     if (item.id === book.id) {
  //       re3
  //         ...item,
  //         quantity: +quantity,
  //       }
  //     }
  //     else {
  //       return item
  //     }
  //   }))
  // }

  useEffect(() => {
    console.log(cart)
  }, [cart])
  // const dupeItem = cart.find(item => +item.id === +book.id)

  // if (dupeItem) {
  //   // dupeItem.quantity += 1;
  //   setCart(cart.map(item => {
  //     if (item.id === dupeItem.id) {
  //       return {
  //         ...item, 
  //         quantity: item.quantity + 1,
  //       }
  //     } else {
  //       return item
  //     }
  //   })
  // );
  // } else {
  //   setCart([...cart, {...book, quantity: 1}]);
  // }
  // }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart} cart={cart} />}
          />
          <Route
          path="/cart" 
          element={
            <Cart 
              books={books} 
              cart={cart} 
              changeQuantity={changeQuantity} 
              removeFromCart={removeFromCart}
              />} 
            />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
