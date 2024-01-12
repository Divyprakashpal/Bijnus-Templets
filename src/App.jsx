import React from "react";
import Header from "./components/header";


const App = () => {
  return (
    <>
      <div className="navbar   w-full relative   ">
      <Header/>
       
        <div className="flex flex-col  justify-center px-16 pt-28  bg-zinc-700 h-[90vh] bg-[url('./public/Images/mainbg.jpg')] bg-fixed bg-no-repeat bg-cover bg-center  ">
          <h1 className=" text-white text-[5vmax] leading-tight font-[700]">
            Serving you  <br />
            since 1989.
          </h1>
          <p className="text-white font-[400] text-xl">
            Acme Outdoors is an outdoor and adventure <br /> shop located in the
            Boathouse District in <br /> Oklahoma City.
          </p>
          <div className="pt-5">
            <button className="border-solid border-2 border-white-800 pl-4 pr-10 pt-2 pb-2 text-white font-[700] rounded-xl hover:bg-white hover:text-black">
              Shop Merch
            </button>
          </div>
        </div>
        <div className="p-2 flex justify-between  ">
          <div className="p-2-content p-10 ">
            <p className="font-[600] text-l">WAYS TO SUPPORT</p>
            <h1 className="text-black-500 text-[3vmax] font-[700]">
              Support Acme Outdoors.
            </h1>
          </div>

          <p className="p-10 font-[400] text-[1.2vmax]">
            COVID-19 has forced us to close our retail space, but we need <br />
            support from patrons like yourself now more than ever. Below, we’ve
            <br />
            listed the best ways to help us through this season.
          </p>
        </div>
        <div className=" h-[110vh] boxess flex gap-[3vmax] p-5">
          <div className="box h-[90vh] w-[30vw]  flex flex-col justify-between">
            <div className="box-1 h-[68vh] w-[30vw] bg-zinc-900 rounded-[.5vmax] flex flex-col text-center gap-[4vmax] ">
              <h1 className="text-white text-black-500 text-[3vmax] font-[700] text-start pl-10 pt-10   ">
                01
              </h1>
              <h1 className="text-white text-center  text-black-500 text-[3vmax] font-[700]">
                SHOP <br /> PRODUCTS
              </h1>
              <img
                className="ml-[20vmax] mt-[-1vmax] mr-[-4vmax] p-30 bg-re-500 h-[10vmax] "
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57a5836db2a07bab0e3_Circle.svg"
                alt=""
              />
            </div>

            <p>
              Our full product line is still available online here on our site!
              Getting outside and hiking is still something you can do. Get your
              gear now!
            </p>
          </div>
          <div className="box h-[90vh] w-[30vw]  flex flex-col justify-between">
            <div className="box-2 h-[68vh] w-[30vw] bg-zinc-900 rounded-[.5vmax] flex flex-col text-center gap-[4vmax]  ">
              <h1 className="text-white text-black-500 text-[3vmax] font-[700] text-start pl-10 pt-10   ">
                02
              </h1>
              <h1 className="text-white text-center  text-black-500 text-[3vmax] font-[700]">
                DONATE
              </h1>
              <img
                className="w-[12vw] mt-[7vh] ml-[19.5vmax] "
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adc54453434efb9ee_Triangle.svg"
                alt=""
              />
            </div>

            <p>
              Since we've changed the way we operate to online only, and to
              ensure your safety, not all our staff is working. Donate to keep
              them afloat.
            </p>
          </div>
          <div className="box h-[90vh] w-[30vw]  flex flex-col justify-between">
            <div className="box-3 h-[68vh] w-[30vw] bg-zinc-900 rounded-[.5vmax] flex flex-col text-center gap-[4vmax]">
              <h1 className="text-white text-black-500 text-[3vmax] font-[700] text-start pl-10 pt-10   ">
                03
              </h1>
              <h1 className="text-white text-center  text-black-500 text-[3vmax] font-[700]">
                BUY <br />
                GIFT CARDS
              </h1>
              <img
                className="h-[30vh] ml-[22vmax] mt-[-2vmax] "
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57afea9a31a44d66db0_Rectangle.svg"
                alt=""
              />
            </div>

            <p className="pb-5">
              Have all the outdoor gear you need for now? Buy a gift card and
              use it later or share it with friends and family.
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 bg-red-400 h-[100vh] bg-[url('./public/Images/bgimg2.jpg')]  bg-no-repeat bg-cover bg-center  ">
        
        <div className="text-end mr-[3vmax]">
          <h1 className="pt-[10vmax] text-white text-black-500 text-[3vmax] font-[700]">
            How we're keeping you <br /> safe during COVID-19
          </h1>
          <p className="pt-[2vmax] text-white font-[500] text-[1.3vmax]">
            As an outdoor shop, we’ve taken precautionary <br /> measures to
            ensure the safety of all our <br /> customers and team members.
          </p>
          <button className=" hover:bg-red-500  pt-[.5vmax] text-black bg-white pl-[3vmax] pr-[3vmax] mt-[3vmax] pb-[1vmax] pt-1.5 rounded-xl font-[700] ">
            Read Our Statement
          </button>
        </div>
      </div>
      <div className="page-4 bg-white h-[185vh] ">
        <div className="header pt-[8vmax] pl-[3vmax]">
          <p className="text-xl">SHOP PRODUCTS</p>
          <h1 className="text-black-500 text-[3vmax] font-[700]">
            Open 24/7/365.
          </h1>
        </div>
        <div className="images flex  gap-[2.5vmax] pt-[5vmax] pl-[2vmax]">
          <div className="photo">
            <div className="photo-1 h-[75vh] w-[30vw] bg-zinc-900 rounded-[.5vmax] bg-[url('./public/Images/box1img.jpg')] bg-no-repeat bg-cover bg-center pt-[-20vmax] "></div>
            <div className="text  w-[30vw]  text-center pt-[2vmax]">
              <h1 className="text-black font-[500] text-base">
                White Tent
              </h1>
              <p className="text-black  text-base">
                $ 200.00 USD
              </p>

              <button className="text-base text-white bg-red-500 pl-[2vmax] pr-[2vmax] mt-[1.3vmax] pb-[0vmax] pt-1 rounded-xl font-[700]">
                Details
              </button>
            </div>
          </div>

          <div className="photo">
            <div className="photo-2 h-[75vh] w-[30vw] bg-zinc-900 rounded-[.5vmax] bg-[url('./public/Images/box2.jpg')] bg-no-repeat bg-cover bg-center pt-[-20vmax]"></div>
            <div className="text  w-[30vw]  text-center pt-[2vmax]">
              <h1 className="text-black font-[500] text-base">
                Tin Coffee Tumbler
              </h1>
              <p className="text-black  text-base">
                $ 35.00 USD
              </p>

              <button className="text-white bg-red-500 pl-[2vmax] pr-[2vmax] mt-[1.3vmax] pb-[0vmax] pt-1 rounded-xl font-[700]">
                Details
              </button>
            </div>
          </div>

          <div className="photo">
            <div className="photo-3 h-[75vh] w-[30vw] bg-zinc-900 rounded-[.5vmax] bg-[url('./public/Images/box3img.jpg')] bg-no-repeat bg-cover bg-center pt-[-20vmax]"></div>
            <div className="text  w-[30vw]  text-center pt-[2vmax]">
              <h1 className="text-black font-[500] text-base">
                Blue Canvas Pack
              </h1>
              <div className="paragraph flex justify-center gap-[1vmax]">
                <p className="text-black  text-base ">
                  $ 95.00 USD
                </p>
                <p className="text-red-600  text-base underline ">
                  $ 145.00 USD
                </p>
              </div>

              <button className="text-white bg-red-500 pl-[2vmax] pr-[2vmax] mt-[1.3vmax] pb-[0vmax] pt-1 rounded-xl font-[700] ">
                Details
              </button>
            </div>
          </div>
        </div>
        <button className="hover:bg-red-500   pt-[.5vmax] text-white bg-black pl-[3vmax] pr-[3vmax] mt-[3vmax] pb-[1vmax] pt-1.5 rounded-xl font-[700] ml-[40vmax] mt-[5vmax]  ">
          View All Products
        </button>
      </div>
      <div className="page-5 h-[100vh] bg-white flex gap-[2vmax] relative ">
        <div className="leftbox h-[70vh] w-[100vw] bg-green-300 rounded-[.5vmax] pt-[5vmax] mt-[5vmax] translate-x-[5vmax] bg-[url('./public/Images/bg3img.jpg')] bg-no-repeat bg-cover bg-center  "></div>
        <div className="right-box h-[90vh] w-[300vw] bg-zinc-900 rounded-[.5vmax] mr-[3vmax]">
          <h1 className="text-white text-center text-[3.5vmax] font-[500] mt-[4vmax]">
            Shop Local.
          </h1>
          <p className=" leading-8 w-[35vmax] text-white text-center font-[500 ml-[26vmax] mt-[3vmax] text-[1.1vmax] ">
            We know that during COVID-19, a lot of folks around the city and
            state are feeling uneasy about the future - we’re not sure what the
            future holds either. That said: we know that we love making sure you
            have the gear you need for your adventures, and we’re going to keep
            doing that - with our team - until the city tells us we can’t.But as
            long as folks like yourself support small businesses around the
            city, then we’ll be here — every day, making sure your orders arrive
            on time. <br /> ------- Jane & John Doe <br /> Acme Outdoors
          </p>
        </div>
      </div>
      <div className="page6 h-[40vh] bg-black ">
        <div className="p-6-nav flex items-center justify-between p-10 pt-[5vmax]">
          <img
            className="text-white "
            src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
            alt="logo"
          />
          <ul className="flex items-center gap-20 text-white font-semibold text-xl">
            <img
              className="h-[3vmax] hover:bg-zinc-500"
              src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407a25b6234aeec960fb9_Twitter_Social_Icon_Rounded_Square_White.svg"
              alt=""
            />
            <img
              className="h-[3vmax] hover:bg-zinc-500"
              src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407aa3fb6cf5576f1658b_Facebook%20Logo.svg"
              alt=""
            />
            <img
              className="h-[3vmax] hover:bg-zinc-500"
              src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e840774014326b74bbeeeb6_Insta.svg"
              alt=""
            />
          </ul>
        </div>
        <h1 className="text-center text-l text-white pt-[3vmax]">
          Made In <span className="text-red-500">Webflow</span>. © 2020.
        </h1>
      </div>
    </>
  );
};

export default App;