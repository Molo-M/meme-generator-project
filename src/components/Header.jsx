import trollFace from "../assets/troll-face.png"

export default function Header() {
    return (
        <header className="header bg-violet-600 flex pl-6 py-3 gap-4 justify-center items-center">
            <img 
                src={trollFace} 
                className="w-15"
            />
            <h1 className="text-white text-2xl font-semibold">Meme Generator</h1>
        </header>
    )
}