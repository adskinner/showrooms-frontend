//import { client } from '@/lib/sanity'
//import { urlFor } from '@/lib/imageUrl'
//import { PortableText } from '@portabletext/react'

export default function HomePage() {
  return (
    <main className="bg-black">
      <section className="hero p-16 max-w-screen-xl mx-auto h-screen flex items-center">
        <div>
        <h1 className="sr-only">Allison Skinner Multi-Line Interior Showroom Website Design</h1>
        <p className="text-5xl text-white font-semibold mb-16">We are a tech studio for multi-line luxury interior showrooms.</p>
        <p className="text-3xl text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul className="flex text-white text-3xl gap-x-16 py-16">
            <li><a className="underline underline-offset-6 decoration-1 hover:no-underline" href="#work">Work</a></li>
            <li><a className="underline underline-offset-6 decoration-1 hover:no-underline" href="#work">Services</a></li>
            <li><a className="underline underline-offset-6 decoration-1 hover:no-underline" href="#work">About</a></li>
            <li><a className="underline underline-offset-6 decoration-1 hover:no-underline" href="#work">Contact</a></li>
        </ul>
        </div>
      </section>

     
      <section className="px-16" id="work">
        <div className="flex -mx-4 pb-16">
            <div className="w-1/3 px-4">
              <img src="https://cdn.r-hughes.com/wp-content/uploads/2025/04/23205737/marea-warm-large-light-off-close-up-2-1.jpg"/>
              <h2 className="text-xl text-white my-4">R HUGHES</h2>
            </div>
            <div className="w-1/3 px-4">
              <img src="https://cdn.r-hughes.com/wp-content/uploads/2025/04/23205737/marea-warm-large-light-off-close-up-2-1.jpg"/>
              <h2  className="text-xl text-white my-4">WARECO</h2>
            </div>
            <div className="w-1/3 px-4">
              <img src="https://cdn.r-hughes.com/wp-content/uploads/2025/04/23205737/marea-warm-large-light-off-close-up-2-1.jpg"/>
              <h2  className="text-xl text-white my-4">J NELSON</h2>
            </div>
            
        </div>
        <div>
          <h2 className="text-3xl text-white my-4 max-w-screen-xl mx-auto px-16 mb-12">Brands we&rsquo;ve imported* for our showroom clients</h2>
          <ul className="flex gap-x-4">
            <li className="">
              <img src="https://r-hughes.com/wp-content/themes/rhugheslife/assets/img/rhlogo-white.svg"/>
            </li>
            <li className="">
              <img src="https://r-hughes.com/wp-content/themes/rhugheslife/assets/img/rhlogo-white.svg"/>
            </li>
            <li className="">
              <img src="https://r-hughes.com/wp-content/themes/rhugheslife/assets/img/rhlogo-white.svg"/>
            </li>
            <li className="">
              <img src="https://r-hughes.com/wp-content/themes/rhugheslife/assets/img/rhlogo-white.svg"/>
            </li>
            <li className="">
              <img src="https://r-hughes.com/wp-content/themes/rhugheslife/assets/img/rhlogo-white.svg"/>
            </li>
            <li className="">
              <img src="https://r-hughes.com/wp-content/themes/rhugheslife/assets/img/rhlogo-white.svg"/>
            </li>
          </ul>

        </div>

      </section>

<section className="px-16 py-16">
  <h2 className="text-3xl text-white mb-6">Frequently Asked Questions</h2>

  <details className="mb-4 bg-gray-800 rounded-lg">
    <summary className="cursor-pointer p-4 text-white font-medium">
      What services do you offer?
    </summary>
    <div className="p-4 text-gray-300 border-t border-gray-700">
      <p>We design and develop custom websites for multi-line luxury interior showrooms, focusing on unique branding, easy product updates, and seamless user experience.</p>
    </div>
  </details>

  <details className="mb-4 bg-gray-800 rounded-lg">
    <summary className="cursor-pointer p-4 text-white font-medium">
      Do you offer support after launch?
    </summary>
    <div className="p-4 text-gray-300 border-t border-gray-700">
      <p>Yes, we offer ongoing support plans to ensure your site remains updated, optimized, and fully functional.</p>
    </div>
  </details>

  <details className="mb-4 bg-gray-800 rounded-lg">
    <summary className="cursor-pointer p-4 text-white font-medium">
      How long does a project typically take?
    </summary>
    <div className="p-4 text-gray-300 border-t border-gray-700">
      <p>Most showroom websites are completed within 8-12 weeks, depending on complexity and content readiness.</p>
    </div>
  </details>
</section>


      
    </main>
  )
}