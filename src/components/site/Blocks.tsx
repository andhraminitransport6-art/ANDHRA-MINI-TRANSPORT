import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { site, telLink, whatsappLink } from "@/lib/site";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`mt-3 text-3xl leading-tight md:text-4xl ${
          light ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      <span className={`gold-rule mt-5 ${align === "center" ? "mx-auto" : ""}`} />
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-32 pb-16 md:pt-40 md:pb-20">
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-navy-deep/70" />
      <div className="container-page relative">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-white md:text-5xl">{title}</h1>
        <span className="gold-rule mt-6" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">{intro}</p>
      </div>
    </section>
  );
}

export function QuoteCta({
  title = "Tell us what needs to move.",
  body = "Send the pickup and delivery locations on WhatsApp and receive a considered quote from our Visakhapatnam office.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy section">
      <div className="container-page grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-3xl text-white md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-white/70">{body}</p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
          >
            <MessageCircle className="h-4 w-4" /> Get a quote on WhatsApp
          </a>
          <a
            href={telLink}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
          >
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="h-full border border-border bg-card p-7 shadow-card transition-colors hover:border-gold/60">
      <div className="text-navy">{icon}</div>
      <h3 className="mt-5 text-xl text-navy-deep">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function FaqSection({
  items,
  title = "Frequently Asked Questions",
  eyebrow = "Got questions?",
  intro = "Clear, upfront answers about our packing, moving, pricing, and transit processes in Visakhapatnam and nationwide.",
}: {
  items: Array<{ question: string; answer: string }>;
  title?: string;
  eyebrow?: string;
  intro?: string;
}) {
  return (
    <section className="bg-secondary section">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} align="center" />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {items.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-sm border border-border bg-card p-6 shadow-card transition-colors open:border-gold/60"
            >
              <summary className="flex cursor-pointer items-center justify-between font-display text-lg font-semibold text-navy-deep list-none select-none">
                <span>{item.question}</span>
                <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-4 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BreadcrumbNav({ items }: { items: Array<{ label: string; to?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-28 pb-4 text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className="text-navy-deep hover:text-gold hover:underline">
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1.5">
            <span>/</span>
            {item.to ? (
              <Link to={item.to} className="text-navy-deep hover:text-gold hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ServiceCard({
  title,
  description,
  to,
  image,
}: {
  title: string;
  description: string;
  to: string;
  image: string;
}) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col overflow-hidden border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-gold/60"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-navy-deep">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-5 text-xs font-semibold tracking-[0.18em] text-gold-muted">
          VIEW DETAILS
        </span>
      </div>
    </Link>
  );
}
