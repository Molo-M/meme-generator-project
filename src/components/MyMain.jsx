import { useState, useEffect } from "react"

export default function Main() {
    // Create useState to store API data we have received
    const [apiData, setApiData] = useState(null)
    // Get meme data from API
    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(apiData => setApiData(apiData.data.memes))
    }, [])
    // store meme info in state
    const [memeInfo, setMemeInfo] = useState({
        imgUrl: "http://i.imgflip.com/1bij.jpg",
        topText: "One does not simply",
        bottomText: "Walk into Mordor"
    })
    // Create function for getting new meme image:
    function getNewMeme() {
        // Create index for random meme:
        let randomIndex = Math.floor(Math.random() * apiData.length);
        // Set the random meme
        setMemeInfo(prev => ({
            ...prev,
            imgUrl: apiData[randomIndex].url
        }))
    }
    // Create function to update top and bottom texts when we type into our inputs
    function handleChange(event) {
        const { value, name } = event.currentTarget 
        setMemeInfo({
            ...memeInfo,
            [name]: value
        })
    }
    return (
        <main className="flex flex-col items-center">
            <section className="sm:w-[50%]">
                <div className="form flex flex-col gap-4 py-4 items-center">
                    <div className="inputs flex justify-between sm:justify-center sm:gap-5">
                        <label>Top Text
                            <input
                                className="ml-2 border p-2 rounded w-50 text-gray-700"
                                type="text"
                                placeholder="One does not simply"
                                name="topText"
                                onChange={handleChange}
                                value={memeInfo.topText}
                            />
                        </label>

                        <label>Bottom Text
                            <input
                                className="ml-2 border p-2 rounded w-50 text-gray-700"
                                type="text"
                                placeholder="Walk into Mordor"
                                name="bottomText"
                                onChange={handleChange}
                                value={memeInfo.bottomText}
                            />
                        </label>
                    </div>
                    <button onClick={getNewMeme} className="w-full font-semibold cursor-pointer rounded bg-violet-600 hover:bg-violet-800 text-white py-2">Get a new meme image 🖼</button>
                </div>
                <div className="meme relative flex flex-col items-center mb-6">
                    <img className="w-full h-full object-cover" src={memeInfo.imgUrl} />
                    <span className="top-0 absolute py-1 px-2 bg-black text-white text-3xl font-bold">{memeInfo.topText}</span>
                    <span className="bottom-0 absolute py-1 px-2 bg-black text-white text-3xl font-bold">{memeInfo.bottomText}</span>
                </div>
            </section>
        </main>
    )
}