"use client";

import Link from "next/link";
import { Mail, Upload } from "lucide-react";
import { TopNavC } from "../../../_components/top-nav";
import { PulsingDot } from "@/components/pulsing-dot";

const prefilledEmails = [
  "emma.davies@brightfieldcare.co.uk",
  "james.thornton@brightfieldcare.co.uk",
  "priya.nair@brightfieldcare.co.uk",
  "marcus.webb@brightfieldcare.co.uk",
  "claire.oduya@brightfieldcare.co.uk",
  "daniel.ferreira@brightfieldcare.co.uk",
  "aisha.kamara@brightfieldcare.co.uk",
  "tom.gallagher@brightfieldcare.co.uk",
  "bex.hartley@brightfieldcare.co.uk",
  "hannah.price@brightfieldcare.co.uk",
  "ryan.oconnor@brightfieldcare.co.uk",
  "sophie.lin@brightfieldcare.co.uk",
];

export default function StudioCSendPage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "var(--cream)" }}>
      <TopNavC />
      <main className="flex-1 px-10 py-10">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4">
              <h1
                className="text-[38px] font-bold leading-tight tracking-tight"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  color: "var(--ink)",
                }}
              >
                Send Safeguarding Adults at Risk
              </h1>
              <span
                className="inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  backgroundColor: "var(--ink)",
                  color: "var(--cream)",
                }}
              >
                Published
              </span>
            </div>
          </div>

          {/* Two-column layout: 65% / 35% */}
          <div className="flex gap-8">
            {/* Left column: email input + settings */}
            <div className="w-[65%] space-y-8">
              {/* Email input area */}
              <div>
                <h3
                  className="mb-4 text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--mid-gray)",
                  }}
                >
                  Email addresses
                </h3>
                <div
                  className="min-h-[180px] border rounded-xl p-5"
                  style={{
                    borderColor: "color-mix(in srgb, var(--ink) 15%, transparent)",
                    backgroundColor: "white",
                  }}
                >
                  <div className="flex flex-wrap gap-2">
                    {prefilledEmails.map((email) => (
                      <span
                        key={email}
                        className="inline-flex items-center gap-1.5 border rounded-lg px-2.5 py-1.5 text-[12px]"
                        style={{
                          fontFamily: "var(--font-jetbrains)",
                          borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)",
                          backgroundColor: "color-mix(in srgb, var(--accent) 6%, transparent)",
                          color: "var(--ink)",
                        }}
                      >
                        <Mail
                          className="h-3 w-3"
                          style={{ color: "var(--accent)", opacity: 0.6 }}
                        />
                        {email}
                        <button
                          className="ml-1 transition-opacity hover:opacity-100"
                          style={{ color: "var(--accent)", opacity: 0.4 }}
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="mt-2 flex items-center gap-1.5 text-[12px]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--warm-gray)",
                  }}
                >
                  <Upload className="h-3 w-3" />
                  <span>or upload a CSV</span>
                </div>
              </div>

              {/* Settings */}
              <div>
                <h3
                  className="mb-5 text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--mid-gray)",
                  }}
                >
                  Settings
                </h3>
                <div className="space-y-0">
                  {/* Deadline */}
                  <div
                    className="flex items-center justify-between py-6 border-b"
                    style={{
                      borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)",
                    }}
                  >
                    <div>
                      <p
                        className="text-[15px] font-semibold"
                        style={{ color: "var(--ink)" }}
                      >
                        Deadline
                      </p>
                      <p
                        className="mt-0.5 text-[12px]"
                        style={{
                          fontFamily: "var(--font-jetbrains)",
                          color: "var(--warm-gray)",
                        }}
                      >
                        Set a completion deadline for learners
                      </p>
                    </div>
                    <div
                      className="border rounded-lg px-3 py-2 text-[12px]"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)",
                        color: "var(--warm-gray)",
                      }}
                    >
                      No deadline set
                    </div>
                  </div>
                  {/* Reminders */}
                  <div className="flex items-center justify-between py-6">
                    <div>
                      <p
                        className="text-[15px] font-semibold"
                        style={{ color: "var(--ink)" }}
                      >
                        Reminder emails
                      </p>
                      <p
                        className="mt-0.5 text-[12px]"
                        style={{
                          fontFamily: "var(--font-jetbrains)",
                          color: "var(--warm-gray)",
                        }}
                      >
                        Automatically remind learners who haven&apos;t completed
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Toggle — on state */}
                      <div
                        className="h-5 w-9 rounded-full p-0.5 cursor-pointer transition-all duration-200"
                        style={{ backgroundColor: "var(--accent)" }}
                      >
                        <div
                          className="h-4 w-4 rounded-full translate-x-4 shadow-sm"
                          style={{ backgroundColor: "white" }}
                        />
                      </div>
                      <span
                        className="text-[12px]"
                        style={{
                          fontFamily: "var(--font-jetbrains)",
                          color: "var(--mid-gray)",
                        }}
                      >
                        After 3 days, 7 days
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Send button */}
              <div className="pt-2">
                <div className="relative inline-block w-full">
                  <Link
                    href="/c/email-preview"
                    className="block w-full rounded-lg py-5 text-center text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      backgroundColor: "var(--accent)",
                      color: "var(--cream)",
                    }}
                  >
                    Send training to {prefilledEmails.length} learners
                  </Link>
                  <PulsingDot className="-top-1 -right-1" />
                </div>
                <p
                  className="mt-3 text-center text-[12px]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--warm-gray)",
                  }}
                >
                  Each learner receives a unique link. Progress is saved automatically.
                </p>
              </div>
            </div>

            {/* Right column: email preview */}
            <div className="w-[35%]">
              <h3
                className="mb-4 text-[12px] font-medium uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  color: "var(--mid-gray)",
                }}
              >
                Learner email preview
              </h3>
              <div
                className="border rounded-xl overflow-hidden"
                style={{
                  borderColor: "color-mix(in srgb, var(--ink) 15%, transparent)",
                  backgroundColor: "white",
                }}
              >
                {/* Email header */}
                <div
                  className="border-b px-6 py-4"
                  style={{
                    borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <p
                    className="text-[12px] font-bold uppercase tracking-[0.08em]"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      color: "var(--warm-gray)",
                    }}
                  >
                    Subject
                  </p>
                  <p
                    className="mt-1 text-[14px] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    Brightfield Care: Your safeguarding training is ready
                  </p>
                </div>
                {/* Email body */}
                <div
                  className="space-y-3.5 px-6 py-6 text-[14px] leading-relaxed"
                  style={{ color: "var(--mid-gray)" }}
                >
                  <p>Hi Emma,</p>
                  <p>
                    Brightfield Care has assigned you a new training course:{" "}
                    <strong style={{ color: "var(--ink)" }}>
                      Safeguarding Adults at Risk
                    </strong>
                    .
                  </p>
                  <p>
                    This course covers your responsibilities under Brightfield
                    Care&apos;s Safeguarding Policy 2025, including how to
                    recognise and report concerns.
                  </p>
                  <div
                    className="rounded-lg px-4 py-3 text-center text-[13px] font-bold uppercase tracking-[0.08em]"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      backgroundColor: "var(--accent)",
                      color: "white",
                    }}
                  >
                    Start your training &rarr;
                  </div>
                  <p
                    className="text-center text-[12px]"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      color: "var(--warm-gray)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    Estimated time: 34 minutes
                  </p>
                </div>
              </div>
              <div
                className="mt-4 border rounded-xl px-5 py-4 text-center text-[12px] font-medium"
                style={{
                  borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--accent) 6%, transparent)",
                  color: "var(--ink)",
                }}
              >
                Learners click one link. No account creation. No password.
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
