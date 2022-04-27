import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const router = useRouter()
  return (
    <div>
      <nav class="flex flex-wrap items-center justify-between bg-yellow-300 p-6">
        <div class="mr-6 flex flex-shrink-0 items-center text-black">
          <svg
            class="mr-2 h-8 w-8 fill-current"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span class="text-xl font-semibold tracking-tight">Black Spoon</span>
        </div>
        <div class="block sm:hidden">
          <button
            onClick={() => setNav(!nav)}
            class="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white"
          >
            <svg
              class="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Home</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="flex flex-wrap items-center justify-between w-full flex-grow sm:flex sm:w-auto sm:items-center">
          
          <div className={`${nav ? '' : 'hidden'} text-gray-400 sm:block`}>
            <Link href="/">
              <a
                class={`${
                  router.asPath === '/home' ? 'text-gray-800 ' : ''
                } mt-4 mr-4 block hover:text-gray-900  sm:inline-block md:mt-0`}
              >
                Home
              </a>
            </Link>
            <Link href="/contact">
              <a
                href="/contact"
                class={`${
                  router.asPath === '/contact' ? 'text-gray-800 ' : ''
                } mt-4 mr-4 block hover:text-gray-900  sm:inline-block md:mt-0`}
              >
                Contact Us
              </a>
            </Link>
            <Link href="/order">
              <a
                href="/order"
                class={`${
                  router.asPath === '/order' ? 'text-gray-800 ' : ''
                } mt-4 mr-4 block hover:text-gray-900  sm:inline-block md:mt-0`}
              >
                Order
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
