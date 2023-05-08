
import './App.css';
import BuyingMenu from "./components/UI/BuyingMenu/BuyingMenu";
import  Header from './components/UI/Header/Header';
import { Routes, Route} from 'react-router-dom';
import MainPage from './components/UI/MainPage/MainPage';
import ProductFullCard from './components/UI/ProductFullCard/ProductFullCard';
const list:any = [

]
function App() {

    return (

    <div className="App">
        
        <Header></Header>
        
        
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path='/catalog' element={<BuyingMenu></BuyingMenu>}></Route>
          <Route path='/catalog/:id' element={<ProductFullCard></ProductFullCard>}></Route>
        </Routes>

    </div>

  );
}

export default App;
