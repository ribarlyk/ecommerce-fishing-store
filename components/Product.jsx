import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

function Product({ product: { image, name, slug, price } }) {

    return (
        <div>
            {console.log(image)}
            <Link href={`/product/${slug.current}`}>
                <div className='product-card'>
                    <img src={urlFor(image && image[0])} alt="image0" width={250} height={250} className='product-image' />
                    <p className="product-name">{name}</p>
                    <p className="product-price">{price} лева</p>
                </div>
            </Link>
        </div>
    )
}

export default Product
