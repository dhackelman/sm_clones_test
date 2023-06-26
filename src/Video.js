import React, {useRef, useState} from 'react';
import './Video.css';

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (isVideoPlaying) {
            // stop
            videoRef.current.pause();
            setIsVideoPlaying(false)
        } else {    
            setIsVideoPlaying(true)
            videoRef.current.play();
            // play
        }   
    }

    return (
        <div className="video">
            <video 
                ref={videoRef}
                loop
                onClick={handleVideoPress}
                className="video_player"
                src="https://v16m-default.tiktokcdn-us.com/ae84a8568d24a6dabfa9ac1fe02a7364/64975289/video/tos/useast5/tos-useast5-ve-0068c004-tx/c7ab64ee1d7849b499f0ea4f62a5e196/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1778&bt=889&cs=0&ds=3&ft=_G6uMBnZq8Zmo-ITVc_vj~_LsAhLrus&mime_type=video_mp4&qs=0&rc=aGg0Zzs1ODVkZTZoN2c6NUBpM2VlZTs6Zjt1OzMzZzczNEAwNDIvYDQvNTQxNTJfYC9hYSNsYS42cjQwMGdgLS1kMS9zcw%3D%3D&l=202306241428052EB93FAD17DF5BD7F7B0&btag=e00000000"> </video> 
        </div>
    );
};
export default Video;