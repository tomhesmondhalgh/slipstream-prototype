"use client";

import Link from "next/link";
import { useState } from "react";

function PlayIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="35" stroke="var(--cream)" strokeWidth="2" opacity="0.6" />
      <path d="M29 22L52 36L29 50V22Z" fill="var(--cream)" opacity="0.9" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ display: "inline-block", marginLeft: 8 }}>
      <path d="M8 3V13M8 13L3 8M8 13L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LandingPage() {
  const [formData, setFormData] = useState({ name: "", email: "", organisation: "", message: "" });

  const scrollToForm = () => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "var(--cream)", color: "var(--ink)" }}>
      {/* ── Navigation ── */}
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
        <span
          className="text-[22px] font-bold tracking-tight"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Slipstream
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="hidden sm:inline-block text-[12px] font-medium uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
          >
            See it in action
          </Link>
          <button
            onClick={scrollToForm}
            className="rounded-lg px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{
              fontFamily: "var(--font-jetbrains)",
              backgroundColor: "var(--ink)",
              color: "var(--cream)",
            }}
          >
            Get early access
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-[900px]">
          <h1
            className="text-[42px] md:text-[64px] lg:text-[80px] font-bold leading-[1.02] tracking-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Your policies become
            <br />
            your training.
          </h1>
          <p
            className="mt-6 md:mt-8 text-[17px] md:text-[19px] leading-relaxed max-w-[600px]"
            style={{ color: "var(--mid-gray)" }}
          >
            Slipstream turns your organisation's own policy documents into complete,
            custom training courses — delivered without an LMS, learner accounts,
            or IT involvement.
          </p>
          <button
            onClick={scrollToForm}
            className="mt-8 md:mt-10 rounded-lg px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98] inline-flex items-center"
            style={{
              fontFamily: "var(--font-jetbrains)",
              backgroundColor: "var(--accent)",
              color: "var(--cream)",
            }}
          >
            Get early access
            <ArrowDown />
          </button>
        </div>

        {/* Video placeholder */}
        <div
          className="mt-14 md:mt-20 relative w-full overflow-hidden rounded-xl cursor-pointer group"
          style={{ aspectRatio: "16/9", backgroundColor: "var(--ink)" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 transition-opacity duration-300 group-hover:opacity-80">
            <PlayIcon />
            <span
              className="text-[12px] font-medium uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cream)", opacity: 0.5 }}
            >
              Product walkthrough — coming soon
            </span>
          </div>
          {/* Subtle noise texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </section>

      {/* ── Problem section ── */}
      <section
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
        style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}
      >
        <p
          className="text-[12px] font-medium uppercase tracking-[0.1em] mb-12 md:mb-16"
          style={{ fontFamily: "var(--font-jetbrains)", opacity: 0.4 }}
        >
          The problem
        </p>
        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {[
            {
              stat: "10%",
              body: "of workers say compliance training actually changes their behaviour. The rest forget it by Friday — because it was written for a generic company, not theirs.",
            },
            {
              stat: "£10–30k",
              body: "is what an LMS costs to implement. Without one, you're emailing PDFs and tracking completions on a spreadsheet.",
            },
            {
              stat: "0",
              body: "organisations get notified when their policies change and their training goes stale. Courses drift out of date, silently.",
            },
          ].map((item) => (
            <div key={item.stat}>
              <span
                className="block text-[48px] md:text-[56px] font-light leading-none"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  color: "var(--accent)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {item.stat}
              </span>
              <p
                className="mt-5 text-[15px] leading-relaxed"
                style={{ opacity: 0.65 }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <p
          className="text-[12px] font-medium uppercase tracking-[0.1em] mb-12 md:mb-16"
          style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
        >
          How it works
        </p>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {[
            {
              step: "01",
              title: "Build",
              description:
                "Upload your policy document. Slipstream reads it and generates a complete course — learning objectives, section content, and a quiz — specific to your organisation.",
            },
            {
              step: "02",
              title: "Send",
              description:
                "Add your team's email addresses. Each person gets a unique magic link. They click it and start learning immediately. No accounts, no passwords, no app to install.",
            },
            {
              step: "03",
              title: "Track",
              description:
                "Watch completions in real time. Every learner who passes receives a verifiable certificate. When an inspector asks for proof, you have it.",
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <span
                className="block text-[12px] font-medium uppercase tracking-[0.1em] mb-4"
                style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
              >
                {item.step}
              </span>
              <h3
                className="text-[32px] md:text-[38px] font-bold tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {item.title}
              </h3>
              <p
                className="mt-4 text-[15px] leading-relaxed"
                style={{ color: "var(--mid-gray)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats ribbon ── */}
      <section className="border-y" style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}>
        <div className="px-6 md:px-12 lg:px-20 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--ink)]/10">
            {[
              { value: "80%+", label: "completion rate", sublabel: "vs 15–20% industry average" },
              { value: "<10 min", label: "from policy to training", sublabel: "upload, review, send" },
              { value: "Zero", label: "accounts needed", sublabel: "no passwords, no LMS, no IT" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <span
                  className="block text-[46px] md:text-[54px] font-light leading-none"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="mt-2 block text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
                >
                  {stat.label}
                </span>
                <span
                  className="mt-1 block text-[13px]"
                  style={{ color: "var(--warm-gray)" }}
                >
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expression of Interest ── */}
      <section id="early-access" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-[560px] mx-auto">
          <h2
            className="text-[36px] md:text-[46px] font-bold tracking-tight leading-[1.05] text-center"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Get early access
          </h2>
          <p
            className="mt-4 text-[16px] leading-relaxed text-center"
            style={{ color: "var(--mid-gray)" }}
          >
            We're opening Slipstream to a small group of organisations first.
            Leave your details and we'll be in touch.
          </p>

          <form
            className="mt-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {[
              { id: "name", label: "Name", type: "text", required: true },
              { id: "email", label: "Email", type: "email", required: true },
              { id: "organisation", label: "Organisation", type: "text", required: true },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-[12px] font-medium uppercase tracking-[0.08em] mb-2"
                  style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  required={field.required}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                  className="w-full rounded-lg border px-4 py-3 text-[15px] outline-none transition-all duration-200 focus:ring-2"
                  style={{
                    borderColor: "var(--surface)",
                    backgroundColor: "white",
                    color: "var(--ink)",
                    focusRingColor: "var(--accent)",
                  } as React.CSSProperties}
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-[12px] font-medium uppercase tracking-[0.08em] mb-2"
                style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
              >
                Message{" "}
                <span style={{ opacity: 0.5, textTransform: "none", letterSpacing: 0 }}>(optional)</span>
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border px-4 py-3 text-[15px] outline-none transition-all duration-200 resize-none focus:ring-2"
                style={{
                  borderColor: "var(--surface)",
                  backgroundColor: "white",
                  color: "var(--ink)",
                } as React.CSSProperties}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{
                fontFamily: "var(--font-jetbrains)",
                backgroundColor: "var(--accent)",
                color: "var(--cream)",
              }}
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="px-6 md:px-12 lg:px-20 py-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}
      >
        <span
          className="text-[18px] font-bold tracking-tight"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Slipstream
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-[12px] font-medium uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
          >
            Product walkthrough
          </Link>
          <span
            className="text-[12px]"
            style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
          >
            &copy; 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
