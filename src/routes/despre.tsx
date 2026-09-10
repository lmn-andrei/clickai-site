import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/despre")({ component: DesprePage });

const STEPS = [
  {
    n: "01",
    title: "colectare",
    text: "Surse publice sunt citite continuu. Lista actuală stă la Surse. Articolele deja văzute nu revin.",
  },
  {
    n: "02",
    title: "filtru tematic",
    text: "Un model local decide dacă textul e strict despre inteligență artificială. Cuvintele-cheie nu sunt criteriul.",
  },
  {
    n: "03",
    title: "verificare",
    text: "Claude citește materialul. Fără acest pas, textul nu se publică. Nu e o verificare manuală de redacție.",
  },
  {
    n: "04",
    title: "redactare",
    text: "Textul e scris în română, ton neutru, fără fapte care nu stau în sursă. Categoria e pusă în același pas.",
  },
  {
    n: "05",
    title: "publicare",
    text: "Articolul intră în Flux, cu data publicării, categoria și linkurile sursă la vedere.",
  },
];

export function DesprePage() {
  return (
    <SiteShell>
      <header className="pt-10">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">
          [Redacție]
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">
          Ce este clickai
        </h1>
        <p className="mt-3 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
          clickai este un jurnal automat de monitorizare a inteligenței
          artificiale, scris în română. Citește surse publice, trece textul prin
          modele și publică un singur flux de știri.
        </p>
      </header>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Cum se construiește o știre</h2>
        <ol className="mt-6 space-y-7">
          {STEPS.map((step) => (
            <li key={step.n}>
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                {step.n} · {step.title}
              </p>
              <p className="mt-2 max-w-xl text-[0.98rem] leading-relaxed text-ink-soft">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Ce nu facem</h2>
        <ul className="mt-4 max-w-xl list-disc space-y-2 pl-5 text-[0.98rem] leading-relaxed text-ink-soft">
          <li>Nu inventăm citate, cifre sau date de lansare.</li>
          <li>Nu publicăm speculații ca știri.</li>
          <li>
            Nu clasificăm un articol ca AI doar pentru că menționează un chatbot
            în treacăt.
          </li>
        </ul>
      </section>
    </SiteShell>
  );
}
