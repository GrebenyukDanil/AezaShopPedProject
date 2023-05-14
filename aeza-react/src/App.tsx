
import './App.css';
import { Routes, Route, useNavigate, Navigate, } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Login from './components/Login/Login';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductFullCard from './components/ProductFullCard/ProductFullCard';
import './styles/defaultStyles.scss'
import LoginPage from './pages/Login/LoginPage';
import { useStore } from 'effector-react';
import "./styles/defaultStyles.scss"
import { RequireAuth } from './components/requireAuth';
import { $AuthInfo } from './effector/login';
import { $shopCardList } from './effector/shop-card';
import { useEffect } from 'react';
import { editShopList } from './functionalLogic/shoppingCard';




function App() {

  
  return (

    <div className="App">
      
      <div className="container">
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='/catalog' element={<CatalogPage></CatalogPage>}></Route>
          <Route path='/catalog/:id' element={<ProductFullCard></ProductFullCard>}></Route>

          <Route path='/login' element={
            <RequireAuth >
              <LoginPage></LoginPage>
            </RequireAuth>
          }></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
