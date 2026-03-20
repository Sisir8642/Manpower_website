import BestProduct from "./components/BestReview";
import ManpowerClient from "./components/ManpowerClient";
import OurClient from "./components/OurClient";
import SplitScrollSections from "./components/SplitScrollSections";
import TestimonialSection from "./components/Testimonial";

export default function Home() {
  return (
    <main>
      <section>
      <ManpowerClient />
      </section>
      {/* Your hero section */}
      <section>
      <SplitScrollSections />
      </section>
      {/* Rest of page scrolls normally */}
<section>
  <BestProduct />
</section>
<section>
  <TestimonialSection />
</section>

<section>
  <OurClient />
</section>
    </main>
  );
}
