import {createStore, createEvent, sample} from "effector";

import { productSort } from "../functionalLogic/sortingFunction";
import { productListPerem } from "../functionalLogic/prodListFile";



//Стор с продуктами
export const SortListOfProducts = createEvent()
export const resetProductList = createEvent()
export const $listOfProducts = createStore(productListPerem).on(SortListOfProducts, (state,value) => value).reset(resetProductList)

//типы примитивных фильтраций
export const $listOfSorts:any = createStore([{
    title: "По названию",
    value: "productName",
},{
    title: "По цене",
    value: "productPrice",
},{
    title: "По популярности",
    value: "buyCount",
}]).reset(resetProductList)

export const changeTypeOfSort = createEvent()
export const $typeOfSort:any = createStore("productName").on(changeTypeOfSort, (state:any, value:any) => value)
export const $listOfProductsTypes = createStore([{
   title: "Все",
   value: "all" 
},{
    title: "Футболки",
    value: "tShirt" 
 },{
    title: "Штаны",
    value: "pants" 
 },{
    title: "Обувь",
    value: "shoes" 
 },{
    title: "Носки",
    value: "socks" 
 },
]).reset(resetProductList)

export const listOfProductsSort = createEvent()
export const $ProductsSortType = createStore("all").on(listOfProductsSort,(state:any, value:any) => value).reset(resetProductList)



//чекбоксы фильтрации акций [акции, в наличии, со скидкой]
export const changeFilterByActionType = createEvent<any>()
export const $filtrByAction = createStore([
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
]).on(changeFilterByActionType, (state, value) =>  state.map(obj => {
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

 //по цене
export const changeMinPrice = createEvent()
export const changeMaxPrice = createEvent()
export const changeMinMaxPriceSlider = createEvent()
export const $minMaxPrice = createStore(
    {
        minPrice: $listOfProducts.defaultState.reduce((minValue, obj) => {
            return obj.productPrice < minValue ? obj.productPrice : minValue;
          }, $listOfProducts.defaultState[0].productPrice) ,
        maxPrice: $listOfProducts.defaultState.reduce((maxnValue, obj) => {
              return obj.productPrice >maxnValue ? obj.productPrice : maxnValue;
            }, $listOfProducts.defaultState[0].productPrice)   
    }
).on(changeMinPrice, (state:any, value:any) => {
        return {
            ...state,
            minPrice: value
        }
}).on(changeMaxPrice, (state:any, value:any) => {
        return {
            ...state,
            maxPrice: value
        }
}).reset(resetProductList).on(changeMinMaxPriceSlider,(state, value:any) => {
    return{
        ...state,
        minPrice: value[0],
        maxPrice: value[1]
    } })

console.log($minMaxPrice)
sample({
    clock: [listOfProductsSort,changeTypeOfSort,changeFilterByActionType,changeMinPrice,changeMaxPrice,changeMinMaxPriceSlider],
    source: [$ProductsSortType,$typeOfSort,$listOfProducts,$filtrByAction,$minMaxPrice],
    fn: (value:any) => (productSort(value)),
    target: SortListOfProducts
})





