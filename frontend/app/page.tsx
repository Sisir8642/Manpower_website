import BestProduct from "./components/BestReview";
import ManpowerClient from "./components/ManpowerClient";
import OurClient from "./components/OurClient";
import IndustryWeServe from "./components/IndustryWeServe"
export default function Home() {
  return (
    <main>
      <section>
        <ManpowerClient />
      </section>

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
