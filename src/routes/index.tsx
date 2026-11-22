import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Boxes,
  CalendarCheck,
  ClipboardList,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Route as RouteIcon,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";
import householdImg from "@/assets/household.jpg";
import intercityImg from "@/assets/intercity.jpg";
import vehicleImg from "@/assets/vehicle.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import corporateImg from "@/assets/corporate.jpg";
import { FaqSection, InfoCard, JsonLd, QuoteCta, SectionHeading, ServiceCard } from "@/components/site/Blocks";
import {
  customerReviews,
  faqJsonLd,
  localBusinessJsonLd,
  pageMeta,
  site,
  telLink,
  websiteJsonLd,
  whatsappLink,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Andhra Mini Transport | Packers and Movers in Vizag, Visakhapatnam",
      description:
        "Andhra Mini Transport — trusted packers and movers in Visakhapatnam (Vizag) since 1993. Household shifting, office relocation, vehicle transport and storage. Call 09440147473 for a free quote.",
      keywords:
        "Andhra Mini Transport, packers and movers Visakhapatnam, packers and movers Vizag, best movers Vizag, household shifting Visakhapatnam, relocation services Vizag, andhraminitransport, andhra mini transport packers movers",
      canonicalPath: "/",
    }),
  component: Home,
});

const serviceCards = [
  {
    title: "Household Shifting",
    to: "/services/household-shifting",
    image: householdImg,
    description:
      "Room-by-room packing, careful loading and placement at your new home, locally or long distance.",
  },
  {
    title: "Intercity and Interstate",
    to: "/services/intercity-interstate",
    image: intercityImg,
    description:
      "Door-to-door relocation from Visakhapatnam to any city in India, with a single point of contact.",
  },
  {
    title: "Vehicle Transportation",
    to: "/services/vehicle-transportation",
    image: vehicleImg,
    description: "Cars and two-wheelers moved on enclosed and open carriers with secured loading.",
  },
  {
    title: "Warehousing and Storage",
    to: "/services/warehousing",
    image: warehouseImg,
    description: "Short-term and long-term storage with inventory records and controlled access.",
  },
  {
    title: "Corporate Relocation",
    to: "/services/corporate-relocation",
    image: corporateImg,
    description:
      "Planned office moves executed outside working hours to protect business continuity.",
  },
] as const;

const homeFaqs = [
  {
    question: "What does Andhra Mini Transport Packers and Movers do in Vizag?",
    answer:
      "From our MVP Colony office, we arrange local house shifting, interstate moves, office relocation, car and bike transport, and storage. Call 09440147473 or send your pickup and delivery details on WhatsApp for a quote.",
  },
  {
    question: "How much do local packers and movers cost in Visakhapatnam (Vizag)?",
    answer:
      "Local shifting costs in Visakhapatnam typically range from ₹4,500 to ₹8,500 for a 1BHK, ₹7,500 to ₹13,500 for a 2BHK, and ₹12,000 to ₹22,000 for a 3BHK/Villa, depending on floor levels, elevator availability, fragile items, and distance within Vizag. We provide free, upfront, in-person or video quotes with no hidden charges.",
  },
  {
    question: "Which localities in Visakhapatnam do you provide packing and moving services in?",
    answer:
      "We provide comprehensive door-to-door relocation across all Visakhapatnam neighbourhoods including MVP Colony, Madhurawada, Gajuwaka, Rushikonda, Seethammadhara, Dwaraka Nagar, Siripuram, Waltair Uplands, Sujatha Nagar, Pendurthi, NAD Junction, Gopalapatnam, Kurmannapalem, and Steel Plant Township.",
  },
  {
    question: "Do you offer intercity shifting from Visakhapatnam to Hyderabad, Bangalore, or Chennai?",
    answer:
      "Yes. We specialize in intercity and interstate relocations from Visakhapatnam to all major Indian metropolitan hubs including Hyderabad (1-2 days), Bengaluru (2-3 days), Chennai (2-3 days), Pune, Mumbai, Delhi NCR, and Kolkata with closed container trucks and direct single-point coordination.",
  },
  {
    question: "Can I transport my car or two-wheeler bike along with household goods?",
    answer:
      "Yes, we provide specialized car carrier transport and two-wheeler bike packing & shifting services. Vehicles undergo a thorough pre-loading condition inspection and are secured using heavy-duty wheel chocks and safety harness straps.",
  },
  {
    question: "What protective packing materials do you use for fragile items?",
    answer:
      "We utilize 5-layer heavy-duty corrugated cartons, premium air bubble wrap, waterproof stretch film, foam padding, edge guards, and custom wooden crating for delicate glass, electronics, appliances, and antique furniture.",
  },
];

