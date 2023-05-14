import { Link } from 'react-router-dom';
import './smallProductsCards.scss'

const SmallProductCard = (props: any) => {
    return (
        <div className="small-product-card">
            <Link className='link' to={"/catalog/" + props.productInfo.id}>


                <img
                    className="small-product-card__product-photo"
                    src={props.productInfo.productPhoto}
                    alt={props.productInfo.productPhotoAlt}
                />
                <div>
                    <div >

                        {props.productInfo.onSale ?

                            <div style={{display: "flex", gap: "10px"}}>
                                <div className="small-product-card__product-price "><p className='cross-text'>{props.productInfo.productPrice} </p>
                                    <span>₽</span>
                                </div><p style={{color: "green", fontWeight:"400", fontSize:"18px",fontStyle:"italic", marginTop:"1px"}}>{props.productInfo.salePrice}</p> 
                            </div>
                            
                            :
                            <div className="small-product-card__product-price">{props.productInfo.productPrice}
                                <span>₽</span>
                            </div>
                        }
                    </div>
                    <p className="small-product-card__product-name">
                        {props.productInfo.productName}
                    </p>
                    <p className="small-product-card__product-description">
                        {props.productInfo.productDescription}
                    </p>
                </div></Link>
        </div>
    );
};

export default SmallProductCard;