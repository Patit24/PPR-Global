"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Check,
  Clock,
  ExternalLink,
  Info,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  User
} from "lucide-react";
import { trackEvent } from "@/lib/lead/analytics";

interface TreatmentOption {
  id: string;
  name: string;
  category: string;
  duration: string;
  estimate: string;
  description: string;
}

const treatments: TreatmentOption[] = [
  {
    id: "consultation",
    name: "General Dental Checkup & Digital X-Ray",
    category: "Preventive Care",
    duration: "30 mins",
    estimate: "₹500 consultation",
    description: "Comprehensive oral exam, intraoral digital camera check, and personalized oral health assessment."
  },
  {
    id: "implant",
    name: "Dental Implant Consultation & 3D CBCT Review",
    category: "Restorative",
    duration: "45 mins",
    estimate: "Starting from ₹25,000 / tooth",
    description: "Titanium or zirconia implant planning, bone density scan analysis, and permanent tooth replacement roadmap."
  },
  {
    id: "aligners",
    name: "Clear Invisible Aligners Smile Scan",
    category: "Orthodontics",
    duration: "40 mins",
    estimate: "Starting from ₹45,000",
    description: "Digital teeth alignment simulation for adults and teens. Wire-free, discreet smile correction."
  },
  {
    id: "root-canal",
    name: "Single-Sitting Rotary Root Canal (RCT)",
    category: "Endodontics",
    duration: "45 mins",
    estimate: "Starting from ₹2,500",
    description: "Computerized apex locator rotary treatment for painless infected nerve relief."
  },
  {
    id: "teeth-whitening",
    name: "In-Clinic Laser Teeth Whitening",
    category: "Cosmetic",
    duration: "60 mins",
    estimate: "Starting from ₹6,000",
    description: "Safe enamel brightening providing 4-6 shades lighter results in a single visit."
  }
];

const availableTimeSlots = [
  "10:00 AM – 10:45 AM",
  "11:30 AM – 12:15 PM",
  "02:00 PM – 02:45 PM",
  "04:30 PM – 05:15 PM",
  "06:30 PM – 07:15 PM",
  "07:30 PM – 08:15 PM"
];

