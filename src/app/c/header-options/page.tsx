import Image from "next/image";

export default function HeaderOptionsPage() {
  const courseTitle = "Lone Worker Safety";

  return (
    <div style={{ backgroundColor: "var(--cream)", fontFamily: "var(--font-dm-sans)" }} className="min-h-screen">
      <div className="mx-auto max-w-[900px] px-8 py-16">
        <h1 className="text-[32px] font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-fraunces)", color: "var(--ink)" }}>
          Learner Header Options
        </h1>
        <p className="text-[15px] mb-16" style={{ color: "var(--mid-gray)" }}>
          Three approaches to the branded learner header. Each shows how the customer's brand appears at the top of every learning page.
        </p>

        {/* Option A */}
        <div className="mb-16">
          <h2 className="text-[14px] font-bold uppercase tracking-[0.08em] mb-4" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}>
            Option A — Slim branded strip
          </h2>
          <p className="text-[14px] mb-6" style={{ color: "var(--warm-gray)" }}>
            Compact toolbar feel. Logo left, course title right. Minimal vertical space.
          </p>
          <div className="overflow-hidden rounded-xl border" style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}>
            {/* Option A header */}
            <div className="flex items-center justify-between px-8 py-3" style={{ backgroundColor: "var(--accent)" }}>
              <Image src="/brightfield-logo.png" alt="Brightfield Homecare" width={180} height={45} className="rounded-md bg-white/90 px-2 py-1" />
              <span className="text-[15px] italic text-white/90" style={{ fontFamily: "var(--font-fraunces)" }}>
                {courseTitle}
              </span>
            </div>
            {/* Fake content below */}
            <div className="h-24 px-8 pt-6" style={{ backgroundColor: "var(--cream)" }}>
              <div className="h-3 w-48 rounded-full" style={{ backgroundColor: "var(--surface)" }} />
              <div className="mt-3 h-3 w-96 rounded-full" style={{ backgroundColor: "var(--surface)" }} />
            </div>
          </div>
        </div>

        {/* Option B */}
        <div className="mb-16">
          <h2 className="text-[14px] font-bold uppercase tracking-[0.08em] mb-4" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}>
            Option B — Centred portal
          </h2>
          <p className="text-[14px] mb-6" style={{ color: "var(--warm-gray)" }}>
            More presence. Logo centred with course title below. Feels like a learning portal entrance.
          </p>
          <div className="overflow-hidden rounded-xl border" style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}>
            {/* Option B header */}
            <div className="flex flex-col items-center justify-center py-5" style={{ backgroundColor: "var(--accent)" }}>
              <Image src="/brightfield-logo.png" alt="Brightfield Homecare" width={220} height={55} className="rounded-lg bg-white/90 px-3 py-1.5" />
              <span className="mt-2 text-[14px] italic text-white/80" style={{ fontFamily: "var(--font-fraunces)" }}>
                {courseTitle}
              </span>
            </div>
            {/* Fake content below */}
            <div className="h-24 px-8 pt-6" style={{ backgroundColor: "var(--cream)" }}>
              <div className="h-3 w-48 rounded-full" style={{ backgroundColor: "var(--surface)" }} />
              <div className="mt-3 h-3 w-96 rounded-full" style={{ backgroundColor: "var(--surface)" }} />
            </div>
          </div>
        </div>

        {/* Option C */}
        <div className="mb-16">
          <h2 className="text-[14px] font-bold uppercase tracking-[0.08em] mb-4" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}>
            Option C — Split bar
          </h2>
          <p className="text-[14px] mb-6" style={{ color: "var(--warm-gray)" }}>
            Two-tone header. Logo on accent side, course info + progress on cream side. Information-dense.
          </p>
          <div className="overflow-hidden rounded-xl border" style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}>
            {/* Option C header */}
            <div className="flex">
              <div className="flex w-[45%] items-center justify-center py-4" style={{ backgroundColor: "var(--accent)" }}>
                <Image src="/brightfield-logo.png" alt="Brightfield Homecare" width={180} height={45} className="rounded-md bg-white/90 px-2 py-1" />
              </div>
              <div className="flex w-[55%] items-center justify-between px-6 py-4" style={{ backgroundColor: "var(--cream)" }}>
                <div>
                  <span className="text-[16px] font-semibold" style={{ color: "var(--ink)" }}>
                    {courseTitle}
                  </span>
                  <span className="mt-0.5 block text-[12px]" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}>
                    Section 3 of 5
                  </span>
                </div>
                <span className="text-[13px]" style={{ color: "var(--warm-gray)" }}>
                  Emma Davies
                </span>
              </div>
            </div>
            {/* Fake content below */}
            <div className="h-24 px-8 pt-6" style={{ backgroundColor: "var(--cream)" }}>
              <div className="h-3 w-48 rounded-full" style={{ backgroundColor: "var(--surface)" }} />
              <div className="mt-3 h-3 w-96 rounded-full" style={{ backgroundColor: "var(--surface)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
