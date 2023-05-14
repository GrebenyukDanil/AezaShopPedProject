import ProductList from "../../components/ProductList/ProductList";
import LeftCategoryMenu from "../../components/LeftCategoryMenu/LeftCategoryMenu";

import Header from "../../components/Header/Header";
import BlueContant from "../../components/BlueContant/BlueContant";
import ShopCard from "../../components/ShopCard/ShopCard";
const CatalogPage = (listOfProducts: any) => {
    return (
        <>
            <ShopCard />
            <Header />
            <BlueContant link="/login" btnText="войти в аккаунт" />
            <div  style={{gap: "65px", display: "flex"}}>
                <LeftCategoryMenu />
                <ProductList />
            </div>
        </>

    );
};

export default CatalogPage;

