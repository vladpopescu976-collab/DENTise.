# Dentise Website – Ghid de Publicare (Vercel + Resend)

## Structura proiectului
```
dentise-project/
├── index.html
├── api/
│   └── programare.js
├── package.json
├── vercel.json
└── README.md
```

---

## Pasul 1 – Cont Resend (gratuit, 3000 emailuri/lună)

1. Mergi la https://resend.com → Sign up
2. Verifică-ți adresa de email
3. Du-te la **API Keys → Create API Key**
   - Nume: `Dentise`
   - Permission: **Full Access**
   - Copiază cheia (începe cu `re_xxx`)

> ⚠️ La început poți trimite doar către adresa cu care te-ai înregistrat.
> Pentru a trimite către orice adresă, verifică un domeniu propriu în Settings → Domains.
> Dacă nu ai domeniu, înregistrează-te cu `vladpopescu976@gmail.com` și trimite tot acolo.

---

## Pasul 2 – Deploy pe Vercel

**Opțiunea A – GitHub (recomandat):**
1. Urcă folderul pe github.com (New repository → upload files)
2. vercel.com → New Project → Import from GitHub → Deploy

**Opțiunea B – Terminal:**
```bash
npm install -g vercel
cd dentise-project
vercel
```

---

## Pasul 3 – Variabile de mediu în Vercel

Dashboard → proiectul tău → **Settings → Environment Variables**:

| Nume | Valoare |
|------|---------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxxx` |

Save → **Redeploy**

---

## Gata!

- Site live la: `https://dentise-xxx.vercel.app`
- Programările ajung direct la `vladpopescu976@gmail.com`
- Poți conecta un domeniu propriu din Vercel → Settings → Domains
