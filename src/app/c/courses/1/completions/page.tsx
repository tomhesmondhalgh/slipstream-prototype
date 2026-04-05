"use client";

import { useState } from "react";
import { Download, Send } from "lucide-react";
import { SidebarC } from "../../../_components/sidebar";
import { TopBarC } from "../../../_components/top-bar";
import { learnersCourse1 } from "@/lib/mock-data";
import type { LearnerStatus } from "@/lib/mock-data";

type FilterTab = "all" | "completed" | "in_progress" | "not_started";

const tabs: { key: FilterTab; label: string; count: number }[] = [
  { key: "all", label: "All", count: learnersCourse1.length },
  {
    key: "completed",
    label: "Completed",
    count: learnersCourse1.filter((l) => l.status === "completed").length,
  },
  {
    key: "in_progress",
    label: "In progress",
    count: learnersCourse1.filter((l) => l.status === "in_progress").length,
  },
  {
    key: "not_started",
    label: "Not started",
    count: learnersCourse1.filter((l) => l.status === "not_started").length,
  },
];

function StatusBadge({ status }: { status: LearnerStatus }) {
  const config: Record<
    LearnerStatus,
    { bg: string; color: string; label: string }
  > = {
    completed: {
      bg: "var(--ink)",
      color: "var(--cream)",
      label: "Completed",
    },
    in_progress: {
      bg: "var(--accent)",
      color: "var(--cream)",
      label: "In progress",
    },
    not_started: {
      bg: "var(--warm-gray)",
      color: "var(--cream)",
      label: "Not started",
    },
  };
  const c = config[status];
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em]"
      style={{
        fontFamily: "var(--font-jetbrains)",
        backgroundColor: c.bg,
        color: c.color,
      }}
    >
      {c.label}
    </span>
  );
}

export default function StudioCCompletionsPage() {
  const [filter, setFilter] = useState<FilterTab>("all");

  const completedCount = learnersCourse1.filter(
    (l) => l.status === "completed"
  ).length;
  const totalCount = learnersCourse1.length;
  const completionPct = Math.round((completedCount / totalCount) * 100);

  const filtered =
    filter === "all"
      ? learnersCourse1
      : learnersCourse1.filter((l) => l.status === filter);

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--cream)" }}>
      <SidebarC />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBarC />
        <main className="flex-1 overflow-y-auto px-10 py-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-8">
            <div>
              <h1
                className="text-[38px] font-black leading-tight tracking-tight"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  color: "var(--ink)",
                }}
              >
                Lone Worker Safety
              </h1>
              <div className="mt-4 flex items-center gap-6">
                {/* Completion stats as large type */}
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-[32px] font-light leading-none"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      color: "var(--ink)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {completedCount}
                  </span>
                  <span
                    className="text-[14px]"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      color: "var(--warm-gray)",
                    }}
                  >
                    / {totalCount}
                  </span>
                  <span
                    className="ml-1 text-[11px] font-medium uppercase tracking-[0.15em]"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      color: "var(--mid-gray)",
                    }}
                  >
                    completed
                  </span>
                </div>
                {/* Progress bar */}
                <div
                  className="h-2.5 w-48"
                  style={{ backgroundColor: "var(--surface)" }}
                >
                  <div
                    className="h-full transition-all"
                    style={{
                      backgroundColor: "var(--ink)",
                      width: `${completionPct}%`,
                    }}
                  />
                </div>
                <span
                  className="text-[22px] font-bold"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--ink)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {completionPct}%
                </span>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                className="flex items-center gap-2 border-2 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  borderColor: "color-mix(in srgb, var(--ink) 15%, transparent)",
                  color: "var(--mid-gray)",
                }}
              >
                <Download className="h-3.5 w-3.5" />
                Export CSV
              </button>
              <button
                className="flex items-center gap-2 border-2 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  borderColor: "color-mix(in srgb, var(--ink) 15%, transparent)",
                  color: "var(--mid-gray)",
                }}
              >
                <Download className="h-3.5 w-3.5" />
                Download certificates
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div
            className="mt-10 flex gap-0 border-b-2"
            style={{ borderColor: "var(--ink)" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className="-mb-[2px] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  borderBottom:
                    filter === tab.key
                      ? "2px solid var(--accent)"
                      : "2px solid transparent",
                  color:
                    filter === tab.key ? "var(--ink)" : "var(--warm-gray)",
                }}
              >
                {tab.label}{" "}
                <span
                  style={{
                    color:
                      filter === tab.key
                        ? "var(--accent)"
                        : "var(--warm-gray)",
                    opacity: filter === tab.key ? 1 : 0.6,
                  }}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Data table */}
          <div className="mt-0">
            {/* Table header */}
            <div
              className="grid items-center py-3 px-6"
              style={{
                gridTemplateColumns: "1.5fr 1fr 0.7fr 1fr 1fr",
                borderBottom: "1px solid color-mix(in srgb, var(--ink) 10%, transparent)",
              }}
            >
              {["Name", "Status", "Score", "Date", "Action"].map((h) => (
                <span
                  key={h}
                  className="text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--warm-gray)",
                    textAlign: h === "Action" ? "right" : "left",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Table rows */}
            {filtered.map((learner, index) => (
              <div
                key={learner.id}
                className="grid items-center py-4 px-6"
                style={{
                  gridTemplateColumns: "1.5fr 1fr 0.7fr 1fr 1fr",
                  backgroundColor:
                    index % 2 === 1 ? "white" : "var(--cream)",
                  borderBottom:
                    "1px solid color-mix(in srgb, var(--ink) 6%, transparent)",
                }}
              >
                <span
                  className="text-[14px] font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  {learner.name}
                </span>
                <span>
                  <StatusBadge status={learner.status} />
                </span>
                <span
                  className="text-[14px] font-medium"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color:
                      learner.score !== null
                        ? "var(--ink)"
                        : "var(--warm-gray)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {learner.score !== null ? `${learner.score}%` : "\u2014"}
                </span>
                <span
                  className="text-[12px]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--mid-gray)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {learner.date ?? "\u2014"}
                </span>
                <span className="text-right">
                  {learner.status === "completed" && (
                    <button
                      className="inline-flex items-center transition-opacity hover:opacity-70"
                      style={{ color: "var(--mid-gray)" }}
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  )}
                  {learner.status === "not_started" && (
                    <button
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-opacity hover:opacity-70"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        color: "var(--accent)",
                      }}
                    >
                      <Send className="h-3 w-3" />
                      Send reminder
                    </button>
                  )}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
