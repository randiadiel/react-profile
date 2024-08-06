import { PiSquaresFourFill } from "react-icons/pi";
import Notes from "./_views/Notes";

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto p-5">
      {/* Title */}
      <div className="w-full flex justify-between items-start">
        <h1 className="text-5xl w-20 font-bold">Randi&apos;s Notes</h1>
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-stone-800"><PiSquaresFourFill /></div>
      </div>

      {/* Category Chip */}
      <div className="my-5 flex gap-2">
        <div className="text-sm rounded-full border py-2 px-5">All</div>
        <div className="text-sm rounded-full border py-2 px-5">Work Career</div>
      </div>

      {/* Notes Itself */}
      <Notes />
    </main>
  );
}
