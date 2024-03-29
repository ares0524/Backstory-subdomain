"use client"

import { useEffect, useState } from "react";
import Header from "../components/layout/_header"
import Detail from "./detail";
import Stats from "./stats";
import Manage from "./manage";
import StoriesList from "./stories-list";
import Drawer from "./add-story";
import { useDispatch, useSelector, AppState } from "../store/store";
import { getStories } from "../store/story/StorySlice";
import { setSelectedCollection } from "../store/collection/CollectionSlice";

export default function CollectionProfile() {
    const [openTab, setOpenTab] = useState(1);
    const [openAddStorySidebar, setOpenAddStorySidebar] = useState(false);
    const { collections } = useSelector((state: AppState) => state.collection)
    const dispatch = useDispatch();
    const { selectedCollection } = useSelector((state: AppState) => state.collection);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const collection_id = searchParams.get('collection_id');
        
        let stories_id = '' as String;
        collections.map((item) => {
            if (item.id == Number(collection_id)) {
                stories_id = item.stories;
                dispatch(setSelectedCollection(item));
            }
        })

        dispatch(getStories(stories_id?.toString()));
    }, [collections])


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
                                <a href="collections" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Collections</a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Collection</a>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="py-[20px] flex justify-between items-center">
                    <p className="text-2xl font-bold">{selectedCollection.name}</p>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setOpenAddStorySidebar((openAddStorySidebar) => !openAddStorySidebar)}>Add Story</button>
                </div>

                {/* <div className="w-full">
                    <div className="w-1/6">

                    </div>
                </div> */}

                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul
                            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                            role="tablist"
                        >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-blueGray-600"
                                        : "text-blueGray-600 bg-gray-700")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    Stories List
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-blueGray-600"
                                        : "text-blueGray-600 bg-gray-700")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    Details
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-blueGray-600"
                                        : "text-blueGray-600 bg-gray-700")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Stats
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 4
                                        ? "text-white bg-blueGray-600"
                                        : "text-blueGray-600 bg-gray-700")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                    }}
                                    data-toggle="tab"
                                    href="#link4"
                                    role="tablist"
                                >
                                    Manage
                                </a>
                            </li>
                        </ul>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                        <div className="py-3 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="pt-2">
                                        <StoriesList isOpen={openAddStorySidebar} setIsOpen={setOpenAddStorySidebar} />
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="pt-2">
                                        <Detail />
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <Stats />
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                    <Manage />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <Drawer isOpen={openAddStorySidebar} setIsOpen={setOpenAddStorySidebar} />
            </div>
        </>
    )
}

