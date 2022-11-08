
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Product from "../component/Product"
import {initMongoose} from '../lib/mongoose'
import {findAllProducts} from './api/products'
import Footer from '../component/Footer';

export default function Home({products}) {
  const [phrase,setPhrase] = useState('');

  const categoriesNames = [...new Set(products && products.map(p => p.category))];
  
  if (phrase) {
    products = products.filter(p => p.name.toLowerCase().includes(phrase));
  } 

  return (
    <div className='p-5'>

      <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products..." className="bg-gray-100 w-full py-2 px-4 rounded-xl" />
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            {products.find(p => p.category === categoryName) && (
              <div>
                <h2 className='text-2xl py-5 capitalize'>{categoryName}</h2>
                <div className='flex -mx-5 overflow-x-scroll snap-x scrollbar-hide'>
                  {products.filter(p => p.category === categoryName).map(productInfo => (
                    <div key={productInfo._id} className="px-5 snap-start">
                      <Product {...productInfo} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        ))}

      </div>

      <Footer />
      
    </div>
  )
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}
