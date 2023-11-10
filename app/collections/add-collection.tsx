type DrawerProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-[#2f2f2f] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        {/* <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full"> */}
          {/* <header className="p-4 font-bold text-lg">Header</header> */}
        {/* </article> */}
        <div className="py-5 px-5">
            <p className="text-3xl text-center mt-20 mb-5 text-white">Add Collection</p>
            <p className="text-center text-white">Add a new collection of stories to your world</p>
            <div className="relative z-0 w-full mb-3 group">
                <div className="mt-10">
                  <input type="text" name="chapter-title" id="chapter-title" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="chapter-title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Collection Title</label>
                </div>

                <textarea placeholder="Collection description here..." rows={5} className="text-sm w-full mt-10 bg-[#2f2f2f] border-[1px] p-1 rounded-md"></textarea>

                <input type="hidden" />

                <button className="text-white bg-blue-700 w-full mt-10 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Collection</button>

                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-[#2f2f2f]">Then</div>
                </div>

                <p className="text-center text-white">Once you&apos;ve created your collection, add cover art for it and create the first story. To publish a collection&apos;s stories you must first publish the collection.</p>

            </div>
        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
