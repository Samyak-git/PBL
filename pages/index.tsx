import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BannerImage from '../images/HeroBanner.jpg'
const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <div className="-mr-2 flex items-center md:hidden">
                      <button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                        <span className="sr-only">Open main menu</span>
                        {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="flex flex-col text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <div className="font-mw block xl:inline">
                  Feed the hungry, Save humanity.
                </div>
                <div className="block text-orange-600 xl:inline">
                  Black Spoon
                </div>
              </div>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                There is more than enough food produced in the world to feed
                everyone on the planet. But still as many as 811 million people
                worldwide go to bed hungry each night.
              </p>
              <div className="mt-5 flex flex-col sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
                <button className="rounded-md shadow">
                  <Link href="/contact">
                    <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 md:py-4 md:px-10 md:text-lg">
                      Notify Us
                    </span>
                  </Link>
                </button>
                <button className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/order">
                    <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-100 px-8 py-3 text-base font-medium text-orange-700 hover:bg-orange-200 md:py-4 md:px-10 md:text-lg">
                      View Menu
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={BannerImage.src}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Home
