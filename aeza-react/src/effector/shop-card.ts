import { createEvent, createStore, sample } from "effector";
import { IproductList } from "../consts/prodListFile";
export interface shopCard {
    productName?: string,
    productPrice?: number,
    productCount?: number
}
export const addToCard = createEvent<IproductList | undefined>()
export const $shopCardList = createStore<shopCard[]>([])
.on(addToCard, (state, value) => {
    if (value?.onSale) {
        return([...state, {
            productName: value?.productName,
            productPrice: value?.salePrice,
            productCount: 1
        }])
    }else{
    return([...state, {
        productName: value?.productName,
        productPrice: value?.productPrice,
        productCount: 1
    }])}
}
)



