import './App.css';
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
      <CartProvider>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={ <ItemListContainer/>}></Route>
            <Route path="/cart" element={ <CartView/>}></Route>
            <Route path="/product/:id" element={ <ItemDetailContainer/>}></Route>
            {/* Opcional, filtro por categoria */}
            <Route path="/category/:category" element={ <ItemListContainer/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </CartProvider>
      {/* Cartprovider no esta, me lo dijo Gemini */}
    </>
  )
}

export default App
