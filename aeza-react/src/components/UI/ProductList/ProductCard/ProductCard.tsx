import React from 'react';
import classes from './ProductCard.module.scss'
import { Link } from 'react-router-dom';



const ProductCard = (props:any) => {
    return (
        <div className={classes.productCard}>
            <Link to={"/catalog/" + props.productInfo.id}>
            <button className={classes.productCard__addButton}>+</button>
            </Link>
            
            <img className={classes.productCard__productPhoto}
                 src={props.productInfo.productPhoto}
                 alt={props.productInfo.productPhotoAlt}/>
            <div className={classes.productCard__ProductTextInfo}>
                <div className={classes.productCard__productPrice}>
                    {props.productInfo.productPrice}
                    <span>₽</span>
                </div>
                <p className={classes.productCard__productName}>
                    {props.productInfo.productName}
                </p>
                <p className={classes.productCard__productDescription}>
                    {props.productInfo.productDescription}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;