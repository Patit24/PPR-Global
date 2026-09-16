import { z } from "zod";

export const leadStatuses = [
  "new",
  "contacted",
  "qualified",
  "proposal_sent",
  "won",
  "lost",
  "spam"
] as const;

export const leadStatusLabels: Record<(typeof leadStatuses)[number], string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  proposal_sent: "Proposal Sent",
  won: "Won",
  lost: "Lost",
  spam: "Spam"
};

export const serviceOptions = [
  "Website Development",
  "Mobile App Development",
  "UI/UX Design",
  "WhatsApp Automation",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Other"
] as const;

export const budgetOptions = [
  "Under ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "Above ₹1,00,000",
  "Not decided"
] as const;

const optionalEmail = z
  .string()
  .trim()
  .optional()
  .transform((value) => value || "")
  .pipe(z.union([z.literal(""), z.string().email("Enter a valid email address.")]));

const phoneRegex = /^\+?[0-9\s().-]{7,20}$/;

const optionalPhone = z
  .string()
  .trim()
  .optional()
  .transform((value) => value || "")
  .pipe(
    z.union([
      z.literal(""),
      z
        .string()
        .regex(phoneRegex, "Enter a valid mobile number with country code if outside India.")
    ])
  );

export const leadSubmissionSchema = z
  .object({
    name: z.string().trim().min(2, "Enter your full name.").max(120),
    email: optionalEmail,
    phone: optionalPhone,
    service: z.enum(serviceOptions),
    budget: z.enum(budgetOptions).optional().default("Not decided"),
    message: z
      .string()
      .trim()
      .max(1800)
      .optional()
      .default("")
      .transform((val) => val || "Requesting project consultation and quote from PPR Global."),
    consent: z.boolean().optional().default(true),
    preferred_slot: z.string().trim().max(100).optional().default("ASAP"),
    page_url: z.string().trim().max(500).optional().default(""),
    page_title: z.string().trim().max(180).optional().default(""),
    project_viewed: z.string().trim().max(180).optional().default(""),
    referrer: z.string().trim().max(500).optional().default(""),
    utm_source: z.string().trim().max(120).optional().default(""),
    utm_medium: z.string().trim().max(120).optional().default(""),
    utm_campaign: z.string().trim().max(120).optional().default(""),
    device_type: z.string().trim().max(80).optional().default(""),
    browser: z.string().trim().max(160).optional().default(""),
    turnstileToken: z.string().trim().optional().default("")
  })
  .superRefine((value, ctx) => {
    if (!value.email && !value.phone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["email"],
        message: "Add an email address or mobile number."
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: "Add a mobile number or email address."
      });
    }
  });

export const adminLeadUpdateSchema = z.object({
  lead_status: z.enum(leadStatuses).optional(),
  assigned_to: z.string().trim().max(120).optional(),
  notes: z.string().trim().max(3000).optional()
});

export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;
export type LeadSubmissionInput = z.input<typeof leadSubmissionSchema>;
export type LeadStatus = (typeof leadStatuses)[number];
