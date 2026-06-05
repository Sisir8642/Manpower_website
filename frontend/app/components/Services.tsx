
import Link from "next/link";

export default function CardsSection() {
  return (
    <section>
      <div className="flex flex-wrap justify-center gap-10 bg-[#E1F1E6] mb-5">

        {/* Card 1 */}
        <div className="w-[450px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">

          <img
            src="/images/servicess/migrate.jpg"
            alt="Card 1"
            className="w-full h-56 object-cover"
          />

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-3">
              Services For Migrating Workers
            </h3>

            <p className="text-gray-600 mb-5 flex-1">
              Electra Global Recruitment Pvt. Ltd. supports Nepali workers through a safe,
              transparent, and ethical migration journey. We provide worker-centered assistance
              before departure, during employment, and after overseas work. Our services ensure
              continuous guidance and support at every stage of the employment process.
            </p>

            <Link
              href="/services/migratingWorkers"
              className="mt-auto inline-block bg-[#1A55DB] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition w-fit"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[450px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">

          <img
            src="/images/servicess/global.jpg"
            alt="Card 2"
            className="w-full h-56 object-cover"
          />

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-3">
              Services For Global Employers
            </h3>

            <p className="text-gray-600 mb-5 flex-1">
              Electra Global Recruitment Pvt. Ltd. provides ethical, compliant, and end-to-end
              recruitment support for international employers seeking reliable talent from Nepal.
              It operates through a robust and hassle-free recruitment system designed to ensure
              transparency and simplify the hiring process.
            </p>

            <Link
              href="/services/globalEmployer"
              className="mt-auto inline-block bg-[#1A55DB] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition w-fit"
            >
              Read More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}