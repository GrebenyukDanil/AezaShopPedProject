import ProductList from "../../components/ProductList/ProductList";
import LeftCategoryMenu from "../../components/LeftCategoryMenu/LeftCategoryMenu";
import classes from "./CatalogPage.module.scss"
import Header from "../../components/Header/Header";
import BlueContant from "../../components/BlueContant/BlueContant";
const CatalogPage = (listOfProducts: any) => {
    return (
        <>
            <Header></Header>
            <BlueContant link="/login" btnText="ввойти в аккаунт"></BlueContant>
            <div className={classes.buyingMeny}>
                <LeftCategoryMenu></LeftCategoryMenu>
                <ProductList >
                </ProductList>
            </div>
        </>

    );
};

export default CatalogPage;

