"use client"

import Image from "next/image"

export default function ManageAuthor() {
    const people = [
        {
          name: 'Leslie Alexander',
          imageUrl:
            '/assets/images/story-profile/user.png',
        },
        {
          name: 'Michael Foster',
          imageUrl:
            '/assets/images/story-profile/user.png',
        },
        {
          name: 'Dries Vincent',
          imageUrl:
            '/assets/images/story-profile/user.png',
        },
        {
          name: 'Lindsay Walton',
          imageUrl:
            '/assets/images/story-profile/user.png',
        },
        {
          name: 'Courtney Henry',
          imageUrl:
            '/assets/images/story-profile/user.png',
        }
    ]

    return (
        <>
            <div className="flex w-full">
                <div className="w-1/2 m-auto">
                    <ul role="list" className="my-2 divide-y divide-gray-600 border-2 border-gray-600 rounded-md px-4">
                        <p className="text-white text-2xl font-bold text-center py-4">Current Authors</p>
                        {people.map((person, key) => (
                            <li key={key} className="flex justify-between gap-x-6 py-5 items-center">
                                <div className="flex min-w-0 gap-x-4">
                                    <Image width={48} height={48} className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                    <div className="min-w-0 items-center flex">
                                        <p className="text-md font-semibold leading-6 text-gray-300">{person.name}</p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Add</button>
                                </div>
                            </li>
                        ))}
                        <button className="text-white w-full mb-4 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Remove author</button>
                    </ul>
                </div>
            </div>
        </>
    )
}
