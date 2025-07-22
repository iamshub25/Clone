"use client;"
// import { useState } from "react";
import {IconSearch, IconArrowRight, IconMenu2} from "@tabler/icons-react"
import Link from "next/link";
import TestimonialsComponent from "@/components/testimonials"
import { useState } from "react";


export default function Page(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return(
    <div className="bg-white">
      <div className="sticky top-0 px-4 md:px-[30px] py-0 h-auto min-h-[70px] md:h-[90px] z-30 flex flex-wrap items-center bg-white shadow-sm">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" title="Homepage" className="shrink-0">
            <img src="https://www.16personalities.com/static/images/system/logo.svg" className="w-auto h-10 md:h-14" />
          </Link>
          <button onClick={toggleMobileMenu} className="md:hidden p-2">
            <IconMenu2 className="w-8 h-8 text-gray-700" />
          </button>
        </div>
        
        <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center w-full md:w-auto md:grow h-auto md:h-full order-3 md:order-2 py-4 md:py-0`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 justify-start md:justify-center items-start md:items-center w-full md:w-auto h-auto md:h-[100%] m-0 p-0">
            <Link href="/" className="text-gray-600 font-sm py-2 md:py-0 border-b border-gray-100 md:border-0 w-full md:w-auto">Personality Test</Link>
            <Link href="/" className="text-gray-600 font-sm py-2 md:py-0 border-b border-gray-100 md:border-0 w-full md:w-auto">Personality Types</Link>
            <Link href="/" className="text-gray-600 font-sm py-2 md:py-0 border-b border-gray-100 md:border-0 w-full md:w-auto">Premium Profile</Link>
            <Link href="/" className="text-gray-600 font-sm py-2 md:py-0 border-b border-gray-100 md:border-0 w-full md:w-auto">Teams & Pros</Link>
            <Link href="/" className="text-gray-600 font-sm py-2 md:py-0 border-b border-gray-100 md:border-0 w-full md:w-auto">Resources</Link>
          </ul>
          
          {/* Mobile-only search and take test */}
          <div className="flex flex-col w-full gap-4 mt-4 pt-4 border-t border-gray-100 md:hidden">
            <div className="flex items-center gap-2 px-1">
              <IconSearch className="w-5 h-5 text-gray-600" />
              <input type="text" placeholder="Search..." className="w-full p-2 text-sm border-b border-gray-200 focus:outline-none" />
            </div>
            <Link href="/" className="w-full">
              <span className="bg-[#88619a] text-white rounded-full py-3 px-4 text-center w-full block font-medium">Take the Test</span>
            </Link>
            <Link href="#" className="text-gray-700 font-medium text-center py-2">Log in</Link>
          </div>
        </div>
        
        <div className="flex gap-2 md:gap-4 justify-end items-center ml-auto md:ml-0 order-2 md:order-3">
          <IconSearch className="hidden md:block w-6 h-6 md:w-8 md:h-8 cursor-pointer text-black"/>
          <Link href={"#"} className="hidden sm:block"><span className="text-gray-700 font-medium text-lg md:text-2xl cursor-pointer">Log in</span></Link>
          <button className="hidden md:block h-[50px] md:h-[60px]">
            <span className="text-white w-auto md:w-40 font-medium bg-[#88619a] px-3 md:px-6 py-2 rounded-full flex items-center justify-center h-full cursor-pointer text-sm md:text-base">Take the Test</span>
          </button>
        </div>
      </div>
      <section id="Main">
        <div className="bg-[#4298b4]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 60" preserveAspectRatio="none" className="angular-1920-1 hero__shape  dark:tw-bg-blue" aria-hidden="true">
            <path d="m0 20 420 40L800 0l750 60 370-45V0H0z" className="dark:tw-fill-ds-dark-2" fill="#fff"></path>
          </svg>
          <div className="pt-[60px] md:pt-[80px] px-4 md:pr-[20px] pb-[40px] text-center items-center flex-col">
            <h1 className="mb-[20px] font-bold text-white mt-0 text-3xl md:text-5xl px-2">“It’s so incredible to finally be understood.”</h1>
            <p className="mb-[30px] text-base md:text-lg max-w-[640px] mx-auto px-2">Only 10 minutes to get a “freakishly accurate” description of who you are and why you do things the way you do.</p>
            <button className="h-[80px]">
              <span className="text-white w-60 font-bold text-xl bg-[#88619a] px-6 py-2 rounded-full flex items-center justify-center h-full gap-3 cursor-pointer">Take the Test<IconArrowRight size={30}/></span>
            </button>
          </div>
        </div>
      </section>
      <div className="Scene">
        <img src="https://www.16personalities.com/static/images/homepage/header-mountains-desktop.svg" alt="" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 max-w-[1300px] mr-auto ml-auto">
        <div className="justify-center items-center justify-self-center">
          <dt className="mb-2 text-6xl font-bold justify-center text-blue-500">105k+</dt>
          <dd className="text-gray-600 justify-center text-center max-w-[200px] m-0">Tests taken today</dd>
        </div>
        <div className="justify-center items-center justify-self-center">
          <dt className="mb-2 text-6xl font-bold justify-center  text-amber-400">14M+</dt>
          <dd className="text-gray-600 justify-center text-center max-w-[200px] m-0">Tests taken in India</dd>
        </div>
        <div className="justify-center items-center justify-self-center">
          <dt className="mb-2 text-6xl font-bold justify-center text-green-500">1421M+</dt>
          <dd className="text-gray-600 justify-center text-center max-w-[200px] m-0">Total tests taken</dd>
        </div>
          <div className="justify-center items-center justify-self-center">
          <dt className="mb-2 text-6xl font-bold justify-center text-pink-400">91.2%</dt>
          <dd className="text-gray-600 justify-center text-center max-w-[200px] m-0">Results rated as accurate or very accurate</dd>
        </div>
      </div>
      <section id="understand other" className="bg-[#f6f6f7] mt-[20px]">
        <div>
          <svg className="resource__shape resource__shape--top angular-1920-1 block w-full bg-white rotate-180" viewBox="0 0 1920 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="m0 20 420 40L800 0l750 60 370-45V0H0z" fill="#f6f6f7"></path></svg>
          <div className="flex flex-col-reverse md:flex-row-reverse mt-27 ml-auto mr-auto max-w-[1300px] px-4 justify-between">
            <div className="w-full md:w-206 h-auto md:h-133 flex-none md:basis-[620px] flex justify-center mb-6 md:mb-0">
              <img className="w-full max-w-[500px] h-auto" src="https://www.16personalities.com/static/images/teams/communication.svg?v=1" loading="lazy" alt="Three people with different personality types having a discussion"/>
            </div>
            <div className="max-w-full md:max-w-[530px]">
              <p className="mb-[5px] text-green-500 font-bold uppercase">Personality types</p>
              <h2 className="mb-[10px] text-3xl md:text-5xl text-gray-700 font-bold">Understand others</h2>
              <p className="mb-[20px] text-lg text-black">In our free type descriptions you’ll learn what really drives, inspires, and worries different personality types, helping you build more meaningful relationships.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-600 px-4 py-2 text-white rounded-full">Personality Types</button>
                <span className="flex justify-center items-center "><Link href="/" className="uppercase text-blue-400 font-bold flex gap-2">Explore Theory<IconArrowRight size={25}/></Link></span>
              </div>
            </div>
          </div>
        </div>
        <svg className="resource__shape resource__shape--bottom angular-1920-4 dark:tw-bg-ds-dark-2 bg-white " viewBox="0 0 1920 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="m0 30 290 50L803 0l937 50 180-50H0z" className="dark:tw-fill-ds-medium fill-[#f6f6f7]"></path></svg>
      </section>
      <section id="understand-your-team">
        <div className="flex flex-col md:flex-row justify-between mt-27 mr-auto ml-auto max-w-[1300px] px-4">
          <div className="w-full md:w-206 h-auto md:h-100 flex-none md:basis-[620px] flex justify-center order-2 md:order-1 mt-6 md:mt-0">
              <img className="w-full max-w-[500px] h-auto" src="https://www.16personalities.com/static/images/teams/type-interactions.svg?v=1" loading="lazy" alt="A scene showing three colleagues, with two of them discussing something by the watercooler and the third one working on a laptop at his desk."/>
          </div>
          <div className="max-w-full md:max-w-[530px] order-1 md:order-2 mb-6 md:mb-0">
              <p className="mb-[5px] text-blue-500 font-bold uppercase">Teams</p>
              <h2 className="mb-[10px] text-3xl md:text-5xl text-gray-700 font-bold">Understand your team better</h2>
              <p className="mb-[20px] text-lg text-black">Understand your team better with our Team Assessments. Improve communication, create harmony, and help team members develop their individual strengths. Works for teams of all sizes.</p>
              <button className="bg-blue-500 px-4 py-2 font-bold text-white rounded-full">Team Assessments</button>
          </div>
        </div>
      </section>
      <section id="Testimonials" className="bg-[#f6f6f7] relative flex flex-col justify-center items-center mt-[80px]">
        <div>
          <svg className="resource__shape upper angular-1920-2 dark:tw-bg-ds-dark-2 h-[110px] [transform:rotate(180deg)_scaleX(-1)] bg-white w-full" preserveAspectRatio="none" width="1920" height="110" viewBox="0 0 1920 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="m520 90 900-90 500 110V0H0z" className="dark:tw-fill-ds-medium fill-[#f6f6f7]"></path></svg>
          <div className="mt-0 flex flex-col items-center justify-center ml-0 mr-0 px-4">
            <p className="text-amber-400 font-bold text-lg mb-2">Testimonials</p>
            <h2 className="font-bold text-gray-700 text-3xl md:text-5xl mb-13 text-center">See what others have to say</h2>
          </div>
          <div className="w-full">
            <section className="overflow-visible !important ">
              <TestimonialsComponent/>
            </section>
          </div>
        </div>
      </section>
      <section id="go" className=" flex flex-col items-center relative bg-[#33a474]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 88" preserveAspectRatio="none" className="cta__shape cta__shape--top dark:tw-bg-ds-medium bg-[#f6f6f7] z-10" aria-hidden="true">
        <path d="M1440 88H0v-4.2l247-22.3 192.2-55L661.3 36 900.4 0l351.8 62.2L1440 72.4z" className="dark:tw-fill-ds-dark-2 z-10" fill="#2d9368"></path>
        <path d="M1440 88H0v-4.2L441 44l224.9 25.3 250.2-25.1L1440 72.4z" className="dark:tw-fill-ds-dark-2 z-20" fill="#33a474"></path></svg>
        <img className="pl-0 pr-0 mt-[-10px] z-10" height="190" loading="lazy" src="https://www.16personalities.com/static/images/homepage/footer-desktop.svg" alt="A group of friends having a picnic around a fire, with trees and mountains in the background"/>
        <h2 className="mt-8 font-bold text-3xl md:text-5xl mb-4 px-4 text-center">Curious how accurate we are about you?</h2>
        <div className="flex gap-4 z-10 px-4">
            <button className="h-[80px]">
              <span className="text-white w-60 font-bold text-xl bg-[#88619a] px-6 py-2 rounded-full flex items-center justify-center h-full gap-3 cursor-pointer">Take the Test<IconArrowRight size={30}/></span>
            </button>         
        </div>
        <svg className="cta__shape cta__shape--bottom" viewBox="0 0 1920 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="m0 30 290 50L803 0l937 50 180-50H0z"  className="dark:tw-fill-ds-dark-2 rotate-180 origin-center fill-white"></path></svg>
      <div className="w-full h-[10px] absolute bg-white bottom-0"></div>
      </section>
      <div>
        <span className="h-1 w-1 "></span>
      </div>
      <footer id="footer" className="pt-20 ">
        <div className="ml-auto mr-auto max-w-[1300px] mb-13 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 border-gray-200">
          <div>
            <h3 className="font-semibold text-lg text-black">Products</h3>
            <ul className="mt-3 list-none grid">
              <Link href="#" className="text-[#1e9bac] font-medium mt-2">Premium Profile</Link>
              <Link href="#" className="text-[#1e9bac] font-medium mt-2">Team Assessments</Link>
              <Link href="#" className="text-[#1e9bac] font-medium mt-2">Reports for Professionals</Link>
              <Link href="#" className="text-[#1e9bac] font-medium mt-2">Testimonials</Link>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="font-bold text-lg text-black">Resources</h3>
              <ul className="mt-3 list-none grid">
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">Personality Test</Link>
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">Personality Types</Link>
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">Articles</Link>
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">Our Framework</Link>
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">Country Profiles</Link>
              </ul>
            </div> 
          </div>
          <div>
            <div>
              <h3 className="font-bold text-lg text-black">Help</h3>
              <ul className="mt-3 list-none grid">
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">Contact Us</Link>
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">FAQ</Link>
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">Your Orders</Link>
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">Change Language</Link>
              </ul>
            </div> 
          </div>
          <div>
            <div>
              <h3 className="font-bold text-lg text-black">Our Other Creations</h3>
              <ul className="mt-3 list-none grid">
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">NPQE®</Link>
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">MindTrackers®</Link>
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">Leadership by 16Personalities</Link>
                <Link href="#" className="text-[#1e9bac] font-medium mt-2">INFJ by 16Personalities</Link>
              </ul>
            </div> 
          </div>
        </div>
        <div className="h-px bg-gray-300 my-4 max-w-[1300px] mx-auto"></div>
        <div className="max-w-[1300px] mr-auto ml-auto mb-4">
          <div className="max-w-[700px] text-gray-400 text-sm">
             ©2011-2025 NERIS Analytics Limited 
          </div>
          <ul className="flex gap-4 mt-3">
            <Link href="#" className="text-[#1e9bac]">Terms & Conditions</Link>
            <Link href="#" className="text-[#1e9bac]">Privacy Policy</Link>
            <Link href="#" className="text-[#1e9bac]">Accessibility</Link>
          </ul>
        </div>
      </footer>
    </div>
  )
}