
import { Slider} from 'antd';
import classes from './LeftCategoryMenu.module.scss'
import {useStore} from "effector-react";
import {$filtrByAction, $listOfProductsTypes, $minMaxPrice, changeFilterByActionType,  changeMaxPrice,  changeMinMaxPriceSlider,  changeMinPrice, listOfProductsSort, resetProductList } from "../../effector";
const LeftCategoryMenu = () => {
    const allCategories = useStore($listOfProductsTypes)
    const filtrCategories =useStore($filtrByAction)
    const minMaxPrice = useStore($minMaxPrice)

    return (
        <div className={classes.leftMenu}>
            <p className={classes.leftMenu__title}>Категории</p>
            {<ul className={classes.leftMenu__ul} >
                {[...allCategories].map((category:any) =>
                <li>
                    <div className={classes.leftMenu__category} onClick={(event:any)=> listOfProductsSort(category.value)}>
                        {category.title}
                    </div>
                </li>
                )}
            </ul>}
            <p className={classes.leftMenu__title}>Фильтры</p>
            {<ul className={classes.leftMenu__ul} >
                {[...filtrCategories].map((category:any) =>
                <li className={classes.leftMenu__filterLi}>
                    <input type="checkbox" checked= {category.value} onClick={(event:any) => changeFilterByActionType(category)}></input>
                    <label >{category.title}</label>
                </li>
                )}
            </ul>}
            <p className={classes.leftMenu__title}>цена продукции</p>
            <div className={classes.leftMenu__price}>
            <div className={classes.leftMenu__priceInputs}>
                    <input value={minMaxPrice.minPrice} type="number" onChange={(event:any) =>changeMinPrice(event.target.value)}/>
                    <input value={minMaxPrice.maxPrice} type="number" onChange={(event:any) =>changeMaxPrice(event.target.value)}/>
                </div>
                <Slider range min={100} max={3000} defaultValue={[minMaxPrice.minPrice, minMaxPrice.maxPrice]} reverse={false} onChange={(event:any)=> changeMinMaxPriceSlider(event)}/>
            </div>
               
                
            

            <button className={classes.leftMenu__cleanBtn} onClick={(event) => resetProductList()}>Отчистить фильтры</button>
        </div>
    );
};

export default LeftCategoryMenu;