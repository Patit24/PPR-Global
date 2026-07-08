import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resourcePosts } from "@/lib/content";

const baseUrl = "https://www.pprglobal.online";

function getPost(slug: string) {
  return resourcePosts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return resourcePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Resources | PPR Global"
    };
  }

  return {
    title: `${post.title} | PPR Global Resources`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/resources/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/resources/${post.slug}`
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/opengraph-image"]
    }
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-ink px-4 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-acid">Resource not found.</p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2">
            Back home <ArrowUpRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@id": `${baseUrl}/#organization`
    },
    publisher: {
      "@id": `${baseUrl}/#organization`
    },
    mainEntityOfPage: `${baseUrl}/resources/${post.slug}`
  };

  return (
    <main className="min-h-screen bg-ink text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="relative overflow-hidden px-4 pb-20 pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,255,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,61,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px"
          }}
        />
        <article className="relative mx-auto max-w-4xl">
          <Link
            href="/#resources"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid"
          >
            Back to resources <ArrowUpRight size={15} />
          </Link>
          <p className="mt-12 font-display text-sm font-black uppercase tracking-[0.22em] text-acid">
            PPR Global Resources
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-none md:text-7xl">
            {post.title}
          </h1>
          <p className="mt-7 text-xl leading-9 text-white/70">{post.description}</p>
          <div className="mt-10 space-y-6 rounded-lg bg-white/[0.055] p-6 text-lg leading-9 text-white/74 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-8">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/#contact"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-acid px-5 text-sm font-black uppercase tracking-[0.16em] text-ink"
          >
            Discuss a Project <ArrowUpRight size={16} />
          </Link>
        </article>
      </section>
    </main>
  );
}
