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
            className="hidden sm:inline-block text-[12px] font-medium uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
          >
            See the product
          </Link>
          <button
            onClick={scrollToForm}
            className="rounded-lg px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
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
              <p
                className="text-[12px] font-medium uppercase tracking-[0.12em] mb-5"
                style={{ fontFamily: "var(--font-jetbrains)", color: "var(--accent)" }}
              >
                Compliance training that actually works
              </p>
              <h1
                className="text-[40px] md:text-[52px] lg:text-[62px] font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Your policies become your training.
              </h1>
              <p
                className="mt-5 md:mt-6 text-[17px] md:text-[18px] leading-relaxed max-w-[480px]"
                style={{ color: "var(--mid-gray)" }}
              >
                Upload a policy document. Get a complete training course — with content,
                quiz, and certificates — ready to send in under ten minutes.
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

          {/* Right: video placeholder — contained, not full-width */}
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
                  className="text-[11px] font-medium uppercase tracking-[0.1em]"
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
                className="mt-5 text-[15px] leading-relaxed"
                style={{ opacity: 0.6 }}
              >
                {item.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── How it works — with integrated stats ── */}
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
            Three steps. Ten minutes. Training your team will actually remember.
          </h2>
        </FadeIn>

        {/* Vertical timeline layout */}
        <div className="mt-16 md:mt-20 space-y-16 md:space-y-20 max-w-[720px]">
          {[
            {
              step: "01",
              title: "Upload your policy",
              stat: "<10 min",
              statLabel: "from policy to training",
              description:
                "Drop in any policy document — safeguarding, lone working, fire safety, GDPR. Slipstream reads it and generates a complete course: learning objectives, section-by-section content, and a quiz. Every detail is specific to your organisation — your procedures, your reporting lines, your systems.",
            },
            {
              step: "02",
              title: "Send to your team",
              stat: "80%+",
              statLabel: "completion rate",
              description:
                "Add your team's email addresses. Each person receives a unique link — they click it and start learning immediately. No accounts to create, no passwords to remember, no app to install. Works on any device.",
            },
            {
              step: "03",
              title: "Track everything",
              stat: "Zero",
              statLabel: "accounts needed",
              description:
                "Watch completions arrive in real time. Every learner who passes receives a verifiable certificate — their name, your organisation, the date, a unique reference number. When an inspector asks for proof of training, you have it in seconds.",
            },
          ].map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.08}>
              <div className="flex gap-6 md:gap-10">
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
                    className="text-[26px] md:text-[32px] font-bold tracking-tight leading-tight"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-[15px] leading-relaxed"
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
                      className="text-[11px] font-medium uppercase tracking-[0.08em]"
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
      </section>

      {/* ── Built for ── */}
      <section
        className="px-6 md:px-12 lg:px-20 py-16 md:py-20"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <FadeIn>
          <div className="max-w-[700px]">
            <p
              className="text-[12px] font-medium uppercase tracking-[0.1em] mb-5"
              style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
            >
              Built for regulated industries
            </p>
            <p
              className="text-[17px] md:text-[19px] leading-relaxed"
              style={{ color: "var(--ink)" }}
            >
              Care homes use it for safeguarding. Schools for child protection.
              Construction firms for site safety. If your people need training
              that's grounded in <em>your</em> procedures — not a generic template —
              Slipstream is for you.
            </p>
            <button
              onClick={scrollToForm}
              className="mt-6 text-[12px] font-bold uppercase tracking-[0.08em] transition-opacity hover:opacity-60 inline-flex items-center"
              style={{ fontFamily: "var(--font-jetbrains)", color: "var(--accent)" }}
            >
              Request early access
              <ArrowRight />
            </button>
          </div>
        </FadeIn>
      </section>

      {/* ── Expression of Interest ── */}
      <section id="early-access" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-[480px] mx-auto">
            <h2
              className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.08] text-center"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Get early access
            </h2>
            <p
              className="mt-4 text-[15px] leading-relaxed text-center"
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
                    className="flex-1 rounded-lg border px-4 py-3 text-[15px] outline-none transition-all duration-200"
                    style={{
                      borderColor: "var(--surface)",
                      backgroundColor: "white",
                      color: "var(--ink)",
                    }}
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
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
                  className="mt-3 text-[13px] text-center sm:text-left"
                  style={{ color: "var(--warm-gray)" }}
                >
                  No spam. No sales calls. Just an invite when your spot is ready.
                </p>
              </form>
            ) : (
              <div
                className="mt-8 rounded-xl px-6 py-8 text-center"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <span
                  className="block text-[28px] font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  You're on the list.
                </span>
                <p
                  className="mt-2 text-[15px]"
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
