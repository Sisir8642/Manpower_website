import BestProduct from "./components/BestReview";
import ManpowerClient from "./components/ManpowerClient";
import OurClient from "./components/OurClient";
import IndustryWeServe from "./components/IndustryWeServe"
import AboutSection from "./components/AboutComponent";
export default function Home() {
  return (
    <main>
      <section>
        <ManpowerClient />
      </section>
<AboutSection imageSrc="/about1.png" />
      <section>
        <BestProduct />
      </section>
      <section>

        <IndustryWeServe/>
        <OurClient />
      </section>
    </main>
  );
}
