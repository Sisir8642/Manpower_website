import BestProduct from "./components/BestReview";
import ManpowerClient from "./components/ManpowerClient";
import OurClient from "./components/OurClient";
import SplitScrollSections from "./components/SplitScrollSections";
import TestimonialSection from "./components/Testimonial";
import HowWeWorkPage from "./howWeWork/page";

export default function Home() {
  return (
    <main>
      <section>
        <ManpowerClient />
      </section>

      <section>
        <BestProduct />
      </section>
      {/* <section>
        <HowWeWorkPage/>
      </section> */}

      <section>
        <OurClient />
      </section>
    </main>
  );
}
