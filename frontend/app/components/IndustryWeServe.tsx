"use client";
type CardProps = {
  item: {
    title: string;
    img: string;
  };
};
export default function IndustriesGrid() {

  const images = [
    { title: "agriculture", img: "/images/industry/Agriculture.jpg" },
    { title: "construction", img: "/images/industry/Construction.PNG" },
    { title: "Facility Management", img: "/images/industry/Facility Management.jpeg" },
    { title: "Healthcare", img: "/images/industry/Healthcare.jpeg" },

    { title: "Hospitality", img: "/images/industry/Hospitality.jpg" },
    { title: "manufacturing", img: "/images/industry/Manufacturing.jpg" },
    { title: "oil & gas", img: "/images/industry/Oil & Gas.jpg" },
    { title: "retail", img: "/images/industry/Retail.PNG" },

    { title: "security", img: "/images/industry/security.jfif" },
    { title: "technical", img: "/images/industry/Technical.jpg" },
    { title: "warehouse", img: "/images/industry/Warehouse.avif" },
  ];

  return (
    <section className="py-12 bg-gray-100">

      {/* HERO SECTION */}
      <div className="max-w-5xl mx-auto text-center py-8">
        <h2 className="text-5xl font-extrabold text-[#2a7d56]">
          Services
        </h2>

        <div className="w-24 h-1 bg-[#eb232a] mx-auto mt-2 mb-4 rounded-full" />

        <h3 className="text-lg md:text-2xl font-semibold text-[#eb232a] italic mb-5">
          “To become a trusted global partner in ethical and responsible recruitment.”
        </h3>

        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Electra Global Recruitment Pvt. Ltd. is committed to connecting capable Nepali human resources
          with responsible international employers through fair, transparent, and compliance-focused recruitment.
        </p>
      </div>

      {/* INDUSTRY TITLE */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-[#0E703E]">
        Industries We Serve
      </h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto space-y-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.slice(0, 4).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.slice(4, 8).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-24">
          {images.slice(8, 11).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

      </div>

      {/* RECRUITMENT SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-14 text-center">

        <h3 className="text-4xl md:text-5xl font-extrabold text-[#2a7d56] mb-4">
          Recruitment Process Flow
        </h3>

        <div className="w-24 h-1 bg-[#eb232a] mx-auto mb-8 rounded-full" />

        <img
          src="/images/industry/recruitment.png"
          alt="Recruitment Process"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      {/* FIND ELECTRA SECTION */}
      <div
  className="relative w-full  bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/industry/location.jpg')",
  }}
>
  {/* DARK OVERLAY FOR OPACITY */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto px-4 py-20 flex justify-end">

    <div className="w-full md:w-1/2 text-center md:text-left">

      <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
        Find Electra
      </h3>

      <div className="w-20 h-1 bg-[#eb232a] mx-auto md:mx-0 mb-6 rounded-full" />

      <p className="text-gray-200 text-base md:text-lg leading-relaxed">
        Find Electra in your recruitment market.
        Electra Global Recruitment Pvt. Ltd. serves employers and job seekers across key international labour markets,
        connecting capable Nepali talent with responsible global employment opportunities.
      </p>

      <button
        onClick={() => (window.location.href = "/services")}
        className="mt-6 px-6 py-3 bg-[#2a7d56] text-white rounded-lg hover:bg-[#1f5a3f] transition"
      >
        Explore Countries We Serve
      </button>

    </div>

  </div>
</div>
    </section>
  );
}

function Card({ item }: CardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">

      <img
        src={item.img}
        alt={item.title}
        className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

      <div className="absolute bottom-0 p-3 text-white">
        <h3 className="font-semibold text-sm md:text-base">
          {item.title}
        </h3>
      </div>

    </div>
  );
}