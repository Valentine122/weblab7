import React from 'react'
import { Button } from '../Button/Button';

import { ProductsContainer, ProductContainer, ProductInfo } from './Products.styled'

const { useState } = require("react");

export default function Products(props) {

    const [rods] = useState([
        {
            header: 'Combines #122331',
            price: 1232323,
            alt: "Combine BEST",
            text: 'Buy it right now',
            img: 'https://static.producer.com/wp-content/uploads/2020/08/20141156/49_4-col_Fendt-Ideal-combine-1.jpg'
        },
        {
            header: 'Combines #1434231',
            price: 134343,
            alt: "Combine BEST",
            text: 'Buy it right now',
            img: 'https://www.deere.com/assets/images/region-4/products/combines/t670/t670_r2c001198_tech_rrd_ml_2_large_6c51fa68662b21435dd2137ac5878bf7a677911d.jpg'
        },
        {
            header: 'Combines #12124231',
            price: 1243343,
            alt: "Combine BEST",
            text: 'Buy it right now',
            img: 'https://www.deere.com/assets/images/region-4/products/combines/t670/t670_r2c001198_tech_rrd_ml_2_large_6c51fa68662b21435dd2137ac5878bf7a677911d.jpg'
        },
        {
            header: 'Combines #1244331',
            price: 124323,
            alt: "Combine BEST",
            text: 'Buy it right now',
            img: 'https://www.deere.com/assets/images/region-4/products/combines/t670/t670_r2c001198_tech_rrd_ml_2_large_6c51fa68662b21435dd2137ac5878bf7a677911d.jpg'
        },
        {
            header: 'Combines #1221231',
            price: 12633,
            alt: "Combine BEST",
            text: 'Buy it right now',
            img: 'https://www.deere.com/assets/images/region-4/products/combines/t670/t670_r2c001198_tech_rrd_ml_2_large_6c51fa68662b21435dd2137ac5878bf7a677911d.jpg'
        },
        {
            header: 'Combines #124431',
            price: 125763,
            alt: "Combine BEST",
            text: 'Buy it right now',
            img: 'https://www.deere.com/assets/images/region-4/products/combines/t670/t670_r2c001198_tech_rrd_ml_2_large_6c51fa68662b21435dd2137ac5878bf7a677911d.jpg'
        },
        {
            header: 'Combines #213231',
            price: 128673,
            alt: "Combine BEST",
            text: 'Buy it right now',
            img: 'https://www.deere.com/assets/images/region-4/products/combines/t670/t670_r2c001198_tech_rrd_ml_2_large_6c51fa68662b21435dd2137ac5878bf7a677911d.jpg'
        },
        {
            header: 'Combines #13231',
            price: 184423,
            alt: "Combine BEST",
            text: 'Buy it right now',
            img: 'https://www.deere.com/assets/images/region-4/products/combines/t670/t670_r2c001198_tech_rrd_ml_2_large_6c51fa68662b21435dd2137ac5878bf7a677911d.jpg'
        }
    ])

    return (
        <ProductsContainer>
            {rods.map((equip, index) =>
                <ProductContainer key={`Item${index}`}>
                    <img src={equip.img} alt={equip.alt} height="250px" width="250px" style={{borderRadius: "10px"}} />
                    <ProductInfo>
                        <h1>{equip.header}</h1>
                        <h2>Price: {equip.price}$</h2>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--small'
                        >View More</Button>
                    </ProductInfo>
                </ProductContainer>
            )}
        </ProductsContainer>

    );
}
