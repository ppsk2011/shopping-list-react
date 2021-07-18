import React, { useEffect, useRef } from 'react'
import './shoppingDashboard.css'
const ShoppingDashboard = () => {
    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    let bannerStatus = 1;
    const bannerTimer = 4000;
    useEffect(() => {
        bannnerLoop();
        startBannerLoop();
    }, [])

    useEffect(() => {
        if (bannerTimer !== null) {
            let id = setInterval(bannnerLoop(), bannerTimer);
            return () => clearInterval(id);
        }
    }, [bannerTimer]);

    const startBannerLoop = () => {
        setInterval(() => {
            bannnerLoop();
        }, bannerTimer)
    }

    const bannnerLoop = () => {
        if (bannerStatus === 1) {
            if (img2.current) img2.current.style.opacity = "0";
            setTimeout(() => {
                if (img1.current && img2.current && img3.current) {
                    img1.current.style.right = "0px";
                    img1.current.style.zIndex = "100";
                    img2.current.style.right = "-1400";
                    img2.current.style.zIndex = "120";
                    img3.current.style.right = "1400";
                    img3.current.style.zIndex = "80";
                }
            }, 500)
            setTimeout(() => {
                if (img2.current)
                    img2.current.style.opacity = "1";
            }, 1000)
            bannerStatus = 2;
        }
        else if (bannerStatus === 2) {
            if (img3.current) img3.current.style.opacity = "0";
            setTimeout(() => {
                if (img1.current && img2.current && img3.current) {
                    img2.current.style.right = "0px";
                    img2.current.style.zIndex = "100";
                    img3.current.style.right = "-1400";
                    img3.current.style.zIndex = "120";
                    img1.current.style.right = "1400";
                    img1.current.style.zIndex = "80";
                }
            }, 500)
            setTimeout(() => {
                if (img3.current)
                    img3.current.style.opacity = "1";
            }, 1000)
            bannerStatus = 3;
        }
        else if (bannerStatus === 3) {
            if (img1.current) img1.current.style.opacity = "0";
            setTimeout(() => {
                if (img1.current && img2.current && img3.current) {
                    img3.current.style.right = "0px";
                    img3.current.style.zIndex = "100";
                    img1.current.style.right = "-1400";
                    img1.current.style.zIndex = "120";
                    img2.current.style.right = "1400";
                    img2.current.style.zIndex = "80";
                }
            }, 500)
            setTimeout(() => {
                if (img1.current)
                    img1.current.style.opacity = "1";
            }, 1000)
            bannerStatus = 1;
        }
    }

    return (
        <div>
            <div className='main-banner' id='main-banner'>
                <div className='imgban' ref={img3} id='imgban3'>
                    <div className='imgban-box'>
                        <h2>Give your kids the look they deserve !!!</h2>
                        <p>Get the latest trends for your kids at exciting prices</p>
                    </div>
                </div>
                <div className='imgban' ref={img2} id='imgban2'>
                    <div className='imgban-box'>
                        <h2>Shop till you Drop!!!</h2>
                        <p>Flat 50% off on women's wear</p>
                    </div>
                </div>
                <div className='imgban' ref={img1} id='imgban1'>
                    <div className='imgban-box'>
                        <h2>Feel the delight of shopping!</h2>
                        <p>70% off on all Nike stores this Halloween!!!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingDashboard;