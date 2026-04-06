"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, type ReactNode } from "react";

/* ── Scroll-triggered fade-up ── */
function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Icons ── */
function PlayIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="27" stroke="var(--cream)" strokeWidth="1.5" opacity="0.5" />
      <path d="M23 18L40 28L23 38V18Z" fill="var(--cream)" opacity="0.85" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ display: "inline-block", marginLeft: 8 }}>
      <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        "--accent": "#1A9E96",
        "--brand-navy": "#1F3864",
        "--brand-blue": "#2E75B6",
        backgroundColor: "var(--cream)",
        color: "var(--ink)",
      } as React.CSSProperties}
    >
      {/* ── Brand gradient bar ── */}
      <div
        className="h-1"
        style={{
          background: "linear-gradient(to right, var(--brand-navy), var(--brand-blue), var(--accent))",
        }}
      />

      {/* ── Navigation ── */}
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <Image
          src="/Slipstream Logo.png"
          alt="Slipstream"
          width={180}
          height={48}
          className="h-10 md:h-12 w-auto"
          style={{ mixBlendMode: "multiply" }}
          priority
        />
        <div className="flex items-center gap-5">
          <Link
            href="/dashboard"
            className="hidden sm:inline-block text-[13px] font-medium uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
          >
            See the product
          </Link>
          <button
            onClick={scrollToForm}
            className="rounded-lg px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{
              fontFamily: "var(--font-jetbrains)",
              background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue), var(--accent))",
              color: "var(--cream)",
            }}
          >
            Request early access
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <FadeIn>
              <h1
                className="text-[40px] md:text-[52px] lg:text-[62px] font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Compliance training your team will actually complete.
              </h1>
              <p
                className="mt-6 md:mt-8 text-[18px] md:text-[20px] leading-relaxed max-w-[500px]"
                style={{ color: "var(--mid-gray)" }}
              >
                Drop in a policy, a guide, or an existing training deck. Slipstream
                turns it into a course your people can finish in one sitting — no
                logins, no LMS, no&nbsp;friction.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={scrollToForm}
                  className="rounded-lg px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98] inline-flex items-center justify-center"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue), var(--accent))",
                    color: "var(--cream)",
                  }}
                >
                  Request early access
                  <ArrowRight />
                </button>
                <Link
                  href="/dashboard"
                  className="rounded-lg px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-80 active:scale-[0.98] inline-flex items-center justify-center border"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    borderColor: "color-mix(in srgb, var(--ink) 15%, transparent)",
                    color: "var(--ink)",
                  }}
                >
                  See the product
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right: video placeholder */}
          <FadeIn delay={0.2}>
            <div
              className="relative w-full overflow-hidden rounded-xl cursor-pointer group"
              style={{
                aspectRatio: "16/10",
                backgroundColor: "var(--brand-navy)",
                boxShadow: "0 24px 48px -12px rgba(31, 56, 100, 0.2)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 group-hover:opacity-70">
                <PlayIcon />
                <span
                  className="text-[12px] font-medium uppercase tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-jetbrains)", color: "var(--cream)", opacity: 0.4 }}
                >
                  Walkthrough video
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── The problem ── */}
      <section
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
        style={{ backgroundColor: "var(--brand-navy)", color: "var(--cream)" }}
      >
        <FadeIn>
          <p
            className="text-[12px] font-medium uppercase tracking-[0.1em] mb-5"
            style={{ fontFamily: "var(--font-jetbrains)", opacity: 0.35 }}
          >
            The problem
          </p>
          <h2
            className="text-[30px] md:text-[40px] font-bold leading-[1.1] tracking-tight max-w-[700px]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Compliance training is broken. Everyone knows it.
          </h2>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-14">
          {[
            {
              stat: "10%",
              body: "of workers say compliance training actually changes their behaviour. Generic courses written for no one in particular get forgotten by Friday.",
            },
            {
              stat: "£10–30k",
              body: "is what an LMS costs to implement. Without one, you're emailing PDFs and tracking completions on a spreadsheet. Neither works.",
            },
            {
              stat: "0",
              body: "organisations get notified when their policies change and their training goes stale. Courses drift out of date — silently.",
            },
          ].map((item, i) => (
            <FadeIn key={item.stat} delay={i * 0.1}>
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
                className="mt-5 text-[16px] leading-relaxed"
                style={{ opacity: 0.65 }}
              >
                {item.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <FadeIn>
          <p
            className="text-[12px] font-medium uppercase tracking-[0.1em] mb-5"
            style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
          >
            How it works
          </p>
          <h2
            className="text-[30px] md:text-[40px] font-bold leading-[1.1] tracking-tight max-w-[600px]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Three steps. Ten minutes. Done.
          </h2>
        </FadeIn>

        {/* Two-column: timeline left, visual context right */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-[1fr_1fr] gap-16 md:gap-20">
          {/* Left: steps */}
          <div className="space-y-14 md:space-y-18">
            {[
              {
                step: "01",
                title: "Upload your document",
                stat: "<10 min",
                statLabel: "from document to course",
                description:
                  "Drop in a policy, a handbook, a training deck — whatever you've got. Slipstream reads it and generates a complete course: learning objectives, section content, and a quiz. Every detail is specific to your organisation.",
              },
              {
                step: "02",
                title: "Send to your team",
                stat: "80%+",
                statLabel: "completion rate",
                description:
                  "Add your team's email addresses. Each person gets a unique link — they click it and start learning immediately. No accounts, no passwords, no app to install. Works on any device.",
              },
              {
                step: "03",
                title: "Track everything",
                stat: "Zero",
                statLabel: "accounts needed",
                description:
                  "Watch completions in real time. Every learner who passes receives a verifiable certificate — name, organisation, date, unique reference. When an inspector asks for proof, you have it.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.08}>
                <div className="flex gap-5 md:gap-7">
                  {/* Step number with vertical line */}
                  <div className="flex flex-col items-center shrink-0">
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-full text-[13px] font-bold"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        backgroundColor: "var(--brand-navy)",
                        color: "var(--cream)",
                      }}
                    >
                      {item.step}
                    </span>
                    {i < 2 && (
                      <div
                        className="w-px flex-1 mt-4"
                        style={{ backgroundColor: "color-mix(in srgb, var(--brand-navy) 15%, transparent)" }}
                      />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-2">
                    <h3
                      className="text-[24px] md:text-[30px] font-bold tracking-tight leading-tight"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-3 text-[16px] md:text-[17px] leading-relaxed"
                      style={{ color: "var(--mid-gray)" }}
                    >
                      {item.description}
                    </p>
                    {/* Integrated stat */}
                    <div className="mt-4 flex items-baseline gap-2">
                      <span
                        className="text-[28px] md:text-[32px] font-light leading-none"
                        style={{
                          fontFamily: "var(--font-fraunces)",
                          color: "var(--accent)",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {item.stat}
                      </span>
                      <span
                        className="text-[12px] font-medium uppercase tracking-[0.08em]"
                        style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
                      >
                        {item.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right: contextual visual — sector examples + free tier signal */}
          <div className="hidden md:flex flex-col justify-center gap-8">
            <FadeIn delay={0.15}>
              <div
                className="rounded-xl p-8"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <p
                  className="text-[12px] font-medium uppercase tracking-[0.1em] mb-4"
                  style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
                >
                  Works with any document
                </p>
                <div className="space-y-3">
                  {[
                    { doc: "Safeguarding Policy 2025", sector: "Care" },
                    { doc: "Fire Safety & Evacuation Guide", sector: "Any" },
                    { doc: "Lone Worker Safety Handbook", sector: "Healthcare" },
                    { doc: "Child Protection Procedures", sector: "Education" },
                    { doc: "GDPR & Data Handling Policy", sector: "Any" },
                    { doc: "Site Induction Training Deck", sector: "Construction" },
                  ].map((item) => (
                    <div
                      key={item.doc}
                      className="flex items-center justify-between rounded-lg px-4 py-3"
                      style={{ backgroundColor: "var(--cream)" }}
                    >
                      <span className="text-[14px] font-medium" style={{ color: "var(--ink)" }}>
                        {item.doc}
                      </span>
                      <span
                        className="text-[11px] font-medium uppercase tracking-[0.06em] shrink-0 ml-3"
                        style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
                      >
                        {item.sector}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div
                className="rounded-xl p-8"
                style={{
                  background: "linear-gradient(135deg, var(--brand-navy), color-mix(in srgb, var(--brand-navy) 85%, var(--brand-blue)))",
                  color: "var(--cream)",
                }}
              >
                <p
                  className="text-[12px] font-medium uppercase tracking-[0.1em] mb-3"
                  style={{ fontFamily: "var(--font-jetbrains)", opacity: 0.5 }}
                >
                  Start free
                </p>
                <p
                  className="text-[22px] md:text-[26px] font-bold leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  Your first course is on us.
                </p>
                <p
                  className="mt-3 text-[15px] leading-relaxed"
                  style={{ opacity: 0.6 }}
                >
                  One course, ten completions, no card required.
                  See if it works for your team before you commit.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Mobile-only: free tier card ── */}
      <section className="md:hidden px-6 pb-10">
        <FadeIn>
          <div
            className="rounded-xl p-7"
            style={{
              background: "linear-gradient(135deg, var(--brand-navy), color-mix(in srgb, var(--brand-navy) 85%, var(--brand-blue)))",
              color: "var(--cream)",
            }}
          >
            <p
              className="text-[12px] font-medium uppercase tracking-[0.1em] mb-3"
              style={{ fontFamily: "var(--font-jetbrains)", opacity: 0.5 }}
            >
              Start free
            </p>
            <p
              className="text-[22px] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Your first course is on us.
            </p>
            <p
              className="mt-2 text-[15px] leading-relaxed"
              style={{ opacity: 0.6 }}
            >
              One course, ten completions, no card required.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── Expression of Interest ── */}
      <section
        id="early-access"
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <FadeIn>
          <div className="max-w-[480px] mx-auto">
            <h2
              className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.08] text-center"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Get early access
            </h2>
            <p
              className="mt-4 text-[16px] leading-relaxed text-center"
              style={{ color: "var(--mid-gray)" }}
            >
              We're opening Slipstream to a small group of organisations first.
              Enter your work email and we'll be in touch within 48 hours.
            </p>

            {!submitted ? (
              <form
                className="mt-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="you@company.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-lg border px-4 py-3.5 text-[16px] outline-none transition-all duration-200"
                    style={{
                      borderColor: "color-mix(in srgb, var(--ink) 12%, transparent)",
                      backgroundColor: "white",
                      color: "var(--ink)",
                    }}
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue), var(--accent))",
                      color: "var(--cream)",
                    }}
                  >
                    Request access
                  </button>
                </div>
                <p
                  className="mt-3 text-[14px] text-center sm:text-left"
                  style={{ color: "var(--warm-gray)" }}
                >
                  No spam. No sales calls. Just an invite when your spot is ready.
                </p>
              </form>
            ) : (
              <div
                className="mt-8 rounded-xl px-6 py-8 text-center"
                style={{ backgroundColor: "white" }}
              >
                <span
                  className="block text-[28px] font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  You're on the list.
                </span>
                <p
                  className="mt-2 text-[16px]"
                  style={{ color: "var(--mid-gray)" }}
                >
                  We'll be in touch at <strong style={{ color: "var(--ink)" }}>{email}</strong> within 48 hours.
                </p>
              </div>
            )}
          </div>
        </FadeIn>
      </section>

      {/* ── Footer ── */}
      <footer
        className="px-6 md:px-12 lg:px-20 py-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}
      >
        <Image
          src="/Slipstream Logo.png"
          alt="Slipstream"
          width={140}
          height={40}
          className="h-8 w-auto"
          style={{ mixBlendMode: "multiply" }}
        />
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-[13px] font-medium uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
          >
            Product walkthrough
          </Link>
          <span
            className="text-[13px]"
            style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
          >
            &copy; 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
