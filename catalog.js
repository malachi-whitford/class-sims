/* =====================================================================
   CATALOG — the only file you need to edit to add, remove, or move items.
   =====================================================================

   TOPICS become the tabs on the home page, in the order listed here.
     id    : short code used in the page address (e.g. .../#soils)
     label : the text shown on the tab
     blurb : one line shown under the tabs when that topic is open

   ITEMS are the cards. Each item needs:
     title  : card title
     topic  : one of the topic ids below, or a list to show the card
              under more than one tab, e.g. ["community", "field"]
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
  { id: "community", label: "Community Ecology",    blurb: "How species interact, coexist, and assemble into communities." },
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

  // ---------- Community Ecology ----------
  {
    title: "Competition: Gause's Yeasts & Paramecia",
    topic: "community",
    type: "sim",
    url: "sims/competition/",
    desc: "Fit the Lotka–Volterra model to Gause's real 1932 yeast data, predict who wins, then explore the phase plane and why Gause's Paramecium species could or could not share a tube.",
    tags: ["Gause", "competition", "Lotka–Volterra", "niche overlap", "competitive exclusion", "real data", "quiz"]
  },
  {
    title: "Predator–Prey: The Snowshoe Hare Cycle",
    topic: "community",
    type: "sim",
    url: "sims/predator-prey/",
    desc: "Model the 10-year hare cycle, rerun Krebs's Kluane food-and-fence experiment and compare with the paper, add fear like Zanette's song sparrows, and explore Holling's functional responses.",
    tags: ["Krebs", "Kluane", "snowshoe hare", "predation", "landscape of fear", "functional response", "quiz"]
  },
  {
    title: "Island Biogeography: Mangrove Island Experiments",
    topic: "community",
    type: "sim",
    url: "sims/island-biogeography/",
    desc: "Fumigate Simberloff & Wilson's Florida Keys mangrove islands and watch them recolonize against the paper's counts, then shrink islands like Simberloff did and estimate species lost to habitat loss.",
    tags: ["Simberloff & Wilson", "MacArthur–Wilson", "species–area", "fragmentation", "turnover", "quiz"]
  },
  {
    title: "Disturbance & Succession: Sousa's Boulder Field",
    topic: "community",
    type: "sim",
    url: "sims/disturbance-succession/",
    desc: "Watch seaweeds take over intertidal boulders, roll boulders like winter waves, compare a whole boulder field with Sousa's 1979 census, and test the intermediate disturbance hypothesis.",
    tags: ["Sousa", "intertidal", "succession", "intermediate disturbance", "real data", "quiz"]
  },

  // ---------- Field Methods & Conservation ----------
  {
    title: "Environmental Laws in the Field",
    topic: "field",
    type: "sim",
    url: "sims/environmental-laws/",
    desc: "Learn environmental laws from the perspective of a consulting or agency biologist: what triggers each law, what you survey for, and what goes in your report.",
    tags: ["CEQA", "NEPA", "ESA", "CESA", "Clean Water Act", "quiz"]
  },
  {
    title: "Field Biology Species Review",
    topic: "field",
    type: "sim",
    url: "sims/field_bio_review/",
    desc: "Flashcard study tools for the species from each semester's BIOL 7 field trips. Pick your semester and practice your IDs.",
    tags: ["BIOL 7", "species ID", "flashcards"]
  },
  {
    title: "Species Diversity Calculator",
    topic: ["community", "field"],
    type: "sim",
    url: "sims/species-diversity/",
    desc: "Enter species counts from several sites (or use an example data set) to calculate richness, Simpson's and Shannon's indices, and alpha, beta, and gamma diversity, with charts, step-by-step math, and a check-your-work tool.",
    tags: ["biodiversity", "Simpson", "Shannon", "beta diversity", "Jaccard"]
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
