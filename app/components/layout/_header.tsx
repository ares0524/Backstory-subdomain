"use client"

import Image from "next/image"
import Cookies from "js-cookie"

export default function Header() {
  const LogOut = () => {
    Cookies.remove('token');
    window.location.href = '/'
  }

  return (
    <>
      <header>
        <nav className="z-10 bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full fixed">
            <div className="flex flex-wrap justify-between items-center mx-auto">
                <a href="dashboard" className="flex items-center">
                
                    <Image width={60} height={36} src="/assets/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Teloria</span>
                </a>

                <div className="flex items-center lg:order-2">
                    <a href="collections" className="flex items-center">
                        <Image src="/assets/images/header/collections.png" alt="Collection" width={30} height={30} className="mr-4" />
                    </a>
                    <div className="group inline-block relative">
                        <Image src="/assets/images/account/user.jpg" className="rounded-full border-2 cursor-pointer" alt="User avatar" height={40} width={40} style={{objectFit:'cover', height:'40px'}} />

                        <ul className="absolute left-[-50px] hidden text-gray-700 pt-1 group-hover:block min-w-[83px]">
                            <li onClick={() => LogOut()}>
                                <a
                                    className="rounded-md bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >Log out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      </header>
    </>
  )
}
