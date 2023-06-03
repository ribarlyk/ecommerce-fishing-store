import React from "react";
import { Product, FooterBanner, HeroBanner } from "@/components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
    return (
        <>
            {console.log(bannerData[0])}
            <HeroBanner bannerData={bannerData.length && bannerData[0]} />
            <div className="products-heading">
                <p>Best Selling Products</p>
                <h2>Amazing</h2>
            </div>
            <div className="products-container">
                {products?.map((prod) => <Product key={prod._id} product={prod}/>)}
            </div>
            <FooterBanner footerBanner={bannerData&&bannerData[0]}/>
        </>
    );
};

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: {
            products,
            bannerData,
        },
    };
};
export default Home;
