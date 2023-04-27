import React from 'react';
import classes from './SortSelect.module.scss'
const SortSelect = ({options, defaultValue, value, onChange}:any) => {
    return (
        <div className={classes.sort}>
            <p>Каталог • Фильтр</p>
            <select
                    value={value}
                    onChange={event => onChange(event.target.value)}>
                <option disabled value="">{defaultValue}</option>
                {options.map((option:any) =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>

    );
};

export default SortSelect;