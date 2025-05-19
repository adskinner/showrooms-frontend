//import { client } from '@/lib/sanity'
//import { urlFor } from '@/lib/imageUrl'
//import { PortableText } from '@portabletext/react'
'use client'

import React, { useEffect, useState } from 'react'
//import Image from 'next/image'

export default function HomePage() {
  const bgImages = [
    '/images/bg-images/bg-1.jpg',
    '/images/bg-images/bg-2.jpg',
    '/images/bg-images/bg3.jpg',
    '/images/bg-images/bg4.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [showNext, setShowNext] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowNext(true)
      setTimeout(() => {
        setCurrentIndex(nextIndex)
        setNextIndex((nextIndex + 1) % bgImages.length)
        setShowNext(false)
      }, 1000)
    }, 6000)
  
    return () => clearInterval(interval)
  }, [nextIndex, bgImages.length])
  return (
    
    <main className="bg-black">
      <section className="relative hero min-h-screen overflow-hidden">
  {/* Current background image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0 transition-none"
    style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
  />

  {/* Fading in next image */}
  <div
    className={`absolute inset-0 bg-cover bg-center z-10 transition-opacity duration-1000 ${showNext ? 'opacity-100' : 'opacity-0'}`}
    style={{ backgroundImage: `url(${bgImages[nextIndex]})` }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/30 z-20" />

  {/* Text content */}
  <div className="relative z-30 max-w-screen-2xl mx-auto p-8 md:p-16 min-h-screen md:h-screen flex flex-col justify-center">
    <h1 className="text-lg md:text-2xl text-white uppercase mb-2 tracking-wide">Showroom Edit</h1>
    <p className="text-4xl md:text-7xl text-white font-normal md:leading-18 mb-6 md:mb-12">
      We are a tech studio for multi-line luxury interior showrooms.
    </p>
    <p className="text-xl md:text-3xl text-white font-thin md:leading-12 font-stratoslight">
      Allison Skinner and her specialized team run a tech studio built specifically for interior showrooms...
    </p>
    <ul className="flex-col md:flex-row flex text-white text-xl md:text-2xl gap-x-12 gap-y-4 pt-6 md:pt-16">
      <li><a className="underline underline-offset-6 decoration-1 hover:no-underline uppercase tracking-wide" href="#work">Work</a></li>
      <li><a className="underline underline-offset-6 decoration-1 hover:no-underline uppercase tracking-wide" href="#services">Services</a></li>
      <li><a className="underline underline-offset-6 decoration-1 hover:no-underline uppercase tracking-wide" href="#about">About</a></li>
      <li><a className="underline underline-offset-6 decoration-1 hover:no-underline uppercase tracking-wide" href="#contact">Contact</a></li>
    </ul>
  </div>
</section>

     
      <section className="pt-12 md:pt-24 pb-12 md:pb-16 px-8 md:px-16 max-w-screen-3xl mx-auto" id="work">
        <div>
            <div className="flex flex-wrap md:-mx-4 pb-12 md:pb-20">
            <h2 className="text-xl text-white font-light pb-2 md:hidden">R HUGHES</h2>
              <div className="w-full md:w-3/4 md:px-4">
              <a href="https://r-hughes.com"><img src="/images/rh-homepage.jpg"/></a>
              </div>
              <div className="w-full md:w-1/4 md:px-4">
              <h2 className="text-xl text-white font-light pb-4 hidden md:block">R HUGHES</h2>
              <ul className="text-stone-300 leading-normal font-light mb-4 md:mb-6 mt-4 md:mt-0">
                <li>Full product catalog of over 4,000 products</li>
                <li>40 Brands</li>
                <li>Add to inquiry cart</li>
                <li>Trade accounts</li>
                <li>Office Digest, Spotlights & Office Radio</li>
              </ul>
              <p className="text-white"><a className="text-white underline underline-offset-4 hover:no-underline decoration-1" href="https://r-hughes.com">visit r-hughes.com ↗</a></p>
              </div>
            </div>
            <div className="flex flex-wrap md:-mx-4 pb-12 md:pb-20">
            <h2 className="text-xl text-white font-light pb-2 md:hidden">WARECO</h2>
              <div className="w-full md:w-3/4 md:px-4">
              <a href="https://wareco.co"><img src="/images/wareco-homeapge.jpg"/></a>
              </div>
              <div className="w-full md:w-1/4 md:px-4">
              <h2 className="text-xl text-white font-light pb-4 hidden md:block">WARECO</h2>
              <ul className="text-stone-300 leading-normal font-light mb-4 md:mb-6 mt-4 md:mt-0">
                <li>Full product catalog of over 4,000 products</li>
                <li>25 Brands</li>
                <li>Textile sample orders & reserve requests</li>
                <li>Add to inquiry cart</li>
                <li>Trade accounts</li>
              </ul>
              <p className="text-white"><a className="text-white underline underline-offset-4 hover:no-underline decoration-1" href="https://wareco.co">visit wareco.co ↗</a></p>
              </div>
            </div>
            <div className="flex flex-wrap md:-mx-4">
            <h2 className="text-xl text-white font-light pb-2 md:hidden">J NELSON [coming soon]</h2>

              <div className="w-full md:w-3/4 md:px-4">
              <img src="/images/jn-homepage.jpg"/>
              </div>
              <div className="w-full md:w-1/4 md:px-4">
              <h2 className="text-xl text-white font-light pb-4 hidden md:block">J NELSON [coming soon]</h2>
              <ul className="text-stone-300 leading-normal font-light mb-4 md:mb-6 mt-4 md:mt-0">
                <li>Full product catalog of 4,000 products</li>
                <li>41 Brands</li>
                <li>Add to inquiry cart</li>
                <li>Trade accounts</li>
              </ul>
              </div>
            </div>
            
            
            
          </div>
          </section>
          <section className="pt-6 pb-12 md:py-16">
  <h2 className=" text-xl text-white my-2 md:my-4   uppercase tracking-widest text-left md:text-center">
    Brands we&rsquo;ve imported
  </h2>
  <p className="text-left md:text-center text-sm text-stone-300 "><a href="#" className="underline underline-offset-4 hover:no-underline">View Full List</a></p>
 
  <div className="relative mt-6 md:mt-12 overflow-hidden w-full">
    <ul className="debug-scroll flex gap-x-6 md:gap-x-12 min-w-[200%]">
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-white text-center">
            <img src="/images/brands/alexanderlamont.jpg" alt="Brand logo" />
            <p>Alexander Lamont</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-white text-center">
            <img src="/images/brands/apparatus.jpeg" alt="Brand logo"  />
            <p>Apparatus</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-white text-center">
            <img src="/images/brands/arnodeclercq.jpg" alt="Brand logo"  />
            <p>Arnodeclercq</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-white text-center">
            <img src="/images/brands/bassamfellows.jpeg" alt="Brand logo"  />
            <p>BassamFellows</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-white text-center">
            <img src="/images/brands/brettdesign.jpeg" alt="Brand logo"  />
            <p>Brett Design</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-white text-center">
            <img src="/images/brands/caste.jpg" alt="Brand logo" />
            <p>Caste</p>
          </li>
          
        </React.Fragment>
      ))}
    </ul>
  </div>


      </section>

