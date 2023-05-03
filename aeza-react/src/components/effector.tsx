import {createStore, createEvent, sample} from "effector";

import { productSort } from "../functionalLogic/sortingFunction";
import { productListPerem } from "../functionalLogic/prodListFile";


//Стор с продуктами
export const SortListOfProducts = createEvent()
export const resetProductList = createEvent()
export const $listOfProducts = createStore(productListPerem).on(SortListOfProducts, (state,value) => value).reset(resetProductList)
console.log($listOfProducts)
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
}])
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
])
export const listOfProductsSort = createEvent()
export const $ProductsSortType = createStore("all").on(listOfProductsSort,(state:any, value:any) => value)


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
)
 
//find index
sample({
    clock: [listOfProductsSort,changeTypeOfSort,changeFilterByActionType],
    source: [$ProductsSortType,$typeOfSort,$listOfProducts,$filtrByAction],
    fn: (value:any) => (productSort(value)),
    target: SortListOfProducts
})





