"use client"

import { useState, useEffect } from "react";
import Header from "../components/layout/_header"
import dynamic from "next/dynamic";
import Detail from "./detail";
import ChartTemplate from "../components/chart/doughnut";
import Stats from "./stats";
// import ManageAuthor from "./manage-author";
import ManageAuthor from "./author-list";
import UpdateDetail from "./update-detail";
import ManageCover from "./manage-cover";

const DynamicStoryComponent = dynamic(() => import('./story'), {
    ssr: false
})

export default function CollectionProfile() {
    const [openTab, setOpenTab] = useState(1);
    
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
                                <a href="collection-profile" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Collection</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Story Name</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="py-[20px] flex justify-between items-center">
                    <p className="text-2xl font-bold">Story Name</p>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Publish</button>
                </div>

                <div className="md:flex">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                        <div className="py-3 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="pt-2">
                                        <DynamicStoryComponent />
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="pt-2">
                                        <Detail />
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className="pt-2">
                                        <UpdateDetail />
                                    </div>
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                    <Stats />
                                </div>
                                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                                    <ManageCover />
                                </div>
                                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                                    <ManageAuthor />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-[60px]">
                        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-400 mb-4 md:mb-0 mt-2 space-y-1 list-inside p-4 pr-0 mb-3 sticky top-[60px]">
                            <li className="-mb-px w-[150px] last:mr-0 flex-auto text-center">
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
                                    Story
                                </a>
                            </li>
                            <li className="-mb-px w-[150px] last:mr-0 flex-auto text-center">
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
                            <li className="-mb-px w-[150px] last:mr-0 flex-auto text-center">
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
                                    Update Details
                                </a>
                            </li>
                            <li className="-mb-px w-[150px] last:mr-0 flex-auto text-center">
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
                                    Stats
                                </a>
                            </li>
                            <li className="-mb-px w-[150px] last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 5
                                        ? "text-white bg-blueGray-600"
                                        : "text-blueGray-600 bg-gray-700")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(5);
                                    }}
                                    data-toggle="tab"
                                    href="#link5"
                                    role="tablist"
                                >
                                    Manage Cover
                                </a>
                            </li>
                            <li className="-mb-px w-[150px] last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 6
                                        ? "text-white bg-blueGray-600"
                                        : "text-blueGray-600 bg-gray-700")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(6);
                                    }}
                                    data-toggle="tab"
                                    href="#link6"
                                    role="tablist"
                                >
                                    Manage Author
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
