import { createFileRoute } from "@tanstack/react-router";
import householdImg from "@/assets/household.jpg";
import intercityImg from "@/assets/intercity.jpg";
import vehicleImg from "@/assets/vehicle.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import corporateImg from "@/assets/corporate.jpg";
import { BreadcrumbNav, JsonLd, PageHero, QuoteCta, SectionHeading, ServiceCard } from "@/components/site/Blocks";
import { breadcrumbJsonLd, localBusinessJsonLd, pageMeta, services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta({
      title: "Moving and Storage Services in Vizag | Andhra Mini Transport",
      description:
        "Compare household shifting, office relocation, intercity moves, car and bike transport, and storage from Andhra Mini Transport in Visakhapatnam.",
      canonicalPath: "/services",
    }),
  component: ServicesIndex,
});

const images: Record<string, string> = {
  "household-shifting": householdImg,
  "intercity-interstate": intercityImg,
  "vehicle-transportation": vehicleImg,
  warehousing: warehouseImg,
  "corporate-relocation": corporateImg,
};

function ServicesIndex() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Relocation Services", url: "/services" },
        ])}
      />
      <BreadcrumbNav items={[{ label: "Services" }]} />
      <PageHero
        eyebrow="Our services"
        title="Moving and storage services in Vizag"
        intro="Choose a service for your move within Visakhapatnam or across India. Each guide explains what the team handles, how the work is scheduled and what to include in your quote request."
        image={intercityImg}
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Scope of work"
            title="Choose the service closest to your requirement"
            intro="If your move spans more than one of these, mention it when you enquire and we will quote it as a single coordinated job."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.short}
                to={s.path}
                image={images[s.slug] ?? householdImg}
              />
            ))}
          </div>
        </div>
      </section>

      <QuoteCta
        title="Not sure which service fits?"
        body="Describe the move in a message and we will tell you exactly what it involves and what it will cost."
      />
    </>
  );
}

