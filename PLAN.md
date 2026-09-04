# Plan de lucru clickai.ro

## Decizii blocate

- Public: România.
- Ritmul: 3–5 știri / zi.
- Un singur registru: doar știri. Fără presupuneri, fără bifa „verificat”.
- Domeniu: strict AI (modele, agenți, robotică, cercetare, industrie AI).
- Fără ads, fără Telegram, fără newsletter în faza asta.
- Transparența AI: o frază în Despre, nu un banner pe fiecare card.

## Format de articol (recomandare)

Brief de 180–250 de cuvinte, nu longform.

1. Titlu factual, fără clickbait.
2. Bloc „Pe scurt” — 3 puncte.
3. 3 paragrafe: ce s-a anunțat / de ce contează / ce nu e în sursă.
4. Link către original.

De ce: la 3–5 piese pe zi, cititorul scanează fluxul în 2 minute și deschide 1–2 brief-uri. Longform-ul se adaugă ulterior, ca ediție de weekend, nu ca format implicit.

## Categorii

| Categorie | Intră | Nu intră |
|---|---|---|
| Modele | lansări, greutăți, benchmark-uri de laborator | orice app care „are GPT” |
| Agenți | voice agents, tool use, orchestratoare | chatbot de marketing |
| Robotică | modele și stive AI pentru roboți | automatizări industriale fără model |
| Cercetare | preprinturi, papers, metode | opinii, thread-uri |
| Industrie | produs, distribuție, cloud, leadership AI | bursă generală, telecom fără AI |

Cinci sunt suficiente la acest volum. Nu facem pagini separate de categorie; filtrul de pe Flux e destul.

## Faze

### Faza 1 — Structură și design (acum)
- Scos Presupuneri din nav, flux, CSS.
- Scos „verificat din 2 surse” și celebrarea redacției.
- Nav: Flux / Surse / Despre.
- Filtre chip pe homepage.
- Șablon de articol cu „Pe scurt”.
- Despre rescris pe pipeline-ul real (fără coadă manuală).
- Păstrat: consolă, hârtie, Fraunces + IBM Plex, coloană îngustă, linie verde, puls.

### Faza 2 — Publicare pe clickai.ro
- Înlocuire fișiere statice.
- Canonical fără `.html` (regulă de server / Cloudflare).
- `og:type=website` pe home.
- Footer cu operator, contact, GDPR — înainte de trafic real.

### Faza 3 — Pipeline automat
- Scrape → filtru tematic → rescriere brief → publicare fișier.
- Același HTML ca în prototip, generat, nu scris de mână.
- Sursele se lărgesc; cardul rămâne identic.

### Faza 4 — Distribuție
- RSS de ieșire.
- Telegram / newsletter, pe același brief.

## Ce nu se atinge încă
Monetizare, conturi, dark mode, imagini generate, căutare, arhivă lunară.
