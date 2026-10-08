import type { Metadata } from "next";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/brand/logo.png",
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `https://abyrax.com${path}` },
    openGraph: {
      title: `${title} — Abyrax Studio`,
      description,
      url: `https://abyrax.com${path}`,
      type: "website",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: image === "/brand/logo.png" ? "summary" : "summary_large_image",
      title: `${title} — Abyrax Studio`,
      description,
      images: [image],
    },
  };
}
