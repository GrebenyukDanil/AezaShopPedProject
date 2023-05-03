import { productListPerem } from "./prodListFile"

export function productSort(sortInfo:any){
    console.log(sortInfo)
    //Распаршиваю инфу
    const sortingByProductTypeValue = sortInfo[0]
    const sortingByProductInfoValue = sortInfo[1]
    let productList = productListPerem
    const sortingByAction = sortInfo[3]
    const minMaxPrice = sortInfo[4]
    //Сначала решил сортировать список по типу категори [футболки, штаны...]
    if (sortingByProductTypeValue === "all"){
        productList = productListPerem
       
    } else{
        productList = productList.filter((item:any) => item.type === sortingByProductTypeValue)
        
    }
    //Потом сортировка по типу сортировки) [кол-во покупок, цена ...]
    if (sortingByProductInfoValue === 'buyCount'){
        productList = [...productList].sort((a:any,b:any) => a[sortingByProductInfoValue] > b[sortingByProductInfoValue] ? -1 : 1)
    }
    else {
        productList = [...productList].sort((a:any,b:any) => a[sortingByProductInfoValue] > b[sortingByProductInfoValue] ? 1 : -1)
    }
    //Сортировочка по разделу ФИЛЬТРЫ
    const listOfCheckedFilters: any[] = [];

    sortingByAction.map((sort: any) => {
      if (sort.value === true) {
        listOfCheckedFilters.push(sort.typeTitle);
      }
    });
    let filteredProductList: any[] = [];
    filteredProductList = productList.filter((product: any) => {
        return listOfCheckedFilters.every((key) => {
          return product[key] === true;
        });
      });
      //Вывод и сортировка окончательная кек
    // console.log(filteredProductList)
    //Вывод и сортировка окончательная кек
    console.log(filteredProductList)
    filteredProductList = filteredProductList.filter(obj => obj.productPrice>= minMaxPrice.minPrice && obj.productPrice <= minMaxPrice.maxPrice); // фильтруем объекты по цене
    console.log(filteredProductList)
    return filteredProductList
      
}