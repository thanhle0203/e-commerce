
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Product from "../component/Product"

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);
  useEffect(() => {
    fetch('api/products')
      .then(response => response.json())
      .then(json => setProductsInfo(json))
  }, []);

  const categoriesNames = [...new Set(productsInfo.map(p => p.category))];
  

  return (
    <div className='p-5'>
      <input type="text" placeholder="Search for products..." className="bg-gray-100 w-full py-2 px-4 rounded-xl" />
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            <h2 className='text-2xl py-5 capitalize'>{categoryName}</h2>
            <div className='flex -mx-5 overflow-x-scroll snap-x scrollbar-hide'>
              {productsInfo.filter(p => p.category === categoryName).map(productInfo => (
                <div key={productInfo._id} className="px-5 snap-start">
                  <Product {...productInfo} />
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 className='text-2xl'>Mobiles</h2>
        <div className='py-4'>
          
        </div>
      </div>
    </div>
  )
}
