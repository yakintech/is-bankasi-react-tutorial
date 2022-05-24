import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AboutPage from "./routerSample/AboutPage";
import CartPage from "./routerSample/CartPage";
import ContactPage from "./routerSample/ContactPage";
import HomePage from "./routerSample/HomePage";
import ProductDetail from "./routerSample/ProductDetail";
import ProductPage from "./routerSample/ProductPage";
import cartContext from "./store/cartContext";

{/* <></> Bu düğümlere fragment deniyor */ }
function App() {

  const { cart } = useContext(cartContext);

  return (<>

    <h1>Site Header</h1>
    <h2>Cart Count: {cart.length}</h2>
    <ul>
      <li><Link to='/'>Anasayfa</Link></li>
      <li><Link to='/hakkimizda'>Hakkımızda</Link></li>
      <li><Link to='/iletisim'>İletişim</Link></li>
      <li><Link to='/urunler'>Ürünler</Link></li>
      <li><Link to='/cart'>Sepetim</Link></li>

    </ul>

    {/* Layotu Page deki renderBody */}
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/hakkimizda' element={<AboutPage />} />
      <Route path='/iletisim' element={<ContactPage />} />
      <Route path="/urunler" element={<ProductPage />} />
      <Route path="/urunler/:seo" element={<ProductDetail />} />
      <Route path="/cart" element={<CartPage />} />

    </Routes>

    <footer>Site Footer</footer>
  </>
  );
}

export default App;

