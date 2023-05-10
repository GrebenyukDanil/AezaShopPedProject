import React, {useEffect} from 'react';
import classes from './SortSelect.module.scss'


import {useStore} from "effector-react";
import { $listOfSorts, changeTypeOfSort } from '../../effector';
const SortSelect = (props:any) => {
    //создание переменных из сторов
    const listOfSorts:any = useStore($listOfSorts)

    return (
        
        <div className={classes.sort}>

            <p>Каталог • Фильтр</p>
            <select onChange={(event:any) => changeTypeOfSort(event.target.value)}>
                <option disabled value="productName">Сортировка по</option>
                {listOfSorts.map((item:any) =>
                    <option key={item.value} value={item.value}>
                        {item.title}
                    </option>
                )}
            </select>
        </div>

    );
};

export default SortSelect;