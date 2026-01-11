import { Suspense } from "react";
import PortfolioContent from "@/components/PortfolioContent";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <PortfolioContent />
      </Suspense>
    </main>
  );
}
