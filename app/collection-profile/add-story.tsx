import { useEffect } from "react";
import { useDispatch } from "../store/store";
import { addStory } from "../store/story/StorySlice";
import { toast } from "react-toastify";

type DrawerProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById('addStoryBtn')?.addEventListener('click', addStoryFunc);
  }, [])

  const addStoryFunc = (e: Event) => {
    e.preventDefault();
    const title_el = document.getElementById('story-title') as HTMLInputElement;
    const genre_el = document.getElementById('genre') as HTMLSelectElement;
    const age_el = document.getElementById('ageSelect') as HTMLSelectElement;

    if (!title_el.value || !genre_el.value || !age_el.value) {
      toast('Please fill out all informations!', {
        type: 'warning',
        autoClose: 2000,
        theme: 'dark'
      })
      return;
    }

    const data = {
      name: title_el.value,
      genre: genre_el.value,
      age_group: age_el.value
    }

    dispatch(addStory(data));
  }

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
            <p className="text-3xl text-center mt-20 mb-5 text-white">Add Story</p>
            <p className="text-center text-white">Add a new story to this collection</p>
            <div className="relative z-0 w-full mb-3 group">
                <div className="mt-10">
                  <input type="text" name="story-title" id="story-title" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="story-title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Story Title</label>
                </div>

                <div className="pt-10">
                  <label htmlFor="genre" className="sr-only">Genre</label>
                  <select id="genre" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" required>
                      <option value="">Genre</option>
                      <option value="adventure">Adventure</option>
                      <option value="romance">Romance</option>
                      <option value="crime">Crime</option>
                      <option value="epic">Epic</option>
                      <option value="drama">Drama</option>
                  </select>
                </div>

                <div className="pt-10">
                  <label htmlFor="ageSelect" className="sr-only">Age</label>
                  <select id="ageSelect" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                      <option value="">Age Group</option>
                      <option value="Adult">Adult</option>
                      <option value="Everyone">Everyone</option>
                  </select>
                </div>

                <input type="hidden" />

                <button type="submit" id="addStoryBtn" className="text-white bg-blue-700 w-full mt-10 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Story</button>

                <div className="relative flex items-center justify-center w-full my-6 border border-t">
                    <div className="absolute px-5 bg-[#2f2f2f] text-white">Then</div>
                </div>

                <p className="text-center text-white mt-5">Once you&apos;ve created your story, add the author who is going to write it and upload the cover art for publishing.</p>
                
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
