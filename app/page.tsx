import Masonry from "react-responsive-masonry"

export default function Home() {
  return (
    <main className="p-5">
      {/* Title */}
      <div className="w-full flex justify-between items-start">
        <h1 className="text-5xl w-20 font-bold">My Notes</h1>
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-stone-500">X</div>
      </div>

      {/* Category Chip */}
      <div className="my-5 flex gap-2">
        <div className="text-sm rounded-full border py-2 px-5">All</div>
        <div className="text-sm rounded-full border py-2 px-5">Work Career</div>
      </div>

      {/* Notes Itself */}
                <Masonry columnsCount={2}>
                    <div className="bg-red-500 rounded-full p-5">Testing</div>
                    <div className="bg-red-500 rounded-full p-5">Testing</div>
                    <div className="bg-red-500 rounded-full p-5">Testing</div>
                </Masonry>
    </main>
  );
}