function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd(homeFaqs)} />

      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroImg}
          fetchPriority="high"
          alt="Movers loading wrapped household goods into a transport truck near Visakhapatnam"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/78" />
        <div className="container-page relative flex min-h-[92vh] flex-col justify-center pt-32 pb-20">
          <p className="eyebrow text-gold">Established 1993 — Visakhapatnam</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Packers and movers in Vizag for homes and businesses
          </h1>
          <span className="gold-rule mt-7" />
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
            Based in MVP Colony, Andhra Mini Transport Packers and Movers has served Visakhapatnam since 1993. We pack and move homes, offices, cars and bikes within Vizag and to cities across India.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" /> Get Instant Quote on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/35 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="container-page grid gap-8 py-10 sm:grid-cols-3">
          {[
            {
              icon: <CalendarCheck className="h-5 w-5" />,
              label: "Established 1993",
              sub: `${site.experience} years in operation`,
            },
            {
              icon: <Star className="h-5 w-5" />,
              label: `${site.rating.value} Google rating`,
              sub: `From ${site.rating.count} `,
            },
            {
              icon: <RouteIcon className="h-5 w-5" />,
              label: "Pan-India coverage",
              sub: "Operating out of Vizag",
            },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <span className="mt-0.5 text-gold-muted">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-navy-deep">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we handle"
            title="Home, office and vehicle moving services"
            intro="Every move is quoted after we understand the volume, distance and handling needs. Nothing is generic."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((s) => (
              <ServiceCard key={s.to} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep section">
        <div className="container-page">
          <SectionHeading
            light
            eyebrow="Why clients stay with us"
            title="A long record, and a way of working that earns it"
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <CalendarCheck className="h-6 w-6" />,
                title: "Operating since 1993",
                body: "Three decades of moves through Visakhapatnam and beyond, run by the same family business.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Safe handling",
                body: "Multi-layer packing, labelled cartons and trained loaders who treat fragile items as fragile.",
              },
              {
                icon: <RouteIcon className="h-6 w-6" />,
                title: "Pan-India network",
                body: "Transport arranged to any state in India with coordination at both ends of the route.",
              },
              {
                icon: <ClipboardList className="h-6 w-6" />,
                title: "Transparent process",
                body: "A clear scope and quote before we begin, with one person accountable for your move.",
              },
            ].map((b) => (
              <div key={b.title}>
                <div className="text-gold">{b.icon}</div>
                <h3 className="mt-5 text-lg text-white">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="How your move works, from quote to delivery"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <MessageCircle className="h-6 w-6" />,
                step: "01",
                title: "Enquire",
                body: "Call or message on WhatsApp with your locations and approximate volume.",
              },
              {
                icon: <ClipboardList className="h-6 w-6" />,
                step: "02",
                title: "Survey and quote",
                body: "We assess the goods in person or over a call and share a written quote.",
              },
              {
                icon: <Boxes className="h-6 w-6" />,
                step: "03",
                title: "Packing and move",
                body: "Our team packs, labels, loads and dispatches on the agreed date.",
              },
              {
                icon: <PackageCheck className="h-6 w-6" />,
                step: "04",
                title: "Safe delivery",
                body: "Goods are unloaded, unpacked where requested and checked against the list.",
              },
            ].map((s) => (
              <div key={s.step} className="border-t-2 border-gold pt-6">
                <div className="flex items-center justify-between text-navy">
                  {s.icon}
                  <span className="font-display text-2xl text-gold-muted">{s.step}</span>
                </div>
                <h3 className="mt-5 text-lg text-navy-deep">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Customer feedback"
            title={`Rated ${site.rating.value} across ${site.rating.count} Google reviews`}
            intro="Verified feedback from homeowners, professionals, and vehicle owners who trusted Andhra Mini Transport for local and interstate relocation."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {customerReviews.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col justify-between border border-border bg-card p-7 shadow-card transition-all hover:border-gold/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-gold">
                      {Array.from({ length: review.rating }).map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {review.role}
                    </span>
                  </div>
                  <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    "{review.text}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-border/60 pt-4">
                  <div className="text-sm font-semibold tracking-wide text-navy-deep">
                    {review.name}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {review.service}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Service area"
              title="Headquartered in Vizag, operating across India"
              intro="Our office and loading base is in MVP Colony, Visakhapatnam. From there we arrange local shifting within the city as well as long-distance movement to any state in the country."
            />
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-muted-foreground">{site.addressLine}</span>
              </li>
              <li className="flex gap-3">
                <Truck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-muted-foreground">
                  Local shifting within Visakhapatnam and long-distance transport nationwide.
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={telLink} className="font-semibold text-navy-deep">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
          <div className="border border-border shadow-card">
            <iframe
              title="Andhra Mini Transport location map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3800.068300504791!2d83.32542347517312!3d17.741420683207394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ0JzI5LjEiTiA4M8KwMTknNDAuOCJF!5e0!3m2!1sen!2sin!4v1788933182929!5m2!1sen!2sin"
              className="h-[380px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <FaqSection items={homeFaqs} eyebrow="Answers & Clarity" title="Frequently Asked Questions About Moving in Visakhapatnam" />

      <QuoteCta />
    </>
  );
}


