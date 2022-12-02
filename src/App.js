import logo from "./images/logo.svg"
import banner from "./images/image-web-3-desktop.jpg"
import bannerMobile from "./images/image-web-3-mobile.jpg"
import img1 from "./images/image-retro-pcs.jpg"
import img2 from "./images/image-top-laptops.jpg"
import img3 from "./images/image-gaming-growth.jpg"
import { GrMenu } from "react-icons/gr"
import { AiFillCloseCircle } from "react-icons/ai"
import 'animate.css';
import React from 'react'
function App()
{
  const [show, setShow] = React.useState(null);

  const handleMenu = () =>
  {
    setShow(!show);
  }
  return (
    <div className="App w-full h-full font-Inter text-m flex items-center justify-center">
      <div className="w-4/5 h-4/5 my-10 flex flex-col gap-5">
        {show && (<div className="w-full h-full  fixed top-0 bottom-0 left-0 right-0 z-[500] backdrop-blur-sm">

          <div className="menu hidden Mobile:flex fixed top-0 right-0 bottom-0 w-[75%] h-screen z-[1000] bg-Off-white p-5 items-center ">
            <AiFillCloseCircle className="absolute top-5 right-5 text-[2rem] cursor-pointer drop-shadow-md " onClick={handleMenu} />
            <nav className="  text-[1.2rem] ">

              <ul className="flex items-start gap-5 text-Very-dark-blue font-lg flex-col ">
                <li className=" hover:text-soft-red transition-all cursor-pointer hover:drop-shadow" >Home</li>
                <li className=" hover:text-soft-red transition-all cursor-pointer hover:drop-shadow" >New</li>
                <li className=" hover:text-soft-red transition-all cursor-pointer hover:drop-shadow" >Popular</li>
                <li className=" hover:text-soft-red transition-all cursor-pointer hover:drop-shadow" >Trending</li>
                <li className=" hover:text-soft-red transition-all cursor-pointer hover:drop-shadow" >Categories</li>
              </ul>
            </nav>
          </div>
        </div>)}
        <header className="flex w-full item-center justify-between animate__animated animate__fadeInDown">
          <div className="logo">
            <img src={logo} alt="logo img" className="w-10 h-10 object-contain" />
          </div>

          <nav className="Mobile:hidden">
            <ul className="flex items-center gap-5 text-Dark-grayish-blue font-ms ">
              <li className=" hover:text-soft-red transition-all cursor-pointer hover:drop-shadow" >Home</li>
              <li className=" hover:text-soft-red transition-all cursor-pointer hover:drop-shadow" >New</li>
              <li className=" hover:text-soft-red transition-all cursor-pointer hover:drop-shadow" >Popular</li>
              <li className=" hover:text-soft-red transition-all cursor-pointer hover:drop-shadow" >Trending</li>
              <li className=" hover:text-soft-red transition-all cursor-pointer hover:drop-shadow" >Categories</li>
            </ul>
          </nav>
          <div className="div hidden Mobile:block">
            <GrMenu className="text-[2rem] cursor-pointer drop-shadow" onClick={handleMenu} />
          </div>
        </header>
        <section className="flex py-5 gap-10 w-[80vw] h-[80vh] Mobile:flex-col Mobile:w-full Mobile:h-full Tablet:w-full Tablet:h-full">
          <div className="left w-3/4 flex flex-col h-full gap-5 animate__animated animate__fadeInLeft Mobile:w-full">
            <div className="top w-full h-1/2">
              <img src={banner} alt="banner img" className="w-full h-full object-cover Mobile:hidden" />
              <img src={bannerMobile} alt="banner img" className="hidden Mobile:w-full h-full object-cover Mobile:block" />
            </div>
            <div className="bottom w-full flex justify-between gap-10 h-1/2 Mobile:flex-col ">
              <div className="left w-1/2 h-full Mobile:w-full">
                <h1 className="text-[4.5rem] font-xl leading-none Mobile:text-[3rem] default:text-[3rem] Tablet:text-[3rem]">
                  The Bright Future of Web 3.0?
                </h1>
              </div>
              <div className="right flex flex-col justify-between w-1/2 h-full items-start Mobile:w-full">
                <p className=" text-Dark-grayish-blue font-ms"> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?</p>
                <button className=" bg-soft-red text-white px-4 py-2  tracking-wider uppercase cursor-pointer   hover:bg-Very-dark-blue transition hover:drop-shadow hover:shadow-md Mobile:mt-5 Mobile:tracking-wider font-lg">  Read more</button>
              </div>
            </div>
          </div>
          <div className="right w-1/4 h-full flex flex-col bg-Very-dark-blue text-white p-3 justify-evenly animate__animated animate__fadeInRight Mobile:w-full Mobile:h-[70vh] ">
            <h3 className=" text-Soft-orange font-lg text-[2rem]"> New </h3>
            {/* 1 */}
            <div className="border-b-[1px] pb-5 border-Dark-grayish-blue flex flex-col gap-1">
              <h2 className="font-lg hover:text-Soft-orange cursor-pointer transition hover:shadow-md">Hydrogen VS Electric Cars</h2>
              <p className="text-Dark-grayish-blue">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>

            {/* 2 */}
            <div className="border-b-[1px] pb-5 border-Dark-grayish-blue flex flex-col gap-1">
              <h2 className="font-lg hover:text-Soft-orange cursor-pointer transition hover:shadow-md">The Downsides of AI Artistry</h2>
              <p className="text-Dark-grayish-blue">What are the possible adverse effects of on-demand AI image generation?</p>
            </div>

            {/* 3 */}
            <div className="flex flex-col gap-1">
              <h2 className="font-lg hover:text-Soft-orange cursor-pointer transition hover:shadow-md">Is VC Funding Drying Up?</h2>
              <p className="text-Dark-grayish-blue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </section>
        <section className="flex w-full h-[10%] items-center justify-between animate__animated animate__fadeInUp Mobile:flex-col Mobile:gap-3 Tablet:flex-col Tablet:gap-3">
          {/* 1 */}
          <div className="box flex gap-5 w-[33%] h-[10rem] Mobile:w-full Tablet:w-full">
            <div className="left w-1/3">
              <img src={img1} alt="img" className="h-full w-full object-cover" />
            </div>
            <div className="right flex flex-col justify-between w-2/3">
              <h1 className="text-[3rem] font-lg text-Grayish-blue">01</h1>
              <h3 className="font-lg hover:text-soft-red cursor-pointer transition">Reviving Retro PCs
              </h3>
              <p className="text-Dark-grayish-blue">What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          {/* 2*/}
          <div className="box flex gap-5 w-[33%] h-[10rem] Mobile:w-full Tablet:w-full">
            <div className="left w-1/3">
              <img src={img2} alt="img" className="h-full w-full object-cover" />
            </div>
            <div className="right flex flex-col justify-between w-2/3">
              <h1 className="text-[3rem] font-lg text-Grayish-blue">02</h1>
              <h3 className="font-lg hover:text-soft-red cursor-pointer transition">Top 10 Laptops of 2022</h3>
              <p className="text-Dark-grayish-blue"> Our best picks for various needs and budgets.</p>
            </div>
          </div>

          {/* 3*/}
          <div className="box flex gap-5 w-[33%] h-[10rem] Mobile:w-full Tablet:w-full">
            <div className="left w-1/3">
              <img src={img3} alt="img" className="h-full w-full object-cover" />
            </div>
            <div className="right flex flex-col justify-between w-2/3">
              <h1 className="text-[3rem] font-lg text-Grayish-blue">03</h1>
              <h3 className="font-lg hover:text-soft-red cursor-pointer transition">The Growth of Gaming</h3>
              <p className="text-Dark-grayish-blue">How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
