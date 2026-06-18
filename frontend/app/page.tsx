import BestProduct from "./components/BestReview";
import ManpowerClient from "./components/ManpowerClient";
import OurClient from "./components/OurClient";
import IndustryWeServe from "./components/IndustryWeServe"
import AboutSection from "./components/AboutComponent";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getSliderData() {
  try {
    const res = await fetch(`${baseUrl}/api/sliders/`, {
      next: { revalidate: 300 }, 
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function Home() {
  const sliderData = await getSliderData(); 

  return (
    <main className="bg-[#E1F1E6]">
      <section>
        <ManpowerClient initialData={sliderData} />
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
