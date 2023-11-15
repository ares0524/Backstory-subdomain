"use client"

import Image from "next/image"
import { useSelector, AppState } from "../store/store";
import changeDateFormat from "../components/utilz/custom-func";

export default function StoriesList() {
    const { stories } = useSelector((state: AppState) => state.story);

    const goToStoryProfilePage = () => {
        window.location.href = '/story-profile';
    }

    return (
        <>
            <div className="flex w-full">
                <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        stories?.map((item: any) => (
                            <li className="pb-3 sm:pb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <Image width={60} height={80} src="/assets/images/story-profile/defaultBook.png" style={{objectFit:'cover', height:'80px'}} alt="Image 1" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {item.description}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {changeDateFormat(item.created_at)} &#8226; Written by {item.author}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button onClick={goToStoryProfilePage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
