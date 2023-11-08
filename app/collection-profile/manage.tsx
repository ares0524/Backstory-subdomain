"use client"

import Image from "next/image"

export default function Manage() {

    const generateImage = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "key": "",
            "prompt": "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner))",
            "negative_prompt": null,
            "width": "512",
            "height": "512",
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
                <div className="w-3/4 m-auto">
                  <div className="my-2 ml-6 space-y-1 list-decimal list-inside p-4 border-2 border-gray-600 rounded-md min-h-[500px]">
                      <p className="text-white text-2xl font-bold">Generate Cover Image</p>
                      <div className="pt-2 flex items-end">
                        <textarea placeholder="Chapter description here..." rows={3} className="w-3/4 text-sm bg-[#2f2f2f] border-[1px] p-1 rounded-md"></textarea>
                        <button className="text-white ml-4 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none" onClick={generateImage}>Generate</button>
                      </div>
                      <div className="w-full pt-4">
                        <div className="w-[1024px] h-[310px] border-2 border-gray-600 rounded-md m-auto">
                            <Image width={1024} height={300} className="mt-1" alt="Collection Cover" src="/assets/images/collection-profile/collection-cover.png" />
                        </div>
                      </div>
                  </div>
                  {/* <button className="text-white bg-blue-600 hover:bg-blue-700 float-right focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Publish Story</button> */}
                </div>
            </div>
        </>
    )
}