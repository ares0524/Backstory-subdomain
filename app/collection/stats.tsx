import { useSelector, AppState } from "../store/store";
import { totalChapters, totalWordCount } from "../components/utilz/custom-func";

export default function Stats() {
    const { selectedCollection } = useSelector((state: AppState) => state.collection)
    const { stories } = useSelector((state: AppState) => state.story);
    console.log("stories => ", stories);
    

    return(
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 py-4 border rounded-lg">
                    <div className="text-center md:border-r">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Total Stories
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{stories.length}</h6>
                    </div>
                    <div className="text-center md:border-r">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Total Words
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{totalWordCount(stories)}</h6>
                    </div>
                    <div className="text-center md:border-r">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Total Chapters
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{totalChapters(stories)}</h6>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Words per Chapter
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{totalWordCount(stories) / totalChapters(stories)}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
