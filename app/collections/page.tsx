"use client"

import Image from "next/image"
import Header from "../components/layout/_header"
import { useState } from "react"
import Drawer from "./add-collection";

export default function CollectionProfile() {
    const [openAddColSidebar, setOpenAddColSidebar] = useState(false);

    return (
        <>
            <Header isLoggedIn={true} />
            <div className="w-full pt-[80px] px-[40px]">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Collections</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="py-[20px] flex justify-between items-center">
                    <p className="text-2xl font-bold">Collections</p>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setOpenAddColSidebar((openAddColSidebar) => !openAddColSidebar)}>Add Collection</button>
                </div>

                <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Image width={40} height={70} src="/assets/images/dashboard/1.png" style={{objectFit:'cover', height:'70px'}} alt="Image 1" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                                    Lorem Ipsum
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ...
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Created on May 5, 2023 &#8226; 23 Stories
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
                            </div>
                        </div>
                    </li>

                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Image width={40} height={70} src="/assets/images/dashboard/2.png" style={{objectFit:'cover', height:'70px'}} alt="Image 1" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                                    Lorem Ipsum
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ...
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Created on May 5, 2023 &#8226; 54 Stories
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
                            </div>
                        </div>
                    </li>

                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Image width={40} height={70} src="/assets/images/dashboard/3.png" style={{objectFit:'cover', height:'70px'}} alt="Image 1" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                                    Lorem Ipsum
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ...
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Created on May 5, 2023 &#8226; 36 Stories
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
                            </div>
                        </div>
                    </li>

                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Image width={40} height={70} src="/assets/images/dashboard/4.png" style={{objectFit:'cover', height:'70px'}} alt="Image 1" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                                    Lorem Ipsum
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ...
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Created on May 5, 2023 &#8226; 23 Stories
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
                            </div>
                        </div>
                    </li>

                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Image width={40} height={70} src="/assets/images/dashboard/5.png" style={{objectFit:'cover', height:'70px'}} alt="Image 1" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                                    Lorem Ipsum
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ...
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Created on May 5, 2023 &#8226; 23 Stories
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
                            </div>
                        </div>
                    </li>

                    <li className="pb-3 sm:pb-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Image width={40} height={70} src="/assets/images/dashboard/6.png" style={{objectFit:'cover', height:'70px'}} alt="Image 1" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                                    Lorem Ipsum
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ...
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Created on May 5, 2023 &#8226; 23 Stories
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
                            </div>
                        </div>
                    </li>
                </ul>

                <Drawer isOpen={openAddColSidebar} setIsOpen={setOpenAddColSidebar} />
            </div>
        </>
    )
}