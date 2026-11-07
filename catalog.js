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
  { id: "population", label: "Population Ecology",  blurb: "How populations grow, which life stages matter, and how to count animals you can't see." },
  { id: "community", label: "Community Ecology",    blurb: "How species interact, coexist, and assemble into communities." },
  { id: "ecosystems", label: "Ecosystems",          blurb: "How energy flows through food chains and how communities rebuild after disturbance." },
  { id: "behavior", label: "Behavioral Ecology",    blurb: "Why animals behave the way they do, using game theory and evolution." },
  { id: "environment", label: "Environmental Science", blurb: "People, shared resources, and sustainability." },
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

  // ---------- Population Ecology ----------
  {
    title: "Population Growth: Exponential, Logistic & Chaos",
    topic: "population",
    type: "sim",
    url: "sims/population-growth/",
    desc: "Release rabbits on an island and compare exponential (r), geometric (λ), and logistic (K) growth, then push a population into cycles and chaos with a cobweb plot and bifurcation diagram.",
    tags: ["N", "r", "λ", "K", "logistic", "chaos"]
  },
  {
    title: "Which Life Stage Matters Most? (Sea Turtles)",
    topic: ["population", "field"],
    type: "sim",
    url: "sims/stage-sensitivity/",
    desc: "Protect different life stages of loggerhead sea turtles and see which raises the population growth rate most, with a stage-based matrix model, projections, and elasticity analysis.",
    tags: ["stage matrix", "sensitivity", "elasticity", "λ", "Crouse"]
  },
  {
    title: "Mark–Recapture",
    topic: ["population", "field"],
    type: "sim",
    url: "sims/mark-recapture/",
    desc: "Net, tag, and release fish in a murky pond, then recapture and estimate the population with Lincoln–Petersen and Chapman. Break the method's assumptions and see how estimates go wrong.",
    tags: ["Lincoln–Petersen", "Chapman", "population estimate", "field methods"]
  },
  {
    title: "Lotka–Volterra: Predators, Prey & Competitors",
    topic: ["population", "community"],
    type: "sim",
    url: "sims/lotka-volterra/",
    desc: "Watch hares and lynx cycle and trace their path on a phase plot, then pit two Paramecium species against each other and use isoclines to predict exclusion or coexistence.",
    tags: ["Lotka–Volterra", "predator–prey", "competition", "isoclines", "phase plot"]
  },

  // ---------- Community Ecology ----------
  {
    title: "Trophic Cascade: Spiders, Grasshoppers & Grass",
    topic: "community",
    type: "sim",
    url: "sims/trophic-cascade/",
    desc: "Three identical cages of grass, goldenrod, and grasshoppers: no spiders, hunting spiders, and glued spiders that can only scare. Watch grasshoppers switch to goldenrod for cover, and separate eating (consumptive) from fear (non-consumptive) effects.",
    tags: ["trophic cascade", "non-consumptive effects", "predation risk", "Schmitz", "indirect effects"]
  },

  // ---------- Ecosystems ----------
  {
    title: "Energy Flow Through a Food Chain",
    topic: "ecosystems",
    type: "sim",
    url: "sims/energy-flow/",
    desc: "Follow packets of energy from the sun through grass, grasshoppers, frogs, snakes, and hawks. See the losses to heat and decomposers, the pyramid of energy, and why eating lower on the food chain feeds more people.",
    tags: ["trophic levels", "10% rule", "energy pyramid", "food chain"]
  },
  {
    title: "Primary and Secondary Succession",
    topic: ["ecosystems", "community"],
    type: "sim",
    url: "sims/succession/",
    desc: "Watch bare lava rock and an abandoned farm field rebuild side by side, from lichens to mature forest. Track soil depth and see why secondary succession is so much faster.",
    tags: ["succession", "primary", "secondary", "pioneer species", "soil"]
  },

  // ---------- Behavioral Ecology ----------
  {
    title: "Hawks and Doves: Game Theory",
    topic: "behavior",
    type: "sim",
    url: "sims/hawk-dove/",
    desc: "Birds that always fight (hawks) or only display (doves) compete over food. Change the value of food and the cost of fighting and watch the population evolve to an evolutionarily stable mix.",
    tags: ["game theory", "ESS", "hawk–dove", "evolution"]
  },

  // ---------- Environmental Science ----------
  {
    title: "Tragedy of the Commons",
    topic: "environment",
    type: "sim",
    url: "sims/tragedy-commons/",
    desc: "Run a herd on a shared pasture with four other herders. See why everyone adding cows ruins the grass, then try community limits and private plots.",
    tags: ["commons", "sustainability", "Hardin", "Ostrom", "overgrazing"]
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