<section className="px-8 py-0 md:px-16 md:py-16" id="services">

<details className="mb-8 md:mb-16 bg-black border-b border-white group">
  <summary className="cursor-pointer pr-4 pb-4 text-white text-2xl md:text-4xl font-light flex justify-between items-center">
    <span>We add your <em>full</em> product catalog to your website</span>
    <svg
      className="w-6 h-6 transition-transform duration-300 group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </summary>
  <div className="pt-0 md:py-4 text-stone-300 text-lg md:text-2xl">
    <p className="mb-4">And we mean your <em>full</em> product catalog of likely thousands of products across dozens of brands.</p>
      <p className="mb-4">We have imported over 10,000 (and counting) products from over 50 brands for our showroom clients. 
      We make no compromises to detail, imagery and function when we import a brand’s product line. </p>
      <ul className ="columns-2 list-disc ml-6 mb-6">
        <li>High quality product images</li>
        <li>Full product descriptions</li>
        <li>Tearsheets with custom showroom watermark</li>
        <li>Visual view of product finishes, colorways and more</li>
        <li>Private info availabe with trade account (pricing, lead times, etc.)</li>
        <li>Related products</li>
        <li>Appropriate tagging & categorizing</li>
        <li>Designer Profiles</li>
        <li>SEO Optimization</li>
        <li>...and more! We customize product imports for each showroom.</li>
      </ul>
      <p className="mb-10">Our team handles ongoing product imports and updates. You and your team can focus on sales!</p>

  </div>
</details>

<details className="mb-8 md:mb-16 bg-black border-b border-white group">
  <summary className="cursor-pointer pr-4 pb-4 text-white text-2xl md:text-4xl font-light flex justify-between items-center">
    <span>We design and build a custom website for your showroom</span>
    <svg
      className="w-6 h-6 transition-transform duration-300 group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </summary>
  <div className="pt-0 md:py-4 text-stone-300 text-lg md:text-2xl">
  <p className="mb-4">Your website should match the energy of your physical showroom.</p>
  <p className="mb-4">We provide custom, top-to-bottom, site design for showrooms because your website is one of your most powerful sales tools.</p>
  <ul className ="columns-2 list-disc ml-6 mb-6">
        <li>Digital brand identity</li>
        <li>Lifestyle features like journal, office radio and more</li>
        <li>Interactive showroom gallery</li>
        <li>Highly customized product page templates</li>
        <li>‘Add to cart’ functionality for quote requests</li>
        <li>Online trade accounts</li>
        <li>Responsive design for all devices</li>
        <li>Optimization for SEO and fast load times</li>
        <li>...and more!</li>
    </ul>
  </div>
