import { PremiumPortfolio } from "@/components/PremiumPortfolio";
import type { SiteLocale } from "@/lib/data/site-content";

type PortfolioContentProps = {
  locale: SiteLocale;
};

function PortfolioContent({ locale }: PortfolioContentProps) {
  return <PremiumPortfolio locale={locale} />;
}

export default PortfolioContent;
