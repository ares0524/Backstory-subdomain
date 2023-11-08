"use client"

import Quill from "react-quill"

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
                  <div className="my-2 ml-6 space-y-1 list-decimal list-inside p-4 border-2 border-gray-600 rounded-md min-h-[500px]">
                      <div className="relative z-0 w-full mb-3 group">
                          <input type="text" name="chapter-title" id="chapter-title" className="block py-2.5 px-0 w-1/2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                          <label htmlFor="chapter-title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Chapter Title</label>
                      </div>
                      <textarea placeholder="Chapter description here..." cols={3} className="w-1/2 mb-3 text-sm bg-[#2f2f2f] border-[1px] p-1 rounded-md"></textarea>
                      <Quill modules={{ toolbar:['bold', 'underline', 'italic']}} formats={formats}></Quill>
                  </div>
                </div>
            </div>
        </>
    )
}