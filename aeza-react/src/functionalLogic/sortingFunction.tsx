import { Isdaasd } from "../effector"
import { IproductList, productListPerem } from "./prodListFile"

export function productSort(sortInfo:Isdaasd){
    console.log(sortInfo)
    //Распаршиваю инфу
    const sortingByProductTypeValue = sortInfo.ProductsSortType
    const sortingByProductInfoValue = sortInfo.typeOfSort
    let productList = productListPerem
    const sortingByAction = sortInfo.filtrByAction
    const minMaxPrice = sortInfo.minMaxPrice
    console.log(1)
    //Сначала решил сортировать список по типу категори [футболки, штаны...]
    if (sortingByProductTypeValue === "all"){
        productList = productListPerem
       
    } else{
        productList = productList.filter((item) => item.type === sortingByProductTypeValue)
        
    }
    console.log(2)
    //Потом сортировка по типу сортировки) [кол-во покупок, цена ...]
    if (sortingByProductInfoValue === 'buyCount'){
        productList = [...productList].sort((a,b) => a[sortingByProductInfoValue] > b[sortingByProductInfoValue] ? -1 : 1)
    }
    else {
        productList = [...productList].sort((a:any,b:any) => a[sortingByProductInfoValue] > b[sortingByProductInfoValue] ? 1 : -1)
    }
    console.log(3)
    //Сортировочка по разделу ФИЛЬТРЫ
    const listOfCheckedFilters:string[] = [];

    sortingByAction.map((sort) => {
      if (sort.value === true) {
        listOfCheckedFilters.push(sort.typeTitle);
      }
    });
    let filteredProductList: IproductList[]  = [];
    
    filteredProductList = productList.filter((product: any) => {
        return listOfCheckedFilters.every((key) => {
          return product[key] === true;
        });
      });
      //Вывод и сортировка окончательная кек
    // console.log(filteredProductList)
    //Вывод и сортировка окончательная кек
    
    filteredProductList = filteredProductList.filter(obj => obj.productPrice>= minMaxPrice.minPrice && obj.productPrice <= minMaxPrice.maxPrice); // фильтруем объекты по цене
  
    return filteredProductList
      
}