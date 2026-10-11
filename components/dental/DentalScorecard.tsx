"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Award, CheckCircle, RefreshCw, Send, Sparkles, UserCheck } from "lucide-react";
import {
  dentalScorecardQuestions,
  calculateScoreBand,
  type ScoreBand
} from "@/data/dental-scorecard";
import { trackEvent } from "@/lib/lead/analytics";

interface DentalScorecardProps {
  source?: string;
  schedulerUrl?: string;
}

export function DentalScorecard({
  source = "dental-scorecard",
  schedulerUrl
}: DentalScorecardProps) {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 to 9 = questions, 10 = lead form, 11 = results
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [finalBand, setFinalBand] = useState<ScoreBand | null>(null);

  const totalQuestions = dentalScorecardQuestions.length;
  const currentQuestion = dentalScorecardQuestions[currentStep];

  const handleSelectOption = (questionId: string, points: number) => {
    const updated = { ...selectedAnswers, [questionId]: points };
    setSelectedAnswers(updated);

    if (currentStep === 0) {
      trackEvent("scorecard_start", {
        vertical: "dental",
        source
      });
    }

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate final score
      const total = Object.values(updated).reduce((acc, curr) => acc + curr, 0);
      setFinalScore(total);
      setFinalBand(calculateScoreBand(total));
      setCurrentStep(totalQuestions); // go to lead capture
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setSubmitted(false);
    setFinalScore(0);
    setFinalBand(null);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || (!phone && !email)) return;

    setIsSubmitting(true);
    const band = finalBand || calculateScoreBand(finalScore);

    try {
      trackEvent("dental_lead_submit", {
        vertical: "dental",
        source,
        score: finalScore,
        grade: band.grade
      });

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${name} (${clinicName || "Dental Clinic"})`,
          phone,
          email,
          service: "Free Website & GBP Review",
          budget: "$300–$600 / ₹28,000–₹57,000",
          source: `${source}_grade_${band.grade}`,
          message: `Dental Scorecard Result: Score ${finalScore}/100 (Grade ${band.grade} - ${band.title}). Clinic: ${clinicName || "N/A"}.`
        })
      });

      if (response.ok) {
        trackEvent("scorecard_complete", {
          vertical: "dental",
          score: finalScore,
          grade: band.grade
        });
      }
    } catch (err) {
      console.error("Scorecard lead submit error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setCurrentStep(totalQuestions + 1); // show results
    }
  };

  const calendarLink =
    schedulerUrl ||
    process.env.NEXT_PUBLIC_CALENDAR_URL ||
    `https://wa.me/919609079663?text=${encodeURIComponent(
      `Hi Patit, I took the Kolkata Dental Clinic Scorecard for ${clinicName || "my clinic"}. My score was ${finalScore}/100 (Grade ${finalBand?.grade || "N/A"}). I would like to review the top 3 recommendations with you.`
    )}`;

  const whatsappFollowup = `https://wa.me/919609079663?text=${encodeURIComponent(
    `Hi Patit, my dental clinic ${clinicName ? `(${clinicName})` : ""} scored ${finalScore}/100 (Grade ${finalBand?.grade || "N/A"}) on the digital scorecard. Can we discuss improving our patient acquisition?`
  )}`;

  return (
    <div
      id="dental-scorecard"
      className="overflow-hidden rounded-2xl border border-acid/30 bg-[#0d0d11] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.6)] md:p-10"
    >
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-acid/20 bg-acid/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-acid">
            <Sparkles size={13} />
            <span>Interactive Audit</span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
            Kolkata Dental Clinic Digital Scorecard
          </h3>
          <p className="mt-1 text-xs text-white/60 md:text-sm">
            Assess your clinic website, Google Maps rank, WhatsApp booking flow & patient retention in 2 minutes.
          </p>
        </div>

        {currentStep < totalQuestions && (
          <div className="text-right">
            <span className="text-xs font-black uppercase tracking-wider text-acid">
              Question {currentStep + 1} of {totalQuestions}
            </span>
            <div className="mt-2 h-2 w-36 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-acid transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Body: Questions (0 to 9) */}
      {currentStep < totalQuestions && currentQuestion && (
        <div className="mt-8">
          <p className="text-xs font-black uppercase tracking-widest text-acid/80">
            Category: {currentQuestion.category.toUpperCase()}
          </p>
          <h4 className="mt-2 text-xl font-semibold leading-snug text-white md:text-2xl">
            {currentQuestion.question}
          </h4>

          <div className="mt-6 grid gap-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentQuestion.id] === option.points;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(currentQuestion.id, option.points)}
                  className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-acid bg-acid/10 text-white shadow-[0_0_20px_rgba(184,255,61,0.15)]"
                      : "border-white/10 bg-black/40 text-white/80 hover:border-white/30 hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-sm font-medium leading-relaxed md:text-base">
                    {option.label}
                  </span>
                  <span
                    className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                      isSelected
                        ? "border-acid bg-acid text-ink"
                        : "border-white/20 text-white/40"
                    }`}
                  >
                    {isSelected ? "✓" : idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${
                currentStep === 0
                  ? "cursor-not-allowed text-white/20"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <ArrowLeft size={14} />
              <span>Previous</span>
            </button>
            <span className="text-xs text-white/40">
              Select an option to proceed automatically
            </span>
          </div>
        </div>
      )}

      {/* Step 10: Pre-Result Lead Capture Form */}
      {currentStep === totalQuestions && !submitted && (
        <div className="mt-8">
          <div className="max-w-xl">
            <span className="rounded-full bg-acid/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-acid">
              Audit Complete!
            </span>
            <h4 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              Where should we send your personalized Clinic Growth Report?
            </h4>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Enter your clinic name and mobile number to unlock your instant digital score, grade breakdown, and top 3 customized fixes.
            </p>
          </div>

          <form onSubmit={handleLeadSubmit} className="mt-8 max-w-xl space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                Doctor / Contact Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. Sourav Ganguly"
                className="mt-1.5 w-full rounded-lg border border-white/12 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-acid focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                Clinic Name & Kolkata Locality
              </label>
              <input
                type="text"
                value={clinicName}
                onChange={(e) => setClinicName(e.target.value)}
                placeholder="Apex Dental Care, Salt Lake Sector 1"
                className="mt-1.5 w-full rounded-lg border border-white/12 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-acid focus:outline-none"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                  WhatsApp / Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98300XXXXX"
                  className="mt-1.5 w-full rounded-lg border border-white/12 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-acid focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="clinic@gmail.com"
                  className="mt-1.5 w-full rounded-lg border border-white/12 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-acid focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-acid py-3.5 text-xs font-black uppercase tracking-wider text-ink transition-all hover:scale-[1.02] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Generating Clinic Report...</span>
                ) : (
                  <>
                    <span>Unlock Instant Score & Action Plan</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-white/40">
              Zero spam guaranteed. We respect dentist-patient confidentiality and medical ethics.
            </p>
          </form>
        </div>
      )}

      {/* Step 11: Final Score & Detailed Action Plan */}
      {submitted && finalBand && (
        <div className="mt-8 space-y-8">
          <div className="grid gap-6 rounded-xl border border-white/10 bg-black/40 p-6 md:grid-cols-[1fr_2fr] md:p-8">
            <div className="flex flex-col items-center justify-center rounded-xl border border-acid/30 bg-acid/10 p-6 text-center">
              <span className="text-xs font-black uppercase tracking-wider text-acid">
                Overall Clinic Rating
              </span>
              <div className="mt-3 font-display text-6xl font-extrabold text-white">
                {finalScore}
                <span className="text-2xl text-white/40">/100</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-acid px-3 py-1 text-xs font-black uppercase tracking-wider text-ink">
                <Award size={14} />
                <span>Grade {finalBand.grade}</span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold text-white md:text-2xl">
                {finalBand.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {finalBand.summary}
              </p>
              <p className="mt-2 text-xs text-white/50">
                Assessment prepared for:{" "}
                <span className="font-semibold text-white">
                  {name} {clinicName ? `(${clinicName})` : ""}
                </span>
              </p>
            </div>
          </div>

          {/* Top 3 Customized Fixes */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h5 className="text-xs font-black uppercase tracking-wider text-acid">
              Top 3 Priority Growth Fixes for Your Practice
            </h5>
            <div className="mt-4 grid gap-4">
              {finalBand.recommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-white/5 bg-black/30 p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-acid/20 text-xs font-bold text-acid">
                    {idx + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-white/85">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("book_call_click", { source: "scorecard_result" })}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-acid px-6 text-xs font-black uppercase tracking-wider text-ink transition-transform hover:scale-105"
            >
              <UserCheck size={16} />
              <span>Book Strategy Call With Patit</span>
              <ArrowRight size={14} />
            </a>

            <a
              href={whatsappFollowup}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { source: "scorecard_result" })}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-xs font-black uppercase tracking-wider text-white transition-colors hover:border-acid hover:text-acid"
            >
              <span>Instant WhatsApp Review</span>
              <ArrowRight size={14} />
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full px-4 text-xs font-bold text-white/50 hover:text-white"
            >
              <RefreshCw size={14} />
              <span>Retake Audit</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
