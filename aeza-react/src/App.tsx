
import './App.css';
import { Routes, Route, useNavigate, Navigate,} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Login from './components/Login/Login';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductFullCard from './components/ProductFullCard/ProductFullCard';
import './styles/defaultStyles.scss'
import LoginPage from './pages/Login/LoginPage';
import { useStore } from 'effector-react';
import { $AuthInfo } from './effector';
import { RequireAuth } from './functionalLogic/requireAuth';

function App() {

    const loginInfo = useStore($AuthInfo);
    // if (!loginInfo.auth){
    //   return <Routes><Route path="/login" element={<LoginPage></LoginPage>}></Route></Routes>
    // }

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
