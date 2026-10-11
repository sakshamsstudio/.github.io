/* =====================================================================
   SAKSHAM'S STUDIO — EDIT YOUR WEBSITE HERE
   ---------------------------------------------------------------------
   This is the only file you need to change for day-to-day updates.
   On GitHub: open this file → click the pencil icon → edit → "Commit changes".
   Keep the quotes "" and commas , exactly as they are.
   ===================================================================== */

window.SITE = {

  /* 1. YOUR CONTACT DETAILS ------------------------------------------- */
  // The email where client inquiries will arrive (your new Gmail).
  email: "YOUR-NEW-GMAIL@gmail.com",

  // WhatsApp number with country code, digits only, e.g. "919876543210".
  // Leave as "" to hide the WhatsApp button.
  whatsapp: "",

  // Optional profile links. Leave "" to hide any of them.
  youtube: "",      // e.g. "https://www.youtube.com/@sakshamsstudio"
  linkedin: "",     // e.g. "https://www.linkedin.com/in/your-name"
  upwork: "",       // e.g. "https://www.upwork.com/freelancers/~..."

  /* 2. SHOWREEL -------------------------------------------------------- */
  // Paste the YouTube link of your 1-minute showreel. Leave "" for placeholder.
  showreel: "",

  /* 3. PORTFOLIO VIDEOS ------------------------------------------------ */
  // Paste each YouTube link (normal or Shorts link both work).
  // vertical: true  = 9:16 short documentary   |   false = 16:9 widescreen
  work: [
    {
      title: "Why the Gita Was Spoken on a Battlefield",
      tag: "Spirituality · Short Documentary",
      note: "Script interpretation, AI visuals, atmospheric sound design.",
      youtube: "",
      vertical: true
    },
    {
      title: "1983 to 2011: India's World Cup Journey",
      tag: "Sport · Short Documentary",
      note: "Archival-style storytelling, typography, emotional pacing.",
      youtube: "",
      vertical: true
    },
    {
      title: "The Silk Route",
      tag: "History · Explainer",
      note: "Animated maps, research-led narrative, cinematic AI scenes.",
      youtube: "",
      vertical: true
    },
    {
      title: "The Story of Zero",
      tag: "Ideas · Explainer",
      note: "Complex idea made simple — motion graphics and clear structure.",
      youtube: "",
      vertical: true
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
