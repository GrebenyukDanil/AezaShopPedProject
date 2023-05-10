import ProductList from "../../components/ProductList/ProductList";
import LeftCategoryMenu from "../../components/LeftCategoryMenu/LeftCategoryMenu";
import classes from "./CatalogPage.module.scss"
const CatalogPage = (listOfProducts:any) => {
    return (
        <div className={classes.buyingMeny}>
            <div className={classes.container}>
            <LeftCategoryMenu></LeftCategoryMenu>
            <ProductList >

            </ProductList>
            </div>
            
        </div>
    );
};

export default CatalogPage;

