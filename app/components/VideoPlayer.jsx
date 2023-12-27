import { useEffect, useRef } from "react";

function VideoPlayer() {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if (cloudinaryRef.current) return;
        cloudinaryRef.current = window.cloudinary
        cloudinaryRef.current.VideoPlayer(videoRef.current){}

    }, []);
    return (
        <video
        ref={videoRef}
        data-cld-public-id="video/waterfall"
        />


    );
}

export default VideoPlayer;