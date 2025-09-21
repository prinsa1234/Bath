import React from 'react'
import ProductCard from '../components/ProductCard'
import BrandBanner from '../components/BrandBanner'
import Footer from '../components/Footer'
import BrandsProduct from '../components/BrandProduct'


export default function Home() {
  return (
    <div className="p-6">
       <BrandBanner />
        <BrandsProduct/>
        <ProductCard />
       
       <Footer />
      </div>
   
  )
}
