import React, { useEffect } from 'react'
import './shoppingDashboard.css'
const ShoppingDashboard = () => {
let bannerStatus=1;
const bannerTimer=4000;

useEffect(()=>{
},[])

    return (
        <div>
            <div className='parent-banner'>
                <div className='imgban' id='homeBanner'>

                </div>
                <div className='imgban'id='img1'>

                </div>
                <div className='imgban'id='img2'>

                </div>
                
            </div>
        </div>
    )
}

export default ShoppingDashboard;