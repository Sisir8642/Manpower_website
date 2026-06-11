
import Link from "next/link";

export default function CardsSection() {
  return (
    <section>
      <div className="relative overflow-hidden py-16 px-6"
    style={{ background: "linear-gradient(160deg, #f0faf4 0%, #e6f4ec 100%)" }}>
 
    {/* Dot grid */}
    <div className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
        backgroundSize: "30px 30px", opacity: 0.12,
      }} />
 
    {/* Green blob top-left */}
    <div className="absolute pointer-events-none rounded-full"
      style={{
        top: -80, left: -80, width: 320, height: 320,
        background: "radial-gradient(circle, rgba(26,92,56,0.12) 0%, transparent 70%)",
      }} />
 
    {/* Red blob bottom-right */}
    <div className="absolute pointer-events-none rounded-full"
      style={{
        bottom: -80, right: -80, width: 280, height: 280,
        background: "radial-gradient(circle, rgba(192,57,43,0.1) 0%, transparent 70%)",
      }} />
 
    {/* Section label */}
    <div className="text-center mb-10 relative z-10">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="h-0.5 w-9 rounded-full" style={{ background: "#c0392b" }} />
        <span className="text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
          style={{ background: "#1a5c38" }}>How We Help</span>
        <div className="h-0.5 w-9 rounded-full" style={{ background: "#c0392b" }} />
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#1a5c38", fontFamily: "'Georgia', serif" }}>
        Tailored Solutions for <span style={{ color: "#c0392b" }}>Every Need</span>
      </h3>
    </div>
 
    {/* Cards row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center max-w-5xl mx-auto">
 
      {/* Card 1 */}
      <div className="w-[450px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
        style={{ border: "1px solid rgba(26,92,56,0.1)", transition: "transform 0.3s, box-shadow 0.3s" }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(26,92,56,0.18)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = ""; }}>
 
        <div className="relative h-56 overflow-hidden">
          <img src="/images/migration.png" alt="Card 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(15,45,31,0.7) 0%, transparent 55%)" }} />
          <span className="absolute bottom-4 left-5 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: "#1a5c38" }}>For Workers</span>
        </div>
 
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-1">Services For Migrating Workers</h3>
          <div className="w-12 h-0.5 mt-2 mb-4 rounded-full" style={{ background: "#1a5c38" }} />
          <p className="text-gray-600 mb-5 flex-1">
            Electra Global Recruitment Pvt. Ltd. supports Nepali workers through a safe,
            transparent, and ethical migration journey. We provide worker-centered assistance
            before departure, during employment, and after overseas work. Our services ensure
            continuous guidance and support at every stage of the employment process.
          </p>
          <Link href="/services/migratingWorkers"
            className="mt-auto inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-lg font-bold text-sm w-fit transition hover:opacity-90"
            style={{ background: "#1a5c38" }}>
            Read More
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </Link>
        </div>
      </div>
 
      {/* Card 2 */}
      <div className="w-[450px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
        style={{ border: "1px solid rgba(192,57,43,0.1)", transition: "transform 0.3s, box-shadow 0.3s" }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(192,57,43,0.18)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = ""; }}>
 
        <div className="relative h-56 overflow-hidden">
          <img src="/images/123.png" alt="Card 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(100,20,10,0.65) 0%, transparent 55%)" }} />
          <span className="absolute bottom-4 left-5 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: "#c0392b" }}>For Employers</span>
        </div>
 
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-1">Services For Global Employers</h3>
          <div className="w-12 h-0.5 mt-2 mb-4 rounded-full" style={{ background: "#c0392b" }} />
          <p className="text-gray-600 mb-5 flex-1">
            Electra Global Recruitment Pvt. Ltd. provides ethical, compliant, and end-to-end
            recruitment support for international employers seeking reliable talent from Nepal.
            It operates through a robust and hassle-free recruitment system designed to ensure
            transparency and simplify the hiring process.
          </p>
          <Link href="/services/globalEmployer"
            className="mt-auto inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-lg font-bold text-sm w-fit transition hover:opacity-90"
            style={{ background: "#c0392b" }}>
            Read More
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </Link>
        </div>
      </div>
 
    </div>
  </div>
    </section>
  );
}