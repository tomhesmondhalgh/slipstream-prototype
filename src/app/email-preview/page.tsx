import Link from "next/link";
import Image from "next/image";
import { Mail, Star, Archive, Trash2, Clock } from "lucide-react";
import { PulsingDot } from "@/components/pulsing-dot";

const otherEmails = [
  {
    from: "James Thornton",
    subject: "Team meeting notes — March review",
    preview: "Hi all, please find attached the notes from yesterday's...",
    time: "2:14 PM",
  },
  {
    from: "HR Department",
    subject: "Holiday request approved",
    preview: "Your holiday request for 21-25 April has been approved...",
    time: "11:30 AM",
  },
  {
    from: "Facilities",
    subject: "Car park resurfacing — week of 7 April",
    preview: "Please note that the staff car park will be closed for...",
    time: "Yesterday",
  },
];

export default function EmailPreviewPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F3F4F6", fontFamily: "var(--font-dm-sans)" }}>
      {/* Email client top bar */}
      <div
        className="flex items-center justify-between border-b px-6 py-3"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
      >
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5" style={{ color: "#6B7280" }} />
          <span className="text-[15px] font-semibold" style={{ color: "#111827" }}>
            Inbox
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-[11px] font-bold"
            style={{ backgroundColor: "#DBEAFE", color: "#2563EB" }}
          >
            1 new
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[13px]" style={{ color: "#9CA3AF" }}>
            Emma Davies
          </span>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold"
            style={{ backgroundColor: "#E5E7EB", color: "#6B7280" }}
          >
            ED
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[960px] py-6 px-4">
        {/* Email list + open email */}
        <div className="overflow-hidden rounded-xl border" style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}>

          {/* The training email — open/expanded */}
          <div
            className="border-b-2 px-6 py-5"
            style={{ borderColor: "#E5E7EB", backgroundColor: "#FAFBFC" }}
          >
            {/* Email header */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <Image
                  src="/brightfield-logo.png"
                  alt="Brightfield Care"
                  width={40}
                  height={40}
                  className="mt-0.5 rounded-lg"
                />
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[15px] font-semibold" style={{ color: "#111827" }}>
                      Brightfield Care
                    </span>
                    <span className="text-[12px]" style={{ color: "#9CA3AF" }}>
                      via Slipstream
                    </span>
                  </div>
                  <p
                    className="mt-0.5 text-[18px] font-bold tracking-tight"
                    style={{ color: "#111827", fontFamily: "var(--font-fraunces)" }}
                  >
                    Your safeguarding training is ready
                  </p>
                  <p className="mt-0.5 text-[12px]" style={{ color: "#9CA3AF" }}>
                    To: emma.davies@brightfieldcare.co.uk &middot; Just now
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
                  <Star className="h-4 w-4" style={{ color: "#D1D5DB" }} />
                </button>
                <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
                  <Archive className="h-4 w-4" style={{ color: "#D1D5DB" }} />
                </button>
                <button className="rounded-lg p-2 transition-colors hover:bg-gray-100">
                  <Trash2 className="h-4 w-4" style={{ color: "#D1D5DB" }} />
                </button>
              </div>
            </div>

            {/* Email body */}
            <div className="mt-6 ml-14 max-w-[560px] space-y-4 text-[15px] leading-relaxed" style={{ color: "#374151" }}>
              <p>Hi Emma,</p>
              <p>
                Brightfield Care has assigned you a new training course:{" "}
                <strong style={{ color: "#111827" }}>Safeguarding Adults at Risk</strong>.
              </p>
              <p>
                This course covers your responsibilities under Brightfield Care&apos;s
                Safeguarding Policy 2025, including how to recognise and report
                concerns. It takes approximately 34 minutes to complete.
              </p>

              {/* CTA button */}
              <div className="relative inline-block pt-2">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "var(--accent, #7C8C2F)" }}
                >
                  Start your training &rarr;
                </Link>
                <PulsingDot className="-top-1 -right-1" />
              </div>

              <p className="text-[13px]" style={{ color: "#9CA3AF" }}>
                No account needed — click the link above and you&apos;re in.
              </p>

              <div className="border-t pt-4 mt-4" style={{ borderColor: "#E5E7EB" }}>
                <p className="text-[12px]" style={{ color: "#9CA3AF" }}>
                  This email was sent by Brightfield Care Ltd via Slipstream.
                  <br />
                  If you believe you received this in error, please contact your manager.
                </p>
              </div>
            </div>
          </div>

          {/* Other emails in inbox */}
          {otherEmails.map((email, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-b px-6 py-3.5 last:border-b-0"
              style={{ borderColor: "#F3F4F6" }}
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
                style={{ backgroundColor: "#F3F4F6", color: "#9CA3AF" }}
              >
                {email.from.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-[14px] font-medium" style={{ color: "#6B7280" }}>
                    {email.from}
                  </span>
                  <span className="text-[12px]" style={{ color: "#D1D5DB" }}>
                    {email.time}
                  </span>
                </div>
                <p className="truncate text-[13px]" style={{ color: "#9CA3AF" }}>
                  {email.subject} — {email.preview}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
