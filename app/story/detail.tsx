import Image from "next/image";
import { AppState, useSelector } from "../store/store";
import changeDateFormat from "../components/utilz/custom-func";

export default function Detail() {
    const {selectedStory} = useSelector((state: AppState) => state.story);

    const firstLetterCap = (data: string) => {
        const capitalized = data.charAt(0).toUpperCase() + data.slice(1);
        return capitalized;
    }

    return (
        <div className="flex">
            <div className="w-1/4"></div>
            <div className="w-1/4">
                <Image width={300} height={444} alt="Story Cover" src='/assets/images/dashboard/1.png' style={{objectFit:'cover', height:'444px'}} />
            </div>
            <div className="w-1/4 m-auto">
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-white">Story Details</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-white">Info about this story</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Author</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{selectedStory.author}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Genre</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{firstLetterCap(selectedStory.genre)}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Type</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{firstLetterCap(selectedStory.type)}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Word Count</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{selectedStory.word_count}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Published Date</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{changeDateFormat(selectedStory.created_at)}</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="w-1/4"></div>
        </div>
    )
} 
