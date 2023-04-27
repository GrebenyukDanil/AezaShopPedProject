import React, {useState} from 'react';
import './App.css';
import ProductCard from "./components/UI/ProductCard/ProductCard";
import ProductList from "./components/UI/ProductList/ProductList";
import BuyingMenu from "./components/UI/BuyingMenu/BuyingMenu";

const list:any = [

]
function App() {
    const [productList, setProductList] = useState([{
            id: 1,
            productName: "футболка #1",
            productPrice: 1216,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 23,
            inStock: true,
        },
        {
            id: 2,
            productName: "футболка #2",
            productPrice: 1512,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 56,
            inStock: true,
        },
        {
            id: 3,
            productName: "футболка #3",
            productPrice: 1001,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 51,
            inStock: true,
        },
        {
            id: 4,
            productName: "футболка #4",
            productPrice: 1612,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 52,
            inStock: true,
        },
        {
            id: 5,
            productName: "футболка #5",
            productPrice: 1125,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 15,
            inStock: true,
        },
        {
            id: 6,
            productName: "футболка #6",
            productPrice: 1016,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 5,
            inStock: true,
        },
        {
            id: 7,
            productName: "футболка #7",
            productPrice: 1243,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 25,
            inStock: true,
        },
        {
            id: 8,
            productName: "футболка #8",
            productPrice: 895,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 55,
            inStock: true,
        },
        {
            id: 9,
            productName: "футболка #9",
            productPrice: 2312,
            productPhoto: "https://store.artlebedev.ru/products/images/ggoyg7b3.jpg",
            productPhotoAlt: "alt",
            productDescription: "высокие интилекты против миллиона говорить не буду в москве онлайн",
            buyCount: 33,
            inStock: true,
        }
    ]);
    const [sortType, setSortType] = useState('')
    const changeSortType = (sortType:any) =>{
        setSortType(sortType)
        setProductList([...productList].sort((a:any,b:any) => a[sortType] > b[sortType] ? 1 : -1))
    }
    return (

    <div className="App">
        
        <ProductList sortType={sortType} changeSortType={changeSortType} listOfProducts = {productList}>

        </ProductList>

    </div>

  );
}

export default App;
