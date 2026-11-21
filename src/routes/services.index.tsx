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
      title: "Relocation Services in Visakhapatnam | Packers Movers Vizag | Andhra Mini Transport",
      description:
        "Andhra Mini Transport & Travels offers 5 expert relocation services in Visakhapatnam: household shifting, intercity & interstate relocation, car & bike transport, warehousing and corporate office moving. Serving Pan-India since 1993.",
      keywords:
        "relocation services Visakhapatnam, moving services Vizag, packers movers services Andhra Pradesh, shifting services Vizag, household shifting intercity relocation vehicle transport warehousing corporate moving Visakhapatnam",
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
      <JsonLd data={localBusinessJsonLd("Services")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Relocation Services", url: "/services" },
        ])}
      />
      <BreadcrumbNav items={[{ label: "Services" }]} />
      <PageHero
        eyebrow="Our services"
        title="Five ways we move what matters to you"
        intro="Each service is staffed and quoted separately, so a two-bedroom home move and a full office relocation are never treated the same way."
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

