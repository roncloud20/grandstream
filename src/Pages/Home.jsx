import React from 'react';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import {products} from '../assets/products.js';

export default function Home() {
  console.log(products);
  return (
    <>
        <Header/> 
        <div className='flex flex-wrap gap-5 m-4'>
          {products.map((item, index) => (
            <ProductCard name={item.name} price={item.price} description={item.desc} />

          ))}
        </div>
          {/* <ProductCard name="First Product" price='300500.25' />
          <ProductCard name="Second Product" />
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/> */}
        
    </>
  )
}
