import { Mail, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export default function SendInvitesPage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-brand-dark">
            Send Safeguarding Adults at Risk
          </h1>
          <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">
            Published
          </Badge>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-[1fr_360px] gap-8">
        {/* Left column: email input + settings */}
        <div className="space-y-6">
          {/* Email input area */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <label className="mb-3 block text-sm font-medium text-brand-dark">
                Email addresses
              </label>
              <div className="min-h-[160px] rounded-lg border border-gray-200 bg-white p-3">
                <div className="flex flex-wrap gap-1.5">
                  {prefilledEmails.map((email) => (
                    <span
                      key={email}
                      className="inline-flex items-center gap-1.5 rounded-md border border-brand-blue/10 bg-brand-light px-2.5 py-1 text-xs text-brand-blue"
                    >
                      <Mail className="h-3 w-3 text-brand-blue/50" />
                      {email}
                      <button className="ml-0.5 text-brand-blue/40 transition-colors hover:text-brand-blue">
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
                <Upload className="h-3 w-3" />
                <span>or upload a CSV</span>
              </div>
            </CardContent>
          </Card>

          {/* Optional settings */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Settings
              </h3>
              <div className="space-y-4">
                {/* Deadline */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-brand-dark">
                      Deadline
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      Set a completion deadline for learners
                    </p>
                  </div>
                  <div className="rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-400">
                    No deadline set
                  </div>
                </div>
                {/* Reminders */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-sm font-medium text-brand-dark">
                      Reminder emails
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      Automatically remind learners who haven&apos;t completed
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-9 rounded-full bg-brand-blue p-0.5">
                      <div className="h-4 w-4 translate-x-4 rounded-full bg-white shadow-sm" />
                    </div>
                    <span className="text-sm text-gray-500">
                      After 3 days, 7 days
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Send button */}
          <div className="pt-2">
            <div className="relative inline-block w-full">
              <Button className="w-full bg-brand-blue py-6 text-base font-medium text-white shadow-sm hover:bg-brand-blue/90">
                Send training to {prefilledEmails.length} learners
              </Button>
              <PulsingDot className="-top-1 -right-1" />
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">
              Each learner receives a unique link. Progress is saved
              automatically.
            </p>
          </div>
        </div>

        {/* Right column: email preview */}
        <div>
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Learner email preview
              </h3>
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                {/* Email header */}
                <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Subject</p>
                  <p className="mt-1 text-sm font-medium text-brand-dark">
                    Brightfield Care: Your safeguarding training is ready
                  </p>
                </div>
                {/* Email body */}
                <div className="space-y-3.5 px-5 py-5 text-sm leading-relaxed text-gray-600">
                  <p>Hi Emma,</p>
                  <p>
                    Brightfield Care has assigned you a new training course:{" "}
                    <strong className="text-brand-dark">Safeguarding Adults at Risk</strong>.
                  </p>
                  <p>
                    This course covers your responsibilities under Brightfield
                    Care&apos;s Safeguarding Policy 2025, including how to
                    recognise and report concerns.
                  </p>
                  <div className="rounded-lg bg-brand-blue px-4 py-3 text-center text-sm font-medium text-white">
                    Start your training &rarr;
                  </div>
                  <p className="text-center text-xs text-gray-400">
                    Estimated time: 34 minutes
                  </p>
                </div>
              </div>
              <div className="mt-5 rounded-lg bg-brand-light px-3 py-2.5 text-center text-xs text-brand-blue">
                Learners click one link. No account creation. No password.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
