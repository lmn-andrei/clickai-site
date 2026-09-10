import { CATEGORIES, INTENT_HINTS, type Category } from "@/lib/articles";
import { cn } from "@/lib/utils";

type FiltersProps = {
  intent: string;
  category: Category | "Toate";
  onIntentChange: (value: string) => void;
  onCategoryChange: (value: Category | "Toate") => void;
  resultCount: number;
  totalCount: number;
};

export function Filters({
  intent,
  category,
  onIntentChange,
  onCategoryChange,
  resultCount,
  totalCount,
}: FiltersProps) {
  const filtered = Boolean(intent.trim()) || category !== "Toate";

  return (
    <section className="relative z-10 mt-8 space-y-5" aria-label="Filtre">
      <div>
        <label
          htmlFor="intent"
          className="font-mono text-xs tracking-widest text-muted uppercase"
        >
          Ce vrei să faci cu AI?
        </label>
        <input
          id="intent"
          type="search"
          value={intent}
          onChange={(event) => onIntentChange(event.target.value)}
          placeholder="ex. să răspund la clienți, să scriu mai repede, să învăț modelele noi"
          className="relative z-10 mt-2 h-11 w-full rounded-md border border-line bg-paper px-3 text-sm text-ink outline-none placeholder:text-faint focus:border-accent"
        />
        <div className="relative z-10 mt-3 flex flex-wrap gap-2">
          {INTENT_HINTS.map((hint) => {
            const active = intent === hint.label;
            return (
              <button
                key={hint.label}
                type="button"
                aria-pressed={active}
                onClick={() => onIntentChange(active ? "" : hint.label)}
                className={cn(
                  "pointer-events-auto min-h-11 rounded-full border px-4 py-2 font-mono text-xs",
                  active
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-line bg-paper text-muted hover:border-ink hover:text-ink",
                )}
              >
                {hint.label}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="font-mono text-xs tracking-widest text-muted uppercase">
          Categorie
        </p>
        <div className="relative z-10 mt-3 flex flex-wrap gap-2">
          {(["Toate", ...CATEGORIES] as const).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => onCategoryChange(item)}
              className={cn(
                "pointer-events-auto min-h-11 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide",
                category === item
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-paper text-muted hover:border-ink hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filtered ? (
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted">
          <p>
            {resultCount === 0
              ? "Nicio știre pentru filtrele alese"
              : `${resultCount} ${resultCount === 1 ? "știre" : "știri"} din ${totalCount}`}
          </p>
          <button
            type="button"
            className="min-h-11 text-ink underline-offset-2 hover:underline"
            onClick={() => {
              onIntentChange("");
              onCategoryChange("Toate");
            }}
          >
            Resetează
          </button>
        </div>
      ) : null}
    </section>
  );
}
