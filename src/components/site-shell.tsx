import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-16 sm:px-6">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
