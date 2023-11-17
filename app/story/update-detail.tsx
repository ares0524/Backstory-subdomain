import { useEffect } from "react";
import { AppState, useSelector, useDispatch } from "../store/store"
import { updateStory } from "../store/story/StorySlice";
import { toast } from "react-toastify";

export default function UpdateDetail() {
    const { selectedStory } = useSelector((state: AppState) => state.story);
    const dispatch = useDispatch();
    var story_id = '';

    useEffect(() => {
        document.getElementById('save')?.addEventListener('click', save);
    }, [])

    useEffect(() => {
        story_id = selectedStory.id.toString();
    }, [selectedStory])

    const save = () => {
        const name_el = document.getElementById('story_name') as HTMLInputElement;
        const description_el = document.getElementById('description') as HTMLTextAreaElement;
        const genre_el = document.getElementById('genre') as HTMLSelectElement;
        const age_el = document.getElementById('ageSelect') as HTMLSelectElement;
        const start_time_el = document.getElementById('start_time') as HTMLInputElement;
        console.log("selectedStory => ", selectedStory);

        const data = {
            id: story_id,
            name: name_el.value,
            genre: genre_el.value,
            description: description_el.value,
            age_group: age_el.value,
            start_time: start_time_el.value
        }

        if (name_el.value == '' || genre_el.value == '' || description_el.value == '' || age_el.value == '' || start_time_el.value == '') {
            toast('Please fill out all informations!', {
                autoClose: 2000,
                type: 'warning',
                theme: 'dark'
            })
            return
        }

        dispatch(updateStory(data));
    }
    
    return (
        <div className="flex">
            <div className="w-1/3 lg:block hidden"></div>
            <div className="lg:w-1/3 w-full">
                <div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="story_name" id="story_name" defaultValue={selectedStory.name} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label htmlFor="story_name" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Story Name</label>
                    </div>

                    <textarea placeholder="Story description here..." rows={5} defaultValue={selectedStory.description} id="description" className="w-full mb-3 text-sm bg-[#2f2f2f] border-[1px] border-gray-400 p-1 rounded-md"></textarea>

                    <div className="mb-6">
                        <select id="genre" name="genre" defaultValue={selectedStory.genre.toString()} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-gray-400 border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" required>
                            <option value="">Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="romance">Romance</option>
                            <option value="crime">Crime</option>
                            <option value="epic">Epic</option>
                            <option value="drama">Drama</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="ageSelect" className="sr-only">Age</label>
                        <select id="ageSelect"  defaultValue={selectedStory.age_group.toString()} className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option value="">Age Group</option>
                            <option value="adult">Adult</option>
                            <option value="everyone">Everyone</option>
                        </select>
                    </div>

                    <div className="relative z-0 w-full group">
                        <input type="number" name="start_time" id="start_time" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                        <label htmlFor="start_time" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start time</label>
                    </div>

                    <button type="submit" onClick={save} className="text-white bg-blue-600 mt-3 float-right hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Save</button>
                </div>
            </div>
            <div className="w-1/3 lg:block hidden"></div>
        </div>
    )
} 
