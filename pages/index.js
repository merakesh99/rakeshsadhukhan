import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
    <div>

    
     <Navbar/>

     <Body/>
    {/* <Footer/> */}
    </div>
    </>
      )
}