</details>

<details className="mb-8 md:mb-16 bg-black border-b border-white group">
  <summary className="cursor-pointer pr-4 pb-4 text-white text-2xl md:text-4xl font-light flex justify-between items-center">
    <span>We specialize in the interior showroom industry</span>
    <svg
      className="w-6 h-6 transition-transform duration-300 group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </summary>
  <div className="pt-0 md:py-4 text-stone-300 text-lg md:text-2xl">
    <p className="mb-4">We know the showroom industry inside and out. Let us help you with all the technical requirements for running your showroom business.</p>
    <p className="mb-4">In addition to creating your website and importing your full product catalog, we also specialize in:</p>
    <ul className ="columns-2 list-disc ml-6 mb-6">
    <li>Studio Designer integration (on another platform? let&rsquo;s chat!)</li>
    <li>Pinterest bulk pinning</li>
    <li>Custom sales tools</li>
    <li>Trade account requests and approvals</li>
    <li>Private pricing and product information</li>
    <li>Textile sample orders</li>
    <li>Advanced support for email marketing</li>
    </ul>
    <p className="mb-8">Already have someone doing your marketing or PR? That&rsquo;s great. We make a great technical partner for their creative vision.</p>
  </div>
</details>
</section>

<section className="max-w-screen-3xl mx-auto px-8 md:px-16 py-8 md:py-16" id="about">
<h2 className=" text-white my-4 max-w-screen-3xl mx-auto mb-12 uppercase tracking-widest sr-only">
    Who We Are
  </h2>
  <div className="flex flex-wrap md:-mx-4 mb-8">
    <h3 className="text-xl text-white mb-4 md:hidden uppercase">Allison Skinner</h3>
    <div className="w-full md:w-1/3 md:px-4">
      <img src="/images/placeholder-2.png"/>
    </div>
    <div className="w-full md:w-2/3 md:px-4">
      <p className="text-stone-300 text-lg md:text-2xl mt-4 md:mt-0">  
      <span className="md:text-white md:font-semibold">Allison Skinner</span> is a designer and developer based in Athens, Georgia. She has been designing and building custom websites for over 10 years. You can view her full portfolio here. Allison’s favorite part of working with showrooms is the achievement of adding their full product catalog to their website. It truly transforms their business! 
      </p>
    </div>
  </div>
  <div className="flex flex-wrap md:-mx-4">
  <h3 className="text-xl text-white mb-4 md:hidden uppercase md:hidden">The Team</h3>
    <div className="w-full md:w-1/3 md:px-4">
      <img src="/images/placeholder-2.png"/>
    </div>
    <div className="w-full md:w-2/3 md:px-4">
      
      <p className="text-stone-300 text-lg md:text-2xl mb-4 mt-4 md:mt-0">  
      <span className ="md:text-white md:font-semibold">The team</span> is comprised of Allison’s two real life best friends, Nina Guzman and Tulsi TenEyck. We are all based in Athens, Georgia. Nina and Tulsi handle the ongoing product updates and imports for our showroom clients.</p>
      <p className="text-stone-300 text-lg md:text-2xl mb-4"><span className ="text-white font-semibold">Nina Guzman</span> is trained as a librarian and archivist. She provides an unmatched level of detail and organization when building complex product catalogs.</p>
      <p className="text-stone-300 text-lg md:text-2xl mb-4"><span className ="text-white font-semibold">Tulsi TenEyck</span> has over a decade of operational experience in the fashion, textile and interior design industries. Tulsi brings industry insight that helps us structure catalogs the way designers actually search and shop.</p>
      <p className="text-stone-300 text-lg md:text-2xl">Outside the office, we love to go on girls trips and visit our favorite local businesses.</p>
    </div>
  </div>

</section>
<section className="px-8 md:px-16 pt-12 md:pt-24 text-left md:text-center pb-24 md:pb-64" id="contact">
  <h2 className="text-white my-4 text-3xl md:text-7xl font-light mx-auto">Get in Contact</h2>
  <p className="mb-4 md:mb-10 text-white text-lg md:text-2xl">It&rsquo;s as easy as sending Allison an email ♥️</p>
  <p className="text-2xl md:text-4xl"><a className="text-center bg-white w-full md:w-auto block md:inline-block rounded-full py-2 md:py-4 px-6 md:px-12 text-black hover:bg-red-500 hover:text-white" href="mailto:info@allisondskinner.com">info [at] allisondskinner.com</a></p>
</section>


      
    </main>
  )
}