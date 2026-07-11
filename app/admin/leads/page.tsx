"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  ArrowDownToLine,
  Mail,
  MessageCircle,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck
} from "lucide-react";
import {
  budgetOptions,
  leadStatusLabels,
  leadStatuses,
  serviceOptions,
  type LeadStatus
} from "@/lib/lead/schema";
import type { LeadRecord } from "@/lib/lead/supabase";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

function createBrowserSupabase() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

function toCsvValue(value: unknown) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function exportCsv(leads: LeadRecord[]) {
  const headers = [
    "created_at",
    "name",
    "email",
    "phone",
    "service",
    "budget",
    "lead_status",
    "assigned_to",
    "message",
    "page_url",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "notes"
  ];
  const rows = leads.map((lead) => headers.map((header) => toCsvValue(lead[header as keyof LeadRecord])).join(","));
  const blob = new Blob([[headers.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ppr-global-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export default function AdminLeadsPage() {
  const supabase = useMemo(() => createBrowserSupabase(), []);
  const [sessionToken, setSessionToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [selectedLead, setSelectedLead] = useState<LeadRecord | null>(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [service, setService] = useState("all");
  const [budget, setBudget] = useState("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const summary = useMemo(() => {
    const total = leads.length;
    const won = leads.filter((lead) => lead.lead_status === "won").length;

    return {
      total,
      new: leads.filter((lead) => lead.lead_status === "new").length,
      qualified: leads.filter((lead) => lead.lead_status === "qualified").length,
      won,
      conversion: total ? Math.round((won / total) * 100) : 0
    };
  }, [leads]);

  const fetchLeads = useCallback(async (token = sessionToken) => {
    if (!token) return;
    setLoading(true);
    const params = new URLSearchParams({ search, status, service, budget, from, to });
    const response = await fetch(`/api/admin/leads?${params.toString()}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const result = (await response.json()) as { ok: boolean; leads?: LeadRecord[]; message?: string };
    setLoading(false);

    if (!response.ok || !result.ok) {
      setMessage(result.message || "Could not load leads.");
      return;
    }

    setLeads(result.leads || []);
    setSelectedLead((current) => {
      if (!current) return null;
      return result.leads?.find((lead) => lead.id === current.id) || null;
    });
  }, [budget, from, search, service, sessionToken, status, to]);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      const token = data.session?.access_token || "";
      setSessionToken(token);
      if (token) void fetchLeads(token);
    });
  }, [fetchLeads, supabase]);

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!supabase) {
      setMessage("Supabase environment variables are missing.");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.session?.access_token) {
      setMessage(error?.message || "Login failed.");
      return;
    }

    setSessionToken(data.session.access_token);
    await fetchLeads(data.session.access_token);
  };

  const logout = async () => {
    await supabase?.auth.signOut();
    setSessionToken("");
    setLeads([]);
    setSelectedLead(null);
  };

  const updateLead = async (id: string, payload: Partial<LeadRecord>) => {
    const response = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionToken}`
      },
      body: JSON.stringify(payload)
    });
    const result = (await response.json()) as { ok: boolean; lead?: LeadRecord; message?: string };

    if (!response.ok || !result.ok || !result.lead) {
      setMessage(result.message || "Could not update lead.");
      return;
    }

    setLeads((current) => current.map((lead) => (lead.id === id ? result.lead! : lead)));
    setSelectedLead(result.lead);
  };

  if (!sessionToken) {
    return (
      <main className="min-h-screen bg-ink px-4 py-20 text-white">
        <form
          onSubmit={login}
          className="mx-auto max-w-md rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
        >
          <ShieldCheck className="text-acid" size={32} aria-hidden="true" />
          <h1 className="mt-5 font-display text-4xl font-semibold">Admin Leads</h1>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Login with an authenticated Supabase admin account.
          </p>
          <label className="mt-6 block">
            <span className="mb-2 block text-sm font-semibold text-white/72">Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              className="min-h-12 w-full rounded-md bg-black/34 px-4 outline-none focus:ring-2 focus:ring-acid"
            />
          </label>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-semibold text-white/72">Password</span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              className="min-h-12 w-full rounded-md bg-black/34 px-4 outline-none focus:ring-2 focus:ring-acid"
            />
          </label>
          {message ? <p className="mt-4 text-sm font-semibold text-acid">{message}</p> : null}
          <button className="mt-6 min-h-12 w-full rounded-full bg-acid px-5 text-sm font-black uppercase tracking-[0.14em] text-ink">
            Login
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-acid">PPR Global CRM</p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-none">Lead Dashboard</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => fetchLeads()}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-xs font-black uppercase tracking-[0.14em]"
            >
              <RefreshCw size={15} aria-hidden="true" />
              Refresh
            </button>
            <button
              onClick={() => exportCsv(leads)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-acid px-4 text-xs font-black uppercase tracking-[0.14em] text-ink"
            >
              <ArrowDownToLine size={15} aria-hidden="true" />
              Export CSV
            </button>
            <button onClick={logout} className="min-h-11 rounded-full border border-white/12 px-4 text-xs font-black uppercase tracking-[0.14em]">
              Logout
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Total leads", summary.total],
            ["New leads", summary.new],
            ["Qualified", summary.qualified],
            ["Won", summary.won],
            ["Conversion", `${summary.conversion}%`]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-acid p-5 text-ink">
              <p className="font-display text-4xl font-semibold">{value}</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.16em]">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 rounded-lg bg-white/[0.055] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:grid-cols-3 lg:grid-cols-6">
          <label className="lg:col-span-2">
            <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-white/44">Search</span>
            <div className="flex min-h-11 items-center gap-2 rounded-md bg-black/34 px-3">
              <Search size={16} className="text-white/40" aria-hidden="true" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Name, email, phone"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </label>
          <Filter label="Status" value={status} onChange={setStatus} options={["all", ...leadStatuses]} labels={leadStatusLabels} />
          <Filter label="Service" value={service} onChange={setService} options={["all", ...serviceOptions]} />
          <Filter label="Budget" value={budget} onChange={setBudget} options={["all", ...budgetOptions]} />
          <div className="grid grid-cols-2 gap-2">
            <DateInput label="From" value={from} onChange={setFrom} />
            <DateInput label="To" value={to} onChange={setTo} />
          </div>
          <button
            onClick={() => fetchLeads()}
            className="min-h-11 rounded-md bg-acid px-4 text-xs font-black uppercase tracking-[0.14em] text-ink md:col-span-3 lg:col-span-6"
          >
            Apply Filters
          </button>
        </div>

        {message ? <p className="mt-4 rounded-md bg-acid/12 p-3 text-sm text-acid">{message}</p> : null}

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-lg bg-white/[0.055] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
            <div className="hidden grid-cols-[1.2fr_1fr_0.9fr_0.8fr_0.5fr] gap-3 border-b border-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/42 md:grid">
              <span>Lead</span>
              <span>Service</span>
              <span>Status</span>
              <span>Date</span>
              <span>Actions</span>
            </div>
            <div className="divide-y divide-white/10">
              {loading ? <p className="p-4 text-white/56">Loading leads...</p> : null}
              {!loading && !leads.length ? <p className="p-4 text-white/56">No leads found.</p> : null}
              {leads.map((lead) => (
                <button
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className="grid w-full gap-3 px-4 py-4 text-left transition-colors hover:bg-white/[0.04] md:grid-cols-[1.2fr_1fr_0.9fr_0.8fr_0.5fr]"
                >
                  <span>
                    <span className="block font-semibold">{lead.name}</span>
                    <span className="mt-1 block text-xs text-white/46">{lead.email || lead.phone}</span>
                  </span>
                  <span className="text-sm text-white/68">{lead.service}</span>
                  <span className="text-sm text-acid">{leadStatusLabels[lead.lead_status as LeadStatus] || lead.lead_status}</span>
                  <span className="text-sm text-white/48">{new Date(lead.created_at).toLocaleDateString("en-IN")}</span>
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-acid">View</span>
                </button>
              ))}
            </div>
          </div>

          <LeadDetails key={selectedLead?.id || "empty"} lead={selectedLead} onUpdate={updateLead} />
        </div>
      </div>
    </main>
  );
}

function Filter({
  label,
  value,
  onChange,
  options,
  labels
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  labels?: Record<string, string>;
}) {
  return (
    <label>
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-white/44">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="min-h-11 w-full rounded-md bg-black/34 px-3 outline-none focus:ring-2 focus:ring-acid">
        {options.map((option) => (
          <option key={option} value={option} className="bg-ink">
            {option === "all" ? "All" : labels?.[option] || option}
          </option>
        ))}
      </select>
    </label>
  );
}

function DateInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label>
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-white/44">{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} type="date" className="min-h-11 w-full rounded-md bg-black/34 px-2 text-sm outline-none focus:ring-2 focus:ring-acid" />
    </label>
  );
}

function LeadDetails({
  lead,
  onUpdate
}: {
  lead: LeadRecord | null;
  onUpdate: (id: string, payload: Partial<LeadRecord>) => Promise<void>;
}) {
  const [notes, setNotes] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  if (!lead) {
    return (
      <aside className="rounded-lg bg-white/[0.055] p-5 text-white/54 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
        Select a lead to view details.
      </aside>
    );
  }

  return (
    <aside className="rounded-lg bg-white/[0.055] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-acid">Lead details</p>
      <h2 className="mt-3 font-display text-3xl font-semibold">{lead.name}</h2>
      <p className="mt-3 text-sm leading-6 text-white/62">{lead.message}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {lead.phone ? (
          <>
            <a href={`tel:${lead.phone}`} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-acid px-3 text-xs font-black uppercase tracking-[0.12em] text-ink">
              <Phone size={14} /> Call
            </a>
            <a href={`/api/whatsapp?message=${encodeURIComponent(`Hi ${lead.name}, this is PPR Global regarding your ${lead.service} enquiry.`)}`} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/14 px-3 text-xs font-black uppercase tracking-[0.12em] text-white">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </>
        ) : null}
        {lead.email ? (
          <a href={`mailto:${lead.email}`} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/14 px-3 text-xs font-black uppercase tracking-[0.12em] text-white">
            <Mail size={14} /> Email
          </a>
        ) : null}
      </div>
      <div className="mt-5 grid gap-3">
        <Filter
          label="Status"
          value={lead.lead_status}
          onChange={(value) => onUpdate(lead.id, { lead_status: value })}
          options={leadStatuses}
          labels={leadStatusLabels}
        />
        <label>
          <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-white/44">Assigned to</span>
          <input value={assignedTo} onChange={(event) => setAssignedTo(event.target.value)} onBlur={() => onUpdate(lead.id, { assigned_to: assignedTo })} className="min-h-11 w-full rounded-md bg-black/34 px-3 outline-none focus:ring-2 focus:ring-acid" />
        </label>
        <label>
          <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-white/44">Internal notes</span>
          <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={5} className="w-full resize-y rounded-md bg-black/34 p-3 outline-none focus:ring-2 focus:ring-acid" />
        </label>
        <button onClick={() => onUpdate(lead.id, { notes, assigned_to: assignedTo })} className="min-h-11 rounded-full bg-acid px-4 text-xs font-black uppercase tracking-[0.14em] text-ink">
          Save Notes
        </button>
      </div>
      <dl className="mt-6 grid gap-3 text-sm text-white/58">
        {[
          ["Budget", lead.budget],
          ["Page", lead.page_url],
          ["Project viewed", lead.project_viewed],
          ["Referrer", lead.referrer],
          ["Device", `${lead.device_type || ""} ${lead.browser || ""}`.trim()],
          ["Created", new Date(lead.created_at).toLocaleString("en-IN")]
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="text-xs font-black uppercase tracking-[0.16em] text-white/34">{label}</dt>
            <dd className="mt-1 break-words">{value || "Not available"}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
