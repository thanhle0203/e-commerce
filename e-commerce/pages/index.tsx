import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='p-5'>
      <div>
        <h2>Mobiles</h2>
        <div className='py-4'>
          <div className='w-64'>
            <div className='bg-blue-100 p-5 rounded-xl'>
              <img src='/products/iphone.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
