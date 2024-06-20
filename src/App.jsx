import { BrowserRouter, Link, Route, Routes,Navigate } from "react-router-dom";
import Home from "./componets/Home";
import {useState} from 'react'
import Example from "./componets/Example";
import About from "./componets/About";
import Products from "./componets/Products";
import ProductDetails from "./componets/ProductDetails";
function App() {
  const [contentIsEmpty] = useState(false)
  return (
    <>
      <BrowserRouter>
        
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>


        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={
            (
              <div>
                <h1>你好</h1>
                </div>
              )
          } />
          <Route path="/example" element={<Example />} /> 
          <Route path="/checkout" element={contentIsEmpty ? <Navigate to="/example" /> : <p>定义了false</p>} />
          <Route path="/about/*" element={<About />} /> 


          <Route path="/products" element={<Products />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
