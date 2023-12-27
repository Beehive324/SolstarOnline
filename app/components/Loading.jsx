import React from "react";
import animation from '../video/3d.mp4'

const Loading = () => {
    return (
        <div>
            <video autoPlay loop muted className="loading-video">
                <source src={animation} type="video/mp4" />
            </video>
        </div>
    );
};

export default Loading;


