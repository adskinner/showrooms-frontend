'use client'

import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const IMAGES = [
  '/images/bg-images/bg-1.jpg',
  '/images/bg-images/bg-2.jpg',
  '/images/bg-images/bg-3.jpg',
  '/images/bg-images/bg-4.jpg',
  '/images/bg-images/bg-5.jpg',
  '/images/bg-images/bg-6.jpg',
]

const sliderSettings = {
  autoplay: true,
  autoplaySpeed: 6000,
  fade: true,
  infinite: true,
  speed: 1000,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  pauseOnFocus: false,
}

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto'
  }, [showModal])

  return (
    <main className="bg-black">
      <section className="relative h-auto md:min-h-screen">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 h-full">
        <Slider {...sliderSettings}>
          {IMAGES.map((src, i) => (
            <div key={i}>
              <div
                className="h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-screen-2xl mx-auto py-8 px-6 md:p-16 h-auto md:min-h-screen flex flex-col justify-center">
      <h1 className="text-lg md:text-2xl text-white uppercase mb-2 tracking-wide">Showroom Edit</h1>
    <p className="text-4xl md:text-7xl text-white font-normal md:leading-18 mb-4 md:mb-12">
      We are a tech studio for multiline luxury interior showrooms.
    </p>
    <p className="text-lg md:text-3xl text-white font-thin md:leading-12 font-stratoslight">
      Allison Skinner and her specialized team run a tech studio built specifically for interior showrooms. We work with creative, design-driven teams who don’t have the time or technical bandwidth to manage a digital storefront.</p>
      <p className="text-lg md:text-3xl text-white font-thin md:leading-12 font-stratoslight">We turn your physical showroom into a shoppable digital experience, complete with a full product catalog, trade functionality and a tailored design.
    </p>
    <ul className="flex-col md:flex-row flex text-white text-lg md:text-2xl gap-x-12 gap-y-3 pt-6 md:pt-16">
      <li><a className="underline underline-offset-6 decoration-1 hover:no-underline uppercase tracking-wide" href="#work">Work</a></li>
      <li><a className="underline underline-offset-6 decoration-1 hover:no-underline uppercase tracking-wide" href="#services">Services</a></li>
      <li><a className="underline underline-offset-6 decoration-1 hover:no-underline uppercase tracking-wide" href="#about">About</a></li>
      <li><a className="underline underline-offset-6 decoration-1 hover:no-underline uppercase tracking-wide" href="#contact">Contact</a></li>
    </ul>
  </div>
</section>

     
      <section className="pt-12 md:pt-24 pb-12 md:pb-16 px-6 md:px-16 max-w-screen-3xl mx-auto" id="work">
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
          <section className="pt-0 pb-12 md:py-16">
  <h2 className=" text-xl text-white my-2 md:my-4   uppercase tracking-widest text-left md:text-center px-6 md:px-16">
    Brands we&rsquo;ve imported
  </h2>
  <p className="text-left md:text-center text-sm text-stone-300 px-6 md:px-16">
  <button
    onClick={() => setShowModal(true)}
    className="underline underline-offset-4 hover:no-underline"
  >
    View Full List
  </button>
</p> 
  <div className="relative mt-6 md:mt-12 overflow-hidden w-full">
    <ul className="debug-scroll flex gap-x-6 md:gap-x-12 min-w-[200%]">
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/alexanderlamont.jpg" alt="Brand logo" />
            <p>Alexander Lamont</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/apparatus.jpeg" alt="Brand logo"  />
            <p>Apparatus</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/arnodeclercq.jpg" alt="Brand logo"  />
            <p>Arnodeclercq</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/bassamfellows.jpeg" alt="Brand logo"  />
            <p>BassamFellows</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/brettdesign.jpeg" alt="Brand logo"  />
            <p>Brett Design</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/caste.jpg" alt="Brand logo" />
            <p>Caste</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/chabaan.jpg" alt="Brand logo" />
            <p>Chabaan Designs</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/christopher-boots.jpg" alt="Brand logo" />
            <p>Christopher Boots</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/coup.jpg" alt="Brand logo" />
            <p>COUP Design</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/cp.jpg" alt="Brand logo" />
            <p>Collection Particuliere</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/cp.jpg" alt="Brand logo" />
            <p>DLV Designs</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/draga-aurel.jpg" alt="Brand logo" />
            <p>Draga Aurel</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/erden.jpg" alt="Brand logo" />
            <p>Erden Rugs</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/fisher-weisman.jpg" alt="Brand logo" />
            <p>Fisher Weisman</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/hallworth.jpg" alt="Brand logo" />
            <p>Hallworth</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/hector-finch.jpg" alt="Brand logo" />
            <p>Hector Finch</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/jliston.jpg" alt="Brand logo" />
            <p>J Liston Design</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/johnpomp.jpg" alt="Brand logo" />
            <p>John Pomp</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/jonathanbrowning.jpg" alt="Brand logo" />
            <p>Jonathan Browning</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/josephjeup.jpg" alt="Brand logo" />
            <p>Joseph Jeup</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/kimberlydenman.jpg" alt="Brand logo" />
            <p>Kimberly Denman</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/konekt.jpg" alt="Brand logo" />
            <p>Konket</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/liaigre.jpg" alt="Brand logo" />
            <p>Liaigre</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/natasha-baradaran.jpg" alt="Brand logo" />
            <p>Natasha Baradaran</p>
          </li>
          <li className="w-[50vw] md:w-[25vw] flex-none flex items-center flex-col justify-center text-stone-300 text-center">
            <img src="/images/brands/ochre.jpg" alt="Brand logo" />
            <p>Ochre</p>
          </li>
          
          
        </React.Fragment>
      ))}
    </ul>
  </div>


      </section>

<section className="px-6 py-0 md:px-16 md:py-16" id="services">
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
        <li>Lifestyle features like journal, radio and more</li>
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
      <p className="mb-4">We have imported over 13,000 (and counting) products from over 100 brands for our showroom clients. 
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
      <span className="md:text-white md:font-semibold">Allison Skinner</span> is a designer and developer based in Athens, Georgia. She has been designing and building custom websites for over 10 years. You can view her full portfolio <a href="https://allisondskinner.com" target="_blank" className="text-white underline underline-offset-4 hover:no-underline">here</a>. Allison’s favorite part of working with showrooms is the achievement of adding their full product catalog to their website. It truly transforms their business! 
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
      <p className="text-stone-300 text-lg md:text-2xl">Outside the office, we love to go on girls trips and visit our favorite local Athens businesses.</p>
    </div>
  </div>

</section>
<section className="px-8 md:px-16 pt-8 md:pt-24 text-left md:text-center pb-24 md:pb-64" id="contact">
  <h2 className="text-white my-4 text-3xl md:text-7xl font-light mx-auto">Get in Contact</h2>
  <p className="mb-4 md:mb-10 text-white text-lg md:text-2xl">It&rsquo;s as easy as sending Allison an email ♥️</p>
  <p className="text-2xl md:text-4xl"><a className="text-center bg-white w-full md:w-auto block md:inline-block rounded-full py-2 md:py-4 px-6 md:px-12 text-black hover:bg-red-500 hover:text-white" href="mailto:info@allisondskinner.com">info@allisondskinner.com</a></p>
</section>

{showModal && (
  <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
    <div className="p-6 flex justify-between items-center border-b border-white text-white">
      <h2 className="text-xl uppercase tracking-wider">All Brands</h2>
      <button
        className="text-sm uppercase underline hover:no-underline"
        onClick={() => setShowModal(false)}
      >
        Close
      </button>
    </div>
    <div className="overflow-y-auto flex-1 p-6 md:p-12 text-white space-y-4 text-lg md:text-xl">
      <ul className="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-8">
        {[
  "Alexander Lamont",
  "Allan Knight",
  "Anees Furniture & Design",
  "Apparatus",
  "Armadillo Rugs",
  "Arnodeclercq",
  "Atelier Vaste",
  "BassamFellows",
  "Bella Figura",
  "Brett Design",
  "COUP Design",
  "Cal Summers",
  "Casella Lighting",
  "Castellija",
  "Caste",
  "Chabaan Designs",
  "Christopher Boots",
  "Collett & Victor",
  "Collection Particuliere",
  "Dakota Jackson",
  "Delisle Paris",
  "Designs of the Time",
  "DLV Designs",
  "Draga Aurel",
  "Entrelacs",
  "Erden Rugs",
  "Erinn V.",
  "Fisher Weisman",
  "Fuse Lighting",
  "Hallworth",
  "Hamilton Conte",
  "Hector Finch",
  "J Liston Design",
  "JM Szymanski",
  "Jiun Ho",
  "John Pomp",
  "Jonathan Browning",
  "Joseph Jeup",
  "Kimberly Denman",
  "Konket",
  "Kufri",
  "Lance Woven Leather",
  "Liaigre",
  "Logan Montgomery Textiles",
  "Lost Profile",
  "Matthew Fisher",
  "Morada Haute Furniture",
  "Natasha Baradaran",
  "Ochre",
  "Palmer Hargrave",
  "Paul Matter",
  "Philip Nimmo",
  "Philippe Hurel",
  "Pierre Augustin Rose",
  "Powell & Bonnell",
  "Randolph Hein",
  "Reduxr",
  "Refractory",
  "Riloh",
  "Roll & Hill",
  "Rose Gold Society",
  "Rose Uniacke",
  "Ruemmler",
  "Savel",
  "Sedilia",
  "Sirak",
  "Studio Bel Vitro",
  "Tom Faulkner",
  "Tuell and Reynolds",
  "Una Malan",
  "Van Rossum",
  "Yarn Collective",
  "Zisu Leather"
].map((brand, i) => (
          <li key={i}>{brand}</li>
        ))}
      </ul>
    </div>
  </div>
)}
      
    </main>

    
  )
}