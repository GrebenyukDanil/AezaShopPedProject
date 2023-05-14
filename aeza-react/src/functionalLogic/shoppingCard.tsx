import { shopCard } from "../effector/shop-card";

export function editShopList(shopCards:shopCard[]){
    
    let counts: any = {};
    shopCards.forEach((item: any) => {
      if (counts[item.productName]) {
        counts[item.productName].productCount += item.productCount;
      } else {
        counts[item.productName] = { productPrice: item.productPrice, productCount: item.productCount };
      }
    });

    let reducedArray = Object.keys(counts).map(productName => {
      return {
        productName: productName,
        productPrice: counts[productName].productPrice,
        productCount: counts[productName].productCount
      };
    });
    return reducedArray
}