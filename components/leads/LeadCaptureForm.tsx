"use client";

import { cloneElement, useMemo, useState } from "react";
import type { ReactElement } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, Loader2, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import type { LeadSubmissionInput } from "@/lib/lead/schema";
import { budgetOptions, leadSubmissionSchema, serviceOptions } from "@/lib/lead/schema";
import { trackEvent } from "@/lib/lead/analytics";

type LeadCaptureFormProps = {
  variant?: "popup" | "contact" | "compact";
  source?: string;
  projectViewed?: string;
  onSuccess?: (lead: LeadSubmissionInput) => void;
};

function getUtmValue(key: string) {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(key) || "";
}

function getBrowserName() {
  if (typeof navigator === "undefined") return "";
  const ua = navigator.userAgent;
  if (/edg/i.test(ua)) return "Edge";
  if (/chrome|crios/i.test(ua)) return "Chrome";
  if (/safari/i.test(ua) && !/chrome/i.test(ua)) return "Safari";
  if (/firefox|fxios/i.test(ua)) return "Firefox";
  return "Unknown";
}

function getDeviceType() {
  if (typeof navigator === "undefined") return "";
  return /mobile|android|iphone|ipad|phone/i.test(navigator.userAgent) ? "mobile" : "desktop";
}

export function LeadCaptureForm({
  variant = "contact",
  source = "contact",
  projectViewed = "",
  onSuccess
}: LeadCaptureFormProps) {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [successLead, setSuccessLead] = useState<LeadSubmissionInput | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const isCompact = variant === "compact";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadSubmissionInput>({
    resolver: zodResolver(leadSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "Website Development",
      budget: "Not decided",
      message: "",
      consent: false,
      turnstileToken: ""
    }
  });

  const whatsAppHref = useMemo(() => {
    const message = successLead
      ? `Hi PPR Global, I submitted an enquiry. Name: ${successLead.name}. Service: ${successLead.service}. Budget: ${successLead.budget}.`
      : "Hi PPR Global, I visited your portfolio and would like to discuss a project.";

    return `/api/whatsapp?message=${encodeURIComponent(message)}`;
  }, [successLead]);

  const onSubmit = async (values: LeadSubmissionInput) => {
    setServerMessage("");
    trackEvent("lead_form_submit", { source });

    const payload: LeadSubmissionInput = {
      ...values,
      turnstileToken,
      page_url: window.location.href,
      page_title: document.title,
      project_viewed: projectViewed,
      referrer: document.referrer,
      utm_source: getUtmValue("utm_source"),
      utm_medium: getUtmValue("utm_medium"),
      utm_campaign: getUtmValue("utm_campaign"),
      device_type: getDeviceType(),
      browser: getBrowserName()
    };

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = (await response.json()) as {
      ok: boolean;
      message?: string;
      errors?: Record<string, string[]>;
    };

    if (!response.ok || !result.ok) {
      const firstError = result.errors
        ? Object.values(result.errors).flat().filter(Boolean)[0]
        : undefined;
      setServerMessage(firstError || result.message || "Could not submit right now.");
      return;
    }

    setSuccessLead(payload);
    trackEvent("lead_form_success", { source, service: payload.service, budget: payload.budget });
    onSuccess?.(payload);
    reset();
  };

  if (successLead) {
    return (
      <div className="rounded-lg border border-acid/30 bg-acid/10 p-5 text-white">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-acid text-ink">
          <Check size={22} aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-display text-3xl font-semibold leading-none">
          Enquiry received.
        </h3>
        <p className="mt-4 text-sm leading-6 text-white/68">
          We&apos;ll contact you shortly. You can also continue on WhatsApp with your enquiry
          details already prepared.
        </p>
        <a
          href={whatsAppHref}
          onClick={() => trackEvent("whatsapp_click", { source: "lead_success" })}
          className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-acid px-5 text-sm font-black uppercase tracking-[0.14em] text-ink"
        >
          Continue on WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className={`grid gap-4 ${isCompact ? "" : "md:grid-cols-2"}`}>
        <Field
          id="lead-full-name"
          label="Full name"
          error={errors.name?.message}
          input={<input {...register("name")} autoComplete="name" onFocus={() => trackEvent("lead_form_start", { source })} />}
        />
        <Field
          id="lead-mobile-number"
          label="Mobile number"
          error={errors.phone?.message}
          input={<input {...register("phone")} autoComplete="tel" inputMode="tel" />}
        />
        <Field
          id="lead-email-address"
          label="Email address"
          error={errors.email?.message}
          input={<input {...register("email")} autoComplete="email" inputMode="email" />}
        />
        <Field
          id="lead-service-required"
          label="Service required"
          error={errors.service?.message}
          input={
            <select {...register("service")}>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          }
        />
        <Field
          id="lead-estimated-budget"
          label="Estimated budget"
          error={errors.budget?.message}
          input={
            <select {...register("budget")}>
              {budgetOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          }
        />
        <div className={isCompact ? "" : "md:col-span-2"}>
          <Field
            id="lead-project-message"
            label="Project message"
            error={errors.message?.message}
            input={
              <textarea
                {...register("message")}
                rows={isCompact ? 4 : 5}
                placeholder="Tell us what you want to build..."
              />
            }
          />
        </div>
      </div>

      <label className="flex items-start gap-3 rounded-md bg-black/24 p-3 text-sm leading-6 text-white/70">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-1 h-4 w-4 accent-acid"
        />
        <span>
          I consent to PPR Global storing and contacting me about this enquiry. We only collect
          contact details you submit explicitly. Read the{" "}
          <Link href="/privacy-policy" className="font-semibold text-acid underline">
            privacy policy
          </Link>
          .
        </span>
      </label>
      {errors.consent?.message ? (
        <p className="text-sm font-semibold text-acid">{errors.consent.message}</p>
      ) : null}

      {siteKey ? (
        <Turnstile siteKey={siteKey} onSuccess={setTurnstileToken} options={{ theme: "dark" }} />
      ) : null}

      {serverMessage ? (
        <p role="alert" className="rounded-md bg-acid/12 px-4 py-3 text-sm font-semibold text-acid">
          {serverMessage}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting || (Boolean(siteKey) && !turnstileToken)}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-acid px-5 text-sm font-black uppercase tracking-[0.14em] text-ink outline-none transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-55"
        >
          {isSubmitting ? (
            <Loader2 className="mr-2 animate-spin" size={17} aria-hidden="true" />
          ) : (
            <Send className="mr-2" size={17} aria-hidden="true" />
          )}
          Request Free Consultation
        </button>
        <a
          href={`/api/whatsapp?message=${encodeURIComponent(
            "Hi PPR Global, I visited your portfolio and would like to discuss a project."
          )}`}
          onClick={() => trackEvent("whatsapp_click", { source })}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 px-5 text-sm font-black uppercase tracking-[0.14em] text-white outline-none transition-colors hover:border-acid hover:text-acid"
        >
          <MessageCircle className="mr-2" size={17} aria-hidden="true" />
          Continue on WhatsApp
        </a>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  input,
  error
}: {
  id: string;
  label: string;
  input: ReactElement<{
    className?: string;
    id?: string;
    "aria-invalid"?: boolean;
    "aria-describedby"?: string;
  }>;
  error?: string;
}) {
  const errorId = `${id}-error`;

  return (
    <div className="block">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white/78">
        {label}
      </label>
      {cloneElement(input, {
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
        className:
          input.type === "textarea"
            ? "w-full resize-y rounded-md bg-black/34 px-4 py-3 text-base text-white outline-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-shadow placeholder:text-white/34 focus:shadow-[inset_0_0_0_2px_#b8ff3d]"
            : "min-h-12 w-full rounded-md bg-black/34 px-4 text-base text-white outline-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-shadow placeholder:text-white/34 focus:shadow-[inset_0_0_0_2px_#b8ff3d]"
      })}
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-sm font-semibold text-acid">
          {error}
        </p>
      ) : null}
    </div>
  );
}
