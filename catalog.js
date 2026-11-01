/* =====================================================================
   CATALOG — the only file you need to edit to add, remove, or move items.
   =====================================================================

   TOPICS become the tabs on the home page, in the order listed here.
     id    : short code used in the page address (e.g. .../#soils)
     label : the text shown on the tab
     blurb : one line shown under the tabs when that topic is open

   ITEMS are the cards. Each item needs:
     title  : card title
     topic  : one of the topic ids below
     type   : "sim"  = an HTML simulation stored in this repo (sims/<folder>/index.html)
              "app"  = a web app hosted somewhere else (Google Apps Script, etc.)
              "link" = any other outside resource (a Google Doc, video, website)
     url    : for "sim", the folder path, e.g. "sims/osmosis/"
              for "app" or "link", the full https:// address
     desc   : one or two sentences describing what students do
     tags   : (optional) short keywords that show on the card and help search

   To add a new simulation:
     1. Create a folder in /sims, e.g. sims/soil-texture/
     2. Put the HTML in that folder and name it index.html
     3. Copy one of the items below, paste it in, and change the details.
   ===================================================================== */

const TOPICS = [
  { id: "cells",  label: "Cells & Membranes",       blurb: "Diffusion, osmosis, and how cells respond to their surroundings." },
  { id: "plants", label: "Plant Science",           blurb: "How plants capture carbon and move water." },
  { id: "soils",  label: "Soil Science",            blurb: "Soil water, soil chemistry, and the exchange of nutrients." },
  { id: "field",  label: "Field Methods & Conservation", blurb: "Tools and background for working as a field biologist." }
];

const ITEMS = [
  // ---------- Cells & Membranes ----------
  {
    title: "Osmosis",
    topic: "cells",
    type: "sim",
    url: "sims/osmosis/",
    desc: "Two chambers separated by a membrane that lets water through but not solutes. Change the solute on each side and watch the water level shift.",
    tags: ["osmosis", "tonicity", "membranes"]
  },
  {
    title: "Osmolarity & Tonicity: Plant Cells",
    topic: "cells",
    type: "sim",
    url: "sims/plant-cell-tonicity/",
    desc: "Compare three plant cells in hypotonic, isotonic, and hypertonic solutions. See turgor pressure, plasmolysis, and water potential (Ψ = Ψs + Ψp).",
    tags: ["tonicity", "plasmolysis", "turgor", "water potential"]
  },

  // ---------- Plant Science ----------
  {
    title: "Photosynthesis: C₃, C₄, CAM & Photorespiration",
    topic: "plants",
    type: "sim",
    url: "sims/photosynthesis-pathways/",
    desc: "Adjust light, CO₂, and temperature to see what limits photosynthesis, watch Rubisco choose between CO₂ and O₂, and compare C₃, C₄, and CAM plants across habitats.",
    tags: ["photosynthesis", "Rubisco", "C4", "CAM", "quiz"]
  },
  {
    title: "Water Potential in Plants",
    topic: "plants",
    type: "sim",
    url: "sims/plant-water-potential/",
    desc: "Follow water from the soil into the root, up the xylem, and out through transpiration, using the water potential equation at each step.",
    tags: ["water potential", "xylem", "transpiration"]
  },

  // ---------- Soil Science ----------
  {
    title: "Soil Water",
    topic: "soils",
    type: "sim",
    url: "sims/soil-water/",
    desc: "Explore soil water potential, soil water content, infiltration and permeability, and what happens to redox chemistry when soils flood.",
    tags: ["soil water", "infiltration", "redox", "water potential"]
  },
  {
    title: "Soil Cation Exchange Lab",
    topic: "soils",
    type: "sim",
    url: "sims/soil-cation-exchange/",
    desc: "See why some cations are held more tightly than others, build soils with different CEC and base saturation, and watch roots trade H⁺ for nutrients.",
    tags: ["CEC", "base saturation", "cations", "roots"]
  },
  {
    title: "Soil pH: Hydrogen Adsorption & Desorption",
    topic: "soils",
    type: "sim",
    url: "sims/soil-ph/",
    desc: "Compare two soils side by side as pH changes. Add acid or lime and see how H⁺ and Al³⁺ displace base cations and how buffering differs between sandy and clay soils.",
    tags: ["pH", "buffering", "lime", "CEC"]
  },

  // ---------- Field Methods & Conservation ----------
  {
    title: "Environmental Laws in the Field",
    topic: "field",
    type: "sim",
    url: "sims/environmental-laws/",
    desc: "Learn environmental laws from the perspective of a consulting or agency biologist: what triggers each law, what you survey for, and what goes in your report.",
    tags: ["CEQA", "NEPA", "ESA", "CESA", "Clean Water Act", "quiz"]
  }

  // ---------- Example web app (delete the two slashes at the start of each line to use) ----------
  // ,{
  //   title: "Trail Camera Reviewer",
  //   topic: "field",
  //   type: "app",
  //   url: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
  //   desc: "Review trail camera images and record species detections. Sign in with your college Google account.",
  //   tags: ["camera traps", "data"]
  // }
];
