
import classes from "./ProductList.module.scss"
import SortSelect from "../SortSelect/SortSelect";
import {useStore} from "effector-react";
import {$listOfProducts} from "../../effector";
import SmallProductCard from '../SmallProductCard/SmallProductCard';



const ProductList = (props:any) => {

    const listProd:any = useStore($listOfProducts)

    return (
            <div className={classes.productList}>
                <div>
                    <SortSelect>
                    </SortSelect>
                </div>
                <h1 className={classes.productList__h1}>каталог товаров</h1>
                <div className={classes.productList__listOfItems}>
                    {
                        listProd.map((product:any) =>
                        <SmallProductCard productInfo={product} key={product.id}></SmallProductCard>
                    )}

                </div>
            </div>
    );
};

export default ProductList;