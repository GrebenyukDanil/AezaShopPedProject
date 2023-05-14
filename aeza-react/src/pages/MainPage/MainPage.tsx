

import VideoBlock from "../../components/VideoBlock/VideoBlock";
import BlueContant from "../../components/BlueContant/BlueContant";
import Header from "../../components/Header/Header";


const MainPage = () => (
    <>
        <Header />
        <BlueContant link="/catalog" btnText="смотреть каталог продукции" />

        <VideoBlock />
        <Header />
    </>

);

export default MainPage;
