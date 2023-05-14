import { useStore } from "effector-react";
import { $shopCardList } from "../../effector/shop-card";
import { editShopList } from "../../functionalLogic/shoppingCard";

const ShopCard = () => {
    const shopCard = useStore($shopCardList)
  let sum = 0
  editShopList(shopCard).map((prod: any) => sum += prod.productPrice * prod.productCount)
    return (
        <>
        {
        shopCard.length == 0 ?
          <></> :
          <div className="shop-card">
            <h1 className='small-strong-text'>Корзина</h1>
            <div >
              {
                editShopList(shopCard).map((product: any) =>
                  <div className='shop-card__item'>{product.productName} x {product.productCount}</div>
                )}
            </div>

            <p style={{ fontSize: "18px" }} className='small-strong-text'>Итого: {sum}</p>
          </div>
      }
        </>
    );
};

export default ShopCard;
