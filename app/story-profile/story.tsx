"use client"

import dynamic from "next/dynamic"
import { useMemo, useState } from "react"

export default function Story() {

    return (
        <>
            <div className="flex w-full">
                <div className="w-1/6">
                    <ol className="mt-2 space-y-1 list-decimal list-inside p-4 border-2 border-gray-600 rounded-md">
                        <li className="cursor-pointer hover:text-gray-300">Chapter 1</li>
                        <li className="cursor-pointer hover:text-gray-300">Chapter 2</li>
                        <li className="cursor-pointer hover:text-gray-300">Chapter 3</li>
                        <li className="cursor-pointer hover:text-gray-300">Chapter 4</li>
                        <li className="cursor-pointer hover:text-gray-300">Chapter 5</li>
                        <li className="cursor-pointer hover:text-gray-300">Chapter 6</li>
                        <li className="cursor-pointer hover:text-gray-300">Chapter 7</li>
                        <li className="cursor-pointer hover:text-gray-300">Chapter 8</li>
                        <li className="cursor-pointer hover:text-gray-300">Chapter 9</li>
                        <li className="cursor-pointer hover:text-gray-300">Chapter 10</li>
                    </ol>
                </div>

                <div className="w-5/6">
                    <div className="my-2 ml-6 space-y-1 list-decimal list-inside p-4 border-2 border-gray-600 rounded-md">
                        
                    </div>
                </div>
            </div>
        </>
    )
}