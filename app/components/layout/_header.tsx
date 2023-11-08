"use client"

import Image from "next/image"

type HeaderProps = {
    isLoggedIn: boolean
}

export default function Header({isLoggedIn}: HeaderProps) {
  return (
    <>
      <header>
        <nav className="z-10 bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full fixed">
            <div className="flex flex-wrap justify-between items-center mx-auto">
                <a href="dashboard" className="flex items-center">
                
                    <Image width={60} height={36} src="/assets/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Teloria</span>
                </a>
                <div className={"flex items-center lg:order-2 " + (isLoggedIn?"hidden":"block")}>
                    <a href="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                    <a href="/register" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Register</a>
                    {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button> */}
                </div>

                <div className={"flex items-center lg:order-2 " + (isLoggedIn?"block":"hidden")}>
                    <a href="collections" className="flex items-center">
                        <Image src="/assets/images/header/collections.png" alt="Collection" width={30} height={30} className="mr-4" />
                    </a>
                    <Image src="/assets/images/account/user.jpg" className="rounded-full border-2" alt="User avatar" width={40} height={40} style={{objectFit:'cover', height:'40px'}} />
                </div>
            </div>
        </nav>
      </header>
    </>
  )
}
