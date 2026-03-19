import ManpowerClient from "./components/ManpowerClient";
import SplitScrollSections from "./components/SplitScrollSections";

export default function Home() {
  return (
    <main>
      <ManpowerClient />
      {/* Your hero section */}
      <SplitScrollSections />
      {/* Rest of page scrolls normally */}
      <div className="h-screen bg-white p-20">
        <h1>Normal content continues...</h1>
      </div>
    </main>
  );
}
