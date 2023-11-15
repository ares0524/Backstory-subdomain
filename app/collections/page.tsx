"use client"

import Header from "../components/layout/_header"
import { useEffect, useState } from "react"
import Drawer from "./add-collection";
import { AppState, useDispatch, useSelector } from "../store/store";
import { getCollection } from "../store/collection/CollectionSlice";
import { useRouter } from "next/navigation";
import changeDateFormat from "../components/utilz/custom-func";
import { storiesCount } from "../components/utilz/custom-func";

export default function CollectionProfile() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { collections } = useSelector((state: AppState) => state.collection)
    const [openAddColSidebar, setOpenAddColSidebar] = useState(false);

    console.log(collections);
    

    useEffect(() => {
        dispatch(getCollection());
    }, [])

    const goToCollectionProfilePage = (id: any) => {
        router.push('/collection?collection_id=' + id);
    }
    
    return (
        <>
            <Header />
            <div className="w-full pt-[80px] px-[40px]">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a href="dashboard" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
                    {
                        collections?.map((item: any) => (
                            <li className="pb-3 sm:py-4">
                                <div className="flex items-center space-x-2">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xl font-bold text-gray-900 truncate dark:text-white hover:cursor-pointer" onClick={() => goToCollectionProfilePage(item?.id)}>
                                            {item?.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {item?.description}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {changeDateFormat(item?.created_at)} &#8226; {storiesCount(item?.stories)} Stories
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button onClick={() => goToCollectionProfilePage(item?.id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <Drawer isOpen={openAddColSidebar} setIsOpen={setOpenAddColSidebar} />
            </div>
        </>
    )
}
