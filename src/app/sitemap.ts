import type { MetadataRoute } from "next";
import { projects, projectPath } from "@/content/projects";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/projects/",
    "/studio/",
    "/contact/",
    ...projects.map(projectPath),
  ].map((path) => ({ url: `https://abyrax.com${path}` }));
}
