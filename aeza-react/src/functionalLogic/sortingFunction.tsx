
import { IproductList, productListPerem } from "../consts/prodListFile"
import { ISortObject } from "../effector/sorts"


export function productSort(sortInfo:ISortObject){

    //Распаршиваю инфу
    const sortingByProductTypeValue = sortInfo.ProductsSortType
    const sortingByProductInfoValue = sortInfo.typeOfSort
    let productList = productListPerem
    const sortingByAction = sortInfo.filtrByAction
    const minMaxPrice = sortInfo.minMaxPrice

    //Сначала решил сортировать список по типу категори [футболки, штаны...]
    if (sortingByProductTypeValue === "all"){
        productList = productListPerem
       
    } else{
        productList = productList.filter((item) => item.type === sortingByProductTypeValue)
        
    }

    //Потом сортировка по типу сортировки) [кол-во покупок, цена ...]
    if (sortingByProductInfoValue === 'buyCount'){
        productList = productList.sort((a,b) => a[sortingByProductInfoValue] > b[sortingByProductInfoValue] ? -1 : 1)
    }
    else {
        productList = productList.sort((a:any,b:any) => a[sortingByProductInfoValue] > b[sortingByProductInfoValue] ? 1 : -1)
    }

    //Сортировочка по разделу ФИЛЬТРЫ
    const listOfCheckedFilters:string[] = [];

    sortingByAction.forEach((sort) => {
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

    //Вывод и сортировка окончательная кек
    
    filteredProductList = filteredProductList.filter(obj => obj.productPrice>= minMaxPrice.minPrice && obj.productPrice <= minMaxPrice.maxPrice); // фильтруем объекты по цене
  
    return filteredProductList
      
}