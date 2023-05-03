import React from 'react';
import ProductCard from "./ProductCard/ProductCard";
import classes from "./ProductList.module.scss"
import SortSelect from "./Select/SortSelect";
import {useStore} from "effector-react";
import {$listOfProducts} from "../../effector";



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
                        <ProductCard productInfo={product} key={product.id}></ProductCard>

                    )}

                </div>
            </div>
    );
};

export default ProductList;