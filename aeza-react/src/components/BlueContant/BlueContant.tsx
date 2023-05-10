import tShirt from './tShrirt.svg'
import '../../styles/blueContant.scss'
const BlueContant = () => {
    return (
        <div className="aeza-info-block">
                <div className="aeza-info-block__content">
                    <h1 className="aeza-info-block__title-text default-big-text">
                        аéза — это качественный бренд, магазин
                    </h1>
                    <p className="aeza-info-block__desc-text default-text">
                        виртуальные серверы на мощных <br /> процессорах AMD и NVMe SSD накопителях
                    </p>
                    <button className="aeza-info-block__button black-button">
                        смотреть каталог продукции
                    </button>
                </div>
                <img className="aeza-info-block__img" src={tShirt} alt="" />
            </div>
        
    );
};

export default BlueContant;
