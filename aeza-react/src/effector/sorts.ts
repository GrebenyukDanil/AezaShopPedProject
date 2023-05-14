import { createStore, createEvent, sample } from "effector";

import { productSort } from "../functionalLogic/sortingFunction";
import { IproductList, productListPerem } from "../consts/prodListFile";


//Интерфейсы


export interface IlistOfSort {
    title: string;
    value: string;
}
export interface IlistOfProductsTypes {
    title: string;
    value: string;
}
export interface IfiltrByAction {
    title: string;
    value: boolean;
    typeTitle: string;
}
export interface IminMaxPrice {
    minPrice: number;
    maxPrice: number;
}
//---------------ивенты---------------

export const SortListOfProducts = createEvent<IproductList[]>()
export const resetProductList = createEvent<void>()
export const changeTypeOfSort = createEvent<string>()
export const listOfProductsSort = createEvent<string>()
export const changeFilterByActionType = createEvent<IfiltrByAction>()
export const changeMinPrice = createEvent<string>()
export const changeMaxPrice = createEvent<string>()
export const changeMinMaxPriceSlider = createEvent<number[]>()

//---------------сторы---------------
//Стор для хранения данных с формы авторизации


//Стор для хранения списка продукции
export const $listOfProducts = createStore<IproductList[]>(productListPerem)
    .on(SortListOfProducts, (state, value) => value)
    .reset(resetProductList)

//Стор типов сортировки
export const $listOfSorts = createStore<IlistOfSort[]>([{
    title: "По названию",
    value: "productName",
}, {
    title: "По цене",
    value: "productPrice",
}, {
    title: "По популярности",
    value: "buyCount",
}]).reset(resetProductList)
//Стор типов сортировки по категориям
export const $listOfProductsTypes = createStore<IlistOfProductsTypes[]>([{
    title: "Все",
    value: "all"
}, {
    title: "Футболки",
    value: "tShirt"
}, {
    title: "Штаны",
    value: "pants"
}, {
    title: "Обувь",
    value: "shoes"
}, {
    title: "Носки",
    value: "socks"
},
]).reset(resetProductList)
//Стор для хранения выбранного типа сортировки
export const $typeOfSort = createStore<string>("productName")
    .on(changeTypeOfSort, (state, value) => value)
//Стор для хранения выбранной категории сортировки
export const $ProductsSortType = createStore<string>("all")
    .on(listOfProductsSort, (state, value) => value)
    .reset(resetProductList)
//Стор для хранения типов сортировки с галочками    
export const $filtrByAction = createStore<IfiltrByAction[]>([
    {
        title: "акции",
        value: false,
        typeTitle: "action"
    },
    {
        title: "в наличии",
        value: false,
        typeTitle: "inStock"
    },
    {
        title: "со скидкой",
        value: false,
        typeTitle: "onSale"
    }
]).on(changeFilterByActionType, (state, value) => state.map(obj => {
    if (obj.title === value.title) {
        return {
            ...obj,
            title: value.title,
            value: !value.value
        };
    } else {
        return obj;
    }
})
).reset(resetProductList)
//Стор для хранения сортировки по цене
export const $minMaxPrice = createStore<IminMaxPrice>(
    {
        minPrice: $listOfProducts.defaultState.reduce((minValue, obj) => {
            return obj.productPrice < minValue ? obj.productPrice : minValue;
        }, $listOfProducts.defaultState[0].productPrice),
        maxPrice: $listOfProducts.defaultState.reduce((maxnValue, obj) => {
            return obj.productPrice > maxnValue ? obj.productPrice : maxnValue;
        }, $listOfProducts.defaultState[0].productPrice)
    }
).on(changeMinPrice, (state: any, value: any) => {
    return {
        ...state,
        minPrice: value
    }
}).on(changeMaxPrice, (state: any, value: any) => {
    return {
        ...state,
        maxPrice: value
    }
}).reset(resetProductList).on(changeMinMaxPriceSlider, (state, value: any) => {
    return {
        ...state,
        minPrice: value[0],
        maxPrice: value[1]
    }
})

//---------------Сэмлы---------------

export interface ISortObject{
    ProductsSortType: string,
    typeOfSort: string,
    listOfProducts: IproductList[],
    filtrByAction: IfiltrByAction[],
    minMaxPrice: IminMaxPrice

}
sample({
    clock: [listOfProductsSort, changeTypeOfSort, changeFilterByActionType, changeMinPrice, changeMaxPrice, changeMinMaxPriceSlider],
    source: {ProductsSortType:$ProductsSortType, typeOfSort:$typeOfSort, listOfProducts:$listOfProducts, filtrByAction:$filtrByAction, minMaxPrice:$minMaxPrice},
    fn: (value) => (productSort(value)),
    target: SortListOfProducts
})








