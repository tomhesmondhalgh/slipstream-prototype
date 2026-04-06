import Link from "next/link";
import { FileText } from "lucide-react";
import { SidebarC } from "../../_components/sidebar";
import { PulsingDot } from "@/components/pulsing-dot";

export default function CreateCoursePage() {
  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--cream)" }}>
      <SidebarC />
      <main className="flex-1 overflow-y-auto px-10 py-10">
          <div className="mx-auto max-w-[640px] py-8">
            {/* Heading */}
            <h1
              className="text-[32px] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-fraunces)", color: "var(--ink)" }}
            >
              Create a new course
            </h1>
            <p
              className="mt-3 text-[16px] leading-relaxed"
              style={{ color: "var(--mid-gray)" }}
            >
              Upload a policy document and we&apos;ll generate a complete training course.
            </p>

            {/* Form */}
            <div className="mt-10 flex flex-col gap-8">
              {/* Course title */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
                >
                  Course title
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue="Safeguarding Adults at Risk — The Brightfield Way"
                  className="rounded-lg border py-3 px-4 text-[16px] outline-none"
                  style={{
                    borderColor: "var(--surface)",
                    backgroundColor: "white",
                    color: "var(--ink)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
                >
                  Description
                </label>
                <textarea
                  readOnly
                  rows={3}
                  defaultValue="This course covers safeguarding responsibilities for all Brightfield Care staff, based on Brightfield Care's Safeguarding Policy 2025. It includes recognising abuse, reporting procedures, and your duties as a care professional."
                  className="rounded-lg border py-3 px-4 text-[16px] leading-relaxed outline-none resize-none"
                  style={{
                    borderColor: "var(--surface)",
                    backgroundColor: "white",
                    color: "var(--ink)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                />
              </div>

              {/* Policy document upload zone */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
                >
                  Source document
                </label>
                <div
                  className="flex flex-col items-center gap-2 rounded-lg border-2 border-dashed py-8"
                  style={{
                    borderColor: "var(--surface)",
                    backgroundColor: "white",
                  }}
                >
                  <FileText
                    className="h-8 w-8"
                    style={{ color: "var(--accent)" }}
                  />
                  <span
                    className="text-[15px] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    Brightfield Care Safeguarding Policy 2025.pdf
                  </span>
                  <span
                    className="text-[13px]"
                    style={{ color: "var(--mid-gray)" }}
                  >
                    2.4 MB &middot; Uploaded
                  </span>
                </div>
              </div>

              {/* Generate button */}
              <div className="relative">
                <Link
                  href="/c/courses/3/programme"
                  className="relative flex w-full items-center justify-center rounded-lg py-4 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    backgroundColor: "var(--accent)",
                    color: "var(--cream)",
                  }}
                >
                  Generate Course &rarr;
                  <PulsingDot className="-top-1 -right-1" />
                </Link>
              </div>

              {/* Helper text */}
              <p
                className="text-center text-[13px] leading-relaxed"
                style={{ color: "var(--warm-gray)" }}
              >
                Slipstream will analyse your policy and create structured training content with assessments.
              </p>
            </div>
          </div>
      </main>
    </div>
  );
}
