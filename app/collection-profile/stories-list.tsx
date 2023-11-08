"use client"

import Image from "next/image"

export default function StoriesList() {

    const goToStoryProfilePage = () => {
        window.location.href = '/story-profile';
    }

    return (
        <>
            <div className="flex w-full">
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
                                    Published on May 5, 2023 &#8226; Written by Jhon Doe
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button onClick={goToStoryProfilePage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
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
                                    Published on May 5, 2023 &#8226; Written by Jhon Doe
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button onClick={goToStoryProfilePage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
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
                                    Published on May 5, 2023 &#8226; Written by Jhon Doe
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button onClick={goToStoryProfilePage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
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
                                    Published on May 5, 2023 &#8226; Written by Jhon Doe
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button onClick={goToStoryProfilePage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
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
                                    Published on May 5, 2023 &#8226; Written by Jhon Doe
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button onClick={goToStoryProfilePage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
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
                                    Published on May 5, 2023 &#8226; Written by Jhon Doe
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button onClick={goToStoryProfilePage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}