import React, {useEffect} from 'react';
import classes from './LeftCategoryMenu.module.scss'
import {useStore} from "effector-react";
import {$filtrByAction, $listOfProductsTypes, changeFilterByActionType, listOfProductsSort } from "../../effector";
const LeftCategoryMenu = () => {
    const allCategories = useStore($listOfProductsTypes)
    const filtrCategories =useStore($filtrByAction)


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
                <li>
                    <input type="checkbox" checked= {category.value} onClick={(event:any) => changeFilterByActionType(category)}></input>
                    <label >{category.title}</label>
                </li>
                )}
            </ul>}
        </div>
    );
};

export default LeftCategoryMenu;