import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductList.module.scss"
import SortSelect from "../Select/SortSelect";

const ProductList = ({listOfProducts, changeSortType,sortType}:any) => {

    return (
            <div className={classes.productList}>
                <div>
                    <SortSelect
                        value = {sortType}
                        onChange = {(sort:any) => changeSortType(sort)}
                        defaultValue="Сортировка по"
                        options={[
                            {value: "productName", name: "По названию"},
                            {value: "productPrice", name: "По цене"},
                            {value: "buyCount", name: "По популярности"},
                        ]}
                    >
                    </SortSelect>
                </div>
                <h1 className={classes.productList__h1}>каталог товаров</h1>
                <div className={classes.productList__listOfItems}>
                    {listOfProducts.map((product:any) =>
                        <ProductCard productInfo={product} key={product.id}></ProductCard>
                    )}
                </div>
            </div>
    );
};

export default ProductList;