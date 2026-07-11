import { Resend } from "resend";
import type { LeadSubmission } from "./schema";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function leadRows(lead: LeadSubmission) {
  const rows = [
    ["Name", lead.name],
    ["Email", lead.email || "Not provided"],
    ["Mobile", lead.phone || "Not provided"],
    ["Service", lead.service],
    ["Budget", lead.budget],
    ["Message", lead.message],
    ["Page", lead.page_url || "Unknown"],
    ["Submitted", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })]
  ];

  return rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:700">${label}</td><td style="padding:8px 12px;border:1px solid #ddd">${escapeHtml(value)}</td></tr>`
    )
    .join("");
}

export async function sendLeadEmails(lead: LeadSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

  if (!apiKey || !adminEmail) {
    return;
  }

  const resend = new Resend(apiKey);
  const from = "PPR Global <onboarding@resend.dev>";

  await resend.emails.send({
    from,
    to: adminEmail,
    subject: `New PPR Global lead: ${lead.name} - ${lead.service}`,
    html: `
      <h2>New project enquiry</h2>
      <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
        ${leadRows(lead)}
      </table>
    `
  });

  if (lead.email) {
    await resend.emails.send({
      from,
      to: lead.email,
      subject: "We received your project enquiry + PPR Global",
      html: `
        <h2>Thanks, ${escapeHtml(lead.name)}.</h2>
        <p>We received your project enquiry for <strong>${escapeHtml(lead.service)}</strong>.</p>
        <p><strong>Budget:</strong> ${escapeHtml(lead.budget)}</p>
        <p><strong>Message:</strong> ${escapeHtml(lead.message)}</p>
        <p>The PPR Global team will contact you shortly to discuss the next step.</p>
      `
    });
  }
}

