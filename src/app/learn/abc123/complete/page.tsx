import { CircleCheck, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CompletionPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-8">
      <Card className="w-full max-w-[520px] rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/60">
        <CardContent className="px-12 py-14 text-center">
          {/* Green checkmark */}
          <div className="mb-8 flex justify-center">
            <CircleCheck className="h-16 w-16 text-green-500" strokeWidth={1.5} />
          </div>

          {/* Heading */}
          <h1 className="text-[26px] font-semibold tracking-tight text-brand-dark">
            You&apos;ve completed this training
          </h1>

          {/* Course name */}
          <p className="mt-3 text-[17px] font-medium text-brand-blue">
            Lone Worker Safety
          </p>

          {/* Score */}
          <p className="mt-8 text-4xl font-bold tracking-tight text-brand-black">
            92%
          </p>
          <p className="mt-1.5 text-[15px] text-gray-500">
            Your score
          </p>

          {/* Pass mark */}
          <p className="mt-2 text-[13px] font-medium text-green-600">
            Pass mark: 75% &middot; Passed
          </p>

          {/* Divider */}
          <div className="my-8 border-t border-gray-100" />

          {/* Certificate details */}
          <div className="rounded-xl bg-gray-50/80 px-8 py-6 text-[14px] leading-relaxed text-gray-500">
            <p className="font-semibold text-brand-black">Emma Davies</p>
            <p className="mt-0.5">Brightfield Care Ltd</p>
            <p>14 March 2026</p>
            <p className="mt-3 text-[12px] tracking-wide text-gray-400">
              Certificate no. BC-LW-2026-0014
            </p>
          </div>

          {/* Download button */}
          <Button className="mt-8 w-full bg-brand-blue py-5 text-[14px] font-medium text-white shadow-sm hover:bg-brand-blue/90 hover:shadow-md transition-all">
            <Download className="mr-2 h-4 w-4" />
            Download your certificate
          </Button>
        </CardContent>
      </Card>

      {/* Completion notice */}
      <p className="mt-10 text-center text-[11px] tracking-wide text-gray-300">
        Your completion has been recorded. Brightfield Care has been notified.
      </p>
    </div>
  );
}
