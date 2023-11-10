"use client"

import Image from "next/image"

export default function Manage() {
    const people = [
        {
          name: 'Leslie Alexander',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Michael Foster',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Dries Vincent',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Lindsay Walton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Courtney Henry',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ]

    const generateImage = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "key": "",
            "prompt": "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner))",
            "negative_prompt": null,
            "width": "400",
            "height": "800",
            "samples": "1",
            "num_inference_steps": "20",
            "seed": null,
            "guidance_scale": 7.5,
            "safety_checker": "yes",
            "multi_lingual": "no",
            "panorama": "no",
            "self_attention": "no",
            "upscale": "no",
            "embeddings_model": null,
            "webhook": null,
            "track_id": null
        });

        fetch("https://stablediffusionapi.com/api/v3/text2img", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => console.log(JSON.parse(result)))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className="flex w-full">
                <div className="w-1/4">
                    <ul role="list" className="my-2 divide-y divide-gray-600 border-2 border-gray-600 rounded-md px-4">
                        <p className="text-white text-2xl font-bold text-center py-4">Current Authors</p>
                        {people.map((person, key) => (
                            <li key={key} className="flex justify-between gap-x-6 py-5 items-center">
                                <div className="flex min-w-0 gap-x-4">
                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
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

                <div className="w-3/4">
                  <div className="my-2 ml-6 space-y-1 list-decimal list-inside p-4 border-2 border-gray-600 rounded-md min-h-[500px]">
                      <p className="text-white text-2xl font-bold">Generate Cover Image</p>
                      <div className="pt-2 flex items-end">
                        <textarea placeholder="Chapter description here..." rows={3} className="w-3/4 text-sm bg-[#2f2f2f] border-[1px] p-1 rounded-md"></textarea>
                        <button className="text-white ml-4 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none" onClick={generateImage}>Generate</button>
                      </div>
                      <div className="w-full pt-4">
                        <div className="w-[300px] h-[600px] border-2 border-gray-600 rounded-md m-auto">
                            <Image width={400} height={800} alt="Story Cover" src="/assets/images/story-profile/story-cover.png" />
                        </div>
                      </div>
                  </div>
                  {/* <button className="text-white bg-blue-600 hover:bg-blue-700 float-right focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Publish Story</button> */}
                </div>
            </div>
        </>
    )
}
