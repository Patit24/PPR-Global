import { ArrowUpRight, MapPin, MessageCircle, Star } from "lucide-react";
import { business } from "@/lib/business";
import { projects, servicePages, services, stats } from "@/lib/content";

const whatsappNowNumber = "919609079663";
const bookCallNumber = "919734019005";
const googleMapsListingLink = business.googleBusinessProfileUrl;

function whatsappLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function getServiceSlug(name: string) {
  return services.find((service) => service.name === name)?.slug || servicePages[0]?.slug || "";
}

export default function Home() {
  return <MobileHome />;
}

function MobileHome() {
  const featuredProjects = projects.slice(0, 4);
  const featuredServices = [
    "Static Website",
    "Dynamic Website",
    "Website with Admin Panel",
    "Mobile App Development",
    "WhatsApp Automation",
    "CRM Dashboard"
  ];

  return (
    <main className="min-h-screen bg-ink pb-20 text-white">
      <section className="relative overflow-hidden bg-[#f7f7f1] px-4 pb-12 pt-24 text-ink">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-75"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(5,5,5,0.12) 1px, transparent 1px)",
            backgroundSize: "18px 18px"
          }}
        />
        <div className="relative mx-auto max-w-xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-black/48">
            Founder of PPR Global
          </p>
          <h1 className="text-4xl font-bold uppercase leading-[0.94] tracking-normal text-ink [font-family:Arial,system-ui,sans-serif]">
            Website & app development for Kolkata businesses.
          </h1>
          <p className="mt-5 text-base font-semibold leading-7 text-black/62">
            Affordable websites, apps, automation, ads funnels, CRM systems, and conversion-ready
            software delivered fast from Kolkata, West Bengal, for local and global brands.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {googleMapsListingLink ? (
              <a
                href={googleMapsListingLink}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/12 bg-white/70 px-4 text-xs font-black uppercase tracking-[0.12em] text-ink shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
              >
                <Star size={15} aria-hidden="true" />
                PPR Global on Google Maps
              </a>
            ) : (
              <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/12 bg-white/70 px-4 text-xs font-black uppercase tracking-[0.12em] text-ink shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
                <MapPin size={15} aria-hidden="true" />
                Barasat, Kolkata
              </span>
            )}
            <a
              href={whatsappLink(whatsappNowNumber, "Hi Patit, I want to discuss a project with PPR Global.")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-black uppercase tracking-[0.14em] text-white"
            >
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp Now
            </a>
          </div>
          <p className="mt-8 text-sm font-black uppercase leading-[1.35] tracking-[0.15em]">
            [Websites / Apps]
            <br />
            [Automation / CRM]
            <br />
            [Ads / SEO / UI/UX]
          </p>
        </div>
      </section>

      <section id="work" className="px-4 py-14">
        <div className="mx-auto max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-acid">
            Featured Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight">
            Case studies built for real business outcomes.
          </h2>
          <div className="mt-6 grid gap-4">
            {featuredProjects.map((project) => (
              <a
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                className="rounded-lg bg-white/[0.055] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">{project.year}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{project.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-acid">
                  View Case Study <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-14">
        <div className="mx-auto max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-acid">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight">
            Website, app, automation, ads, SEO, and CRM delivery.
          </h2>
          <div className="mt-6 grid gap-3">
            {featuredServices.map((service) => (
              <a
                key={service}
                href={`/services/${getServiceSlug(service)}`}
                className="flex min-h-14 items-center justify-between rounded-lg bg-white/[0.055] px-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
              >
                <span className="font-semibold">{service}</span>
                <ArrowUpRight size={16} aria-hidden="true" className="text-acid" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-14">
        <div className="mx-auto max-w-xl rounded-lg bg-white/[0.055] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-acid">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight">Patit Roy / PPR Global</h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            I&apos;m Patit Roy, founder of PPR Global. We help businesses turn ideas into
            high-performing websites, mobile apps, automation systems, and marketing funnels.
            Our team works with clients across industries and countries, delivering premium
            digital solutions at affordable cost.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md bg-black/24 p-3">
                <p className="text-2xl font-bold text-acid">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-white/56">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-14">
        <div className="mx-auto max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-acid">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-none">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg leading-7 text-white/68">
            Let&apos;s build something powerful.
          </p>
          <div className="mt-6 grid gap-3">
            <a
              href={whatsappLink(whatsappNowNumber, "Hi Patit, I want to start a project with PPR Global.")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-acid px-5 text-sm font-black uppercase tracking-[0.14em] text-ink"
            >
              WhatsApp Now <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(bookCallNumber, "Hi Patit, I want to book a call for my project.")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/14 px-5 text-sm font-black uppercase tracking-[0.14em] text-white"
            >
              Book a Call <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-black/94 text-white"
      >
        <a
          href={whatsappLink(whatsappNowNumber, "Hi Patit, I want to discuss a project with PPR Global.")}
          className="inline-flex min-h-16 items-center justify-center gap-2 border-r border-white/10 text-sm font-black uppercase tracking-[0.16em]"
        >
          <MessageCircle size={18} aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={whatsappLink(bookCallNumber, "Hi Patit, I want to book a call for my project.")}
          className="inline-flex min-h-16 items-center justify-center gap-2 text-sm font-black uppercase tracking-[0.16em]"
        >
          <ArrowUpRight size={18} aria-hidden="true" />
          Callback
        </a>
      </nav>
    </main>
  );
}
