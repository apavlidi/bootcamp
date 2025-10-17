import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Team from '@/components/Team';
import Pillars from '@/components/Pillars';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ComingSoon from "@/components/ComingSoon";
import WhyDifferent from "@/components/WhyDifferent";


function App() {
  return (
    <>
      <Helmet>
        <title>TechBridge - Bridge the gap between university and industry</title>
        <meta name="description" content="We want anyone in Greece with a laptop and passion to land their dream tech job—without an engineering degree. Bridge the gap between university and industry." />
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Vision />
          <Pillars />
          <WhyDifferent />
          <Team />
          <ComingSoon />
          <Subscribe />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;