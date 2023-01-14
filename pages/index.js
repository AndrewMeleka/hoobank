import Head from 'next/head'
import Navbar from '../components/Navbar.component.js'
import Intro from '../components/Intro.component.js'
import Stats from '../components/Stats.component.js'
import Business from '../components/Business.component.js'
import Billing from '../components/Billing.component.js'
import CardDeal from '../components/CardDeal.component.js'
import Feedback from '../components/Feedback.component.js'
import Clients from '../components/Clients.component.js'
import MessageBox from '../components/MessageBox.component.js'
import Footer from '../components/Footer.component.js'


export default function Home() {
  return (
    <div className='mx-auto max-w-[1550px]'>
      <Head>
        <title>HooBank</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preload" href="/fonts/Poppins-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Poppins-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Poppins-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
      </Head>
      <div className='px-6 lg:px-16 2xl:px-[135px]'>
        <Navbar/>
      </div>
      <div className='pl-6 lg:pl-16 2xl:pl-[135px]'>
        <Intro/>
      </div>
      <div className='px-6 lg:px-16 2xl:px-[135px]'>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Feedback/>
        <Clients/>
        <MessageBox/>
        <Footer/> 
      </div>
    </div>
  )
}