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

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://www.andhraminitransport.com/#business",
    name: site.name,
    alternateName: [
      site.tradingAs,
      "Andhra Mini Transport",
      "AMT Packers Movers Vizag",
      "Andhra Mini Transport & Travels",
    ],
    foundingDate: String(site.established),
    telephone: site.phoneIntl,
    url: site.website,
    image: `${site.website}/favicon.jpg`,
    logo: `${site.website}/favicon.jpg`,
    description:
      "Andhra Mini Transport — trusted packers and movers in MVP Colony, Visakhapatnam since 1993. We handle household shifting, office relocation, vehicle transport and storage across India.",
    email: site.email,
    priceRange: "\u20B9\u20B9",
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
    hasMap: "https://maps.app.goo.gl/andhraminitransport",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: "Visakhapatnam", alternateName: "Vizag" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Kolkata" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      "https://www.google.com/maps/place/Andhra+Mini+Transport",
      "https://www.facebook.com/andhraminitransport",
      "https://www.justdial.com/Visakhapatnam/Andhra-Mini-Transport",
    ],
    keywords:
      "packers and movers Visakhapatnam, packers movers Vizag, Andhra Mini Transport, household shifting Vizag, office relocation Visakhapatnam",
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
    provider: { "@id": `${site.website}/#business` },
    areaServed: { "@type": "Country", name: "India" },
  };
}

/** WebSite schema — helps Google show sitelinks for brand searches like "Andhra Mini Transport" */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.website}/#website`,
    name: site.name,
    alternateName: ["Andhra Mini Transport", site.tradingAs],
    url: site.website,
    description: site.tagline,
    publisher: { "@id": `${site.website}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.website}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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
  keywords,
  image = "/favicon.jpg",
  canonicalPath,
}: {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  canonicalPath: string;
}) {
  const canonicalUrl = `${site.website}${canonicalPath}`;
  const metaTags = [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:image", content: new URL(image, site.website).href },
    { property: "og:url", content: canonicalUrl },
    { property: "og:site_name", content: "Andhra Mini Transport & Travels" },
    { property: "og:locale", content: "en_IN" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: new URL(image, site.website).href },
    // Extra brand signals
    { name: "author", content: "Andhra Mini Transport & Travels" },
    { name: "geo.region", content: "IN-AP" },
    { name: "geo.placename", content: "Visakhapatnam" },
    { name: "geo.position", content: `${site.geo.latitude};${site.geo.longitude}` },
    { name: "ICBM", content: `${site.geo.latitude}, ${site.geo.longitude}` },
  ] as Array<Record<string, string>>;

  if (keywords) {
    metaTags.splice(2, 0, { name: "keywords", content: keywords });
  }

  return {
    meta: metaTags,
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
