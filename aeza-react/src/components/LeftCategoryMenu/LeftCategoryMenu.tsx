
import { Slider} from 'antd';

import {useStore} from "effector-react";
import '../../styles/leftCategoryMenu.scss'
import {$filtrByAction, $listOfProductsTypes, $minMaxPrice, changeFilterByActionType,  changeMaxPrice,  changeMinMaxPriceSlider,  changeMinPrice, listOfProductsSort, resetProductList } from "../../effector";
const LeftCategoryMenu = () => {
    const allCategories = useStore($listOfProductsTypes)
    const filtrCategories =useStore($filtrByAction)
    const minMaxPrice = useStore($minMaxPrice)

    return (
        <div className="leftMenu">
            <p className="leftMenu__title small-strong-text">категории</p>
            {<ul className="leftMenu__ul">
                {[...allCategories].map((category) =>
                <li>
                    <div className="leftMenu__category" onClick={(event:any)=> listOfProductsSort(category.value)}>
                        {category.title}
                    </div>
                </li>
                )}
            </ul>}
            <p className="leftMenu__title small-strong-text">фильтры</p>
            {<ul className={"leftMenu__ul"} >
                {[...filtrCategories].map((category:any) =>
                <li className="leftMenu__filterLi">
                    <input type="checkbox" checked= {category.value} onClick={(event:any) => changeFilterByActionType(category)}></input>
                    <label >{category.title}</label>
                </li>
                )}
            </ul>}
            <p className="leftMenu__title small-strong-text">цена продукции</p>
            <div className="leftMenu__price">
            <div className="leftMenu__priceInputs">
                    <input value={minMaxPrice.minPrice} type="number" onChange={(event:any) =>changeMinPrice(event.target.value)}/>
                    <input value={minMaxPrice.maxPrice} type="number" onChange={(event:any) =>changeMaxPrice(event.target.value)}/>
                </div>
                <Slider range min={100} max={3000} defaultValue={[minMaxPrice.minPrice, minMaxPrice.maxPrice]} reverse={false} onChange={(event:any)=> changeMinMaxPriceSlider(event)}/>
            </div>
               
                
            

            <button className="leftMenu__cleanBtn" onClick={(event) => resetProductList()}>Отчистить фильтры</button>
        </div>
    );
};

export default LeftCategoryMenu;