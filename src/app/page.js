import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Script from 'next/script'; 


export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
     <Script 
             
                strategy="afterInteractive"
            />
    </main>
  )
}
