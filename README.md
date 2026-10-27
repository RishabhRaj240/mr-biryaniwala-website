# 🍛 MR. BIRIYANIWALA

### Where Indian Flavours Meet Cinematic Digital Experiences.
> 184 Gouger Street, Adelaide SA 5000 · (08) 8231 9988 · 100% Halal Certified

A premium, immersive Indian restaurant web experience celebrating authentic royal Hyderabadi Dum Pukht biryani sealed in hand-hammered copper handis with whole-wheat dough (*purdah*), alongside screaming-hot 480°C red ironbark charcoal tandoori meats.

<p align="center">
  <strong>🔥 Rich Flavours · 🎬 Cinematic Motion · ✨ Fast & Fully Responsive</strong>
</p>

---

## 🌟 The Experience

MR. BIRIYANIWALA reimagines the traditional restaurant website with a premium dark aesthetic (`#0A0706`), warm saffron and copper lighting, floating ingredients, and scroll-driven interactive dish scrubbing.

### 🍽️ Signature Craft Menu

| 🍛 Dish | 📝 Highlight & Craft |
|---|---|
| **Gosht Dum Biryani** | Aged long-grain basmati, pasture-raised goat on the bone, 24 strands of Kashmiri saffron under dough purdah |
| **Old Delhi Murgh Makhani** | Charcoal-charred chicken simmered 8 hours in vine-ripened tomatoes, churned butter & kasuri methi |
| **Charcoal Tandoori Murgh** | Whole spring chicken steeped 12 hours in hung buffalo curd, cold-pressed mustard oil & Mathania chillies |
| **Peshawari Lamb Seekh** | Pasture lamb shoulder with marrow, green cardamom, smoked cloves over screaming-hot red ironbark coals |
| **Tandoori Malai Paneer Tikka** | Full cream cottage paneer in yellow mustard seed, carom seeds, and blistered sweet peppers |
| **24-Hour Dal Makhani** | Slow-simmered black urad lentils & kidney beans steeped overnight over dying coals with white butter |
| **Clay Oven Garlic Butter Naan** | Slapped firmly against 480°C clay wall, blistered in 30 seconds & basted with smoking garlic ghee |
| **Alphonso Mango Kesari Lassi** | Chilled buffalo milk curd hand-whisked with Ratnagiri Alphonso pulp, green cardamom & silver vark |

---

## ✨ Features & Performance Architecture

- **Interactive Scroll-Scrubbed Hero:** Seamlessly scrubs through 8 signature craft dishes using GSAP ScrollTrigger and high-framerate I-frame encoded video clips (`keyint=2`).
- **High-Performance On-Demand Streaming:**
  - Faststart progressive video streaming with zero seek delay (< 5ms).
  - Device-aware video routing (`-m.mp4` for mobile devices) saving over 60% bandwidth.
  - Preloaded high-priority hero posters for sub-second Largest Contentful Paint (LCP).
  - Asynchronous fonts and deferred non-blocking scripts.
  - CSS `content-visibility: auto` to optimize rendering and reduce memory footprint.
- **Fully Responsive Multi-Screen Design:**
  - Modern `100dvh` viewport handling with fallback for mobile address bars.
  - Slide-out mobile navigation drawer with live opening hours and tap-to-call.
  - Mobile quick dish selector chips carousel.
  - Lenis smooth inertia scrolling on desktop wheel while respecting native touch physics on mobile.
- **Complete Culinary Experience:**
  - **The Dum Pukht Craft:** Three-stage methodology of purdah dough seal, kalai copper handis, and top-and-bottom ember convection.
  - **24 Sacred Potli Spices:** Botanical tasting notes on Kashmiri Saffron, Dagad Phool, Shahi Jeera, Javitri, Star Anise, and Mathania Chillies.
  - **Curated Menu:** Filterable dishes (Biryanis, Tandoori, Curries, Breads & Drinks) with dietary badges (`HALAL`, `GF`, `VEG`).
  - **Clay Pit Tandoor:** Showcasing Australian red ironbark lump charcoal searing at 480°C.
  - **Visit & Booking:** Gouger Street location details, live Adelaide timezone hours check, Google Maps directions, and table reservation request form.

---

## 🛠️ Built With

- **HTML5:** Semantic architecture, accessible ARIA roles, responsive viewport meta.
- **CSS3:** Custom luxury design tokens, HSL/RGB tailored palettes, glassmorphism, responsive clamp units, zero CSS frameworks.
- **JavaScript (ES6+):** Pure vanilla JavaScript engine, GSAP 3.12.5 + ScrollTrigger, Lenis 1.1.13.
- **Media Optimization:** FFmpeg automated delogo & keyint processing, WebP image encoding.

---

## 🚀 Run Locally

You can serve the project using any static HTTP server:

```bash
# Using Python 3
python3 -m http.server 8080

# Or using Node.js
npx serve .
```

Open `http://localhost:8080` in your web browser.

---

## 📍 Location & Contact

- **Address:** 184 Gouger Street, Adelaide SA 5000
- **Phone:** (08) 8231 9988
- **Hours:** Monday – Sunday · 11:30 AM – 10:30 PM
- **Certification:** 100% Certified Halal Meats

---

<p align="center">
  <strong>Made with ❤️, creativity, and a passion for culinary excellence.</strong>
</p>
