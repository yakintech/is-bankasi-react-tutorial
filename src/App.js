import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import MaterialSample from "./materialSample/MaterialSample";
import UserGrid from "./materialSample/UserGrid";
import AboutPage from "./routerSample/AboutPage";
import CartPage from "./routerSample/CartPage";
import ContactPage from "./routerSample/ContactPage";
import HomePage from "./routerSample/HomePage";
import ProductDetail from "./routerSample/ProductDetail";
import ProductPage from "./routerSample/ProductPage";
import cartContext from "./store/cartContext";
import 'antd/dist/antd.css'
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
// import * as ant from "antd";
// import * as material from "@mui/material";
import './layout.css'
import AddCategory from "./routerSample/AddCategory";
import RefSample from "./otherHooks/RefSample";
import { createStore } from "redux";
import todoReducer from "./store/reducers/todo.reducer";
import { Provider } from "react-redux";
import ToDoList from "./reduxSample/ToDoList";
import AddToDo from "./reduxSample/AddToDo";
import ParentComp from "./memoSample/ParentComp";



{/* <></> Bu düğümlere fragment deniyor */ }
function App() {

  const { cart } = useContext(cartContext);


  const store = createStore(
    todoReducer
  )

  return (<>

    {/* <material.Button variant="contained">Hello MAterial</material.Button>
    <ant.Button type="primary">Hello Ant Design</ant.Button>
    <UserGrid></UserGrid>
    <h1>Site Header</h1>
    <h2>Cart Count: {cart.length}</h2>
    <ul>
      <li><Link to='/'>Anasayfa</Link></li>
      <li><Link to='/hakkimizda'>Hakkımızda</Link></li>
      <li><Link to='/iletisim'>İletişim</Link></li>
      <li><Link to='/urunler'>Ürünler</Link></li>
      <li><Link to='/cart'>Sepetim</Link></li>
    </ul> */}

    {/* Layotu Page deki renderBody */}

    <Provider store={store}>
      <Layout className="layout">

        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item key="1">
              <Link to="/">
                <span>Home</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/hakkimizda">
                <span>Hakkımızda</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="/iletisim">
                <span>İletişim</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="4">
              <Link to="/todolist">
                <span>ToDo List</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/addToDo">
                <span>Add Todo</span>
              </Link>
            </Menu.Item>

          </Menu>
        </Header>
        <Content>

          <div className="site-layout-content">
            <ParentComp></ParentComp>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/hakkimizda' element={<AboutPage />} />
              <Route path='/iletisim' element={<ContactPage />} />
              <Route path="/urunler" element={<ProductPage />} />
              <Route path="/urunler/:seo" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/addcategory" element={<AddCategory />} />
              <Route path="/refSample" element={<RefSample />} />
              <Route path="/todolist" element={<ToDoList/>}></Route>
              <Route path="/addToDo" element={<AddToDo/>}></Route>
            </Routes>

          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

      </Layout>
    </Provider>




    {/* <footer>Site Footer</footer> */}
  </>
  );
}

export default App;

