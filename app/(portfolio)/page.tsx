import PortfolioContent from "@/components/PortfolioContent";
import type { SiteLocale } from "@/lib/data/site-content";

type HomeProps = {
  searchParams: Promise<{
    lang?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { lang } = await searchParams;
  const locale: SiteLocale = lang === "es" ? "es" : "en";

  return (
    <main className="min-h-screen">
      <PortfolioContent locale={locale} />
    </main>
  );
}
