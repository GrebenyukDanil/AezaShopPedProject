import { productListPerem } from "./prodListFile"

export function productSort(sortInfo:any){
    // console.log(sortInfo)
    //Распаршиваю инфу
    const sortingByProductTypeValue = sortInfo[0]
    const sortingByProductInfoValue = sortInfo[1]
    let productList = productListPerem
    const sortingByAction = sortInfo[3]
    //Сначала решил сортировать список по типу категори [футболки, штаны...]
    if (sortingByProductTypeValue === "all"){
        productList = productListPerem
       
    } else{
        productList = productList.filter((item:any) => item.type === sortingByProductTypeValue)
        
    }
    //Потом сортировка по типу сортировки) [кол-во покупок, цена ...]
    if (sortingByProductInfoValue === 'buyCount'){
        return [...productList].sort((a:any,b:any) => a[sortingByProductInfoValue] > b[sortingByProductInfoValue] ? -1 : 1)
    }

    //Сортировочка по разделу ФИЛЬТРЫ
    const listOfCheckedFilters: any[] = []

    sortingByAction.map((sort:any) => {
        if (sort.value === true) { 
          listOfCheckedFilters.push(sort.typeTitle)
        }
      })
    console.log(listOfCheckedFilters)
    const filteredProductList: any[] = []
    productList.map((product:any)=> {
        console.log("1")
        listOfCheckedFilters.map((filter:any) =>{
            console.log(listOfCheckedFilters)
            if (product[filter] === true){
                filteredProductList.push(product)
            }
        })
    })
    console.log(filteredProductList)
    //Вывод и сортировка окончательная кек
    return [...productList].sort((a:any,b:any) => a[sortingByProductInfoValue] > b[sortingByProductInfoValue] ? 1 : -1)
    
}