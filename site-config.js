/* =====================================================================
   SAKSHAM'S STUDIO — EDIT YOUR WEBSITE HERE
   ---------------------------------------------------------------------
   This is the only file you need to change for day-to-day updates.
   On GitHub: open this file → click the pencil icon → edit → "Commit changes".
   Keep the quotes "" and commas , exactly as they are.
   ===================================================================== */

window.SITE = {

  /* 1. YOUR CONTACT DETAILS ------------------------------------------- */
  // Public contact email (forwards to your Gmail via Cloudflare Email Routing).
  email: "hello@sakshamsstudio.com",

  // WhatsApp number with country code, digits only, e.g. "919876543210".
  // Leave as "" to hide the WhatsApp button.
  whatsapp: "",

  // Optional profile links. Leave "" to hide any of them.
  youtube: "",      // e.g. "https://www.youtube.com/@sakshamsstudio"
  linkedin: "",     // e.g. "https://www.linkedin.com/in/your-name"
  upwork: "",       // e.g. "https://www.upwork.com/freelancers/~..."

  /* 2. SHOWREEL -------------------------------------------------------- */
  // Paste the YouTube link of your 1-minute showreel. Leave "" for placeholder.
  showreel: "https://youtu.be/gtCaV3csusA",

  /* 3. PORTFOLIO VIDEOS ------------------------------------------------ */
  // Paste each YouTube link (normal or Shorts link both work).
  // vertical: true  = 9:16 short documentary   |   false = 16:9 widescreen
  work: [
    {
      title: "The Day Nokia Lost Everything",
      tag: "Business · Short Documentary · Hindi",
      note: "The rise, fall and reinvention of Nokia — a Hindi documentary with story-led pacing and archival-style visuals.",
      youtube: "https://youtu.be/9Ru49g5wSm0",
      vertical: false
    },
    {
      title: "The Cold War Explained in 120 Seconds",
      tag: "History · Explainer",
      note: "45 years of global tension made clear — maps, typography and tension-building sound.",
      youtube: "https://youtu.be/3H0KuVe455A",
      vertical: false
    },
    {
      title: "How Jasprit Bumrah Changed Fast Bowling Forever",
      tag: "Sport · Short Documentary",
      note: "A cricket story told with rhythm — build-up, stats as storytelling, and an emotional payoff.",
      youtube: "https://youtu.be/f1g2kMxrwJs",
      vertical: false
    },
    {
      title: "Arjun's Dilemma at Kurukshetra",
      tag: "Mythology · Cinematic Short",
      note: "The moment the Gita began — epic AI visuals, dramatic pacing and an emotional turn.",
      youtube: "https://youtu.be/07u-XAy2eQs",
      vertical: false
    }
  ],

  /* 4. RATES ----------------------------------------------------------- */
  // These are STARTING prices. Change the numbers to your own.
  rates: [
    {
      name: "Documentary Shorts",
      desc: "Vertical story-led edits for Shorts / Reels, up to 90 seconds.",
      usd: "60",
      inr: "4,000",
      unit: "per video",
      includes: ["Story structure & pacing", "Captions / subtitles", "Music & sound design", "2 revision rounds"]
    },
    {
      name: "Short Documentary",
      desc: "3–8 minute YouTube documentary or explainer.",
      usd: "180",
      inr: "12,000",
      unit: "per video",
      featured: true,
      includes: ["Everything in Shorts", "AI-generated visuals", "Maps & typography", "Colour correction", "Thumbnail-ready stills"]
    },
    {
      name: "Long-form Documentary",
      desc: "10–20 minute cinematic YouTube documentary.",
      usd: "400",
      inr: "28,000",
      unit: "per video",
      includes: ["Everything in Short Doc", "Research-led edit", "Motion graphics package", "Shorts cut-down (×1)", "Priority communication"]
    }
  ],

  addons: [
    ["Extra Shorts cut-down", "from $25 / ₹1,500"],
    ["Script research & polishing", "from $40 / ₹2,500"],
    ["Rush delivery (≤ 48 hrs)", "+30%"],
    ["Extra revision round", "$15 / ₹1,000"],
    ["Premiere Pro project files", "on request"]
  ]
};
