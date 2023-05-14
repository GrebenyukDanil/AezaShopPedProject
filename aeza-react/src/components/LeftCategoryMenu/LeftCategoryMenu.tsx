
import { Slider} from 'antd';

import {useStore} from "effector-react";
import './leftCategoryMenu.scss'
import { $filtrByAction, $listOfProductsTypes, $minMaxPrice, changeFilterByActionType, changeMaxPrice, changeMinMaxPriceSlider, changeMinPrice, listOfProductsSort, resetProductList } from '../../effector/sorts';

const LeftCategoryMenu = () => {
    const allCategories = useStore($listOfProductsTypes)
    const filtrCategories =useStore($filtrByAction)
    const minMaxPrice = useStore($minMaxPrice)

    return (
        <div className="left-menu">
            <p className="left-menu small-strong-text">категории</p>
            {<ul className="left-menu">
                {allCategories.map((category) =>
                <li>
                    <div className="left-menu__category" onClick={()=> listOfProductsSort(category.value)}>
                        {category.title}
                    </div>
                </li>
                )}
            </ul>}
            <p className="left-menu__title small-strong-text">фильтры</p>
            {<ul className={"left-menu__ul"} >
                {filtrCategories.map((category) =>
                <li className="left-menu__filter-li">
                    <input type="checkbox" checked= {category.value} onClick={() => changeFilterByActionType(category)}></input>
                    <label >{category.title}</label>
                </li>
                )}
            </ul>}
            <p className="lleft-menu__title small-strong-text">цена продукции</p>
            <div className="left-menu__price">
            <div className="left-menu__price-inputs">
                    <input value={minMaxPrice.minPrice} type="number" onChange={(event) =>changeMinPrice(event.target.value)}/>
                    <input value={minMaxPrice.maxPrice} type="number" onChange={(event) =>changeMaxPrice(event.target.value)}/>
                </div>
                <Slider range min={100} max={3000} defaultValue={[minMaxPrice.minPrice, minMaxPrice.maxPrice]} reverse={false} onChange={(event)=> changeMinMaxPriceSlider(event)}/>
            </div>
               
                
            

            <button className="left-menu__clean-btn" onClick={() => resetProductList()}>Отчистить фильтры</button>
        </div>
    );
};

export default LeftCategoryMenu;