import ProductList from "../ProductList/ProductList";
import LeftCategoryMenu from "../LeftCategoryMenu/LeftCategoryMenu";
import classes from "./BuyingMenu.module.scss"
const BuyingMenu = (listOfProducts:any) => {
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

export default BuyingMenu;

