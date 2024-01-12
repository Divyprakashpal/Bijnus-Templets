import React from 'react'

const Header = () => {
  return (
    <div className="fixed mt-0 w-full z-50">
       <div className="nav1 flex items-center justify-center gap-10 bg-zinc-800 p-3   ">
          <button className=" text-xs p-auto font-semibold text-white text-center content-center bg-red-500 rounded-3xl p-auto px-8 py-1 ">
            Announcement
          </button>
          <h2 className="text-xs text-white font-bold ">
            How we're responding to COVID-19
          </h2>
        </div>
        <div className="nav2 flex items-center justify-between py-2 px-5 bg-red-500   ">
          <img
            className="text-white "
            src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
            alt="logo"
          />
          <ul className="flex items-center gap-10 text-white font-semibold text-base ">
            <li className="px-4 transition-[background-color] ease-in-out duration-600 rounded-full hover:bg-black cursor-pointer">Home</li>
            <li className="px-4 transition-[background-color] ease-in-out duration-600 rounded-full hover:bg-black cursor-pointer">About</li>
            <li className="px-4 transition-[background-color] ease-in-out duration-600 rounded-full hover:bg-black cursor-pointer">Shop</li>
            <li className="px-4 transition-[background-color] ease-in-out duration-600 rounded-full hover:bg-black cursor-pointer">Donate</li>
            <li className="px-4 transition-[background-color] ease-in-out duration-600 rounded-full hover:bg-black cursor-pointer">Contact</li>
            <img
              className="bg-zinc-800 w-[3vw] cursor-pointer p-2 rounded-full    "
              src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg"
              alt=""
            />
          </ul>
        </div>
       </div>
  )
}

export default Header