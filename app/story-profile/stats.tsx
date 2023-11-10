export default function Stats() {
    return(
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 row-gap-8 md:grid-cols-3 py-4 border rounded-lg">
                    <div className="text-center md:border-r">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Word Count
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">86K</h6>
                    </div>
                    <div className="text-center md:border-r">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Chapter Count
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">12</h6>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Words per Chapter
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">7.2K</h6>
                    </div>
                    <div className="text-center md:border-r">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Longest Chapter
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">9k</h6>
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Chapter 4
                        </p>
                    </div>
                    <div className="text-center md:border-r">
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Shortest Chapter
                        </p>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">5k</h6>
                        <p className="text-sm font-medium tracking-widest text-gray-400 lg:text-base">
                            Chapter 7
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
