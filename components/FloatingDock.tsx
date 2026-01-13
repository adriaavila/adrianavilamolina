import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { FloatingDockClient } from "./FloatingDockClient";

const NAVIGATION_QUERY =
  defineQuery(`*[_type == "navigation" && !(lower(title) in ["experience", "achievements", "education", "certifications"]) && !(lower(href) in ["#experience", "#achievements", "#education", "#certifications"])] | order(order asc){
  title,
  href,
  icon,
  isExternal
}`);

export async function FloatingDock() {
  try {
    const { data: navItems } = await sanityFetch({ query: NAVIGATION_QUERY });

    if (!navItems || navItems.length === 0) {
      return null;
    }

    return <FloatingDockClient navItems={navItems} />;
  } catch (error) {
    console.error("FloatingDock fetch failed", error);
    return null;
  }
}
