import { Link, useParams } from "react-router-dom";
import "../../styles/productFullCard.scss"

import { productListPerem } from "../../functionalLogic/prodListFile";
import Header from "../Header/Header";
const ProductFullCard = () => {
    const productId: any = useParams().id
    const productInfo: any = productListPerem.find(product => product.id === parseInt(productId));
    return (
        <>
            <Header></Header>
            <div className="productFullCard">
                <img className="productFullCard__img" src={productInfo.productPhoto} alt={productInfo.productPhotoAlt} />
                <div className="productFullCard__content">
                    <div>
                        <Link className="link small-grey-text" to="/catalog">Назад</Link>
                        <h1 className="default-big-text">сумка любая вещь</h1>
                        <p className="small-strong-text productFullCard__descr">описание товара</p>
                        <p className="default-text">{productInfo.productDescription}</p>
                    </div>
                    <div className="productFullCard__productBuy">
                        <p className="productFullCard__productPrice">{productInfo.productPrice}₽<br></br><span>за одну вещь</span></p>
                        <button className="black-button">добавить товар в корзину</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductFullCard;