export default function DentalDemoPage() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>("implant");
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split("T")[0]
  );
  const [selectedSlot, setSelectedSlot] = useState<string>("04:30 PM – 05:15 PM");
  const [patientName, setPatientName] = useState<string>("Debashis Mukherjee");
  const [patientPhone, setPatientPhone] = useState<string>("9830012345");
  const [notes, setNotes] = useState<string>("Experiencing mild sensitivity in upper left molar");
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const activeTreatmentObj =
    treatments.find((t) => t.id === selectedTreatment) || treatments[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    trackEvent("dental_demo_start", {
      treatment: activeTreatmentObj.name,
      slot: selectedSlot
    });
  };

  const simulatedWhatsAppMessage = `*New Dental Appointment Request*
• *Clinic:* City Dental Arts (Kolkata Demo)
• *Patient:* ${patientName}
• *Mobile:* ${patientPhone}
• *Treatment:* ${activeTreatmentObj.name} (${activeTreatmentObj.category})
• *Preferred Date:* ${selectedDate}
• *Time Slot:* ${selectedSlot}
• *Patient Note:* "${notes || "None"}"

_Automated WhatsApp Triage by PPR Global Dental System_`;

  return (
    <main className="min-h-screen bg-[#09090c] text-white">
      {/* Top Demo Simulation Banner */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-acid/30 bg-acid px-4 py-2 text-ink shadow-md">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
          <Sparkles size={16} />
          <span>Interactive Prototype · Dental Clinic Website & WhatsApp Booking Demo</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/digital-marketing-agency-for-dental-clinics-kolkata"
            className="hidden text-xs font-bold underline hover:opacity-80 sm:inline"
          >
            ← Back to Dental Marketing Agency
          </Link>
          <a
            href="https://wa.me/919609079663?text=Hi%20Patit,%20I%20tested%20your%20Dental%20Clinic%20Demo%20and%20want%20this%20for%20my%20practice"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-3 py-1 text-[11px] font-black uppercase tracking-wider text-acid"
          >
            Get This For Your Clinic
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Mock Clinic Header */}
        <header className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-acid/10 text-acid">
              <Stethoscope size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-bold text-white">
                  City Dental Arts
                </span>
                <span className="rounded bg-acid/20 px-1.5 py-0.5 text-[10px] font-bold uppercase text-acid">
                  Simulated Clinic
                </span>
              </div>
              <p className="text-xs text-white/60">
                Advanced Implant & Aesthetic Dentistry Center · Salt Lake Sector 1, Kolkata
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-white/80">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span className="font-bold">4.9</span>
              <span className="text-white/40">(128 Google Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Chamber Open Today</span>
            </div>
          </div>
        </header>

        {/* Notice */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-5 text-white/65">
          <Info size={16} className="mt-0.5 shrink-0 text-acid" />
          <p>
            <strong>Interactive Clinic Experience:</strong> This simulation allows dentists and clinic directors to experience exactly what prospective Kolkata patients see when booking an appointment on a PPR Global Next.js dental site. Try selecting different treatments and booking a slot to see the real-time WhatsApp triage preview.
          </p>
        </div>

        {/* 2-Column Booking Experience */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          {/* Left Column: Interactive Booking Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-lg font-bold text-white">
                Book Patient Consultation
              </h2>
              <span className="text-xs font-semibold text-acid">Step 1 of 2: Select Treatment</span>
            </div>

            <form onSubmit={handleBook} className="mt-6 space-y-6">
              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                  1. Select Dental Concern or Treatment
                </label>
                <div className="mt-3 grid gap-2.5">
                  {treatments.map((t) => {
                    const isSelected = selectedTreatment === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTreatment(t.id)}
                        className={`flex items-start justify-between rounded-xl border p-3.5 text-left transition-all ${
                          isSelected
                            ? "border-acid bg-acid/10 shadow-sm"
                            : "border-white/10 bg-black/30 hover:border-white/20"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">
                              {t.name}
                            </span>
                            <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-white/60">
                              {t.duration}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-white/60">{t.description}</p>
                        </div>
                        <span className="shrink-0 text-xs font-bold text-acid">
                          {t.estimate}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date & Slot Selection */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                    2. Appointment Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-white/12 bg-black/40 px-3.5 py-2.5 text-sm text-white focus:border-acid focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                    3. Preferred Time Slot
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-white/12 bg-black/40 px-3.5 py-2.5 text-sm text-white focus:border-acid focus:outline-none"
                  >
                    {availableTimeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-ink text-white">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Details */}
              <div className="space-y-4 border-t border-white/10 pt-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70">
                  4. Patient Information
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Patient Full Name"
                    className="w-full rounded-lg border border-white/12 bg-black/40 px-3.5 py-2.5 text-sm text-white focus:border-acid focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="WhatsApp Number"
                    className="w-full rounded-lg border border-white/12 bg-black/40 px-3.5 py-2.5 text-sm text-white focus:border-acid focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any specific symptoms or toothache notes? (Optional)"
                  className="w-full rounded-lg border border-white/12 bg-black/40 px-3.5 py-2.5 text-sm text-white focus:border-acid focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-acid py-3.5 text-xs font-black uppercase tracking-wider text-ink transition-transform hover:scale-[1.01]"
              >
                <span>Simulate Patient Booking Flow</span>
                <Send size={14} />
              </button>
            </form>
          </div>

          {/* Right Column: Live WhatsApp Triage Simulation Preview */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-[#0d1612] p-6 shadow-[0_10px_40px_rgba(16,185,129,0.1)]">
              <div className="flex items-center gap-2 text-emerald-400">
                <MessageCircle size={20} />
                <h3 className="font-display text-lg font-bold">
                  Clinic WhatsApp Confirmation Preview
                </h3>
              </div>
              <p className="mt-1 text-xs text-white/60">
                This exact structured message appears on your front-desk WhatsApp reception the second a patient taps submit:
              </p>

              {/* Chat Bubble Mockup */}
              <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-950/40 p-4 font-mono text-xs leading-relaxed text-emerald-100 shadow-inner">
                <div className="whitespace-pre-line">
                  {simulatedWhatsAppMessage}
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-emerald-500/20 pt-2 text-[10px] text-emerald-400/70">
                  <span>Delivered via WhatsApp API</span>
                  <span>10:24 AM ✓✓</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/919609079663?text=${encodeURIComponent(
                    simulatedWhatsAppMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-xs font-bold text-ink transition-transform hover:scale-105"
                >
                  <Send size={13} />
                  <span>Send Test To Real WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Why This Beats Third-Party Portals */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-xs leading-6 text-white/70">
              <h4 className="font-bold uppercase tracking-wider text-acid">
                Why Kolkata Dentists Prefer This Architecture:
              </h4>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={14} className="mt-1 shrink-0 text-acid" />
                  <span><strong>Zero Commission:</strong> You don&apos;t pay ₹300-₹500 per booking to Practo or Justdial.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="mt-1 shrink-0 text-acid" />
                  <span><strong>No Patient Leaks:</strong> Aggregators advertise competing dentists on your profile; this site belongs 100% to your clinic.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="mt-1 shrink-0 text-acid" />
                  <span><strong>Sub-Second Loading:</strong> Built with Next.js Turbopack, loading in under 800ms even on slow mobile 4G networks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="mt-1 shrink-0 text-acid" />
                  <span><strong>Council Compliant:</strong> Informative, professional design maintaining medical ethics and dignity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Backlink */}
        <div className="mt-12 text-center text-xs text-white/40">
          Built by <Link href="/about/patit-roy" className="text-acid hover:underline">Patit Roy</Link> at PPR Global · Digital Marketing & Web Engineering for Healthcare Practices in Kolkata.
        </div>
      </div>
    </main>
  );
}
