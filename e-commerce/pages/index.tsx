
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Product from "../component/Product"

export default function Home() {
  const [productsInfo, setProductsInfo] = useState('');
  useEffect(() => {
    fetch('api/products')
      .then(response => response.json())
      .then(json => setProductsInfo(json))
  }, []);

  const categoriesNames = [...new Set(productsInfo.map(p => p.category))];
  

  return (
    <div className='p-5'>
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            <h2 className='text-2xl capitalize'>{categoryName}</h2>
            {productsInfo.filter(p => p.category === categoryName).map(productInfo => (
              <Product {...productInfo} />
            ))}
          </div>
        ))}

        <h2 className='text-2xl'>Mobiles</h2>
        <div className='py-4'>
          
        </div>
      </div>
    </div>
  )
}
