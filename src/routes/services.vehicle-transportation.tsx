import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle,
  ClipboardList,
  Eye,
  MessageCircle,
  PackageCheck,
  Shield,
  Truck,
} from "lucide-react";
import vehicleImg from "@/assets/vehicle.jpg";
import vehicleCarrierImg from "@/assets/vehicle-carrier.png";
import vehicleLoadingImg from "@/assets/vehicle-loading.png";
import { BreadcrumbNav, FaqSection, InfoCard, JsonLd, PageHero, QuoteCta, SectionHeading } from "@/components/site/Blocks";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd, pageMeta, serviceJsonLd, whatsappLink } from "@/lib/site";

const vehicleFaqs = [
  {
    question: "How do you transport cars safely from Visakhapatnam to other states?",
    answer: "Cars are transported in specialized, enclosed multi-level car carriers or covered hydraulic container trucks. Each car is securely strapped by the wheels using heavy-duty tire harness belts, ensuring zero suspension stress or movement during travel.",
  },
  {
    question: "What is the procedure for bike and motorcycle transportation from Vizag?",
    answer: "Two-wheelers have their mirrors removed, fuel tank drained to reserve levels, and are wrapped with multi-layer bubble film, corrugated sheets, and stretch wrap. Optional wooden crating is available for high-end superbikes.",
  },
  {
    question: "What documents are required for shipping my vehicle from Visakhapatnam?",
    answer: "You will need a copy of the vehicle Registration Certificate (RC), valid Insurance copy, Pollution Under Control (PUC) certificate, and owner's ID proof (Aadhaar or Driving Licence).",
  },
  {
    question: "Do you inspect and photograph the vehicle before loading in Visakhapatnam?",
    answer: "Yes, our supervisor conducts a 360-degree digital vehicle inspection, noting odometer reading, existing scratches, and accessories. You receive a signed copy before vehicle dispatch.",
  },
];


export const Route = createFileRoute("/services/vehicle-transportation")({
  head: () =>
    pageMeta({
      title: "Car & Bike Transport from Visakhapatnam | Vehicle Shifting Vizag | Andhra Mini Transport",
      description:
        "Safe car and bike transport from Visakhapatnam to any city in India. Enclosed & open car carriers, tie-down secured loading, pre & post delivery inspection. Sedans, SUVs, motorcycles, scooters. Get a free quote today.",
      keywords:
        "car transport Visakhapatnam, bike transport Vizag, vehicle shifting Visakhapatnam, car carrier Vizag, two wheeler transport Visakhapatnam, car shipping Vizag, vehicle relocation Visakhapatnam, car transport Vizag to Hyderabad, bike transport Vizag to Bangalore",
      canonicalPath: "/services/vehicle-transportation",
    }),
  component: VehicleTransportation,
});

const serviceGallery = [
  {
    src: vehicleCarrierImg,
    alt: "Multi-car carrier vehicle on highway",
    title: "Dedicated Car Carriers",
    desc: "Multi-level specialised car carriers for damage-free long-distance highway transport.",
  },
  {
    src: vehicleLoadingImg,
    alt: "Careful driving of sedan onto car carrier ramp",
    title: "Precision Ramp Loading",
    desc: "Experienced drivers and spotters navigating vehicles up secure ramp systems.",
  },
  {
    src: vehicleImg,
    alt: "Vehicle secured with safety tie downs",
    title: "Wheel Chocking & Tie-Downs",
    desc: "Multi-point strapping and wheel locking to guarantee zero movement during the journey.",
  },
];

