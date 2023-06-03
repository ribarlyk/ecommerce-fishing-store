import React from 'react'
import Link from 'next/link'
import banner from '@/sanity/fishing-store/schemas/banner'
import { urlFor } from '@/lib/client'
function HeroBanner({ bannerData }) {
    return (

        <div className='hero-banner-container'>
            {console.log(bannerData.image.asset._ref)}
            <div>
                <p className="beats-solo">{bannerData.smallText}</p>
                <h3>{bannerData.midText}</h3>
                <h1>{bannerData.largeText1}</h1>
                <img src={urlFor(bannerData.image.asset._ref)} alt="snails" className='hero-banner-image' />
                <div>
                    <Link href={`/product/${bannerData.product}`}>
                        <button type='button'>{bannerData.buttonText}</button>
                    </Link>
                    <div className="desc">
                        <h5>Description</h5>
                        <p>{bannerData.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
