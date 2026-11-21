export const site = {
  name: "Andhra Mini Transport & Travels",
  tradingAs: "Andhra Mini Transport Packers and Movers",
  tagline: "Trusted Packers and Movers in Visakhapatnam Since 1993",
  established: 1993,
  experience: "30+",
  phone: "09440147473",
  phoneIntl: "+919440147473",
  whatsappNumber: "919440147473",
  email: "andhraminitransport@gmail.com",
  website: "https://www.andhraminitransport.com",
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
  serviceArea: ["Visakhapatnam", "Vizag", "Hyderabad", "Bangalore", "Chennai", "Pune", "Delhi", "Mumbai", "Kolkata", "India"],
  geo: { latitude: 17.741420683207394, longitude: 83.32542347517312 },
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
    "@id": "https://www.andhraminitransport.com/#business",
    name: site.name,
    alternateName: [site.tradingAs, "Andhra Mini Transport", "AMT Packers Movers Vizag"],
    foundingDate: String(site.established),
    telephone: site.phoneIntl,
    url: site.website,
    image: `${site.website}/favicon.jpg`,
    logo: `${site.website}/favicon.jpg`,
    description: `${site.tradingAs} — ${pageName}. Best packers and movers in Visakhapatnam, Andhra Pradesh. Trusted relocation company since 1993 offering household shifting, intercity relocation, vehicle transportation, corporate office moving and warehousing services across India. Rated 5.0 by 200+ satisfied customers.`,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI",
    openingHours: "Mo-Su 08:00-20:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3800.068300504791!2d83.32542347517312!3d17.741420683207394",
    areaServed: [
      { "@type": "City", name: "Visakhapatnam" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "Country", name: "India" },
    ],
    serviceType: [
      "Household Shifting",
      "Packers and Movers",
      "Intercity Relocation",
      "Interstate Moving",
      "Vehicle Transportation",
      "Car Transport",
      "Bike Transport",
      "Warehousing",
      "Storage Services",
      "Corporate Relocation",
      "Office Moving",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.reviewCount,
      bestRating: "5",
      worstRating: "1",
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
    sameAs: [
      "https://www.google.com/maps/place/Andhra+Mini+Transport",
    ],
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.website}${url}`,
    serviceType,
    provider: {
      "@type": "MovingCompany",
      name: site.name,
      telephone: site.phoneIntl,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
    },
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Packages`,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.website}${item.url}`,
    })),
  };
}

export function pageMeta({
  title,
  description,
  image = "/favicon.jpg",
  keywords,
  canonicalPath = "/",
}: {
  title: string;
  description: string;
  image?: string;
  keywords?: string;
  canonicalPath?: string;
}) {
  const canonicalUrl = `https://www.andhraminitransport.com${canonicalPath}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: "Visakhapatnam, Andhra Pradesh" },
      { name: "geo.position", content: "17.7414;83.3254" },
      { name: "ICBM", content: "17.7414, 83.3254" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { name: "rating", content: "general" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: "Andhra Mini Transport & Travels" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:site", content: "@AndhraMiniTransport" },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl },
    ],
  };
}
