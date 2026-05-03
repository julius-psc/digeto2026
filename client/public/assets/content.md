# Digeto — Website Content

---

## 1. Navbar

**Logo:** Digeto (SVG wordmark + tagline, dark variant)

**Navigation links:**
- Product → AI Engine / Global Pods / Partner Network
- Solutions → For Early Stage / For Series A+
- Company → About Us / Founders

**CTA button:** Book a call →

---

## 2. Hero

**Headline:**
> Global revenue.
> Zero headcount.

*("Global" is highlighted in pink #E543FF)*

**Subheadline:**
> The instant global sales force that sources your leads and closes your deals in any market.

**CTAs:**
- Primary button: Book a Call →
- Secondary link: See How It Works

**Layout:** Two-column — text on the left, interactive globe on the right.

**Illustration — Globe:**
```
[ Text: headline + subheadline + CTAs ]  |  [ Spinning 3D globe ]
                                          |
  "Global revenue.                        |      ___
   Zero headcount."                       |    /     \
                                          |   | globe |
  [Book a Call →]  [See How It Works]    |    \_____/
```
An interactive WebGL globe that spins slowly. It represents Digeto's global reach across markets. Rendered via a custom `Globe` component.

---

## 3. Problem Solver

**Heading:**
> Every obstacle your sales team faces, we handle it.

**Layout (desktop):** Physics animation — problem tags fall from above, get "swallowed" by the Digeto logo box, then solution tags rise from below.

**Layout (mobile):** Static two-column list — problem on the left, solution on the right.

**Problems → Solutions:**

| Problem | Solution |
|---|---|
| No sales infrastructure | Sales infrastructure, built for you |
| Consultants don't execute | Execution-first, results-driven |
| Tools don't close deals | AI that actually closes deals |
| Going global is too expensive | Global markets from day one |

**Illustration — Physics Drop (desktop):**
```
  [ No sales infrastructure ✕ ]  [ Consultants don't execute ✕ ]
         [ Tools don't close deals ✕ ]   [ Too expensive ✕ ]
                          |
                          ↓  (fall with physics / gravity)
                          |
                    ┌─────────┐
                    │  Digeto │  ← logo box glows pink on completion
                    │   logo  │
                    └─────────┘
                          |
                          ↓  (solutions rise up after all problems absorbed)
                          |
              ✓ Sales infrastructure, built for you
              ✓ Execution-first, results-driven
              ✓ AI that actually closes deals
              ✓ Global markets from day one
```
Problem tags are styled in muted black. Solution tags are styled in pink (#E543FF). The central Digeto logo box glows pink once the animation completes.

---

## 4. Bento Grid — "Everything you need to sell globally."

**Heading:**
> Everything you need to sell globally.

*(sell globally is in pink)*

**Subheading:**
> Two systems. One outcome: revenue.

**Cards:**

### Card 1 — AI scale. Human conversion. *(wide, spans 2 columns)*
> We don't advise. We execute.

**Illustration — Video:**
```
┌──────────────────────────────────────────┐
│                                          │
│   [ ▶ ]  digeto-hero-video.mp4           │
│                                          │
│   Click to play. Loops silently.         │
│   Pause button appears on hover.         │
│                                          │
└──────────────────────────────────────────┘
```
A fullscreen video card. The video (`digeto-hero-video.mp4`) plays on click. A frosted glass play/pause button overlays the center.

---

### Card 2 — AI GTM Engine *(single column)*
> Lead gen, CRM, outbound — fully automated from our India hub.

**Illustration — Orbiting Circles:**
```
              ┌─────────────────────────┐
              │                         │
              │     [Users] [Chart]     │  ← outer orbit (reverse)
              │   [Brain]        [Tgt]  │
              │      [LinkedIn]         │
              │        [Mail]           │
              │     ┌─────────┐         │
              │     │ Digeto  │         │  ← center logo
              │     │  logo   │         │
              │     └─────────┘         │
              │                         │
              └─────────────────────────┘
```
Two rings of icons orbit the Digeto logo:
- **Inner ring** (clockwise, 18s): LinkedIn, Mail, Brain — pink and black icons
- **Outer ring** (counter-clockwise, 26s): Users, Chart, Target — black and pink icons

All icons use only pink (#E543FF) and black (#0F1117).

---

### Card 3 — Regional Execution Pods *(single column)*
> Local networks. Local language. Deals closed on the ground.

**Illustration — Animated Beam:**
```
  🇪🇺 EU  ─────────────────────────╮
                                    │
  🌏 APAC ──────────────────────── 🇮🇳 India (hub)
                                    │
  🇦🇪 GCC ─────────────────────────╯
```
Three regional nodes (EU, APAC, GCC) on the left each have an animated pink beam flowing into the India hub on the right. The beams animate continuously, representing real-time execution pipelines. All beam gradients are pink (#E543FF).

---

## 5. Pricing

**Plans:**

| Plan | Price | Target |
|---|---|---|
| Explore | €100/month | Early-stage startups |
| Launch *(Most Popular)* | €2,000/month | Series A+ & SMEs |
| Scale | €5,000/month | Large & high-growth |

**Features included across plans:**
- GTM execution engine
- Market identification & validation
- Outbound & pipeline management
- Investor network access (300+)
- Full execution accountability
- Dedicated resource *(Launch & Scale)*
- Local network access *(Launch & Scale)*
- Multi-market execution *(Scale only)*
- Fundraising support *(Explore & Launch)*

**Footer note:**
> 10% on closed sales · 5% on fundraising. We earn when you do.

**CTA:** Get Started → (links to Calendly booking)

---

## 6. Partners

**Label:** Our partners

**Partners listed:**
- Founders Institute
- Let's VAI
- T-Hub
- LVL Up

Each partner is shown as a logo + name, greyscale by default, full colour on hover.

---

## 7. Why Not You? *(CTA section)*

**Headline:**
> Why not you?

*("you?" is in pink)*

**Subheadline:**
> The founders who move first win the market. Stop waiting and start scaling.

**CTAs:**
- Primary button: Book a Call → (Calendly link)
- Secondary link: See Pricing

---

## 8. Footer

**Logo:** Digeto wordmark

**Addresses:**
- **Europe** — 8 bis Rue Abel, 75012 Paris, France
- **India** — No.74 MASS Complex, JP Nagar 3rd Phase, Bangalore 560078

**Email:** contact@digeto.io

**Social links:**
- LinkedIn → linkedin.com/company/digeto
- Instagram → instagram.com/digeto.io
- X (Twitter) → x.com/digeto_io

**Legal links:**
- Privacy Policy
- Terms of Service

**Copyright:** © 2026 Digeto. All rights reserved.
