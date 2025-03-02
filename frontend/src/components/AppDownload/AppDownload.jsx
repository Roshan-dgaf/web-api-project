import React from 'react';
import { assets } from '../../assets/assets';
import './AppDownload.css';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <h2>Get the Ultimate Cooking Experience! 🍽️</h2>
            <p className='app-download-text'>
                Download our mobile app now and access delicious recipes anytime, anywhere!
            </p>
            <p className='app-name'>📲 Recipe App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="Google Play Store" className="download-btn" />
                <img src={assets.app_store} alt="Apple App Store" className="download-btn" />
            </div>
        </div>
    );
};

export default AppDownload;