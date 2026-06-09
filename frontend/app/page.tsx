import BestProduct from "./components/BestReview";
import ManpowerClient from "./components/ManpowerClient";
import OurClient from "./components/OurClient";
import IndustryWeServe from "./components/IndustryWeServe"
import AboutSection from "./components/AboutComponent";
export default function Home() {
  return (
    <main className="bg-[#E1F1E6]">
      <section>
        <ManpowerClient />
      </section>
<AboutSection />
        <BestProduct />
      <section>

        <IndustryWeServe/>
        <OurClient />
      </section>
    </main>
  );
}
