# Analytics Event Plan

PPR Global tracks conversion intent without sending personally identifiable information to Google Analytics.

## Events

| Event | Trigger | Parameters |
| --- | --- | --- |
| `lead_popup_view` | Smart enquiry popup appears | `reason` |
| `lead_popup_dismiss` | Popup dismissed | none |
| `lead_form_start` | Visitor focuses the lead form | `source` |
| `lead_form_submit` | Lead form submit attempt | `source` |
| `lead_form_success` | Lead saved successfully | `source`, `service`, `budget` |
| `whatsapp_click` | WhatsApp CTA clicked | `source` |
| `callback_click` | Callback/contact CTA clicked | `source` |
| `portfolio_project_view` | Case study opened | `project` |

## Recommended Future Events

- `pricing_interaction`
- `calculator_completion`
- `service_page_cta`
- `case_study_cta`
- `resource_to_service_click`
- `booking_click`
- `phone_click`

## Monitoring

- Google Search Console: branded queries, non-branded service queries, landing pages, indexing status.
- Bing Webmaster Tools: sitemap, IndexNow submission status, query data.
- Analytics: conversion by landing page, WhatsApp clicks, form success rate, popup performance.
- GEO benchmark: maintain `docs/geo-query-benchmark.md` manually.

## Privacy Rule

Do not send names, email addresses, phone numbers, full messages or other personal contact information to analytics platforms.

