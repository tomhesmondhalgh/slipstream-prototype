import Link from "next/link";

const studios = [
  {
    id: "a",
    name: "Studio A",
    director: "Jony Ive",
    philosophy: "Precision Minimalism",
    description:
      "Apple-inspired. Every element earns its place. Subtle material depth, restrained color, obsessive attention to spacing. The product disappears behind the content.",
    accent: "#007AFF",
    bg: "#FAFAFA",
    text: "#1D1D1F",
  },
  {
    id: "b",
    name: "Studio B",
    director: "Tobias van Schneider",
    philosophy: "Dark Mode SaaS",
    description:
      "Linear/Vercel energy. Rich dark backgrounds with luminous violet accents. Bold typography, sharp contrasts. The interface IS the brand.",
    accent: "#8B5CF6",
    bg: "#09090B",
    text: "#F5F5F5",
  },
  {
    id: "c",
    name: "Studio C",
    director: "Paula Scher",
    philosophy: "Typographic Maximalism",
    description:
      "Pentagram editorial. Big, bold serif headlines. Vermillion accents. Data as graphic design. Compliance training that doesn't look like compliance training.",
    accent: "#E63946",
    bg: "#FAF8F5",
    text: "#1A1A1A",
  },
];

export default function SwitcherPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] px-8 py-16">
      <div className="mx-auto max-w-[960px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-[42px] font-light tracking-tight text-[#1D1D1F]">
            Slipstream
          </h1>
          <p className="mt-3 text-[15px] text-[#86868B]">
            Three creative directions for the prototype. Each reimagines the
            same dashboard and learner experience.
          </p>
        </div>

        {/* Studio cards */}
        <div className="grid grid-cols-3 gap-6">
          {studios.map((studio) => (
            <div
              key={studio.id}
              className="group overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.06)]"
            >
              {/* Preview bar */}
              <div
                className="flex h-32 items-end p-5"
                style={{ backgroundColor: studio.bg }}
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-[48px] font-light leading-none"
                    style={{ color: studio.accent }}
                  >
                    {studio.id.toUpperCase()}
                  </span>
                  <span
                    className="text-[13px] font-medium"
                    style={{ color: studio.text, opacity: 0.5 }}
                  >
                    {studio.director}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-[15px] font-semibold text-[#1D1D1F]">
                  {studio.philosophy}
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-[#86868B]">
                  {studio.description}
                </p>

                {/* Links */}
                <div className="mt-6 flex gap-3">
                  <Link
                    href={`/${studio.id}/dashboard`}
                    className="flex-1 rounded-lg py-2.5 text-center text-[13px] font-medium text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: studio.accent }}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href={`/${studio.id}/learn`}
                    className="flex-1 rounded-lg border border-black/[0.08] py-2.5 text-center text-[13px] font-medium text-[#1D1D1F] transition-colors hover:bg-[#F5F5F7]"
                  >
                    Learner View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
