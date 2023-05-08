import classes from './VideoBlock.module.scss'
const VideoBlock = () => {
    return (
        <div className={classes.videoBlock}>
            <h1>
            посмотрите промо-ролик <br /> о нашей одежде
            </h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PdJq-dAQr-Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    )
};

export default VideoBlock;
