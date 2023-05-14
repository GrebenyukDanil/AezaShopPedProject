
import SortSelect from "../SortSelect/SortSelect";
import {useStore} from "effector-react";

import SmallProductCard from '../SmallProductCard/SmallProductCard';
import './productList.scss'
import { $listOfProducts } from "../../effector/sorts";


const ProductList = () => {

    const listProd = useStore($listOfProducts)

    return (
            <div className="productList">
                <div>
                    <SortSelect />
                </div>
                <h1 className="default-big-text">каталог товаров</h1>
                <div className="productList__list-of-items">
                    {listProd.length==0? <div>{"Пусто:(((("}</div>:<div className="productList__list-of-items">
                    {
                        listProd.map((product) =>
                        <SmallProductCard productInfo={product} key={product.id} />
                    )}</div>
                    }
                </div>
            </div>
    );
};

export default ProductList;