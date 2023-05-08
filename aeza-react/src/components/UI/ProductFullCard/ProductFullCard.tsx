import { Link, useParams } from "react-router-dom";
import { productListPerem } from "../../../functionalLogic/prodListFile";
import classes from "./ProductFullCard.module.scss"
const ProductFullCard = () => {
    const productId:any = useParams().id
    const productInfo:any = productListPerem.find(product => product.id === parseInt(productId));
    return (
        <div className={classes.productFullCard}>
           <img className={classes.productFullCard__img} src={productInfo.productPhoto} alt={productInfo.productPhotoAlt} />
           <div className={classes.productFullCard__content}>
                <div>
                    <Link className={classes.productFullCard__backLink} to="/catalog">Назад</Link>
                    <h1>сумка любая вещь</h1>
                    <p className={classes.productFullCard__descr}>описание товара</p>
                    <p>{productInfo.productDescription}</p>
                </div>
                <div className={classes.productFullCard__productBuy}>
                    <p className={classes.productFullCard__productPrice}>{productInfo.productPrice}₽<br></br><span>за одну вещь</span></p>
                    <button className={classes.productFullCard__productBuyBtn}>добавить товар в корзину</button>
                </div>
           </div>
        </div>
       
    );
};

export default ProductFullCard;
