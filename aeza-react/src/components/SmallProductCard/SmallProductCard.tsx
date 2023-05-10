import {Link} from 'react-router-dom';
import '../../styles/smallProductsCards.scss'

const SmallProductCard = (props:any) => {
    return (
        <div className="small-product-card">
            <Link to={"/catalog/" + props.productInfo.id}>
                <button className="small-product-card__plus-btn">+</button>
            </Link>
            <img 
                className="small-product-card__product-photo"
                src={props.productInfo.productPhoto}
                alt={props.productInfo.productPhotoAlt}
            />
            <div>
                <div className="small-product-card__productPrice">
                    {props.productInfo.productPrice}
                    <span>₽</span>
                </div>
                <p className="small-product-card__productName">
                    {props.productInfo.productName}
                </p>
                <p className="small-product-card__productDescription">
                    {props.productInfo.productDescription}
                </p>
            </div>
        </div>
    );
};

export default SmallProductCard;