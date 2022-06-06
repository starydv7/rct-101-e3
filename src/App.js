import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { AuthContext } from "./context/AuthContext";
import Product from "./Product/Product"
import Products from "./components/Products/Products"
import Home from "./pages/Home"
import Login from "./pages/Login";
import RequireAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
           <Navbar/>
           <Routes>
           <Route path="" element={<Home/> }/>
          
        <Route path="/login" element={<Login />}></Route>
         <Route
          path="product"
          element={
            <RequireAuth>
              <Product/>
            </RequireAuth>
          }
        />
         <Route
          path="products"
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
        />
      </Routes>
      
       
        
      {/* <AuthContext/> */}
      
    </div>
  );
}

export default App;
