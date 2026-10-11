# Dental Practice WhatsApp Follow-up & Lead Conversion Guide

This internal playbook standardizes how the PPR Global sales & onboarding team responds to dental clinic leads captured through our Kolkata dental landing pages, audit scorecard, and demo interactions.

---

## 1. Lead Grading & Prioritization (Triage)

All dental leads processed by `/api/leads` are classified into three actionable tiers based on their clinic audit score and inquiry source:

| Grade | Audit Score | Profile | Priority | First Response SLA |
| :--- | :--- | :--- | :--- | :--- |
| **Grade A** | 80–100 / 100 | Established multi-chair clinic, polyclinic, or high-volume practitioner seeking to scale elective treatments (Implants, Clear Aligners). | **Urgent / High** | **Under 15 minutes** |
| **Grade B** | 50–79 / 100 | Moderate local practice experiencing digital patient drop-off (slow site, manual booking, lacking local 3-pack rank). | **High** | **Under 1 hour** |
| **Grade C** | 0–49 / 100 | Solo doctor, neighborhood chamber, or clinic with no website / low map presence needing urgent modernization. | **Standard** | **Same business day** |

---

## 2. Standard WhatsApp Response Scripts

### A. Grade A Lead Follow-up (Scale & High-Ticket Implants/Aligners)
> *"Hello Dr. {{DoctorName}}, this is Patit from PPR Global.*  
> *I reviewed your Kolkata Dental Scorecard results for {{ClinicName}} (Score: {{Score}}/100 · Grade A).*  
> *Your practice already has solid local fundamentals, but you are likely leaving 15–20 high-value dental implant and invisible aligner inquiries on the table each month to aggregator directories.*  
> *We have prepared a short 3-minute video audit analyzing your exact search competitors in {{Locality}}. When would be a convenient time today or tomorrow for a quick 10-minute strategy call?"*

---

### B. Grade B Lead Follow-up (Patient Leak Remediation)
> *"Hello Dr. {{DoctorName}}, Patit from PPR Global here.*  
> *Thank you for completing our Dental Digital Audit for {{ClinicName}} (Score: {{Score}}/100 · Grade B).*  
> *The audit flagged two critical leaks where prospective patients are dropping off: your mobile page loading speed and the absence of a 1-tap WhatsApp slot booking flow.*  
> *Fixing these two items typically cuts patient drop-off by over 50%. May I share our Kolkata clinic benchmark checklist with you?"*

---

### C. Grade C Lead Follow-up (Foundation & Modernization)
> *"Namaskar Dr. {{DoctorName}}, this is Patit from PPR Global in Kolkata.*  
> *We received your scorecard submission for {{ClinicName}} (Grade C).*  
> *Currently, prospective patients searching for 'dentist near me' in your area are finding competing clinics on Google Maps.*  
> *We can help you establish an authentic, sub-second clinic website and verify your Google Business Profile for ₹28,750 with complete code ownership and zero recurring agency lock-in.*  
> *Would you like me to send over our interactive clinic demo preview to test on your phone?"*

---

### D. Interactive Demo Follow-up (`/dental-demo`)
> *"Hello Dr. {{DoctorName}}, thanks for testing our interactive Dental Clinic Booking Demo on PPR Global.*  
> *As you noticed, replacing phone scheduling with our 3-step WhatsApp triage lets patients select their exact concern (implants, root canals, braces) and sends an instant structured appointment request to your front desk.*  
> *We can deploy this exact custom setup for {{ClinicName}} in under 14 days. Would you prefer a brief 10-minute demo on Google Meet or WhatsApp call this afternoon?"*

---

## 3. Analytics Tracking & GA4 Verification

The following custom GA4 events are wired across the dental customer journey:

1. `dental_page_view`: Fired when a visitor navigates to any dental landing page or service guide.
2. `scorecard_start`: Triggered when the user answers question 1 on the scorecard.
3. `scorecard_complete`: Triggered when question 10 is completed and results are calculated.
4. `dental_lead_submit`: Triggered when the doctor/clinic contact form or scorecard lead gate is submitted.
5. `dental_demo_start`: Triggered when an appointment slot is simulated on `/dental-demo`.
6. `book_call_click`: Triggered when a visitor clicks the Cal.com / scheduler button.
7. `whatsapp_click`: Triggered when any dental WhatsApp direct chat CTA is clicked.

---

## 4. Ethical & Legal Guardrails
1. **Never make clinical outcome guarantees:** Do not promise "100 guaranteed patients" or "rank #1 in 7 days". Frame all discussions around clinical trust, technical speed, and patient convenience.
2. **West Bengal Dental Council Compliance:** Remind practitioners to ensure their promotional communications adhere to dental council advertising norms. We provide informational, patient-education architectures only.
