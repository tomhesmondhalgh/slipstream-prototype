"use client";

import { useState } from "react";
import { Download, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  switch (status) {
    case "completed":
      return (
        <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">
          Completed
        </Badge>
      );
    case "in_progress":
      return (
        <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50">
          In progress
        </Badge>
      );
    case "not_started":
      return (
        <Badge className="bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-50">
          Not started
        </Badge>
      );
  }
}

export default function CompletionsPage() {
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
    <div className="mx-auto max-w-[1200px]">
      {/* Header */}
      <div className="mb-10 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-brand-dark">
            Lone Worker Safety
          </h1>
          <div className="mt-3 flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {completedCount} of {totalCount} completed &middot;{" "}
              {completionPct}%
            </span>
            <div className="h-2 w-48 rounded-full bg-gray-100">
              <div
                className="h-2 rounded-full bg-brand-blue"
                style={{ width: `${completionPct}%` }}
              />
            </div>
            <span className="text-sm text-gray-400">
              Last completion: today
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-gray-600 hover:bg-gray-50">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline" className="text-gray-600 hover:bg-gray-50">
            <Download className="mr-2 h-4 w-4" />
            Download all certificates
          </Button>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="mb-6 flex gap-0 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`-mb-px px-5 py-2.5 text-sm font-medium transition-colors ${
              filter === tab.key
                ? "border-b-2 border-brand-blue text-brand-blue"
                : "border-b-2 border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}{" "}
            <span className={filter === tab.key ? "text-brand-blue/70" : "text-gray-300"}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="h-11 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Name</TableHead>
                <TableHead className="h-11 text-xs font-semibold uppercase tracking-wider text-gray-400">Status</TableHead>
                <TableHead className="h-11 text-xs font-semibold uppercase tracking-wider text-gray-400">Score</TableHead>
                <TableHead className="h-11 text-xs font-semibold uppercase tracking-wider text-gray-400">Date</TableHead>
                <TableHead className="h-11 pr-6 text-right text-xs font-semibold uppercase tracking-wider text-gray-400">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((learner, index) => (
                <TableRow
                  key={learner.id}
                  className={`${index % 2 === 1 ? "bg-gray-50/60" : ""} hover:bg-gray-50`}
                >
                  <TableCell className="h-12 pl-6 font-medium text-brand-dark">
                    {learner.name}
                  </TableCell>
                  <TableCell className="h-12">
                    <StatusBadge status={learner.status} />
                  </TableCell>
                  <TableCell className="h-12 text-gray-600">
                    {learner.score !== null ? `${learner.score}%` : "\u2014"}
                  </TableCell>
                  <TableCell className="h-12 text-gray-500">
                    {learner.date ?? "\u2014"}
                  </TableCell>
                  <TableCell className="h-12 pr-6 text-right">
                    {learner.status === "completed" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-brand-blue"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                    {learner.status === "not_started" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Send className="mr-1.5 h-3 w-3" />
                        Send reminder
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
