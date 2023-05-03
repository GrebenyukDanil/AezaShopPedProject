import React, {useEffect} from 'react';
import classes from './SortSelect.module.scss'
import {$listOfSorts,$typeOfSort,changeTypeOfSort,} from "../../../effector";

import {useStore} from "effector-react";
const SortSelect = (props:any) => {
    //создание переменных из сторов
    const listOfSorts:any = useStore($listOfSorts)
    const sa:any = useStore($typeOfSort)
    return (
        
        <div className={classes.sort}>
            <p><div>{sa}</div></p>
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