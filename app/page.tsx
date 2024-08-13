import CategoriesSelector from "./_views/CategoriesSelector";
import Notes from "./_views/Notes";
import Title from "./_views/Title";

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto p-5">
      {/* Title */}
      <Title />

      {/* Category Chip */}
      <CategoriesSelector />

      {/* Notes Itself */}
      <Notes />
    </main>
  );
}
