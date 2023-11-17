"use client"

import Image from "next/image"
import { useSelector, AppState } from "../store/store";
import changeDateFormat from "../components/utilz/custom-func";
import { useRouter } from "next/navigation";

type DrawerProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function StoriesList({ isOpen, setIsOpen }: DrawerProps) {
    const { stories } = useSelector((state: AppState) => state.story);
    const router = useRouter();

    const goToStoryProfilePage = (id: any) => {
        router.push('/story?story_id=' + id)

        return (
            <>
                <div className="w-full">
                    {
                        stories?.length > 0 
                        ? 
                            <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    stories?.map((item: any, key) => (
                                        <li className="pb-3 sm:py-2" key={key}>
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <Image width={60} height={80} src="/assets/images/story-profile/defaultBook.png" style={{objectFit:'cover', height:'80px'}} alt="Image 1" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xl font-bold text-gray-900 truncate dark:text-white cursor-pointer" onClick={() => goToStoryProfilePage(item.id)}>
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
                                                    <button onClick={() => goToStoryProfilePage(item.id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        :
                            <div className="w-full container flex flex-wrap justify-between items-center mx-auto bg-white rounded-md dark:bg-slate-500">
                                <div className="text-center border-dashed border-2 border-slate-200 dark:border-slate-100 rounded-md w-full p-20">
                                    <i className='bx bxs-contact bx-lg mb-5 dark:text-white'></i>
                                    <p className="text-xl mb-2 uppercase font-bold dark:text-white">No stories</p>
                                    <span className="text-m text-slate-400 block mb-10 dark:text-slate-50">Get started by adding a new story</span>
                                    <button className="bg-blue-400 rounded-full px-5 py-3 text-white hover:bg-blue-500 w-52" onClick={() => setIsOpen(true)}>Add a story</button>
                                </div>
                            </div>
                    }

                </div>
            </>
        )
    }
}