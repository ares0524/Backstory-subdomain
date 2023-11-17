import { AppState, useSelector } from "../store/store"

export default function Stats() {
    const {selectedStory} = useSelector((state: AppState) => state.story);
    return(
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 py-4 border rounded-lg items-center">
                    <div className="text-center md:border-r pb-3">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Word Count
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{selectedStory.word_count}</h6>
                    </div>
                    <div className="text-center md:border-r pb-3">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Chapter Count
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">12</h6>
                    </div>
                    <div className="text-center md:border-r pb-3">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Words per Chapter
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">7.2K</h6>
                    </div>
                    <div className="text-center pb-3">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Shortest Chapter
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">5k</h6>
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Chapter 7
                        </p>
                    </div>
                    <div className="text-center md:border-r pb-3">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Read Count
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{selectedStory.read_count.toString()}</h6>
                    </div>
                    <div className="text-center md:border-r pb-3">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Likes
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{selectedStory.likes.toString()}</h6>
                    </div>
                    <div className="text-center md:border-r pb-3">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Sales
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{selectedStory.sales.toString()}</h6>
                    </div>
                    <div className="text-center pb-3">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Longest Chapter
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">9k</h6>
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Chapter 4
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
