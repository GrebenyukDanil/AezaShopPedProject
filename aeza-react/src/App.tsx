
import './App.css';
import { Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Login from './components/Login/Login';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ProductFullCard from './components/ProductFullCard/ProductFullCard';
import './styles/defaultStyles.scss'

function App() {

    return (

    <div className="App">
      <div className="container">
        <Routes>
            <Route path='/' element={<MainPage></MainPage>}></Route>
            <Route path='/catalog' element={<CatalogPage></CatalogPage>}></Route>
            <Route path='/catalog/:id' element={<ProductFullCard></ProductFullCard>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
