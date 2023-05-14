import { $listOfSorts, changeTypeOfSort } from "../../effector/sorts";
import "./sortSelect.scss"
import {useStore} from "effector-react";

const SortSelect = () => {
    //создание переменных из сторов
    const listOfSorts= useStore($listOfSorts)

    return (
        
        <div className="sort">

            <p>Каталог • Фильтр</p>
            <select onChange={(event) => changeTypeOfSort(event.target.value)}>
                <option disabled value="productName">Сортировка по</option>
                {listOfSorts.map((item) =>
                    <option key={item.value} value={item.value}>
                        {item.title}
                    </option>
                )}
            </select>
        </div>

    );
};

export default SortSelect;