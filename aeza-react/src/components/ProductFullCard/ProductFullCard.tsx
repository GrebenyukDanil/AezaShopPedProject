import { Link, useParams } from "react-router-dom";
import "./productFullCard.scss"


import Header from "../Header/Header";
import { useMemo } from "react";
import { IproductList, productListPerem } from "../../consts/prodListFile";
import { addToCard } from "../../effector/shop-card";
import ShopCard from "../ShopCard/ShopCard";
const ProductFullCard = () => {
    const productId: string = useParams()?.id || '';
    const productInfo: IproductList | undefined = useMemo(() => productListPerem.find(product => product.id === parseInt(productId)), [productId]);

    return (
        <>
            <Header />
            <ShopCard />
            <div className="product-full-card">
                <img className="product-full-card__img" src={productInfo?.productPhoto} alt={productInfo?.productPhotoAlt} />
                <div className="product-full-card__content">
                    <div>
                        <Link className="link small-grey-text" to="/catalog">Назад</Link>
                        <h1 style={{ lineHeight: "100px" }} className="default-big-text">{productInfo?.productName}</h1>
                        <p className="small-strong-text product-full-card__descr">описание товара</p>
                        <p className="default-text">{productInfo?.productDescription}</p>
                    </div>
                    <div className="product-full-card__product-buy">
                        <p className="product-full-card__product-price">{
                            productInfo?.onSale ?  productInfo?.salePrice : productInfo?.productPrice 
                        
                        }₽<br></br><span>за одну вещь</span></p>
                        <button className="black-button" onClick={() => addToCard(productInfo)}>добавить товар в корзину</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductFullCard;
