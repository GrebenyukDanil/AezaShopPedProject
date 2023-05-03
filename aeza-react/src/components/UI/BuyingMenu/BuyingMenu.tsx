import ProductList from "../ProductList/ProductList";
import LeftCategoryMenu from "../LeftCategoryMenu/LeftCategoryMenu";
import classes from "./BuyingMenu.module.scss"
const BuyingMenu = (listOfProducts:any) => {
    return (
        <div className={classes.buyingMeny}>
            <LeftCategoryMenu></LeftCategoryMenu>
            <ProductList >

            </ProductList>
        </div>
    );
};

export default BuyingMenu;