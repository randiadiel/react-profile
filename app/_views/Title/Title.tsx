import { PiSquaresFourFill } from "react-icons/pi";

export default function Title() {
    return <div className="w-full flex justify-between items-start">
        <h1 className="text-5xl w-20 font-bold">Randi&apos;s Notes</h1>
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-stone-800"><PiSquaresFourFill /></div>
    </div>
}