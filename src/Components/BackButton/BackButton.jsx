import React from 'react'
import "./style.css";

const BackButton = () => {

    return (
        <>
            <button className="slideButtons back">
                <span className="backText">BACK</span>
                <span className="backArrow">
                    <svg data-name="button-back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40">
                        <g transform="translate(40.45 27.83) rotate(-90)">
                            <path id="Fill-3-Copy-2" d="M6.2.584a1.8,1.8,0,0,1,2.653,0l5.606,6.025a2.065,2.065,0,0,1-.025,2.814A1.791,1.791,0,0,1,11.781,9.4L7.527,4.831,3.2,9.423a1.813,1.813,0,0,1-2.653,0,2.091,2.091,0,0,1,0-2.814Z" />
                            <path id="Fill-3-Copy-2-2" data-name="Fill-3-Copy-2" d="M4.96.467a1.439,1.439,0,0,1,2.122,0l4.485,4.82a1.652,1.652,0,0,1-.02,2.251,1.433,1.433,0,0,1-2.122-.021l-3.4-3.652L2.558,7.538a1.45,1.45,0,0,1-2.122,0,1.673,1.673,0,0,1,0-2.251Z" transform="translate(1 11)" opacity="0.5" />
                        </g>
                    </svg>
                </span>
            </button>
        </>
    )
}

export default BackButton;