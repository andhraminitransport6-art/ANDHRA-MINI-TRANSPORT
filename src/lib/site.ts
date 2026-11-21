export const site = {
  name: "Andhra Mini Transport & Travels",
  tradingAs: "Andhra Mini Transport Packers and Movers",
  established: 1993,
  experience: "30+",
  phone: "09440147473",
  phoneIntl: "+919440147473",
  whatsappNumber: "919440147473",
  rating: { value: "5.0", count: "200+", reviewCount: 200 },
  address: {
    street: "Petrol Bunk, beside Isukathota, APGO Colony, Sector 4/2, MVP Colony",
    locality: "Visakhapatnam",
    region: "Andhra Pradesh",
    postalCode: "530017",
    country: "IN",
  },
  addressLine:
    "Petrol Bunk, beside Isukathota, APGO Colony, Sector 4/2, MVP Colony, Visakhapatnam, Andhra Pradesh 530017",
  hours: "Monday to Sunday, 8:00 AM to 8:00 PM",
} as const;

export const customerReviews = [
  {
    name: "Rohith kumar",
    role: "Verified Customer",
    service: "Intercity Relocation (Vizag to Hyderabad)",
    location: "Visakhapatnam",
    rating: 5,
    date: "2026-02-14",
    text: "Shifted our complete 3BHK household from Visakhapatnam to Hyderabad. The team arrived on time at MVP Colony, packed every fragile item and appliance with multi-layer bubble wrap, and delivered everything safely without a single scratch. Truly professional and trustworthy service!",
  },
  {
    name: "kiran",
    role: "Verified Customer",
    service: "Vehicle Transportation (Car & Bike)",
    location: "Visakhapatnam to Bangalore",
    rating: 5,
    date: "2026-01-28",
    text: "Transported my car and Royal Enfield bike from Vizag to Bangalore. Excellent communication throughout the journey with regular updates on transit status. Both vehicles arrived on schedule with zero damage. Transparent pricing and exceptional customer care.",
  },
  {
    name: "vineel",
    role: "Verified Customer",
    service: "Local Household Shifting",
    location: "Visakhapatnam (Madhurawada)",
    rating: 5,
    date: "2026-03-05",
    text: "Reliable and punctual packers and movers in Vizag. Shifted our home locally within Visakhapatnam. The staff was polite, hardworking, and handled heavy wooden furniture with immense care. Smooth loading and unloading made moving day completely stress-free!",
  },
] as const;

export function whatsappLink(
  message = "Hello, I would like a quote for relocation with Andhra Mini Transport.",
) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phoneIntl}`;

export const services = [
  {
    slug: "household-shifting",
    path: "/services/household-shifting",
    title: "Household Shifting",
    short: "Local and long-distance home moves with careful packing, loading and placement.",
  },
  {
    slug: "intercity-interstate",
    path: "/services/intercity-interstate",
    title: "Intercity and Interstate Relocation",
    short: "Door-to-door moves from Visakhapatnam to any city across India.",
  },
  {
    slug: "vehicle-transportation",
    path: "/services/vehicle-transportation",
    title: "Vehicle Transportation",
    short: "Car and two-wheeler carrier movement with secured loading and tracking.",
  },
  {
    slug: "warehousing",
    path: "/services/warehousing",
    title: "Warehousing and Storage",
    short: "Short-term and long-term storage in secure, inventoried facilities.",
  },
  {
    slug: "corporate-relocation",
    path: "/services/corporate-relocation",
    title: "Corporate Relocation",
    short: "Planned office moves scheduled to keep business downtime to a minimum.",
  },
] as const;

export function localBusinessJsonLd(pageName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: site.name,
    alternateName: site.tradingAs,
    foundingDate: String(site.established),
    telephone: site.phoneIntl,
    url: "https://andhraminitransport.lovable.app/",
    description: `${site.tradingAs} — ${pageName}. Packers and movers in Visakhapatnam serving all of India since 1993.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: "India",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.reviewCount,
    },
    review: customerReviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.name,
      },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.text,
    })),
  };
}

export function pageMeta({
  title,
  description,
  image = "/favicon.jpg",
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
  };
}
