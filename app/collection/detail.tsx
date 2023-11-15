import Image from "next/image";
import { useSelector, AppState } from "../store/store";
import changeDateFormat from "../components/utilz/custom-func";
import { storiesCount } from "../components/utilz/custom-func";

export default function Detail() {
    const { selectedCollection } = useSelector((state: AppState) => state.collection);

    return (
        <div className="flex">
            <div className="w-1/4"></div>
            <div className="w-1/4">
                <Image width={300} height={444} alt="Story Cover" src='/assets/images/dashboard/1.png' style={{objectFit:'cover', height:'444px'}} />
            </div>
            <div className="w-1/4 m-auto">
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-white">Collection Information</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Collection details and application.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{selectedCollection.name}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Description</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{selectedCollection.description}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Stories</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{storiesCount(selectedCollection.stories)}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Created Date</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{changeDateFormat(selectedCollection.created_at)}</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="w-1/4"></div>
        </div>
    )
} 