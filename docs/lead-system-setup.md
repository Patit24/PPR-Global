# PPR Global Lead System Setup

## 1. Supabase

1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/leads.sql`.
4. Create an admin user in Supabase Auth.
5. Add these Vercel environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

The public site inserts leads through the server API. The service role key is only used server-side.

## 2. Resend

1. Create a Resend API key.
2. Add `RESEND_API_KEY`.
3. Add `ADMIN_NOTIFICATION_EMAIL`.
4. For production, verify your sending domain in Resend and update the `from` address in `lib/lead/email.ts`.

## 3. Cloudflare Turnstile

1. Create a Turnstile widget in Cloudflare.
2. Add `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
3. Add `TURNSTILE_SECRET_KEY`.

If Turnstile variables are empty, local development still works without verification.

## 4. WhatsApp

Add `WHATSAPP_PHONE_NUMBER` in international format without `+`.

Example: `919609079663`

## 5. Google Sheets Webhook

Optional:

1. Create a Google Apps Script web app.
2. Accept JSON POST requests.
3. Add the deployed script URL as `GOOGLE_SHEETS_WEBHOOK_URL`.

If the webhook is not configured, lead capture continues to work normally.

## 6. Admin Dashboard

Visit `/admin/leads`.

Login with the Supabase Auth user created for the admin team. The dashboard supports search, filters, details, notes, assignment, status updates, click-to-call/email/WhatsApp, and CSV export.

## 7. Testing

1. Run `npm run lint`.
2. Run `npm run build`.
3. Start locally with `npm run dev`.
4. Submit a test lead from the contact form.
5. Confirm the lead appears in Supabase.
6. Confirm `/admin/leads` can read and update it after login.
7. Confirm email and Google Sheets delivery if those variables are configured.

## 8. Deployment

1. Add all variables in Vercel Project Settings.
2. Deploy from GitHub.
3. Test the live popup, contact form, floating WhatsApp button, and `/admin/leads`.

