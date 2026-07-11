create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  service text not null,
  budget text not null,
  message text not null,
  consent boolean not null default false,
  page_url text,
  page_title text,
  project_viewed text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  device_type text,
  browser text,
  lead_status text not null default 'new',
  assigned_to text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint leads_status_check check (
    lead_status in ('new', 'contacted', 'qualified', 'proposal_sent', 'won', 'lost', 'spam')
  ),
  constraint leads_contact_check check (
    nullif(email, '') is not null or nullif(phone, '') is not null
  )
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (lead_status);
create index if not exists leads_service_idx on public.leads (service);

create or replace function public.set_leads_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_leads_updated_at on public.leads;
create trigger set_leads_updated_at
before update on public.leads
for each row
execute function public.set_leads_updated_at();

alter table public.leads enable row level security;

drop policy if exists "Public visitors can insert consented leads" on public.leads;
create policy "Public visitors can insert consented leads"
on public.leads
for insert
to anon
with check (
  consent = true
  and lead_status = 'new'
  and notes is null
  and assigned_to is null
);

drop policy if exists "Authenticated admins can read leads" on public.leads;
create policy "Authenticated admins can read leads"
on public.leads
for select
to authenticated
using (true);

drop policy if exists "Authenticated admins can update leads" on public.leads;
create policy "Authenticated admins can update leads"
on public.leads
for update
to authenticated
using (true)
with check (true);

