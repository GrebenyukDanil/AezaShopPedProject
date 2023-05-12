
import SortSelect from "../SortSelect/SortSelect";
import {useStore} from "effector-react";
import {$listOfProducts} from "../../effector";
import SmallProductCard from '../SmallProductCard/SmallProductCard';
import '../../styles/productList.scss'


const ProductList = (props:any) => {

    const listProd = useStore($listOfProducts)

    return (
            <div className="productList">
                <div>
                    <SortSelect>
                    </SortSelect>
                </div>
                <h1 className="default-big-text">каталог товаров</h1>
                <div className="productList__listOfItems">
                    {
                        listProd.map((product:any) =>
                        <SmallProductCard productInfo={product} key={product.id}></SmallProductCard>
                    )}

                </div>
            </div>
    );
};

export default ProductList;