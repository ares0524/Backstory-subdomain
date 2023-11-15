"use client"

import Quill from "react-quill"
import 'react-quill/dist/quill.bubble.css';

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

export default function Story() {

    return (
        <>
            <div className="flex w-full">
                <div className="w-1/6">
                    <ul className="mt-2 space-y-1 list-decimal list-inside p-4 mb-3 sticky top-0">
                        <li className="cursor-pointer hover:text-gray-300 flex justify-between">
                          <span>Chapter 1</span>
                          <span><small>6.9k</small></span>
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 flex justify-between">
                          <span>Chapter 2</span>
                          <span><small>6.9k</small></span>
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 flex justify-between">
                          <span>Chapter 3</span>
                          <span><small>6.9k</small></span>
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 flex justify-between">
                          <span>Chapter 4</span>
                          <span><small>9k</small></span>
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 flex justify-between">
                          <span>Chapter 5</span>
                          <span><small>7.5k</small></span>
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 flex justify-between">
                          <span>Chapter 6</span>
                          <span><small>8.2k</small></span>
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 flex justify-between">
                          <span>Chapter 7</span>
                          <span><small>5k</small></span>
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 flex justify-between">
                          <span>Chapter 8</span>
                          <span><small>6.9k</small></span>
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 flex justify-between">
                          <span>Chapter 9</span>
                          <span><small>7.3k</small></span>
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 flex justify-between">
                          <span>Chapter 10</span>
                          <span><small>7.2k</small></span>
                        </li>
                        <li className="cursor-pointer">
                          <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                              <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center">
                              <button type="button" className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Add Chapter
                              </button>
                            </div>
                          </div>
                        </li>
                    </ul>
                </div>

                <div className="w-4/6">
                  <div className="my-2 ml-6 space-y-1 list-decimal list-inside p-4 min-h-[800px]">
                    <div className="relative z-0 w-full mb-3 group">
                      <input type="text" name="chapter-title" id="chapter-title" className="block py-2.5 px-0 w-1/2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="chapter-title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Chapter Title</label>
                    </div>
                    <textarea placeholder="Chapter description here..." cols={3} className="w-1/2 mb-3 text-sm bg-[#2f2f2f] border-[1px] p-1 rounded-md"></textarea>
                    <Quill modules={{ toolbar:['bold', 'underline', 'italic']}} formats={formats} theme="bubble" placeholder="Write your chapter here..." className="text-xl"></Quill>
                  </div>
                </div>

                <div className="w-1/6">
                  
                </div>
            </div>
        </>
    )
}