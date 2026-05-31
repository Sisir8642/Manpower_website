import BestProduct from "./components/BestReview";
import ManpowerClient from "./components/ManpowerClient";
import OurClient from "./components/OurClient";

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
        <OurClient />
      </section>
    </main>
  );
}
