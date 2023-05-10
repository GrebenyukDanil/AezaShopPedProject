import { Link } from 'react-router-dom';
import '../../styles/videoBlock.scss'
import firstImg from './first.svg'
import secondImg from './second.svg'
import thirdImg from './third.svg'
import background from './background.png'
import qualityImg from './quality.png'
import aezapng from './aeza-dimond.png'
const VideoBlock = () => {
    return (
        <div className="videoBlock">
            <h1 className='videoBlock__h1 default-big-text'>
                посмотрите промо-ролик <br /> о нашей одежде
            </h1>
            <div className='videoBlock__video-content'>
                <iframe className='videoBlock__video' width="560" height="315" src="https://www.youtube.com/embed/PdJq-dAQr-Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <ul>
                    <li className='videoBlock__point-block point-block'>
                        <img className='point-block__img' src={firstImg} alt="first" />
                        <div>
                            <p className='point-block__fp small-strong-text'>Именитый бренд, который<br></br>достойно носить</p>
                            <p className='point-block__sp small-grey-text'>web-защита, которая реально работает.<br />прозрачная фильтрация и демократичные цены</p>
                        </div>
                    </li>
                    <li className='videoBlock__point-block point-block'>
                        <img className='point-block__img' src={secondImg} alt="first" />
                        <div>
                            <p className='point-block__fp small-strong-text'>Именитый бренд, который<br></br>достойно носить</p>
                            <p className='point-block__sp small-grey-text'>web-защита, которая реально работает.<br />прозрачная фильтрация и демократичные цены</p>
                        </div>
                    </li>
                    <li className='videoBlock__point-block point-block'>
                        <img className='point-block__img' src={thirdImg} alt="first" />
                        <div>
                            <p className='point-block__fp small-strong-text'>Именитый бренд, который<br></br>достойно носить</p>
                            <p className='point-block__sp small-grey-text'>web-защита, которая реально работает.<br />прозрачная фильтрация и демократичные цены</p>
                        </div>
                    </li>
                </ul>
            </div>
            <hr />
            <div className='videoBlock__about about'>
                <h1 className='default-big-text about__h1'>
                    почему одежда <br /> аéзы, крута?
                </h1>
                <p className='default-text about__p'>
                    мы – современный хостинг-провайдер у которого<br />нетолько качественный сервис, но и бренд, одежда.
                </p>
            </div>
            <div className='info-card'>
                <img className='info-card__img' src={background} alt="" />
                <div className='info-card__content'>
                    <h1 className='default-big-text info-card__h1'>
                        аéза — это <br /> <span className='gradient'>качественный</span>  <br /> бренд, магазин
                    </h1>
                    <p className='default-text info-card__p'>
                        виртуальные серверы на мощных <br /> процессорах AMD и NVMe SSD накопителях
                    </p>
                    <Link to="/login">
                        <button className='black-button info-card__button'>войти в аккаунт</button>
                    </Link>
                </div>

            </div>
            <div className='just-for-flex'>
                <div className="about-quality">
                    <p className='about-quality__p1 small-strong-text'>
                        Крутое качество<br />материалов
                    </p>
                    <p className='about-quality__p2 small-grey-text'>
                        web-защита, которая реально<br /> работает. прозрачная фильтрация<br /> и демократичные цены
                    </p>
                    <img src={qualityImg} alt="" />
                </div>
                <div className="about-quality about-quality--dlin">
                    <p className='about-quality__p1 small-strong-text'>
                        Именитый бренд, который<br /> достойно носить
                    </p>
                    <p className='about-quality__p2 small-grey-text'>
                        web-защита, которая реально<br /> работает. прозрачная фильтрация<br /> и демократичные цены
                    </p>
                    <img src={aezapng} alt="" />
                </div>
            </div>
        </div>
    )
};

export default VideoBlock;