const vehicleTypes = [
  {
    type: "Passenger cars",
    detail:
      "Sedans, SUVs and hatchbacks transported on enclosed or open car carriers with tie-down securing.",
  },
  {
    type: "Two-wheelers",
    detail:
      "Motorcycles and scooters crated or padded individually and placed in secured bays on the carrier.",
  },
  {
    type: "Multi-vehicle bookings",
    detail:
      "If you are moving a household with two vehicles, both can be coordinated on the same transport timeline.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Booking and confirmation",
    body: "Share the vehicle type, pickup location and destination. We confirm the carrier type, loading date and estimated delivery window.",
  },
  {
    step: "02",
    icon: <Eye className="h-5 w-5" />,
    title: "Pre-loading inspection",
    body: "Before loading we document the current condition of the vehicle with a physical checklist. You receive a copy.",
  },
  {
    step: "03",
    icon: <Truck className="h-5 w-5" />,
    title: "Secured loading and transit",
    body: "The vehicle is secured with industry-standard tie-downs. The carrier is sealed and dispatched on the confirmed date.",
  },
  {
    step: "04",
    icon: <PackageCheck className="h-5 w-5" />,
    title: "Delivery inspection",
    body: "At delivery the same checklist is reviewed. Any issue is documented and addressed before the job is closed.",
  },
];

function VehicleTransportation() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd("Vehicle Transportation")} />
      <JsonLd
        data={serviceJsonLd({
          name: "Car and Bike Transportation from Visakhapatnam",
          description: "Specialized vehicle carriers for safe car shipping and two-wheeler motorcycle transport from Visakhapatnam across India.",
          url: "/services/vehicle-transportation",
          serviceType: "Vehicle Transportation",
        })}
      />
      <JsonLd data={faqJsonLd(vehicleFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Vehicle Transportation", url: "/services/vehicle-transportation" },
        ])}
      />
      <BreadcrumbNav
        items={[
          { label: "Services", to: "/services" },
          { label: "Vehicle Transportation" },
        ]}
      />
      <PageHero
        eyebrow="Vehicle transportation"
        title="Cars and two-wheelers moved with the same care as household goods"
        intro="Vehicles require specific carriers, proper securing and a condition inspection at both ends. We handle all three as standard practice."
        image={vehicleImg}
        imageAlt="Car being loaded onto a vehicle carrier for long-distance transport"
      />

      {/* Vehicle types */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we transport"
            title="Passenger cars and two-wheelers, locally and nationwide"
            intro="Vehicle transport requires different equipment and handling than household goods. We use carrier types matched to the vehicle size and journey distance."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {vehicleTypes.map((v) => (
              <div
                key={v.type}
                className="flex flex-col gap-4 border border-border bg-card p-7 shadow-card transition-colors hover:border-gold/60"
              >
                <CheckCircle className="h-5 w-5 text-gold" />
                <h3 className="text-xl text-navy-deep">{v.type}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary section">
        <div className="container-page">
          <SectionHeading
            eyebrow="The process"
            title="From booking to delivery â€” documented at every stage"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
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

      {/* Photo Gallery */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Carrier Operations"
            title="Safe vehicle transport in action"
            intro="Witness how we load, strap, and transport cars and two-wheelers across state lines."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceGallery.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-sm border border-border bg-card shadow-card transition-all hover:border-gold/60"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-deep">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety messaging */}
      <section className="bg-secondary section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Safety and accountability"
            title="Your vehicle's condition is recorded before and after"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <InfoCard icon={<Eye className="h-6 w-6" />} title="Pre-loading inspection">
              Every vehicle is photographed and condition-checked before loading. The checklist
              accompanies the shipment and is reviewed at delivery.
            </InfoCard>
            <InfoCard icon={<Shield className="h-6 w-6" />} title="Secured loading">
              Tie-down straps, wheel chocks and protective covers are used as standard. Vehicles do
              not shift in transit.
            </InfoCard>
            <InfoCard icon={<Truck className="h-6 w-6" />} title="Appropriate carrier type">
              The carrier is selected based on vehicle size, distance and route conditions. We do
              not use a one-size-fits-all approach.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep section">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <p className="eyebrow text-gold">Move your vehicle</p>
          <h2 className="max-w-2xl text-3xl text-white md:text-4xl">
            Share the vehicle type, pickup city and destination city to receive a quote.
          </h2>
          <a
            href={whatsappLink(
              "Hello, I need a quote for vehicle transportation with Andhra Mini Transport.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
          >
            <MessageCircle className="h-4 w-4" />
            Get a quote on WhatsApp
          </a>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}

