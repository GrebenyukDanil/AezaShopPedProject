import classes from './BlueContant.module.scss'
import tShirt from './tShrirt.svg'
const BlueContant = () => {
    return (
        <div className={classes.container}>
            <div className={classes.blueContant}>
                <div className={classes.blueContant__content}>
                    <h1 className={classes.blueContant__h1}>
                        аéза — это качественный бренд, магазин
                    </h1>
                    <p className={classes.blueContant__p}>
                        виртуальные серверы на мощных <br /> процессорах AMD и NVMe SSD накопителях
                    </p>
                    <button className={classes.blueContant__button}>
                        смотреть каталог продукции
                    </button>
                </div>
                <img className={classes.blueContant__img} src={tShirt} alt="" />
            </div>
        </div>
        
    );
};

export default BlueContant;
