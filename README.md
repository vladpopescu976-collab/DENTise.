# DENTise Final

Website de prezentare pentru `Dentise Laser Dentistry`, optimizat pentru desktop și mobil, construit ca site static.

## Ce include site-ul
- pagină principală premium pentru clinică stomatologică
- secțiune de servicii și beneficii pentru tehnologia laser
- formular de programare conectat la Formspree
- pagină de mulțumire după trimiterea formularului
- pagini legale:
  - `informatii-legale.html`
  - `politica-confidentialitate.html`
  - `politica-cookies.html`
- linkuri utile pentru consumatori:
  - SAL ANPC
  - cerere SAL
  - ANSPDCP
- badge-uri ANPC/SAL și SOL în footer
- favicon și logo integrate în site

## Stack
- `HTML`
- `CSS`
- `JavaScript`
- `Formspree` pentru trimiterea formularului de programare

## Structura proiectului
```text
/Users/vladpopescu/Downloads/dentise-final
├── index.html
├── styles.css
├── app.js
├── multumim.html
├── multumim.css
├── informatii-legale.html
├── politica-confidentialitate.html
├── politica-cookies.html
├── legal.css
├── assets/
│   ├── dentise-logo.png
│   ├── favicon-32.png
│   └── apple-touch-icon.png
└── README.md
```

## Cum funcționează formularul
Formularul din `index.html` trimite cererile de programare către endpoint-ul Formspree configurat în proiect.

Endpoint folosit acum:
```text
https://formspree.io/f/xqeyaoag
```

După submit reușit:
- utilizatorul este redirecționat către `multumim.html`
- clinică primește datele pe email prin Formspree

## Câmpurile formularului
- nume complet
- telefon
- serviciu
- dată preferată
- interval orar
- mesaj opțional
- confirmare că utilizatorul a citit politicile

## Reguli implementate
- formularul validează câmpurile obligatorii
- nu permite selectarea weekendului pentru programare
- cere acceptarea politicii de confidențialitate și politicii de cookies
- afișează mesaje de eroare dacă submit-ul eșuează

## Publicare
Fiind un site static, poate fi publicat ușor pe:
- `GitHub Pages`
- `Netlify`
- `Vercel`

Este important ca toate fișierele să fie urcate împreună, inclusiv:
- `assets/`
- `multumim.html`
- paginile legale

## Ce trebuie verificat înainte de publicare
1. Formularul Formspree să fie activ și legat de adresa corectă de email.
2. Toate fișierele din `assets/` să fie încărcate.
3. Linkurile din footer să funcționeze.
4. Paginile legale să fie accesibile.
5. Dacă ai date juridice exacte ale operatorului, să le completezi în `informatii-legale.html`.

## Observații
- proiectul nu mai folosește backend propriu
- nu mai folosește Resend, Vercel Functions sau SMTP
- harta Google Maps este încărcată doar la acțiunea utilizatorului
- site-ul este gândit pentru prezentare și solicitări de programare, nu pentru conturi de utilizator

## Personalizare rapidă
Dacă vrei să schimbi conținutul principal:
- text și structură: `index.html`
- stiluri principale: `styles.css`
- logică formular și interacțiuni: `app.js`
- pagină de confirmare: `multumim.html`, `multumim.css`
- pagini legale: `informatii-legale.html`, `politica-confidentialitate.html`, `politica-cookies.html`, `legal.css`

## Contact clinică în proiect
- Nume: `Dentise Laser Dentistry`
- Telefon: `0757 188 573`
- Adresă: `Piața Revoluției 7A, Botoșani`
- Program: `Luni–Vineri 09:00–17:00`
