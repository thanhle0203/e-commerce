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
            <div className='mt-2'>
              <h3 className='font-bold text-lg'>Iphone 14 Pro</h3>
            </div>
            <p className='text-sm mt-1 leading-4'>Lorem ipsum dolor sit amet, ex sit vitae viderer tacimates. Duo ocurreret euripidis mnesarchum ad, sed inani solet temporibus ea. Debitis senserit et qui. </p>
            <div className='flex mt-1'>
              <div className='text-2xl font-bold grow'>$999</div>
              <button className='bg-black text-white py-1 px-3 rounded'>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
