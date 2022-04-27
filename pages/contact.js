import React from 'react'
import one from '../images/1.svg'
import two from '../images/2.svg'
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image'
export default () => {
  const notify = () => toast("Wow so easy !");
  return (
    <div className="bg-white px-8 py-12 text-black">
      <div className="w-full text-center">
        <Image src={one} alt="one" width={100} height={100}></Image>
        <span className="align-middle text-xl font-semibold tracking-tight text-black">Black Spoon</span>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div className="mx-auto mt-24 grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg bg-gray-100 px-8 py-16 text-gray-900 shadow-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Lets talk about everything!
            </h2>
            <div className="mt-8 text-gray-700">
              Hate forms? Send us an <span className="underline">email</span>{' '}
              instead.
            </div>
          </div>
          <div className="mt-8 text-center">
            <Image src={two} alt="two" width={400} height={400}></Image>
          </div>
        </div>
        <div className="">
          <div>
            <span className="text-sm font-bold uppercase text-gray-600">
              Full Name
            </span>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600">
              Email
            </span>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              type="text"
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600">
              Message
            </span>
            <textarea className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"></textarea>
          </div>
          <div className="mt-8">
            <button
            onClick={notify}
            className="focus:shadow-outline w-full rounded-lg bg-orange-500 p-3 text-sm font-bold uppercase tracking-wide text-gray-100 focus:outline-none">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
