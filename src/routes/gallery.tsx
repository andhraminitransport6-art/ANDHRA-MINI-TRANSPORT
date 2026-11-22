import { createFileRoute } from '@tanstack/react-router'
import corporateImg from "@/assets/corporate.jpg";
import heroImg from "@/assets/hero-truck.jpg";
import hhPackImg from "@/assets/hh-packing.webp";
import hhLoadImg from "@/assets/hh-loading.webp";
import hhDeliverImg from "@/assets/hh-delivery.webp";
import intercityHighwayImg from "@/assets/intercity-highway.webp";
import intercityPlanningImg from "@/assets/intercity-planning.webp";
import intercityUnloadImg from "@/assets/intercity-unloading.webp";
import vehicleCarrierImg from "@/assets/vehicle-carrier.webp";
import vehicleLoadingImg from "@/assets/vehicle-loading.webp";
import warehouseInteriorImg from "@/assets/warehouse-interior.webp";
import warehouseInventoryImg from "@/assets/warehouse-inventory.webp";
import corporatePackImg from "@/assets/corporate-packing.webp";
import corporateLoadImg from "@/assets/corporate-loading.webp";
import { BreadcrumbNav, JsonLd, QuoteCta, SectionHeading } from "@/components/site/Blocks";
import { breadcrumbJsonLd, localBusinessJsonLd, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageMeta({
      title: "Packing and Moving Gallery | Andhra Mini Transport, Vizag",
      description:
        "Explore packing, loading, vehicle transport and storage in the Andhra Mini Transport gallery. See how each stage of a move works, from cartons to delivery.",
      canonicalPath: "/gallery",
    }),
  component: Gallery,
});

const galleryItems = [
  {
    src: heroImg,
    alt: "Andhra Mini Transport truck ready for long-distance relocation",
    caption: "Long-distance transport",
    span: "lg:col-span-2",
  },
  {
    src: hhPackImg,
    alt: "Household furniture wrapped with protective bubble wrap",
    caption: "Household packing",
    span: "",
  },
  {
    src: hhLoadImg,
    alt: "Movers loading furniture and cartons via ramp",
    caption: "Ramp loading",
    span: "",
  },
  {
    src: hhDeliverImg,
    alt: "Household furniture safely placed inside new home",
    caption: "Home delivery & placement",
    span: "",
  },
  {
    src: vehicleCarrierImg,
    alt: "Specialized vehicle carrier on highway",
    caption: "Vehicle carrier",
    span: "",
  },
  {
    src: vehicleLoadingImg,
    alt: "Car being carefully loaded onto transport ramp",
    caption: "Car ramp loading",
    span: "",
  },
  {
    src: intercityHighwayImg,
    alt: "Container transport truck on national highway",
    caption: "Intercity highway transit",
    span: "lg:col-span-2",
  },
  {
    src: intercityPlanningImg,
    alt: "Logistics coordinator mapping transit routes",
    caption: "Route & transit planning",
    span: "",
  },
  {
    src: intercityUnloadImg,
    alt: "Unloading goods at destination location",
    caption: "Destination unloading",
    span: "",
  },
  {
    src: warehouseInteriorImg,
    alt: "Modern warehouse facility with racks and forklift",
    caption: "Warehousing & storage",
    span: "",
  },
  {
    src: warehouseInventoryImg,
    alt: "Warehouse staff scanning inventory barcodes",
    caption: "Barcoded inventory tracking",
    span: "",
  },
  {
    src: corporatePackImg,
    alt: "IT equipment and monitors packed for office relocation",
    caption: "Corporate IT packing",
    span: "",
  },
  {
    src: corporateLoadImg,
    alt: "Office movers navigating equipment through building lobby",
    caption: "Office equipment moving",
    span: "lg:col-span-2",
  },
] as const;

function Gallery() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Operations Gallery", url: "/gallery" },
        ])}
      />
      <BreadcrumbNav items={[{ label: "Gallery" }]} />

      {/* Hero */}
      <section className="bg-navy-deep pt-32 pb-16">
        <div className="container-page">
          <p className="eyebrow text-gold">Gallery</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight text-white md:text-5xl">
            Packing and moving gallery
          </h1>
          <span className="gold-rule mt-7" />
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75">
            Explore the stages of a move, from wrapping household goods and loading a vehicle carrier to storing cartons and setting up an office.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our work"
            title="From packing cartons to unloading the truck"
            intro="These illustrations show how household goods, vehicles and office equipment are handled at different stages of relocation."
          />

          {/*
           * Gallery grid — swap-ready.
           * Replace each src with a real company photo.
           * The grid uses a 1/2/3 column responsive layout.
           * Items with lg:col-span-2 span two columns on large screens for visual variety.
           */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <figure
                key={item.alt}
                className={`group relative overflow-hidden border border-border bg-card shadow-card ${item.span}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Caption overlay */}
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 bg-navy-deep/85 px-5 py-3 text-xs font-semibold tracking-[0.18em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption.toUpperCase()}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 border border-border p-5 text-sm leading-relaxed text-muted-foreground">
            Planning a move in Vizag? Include fragile furniture, vehicles and any storage needs in your enquiry so the team can plan packing and loading.
          </p>
        </div>
      </section>

      <QuoteCta
        title="Ready to plan your move?"
        body="Send the pickup and delivery cities on WhatsApp and we will respond with a quote."
      />
    </>
  );
}

