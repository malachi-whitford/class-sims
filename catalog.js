/* =====================================================================
   CATALOG — the only file you need to edit to add, remove, or move items.
   =====================================================================

   TOPICS become the tabs on the home page, in the order listed here.
     id       : short code used in the page address (e.g. .../#soils)
     label    : the text shown on the tab
     blurb    : one line shown under the tabs when that topic is open
     sections : headings inside the tab: { id, label, blurb (optional) }

   ITEMS are the cards. Each item needs:
     title  : card title
     where  : list of "topic/section" places the card appears, e.g.
              ["ecology/populations"], or two places to show it in two tabs:
              ["ecology/populations"]
              (cards appear in the order they are listed in this file)
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
  { id: "cells", label: "Cells & Plants",
    blurb: "How water moves into and out of cells, and how plants capture carbon and move water.",
    sections: [
      { id: "membranes", label: "Cells and membranes" },
      { id: "plants",    label: "Plant physiology" } ] },
  { id: "soils", label: "Soils",
    blurb: "How soils hold water and nutrients.",
    sections: [
      { id: "water",     label: "Soil water" },
      { id: "chemistry", label: "Soil chemistry" } ] },
  { id: "ecology", label: "Ecology & Conservation",
    blurb: "From single populations to whole ecosystems, and how science informs conservation.",
    sections: [
      { id: "populations",  label: "Populations",                blurb: "How populations grow, and how we count and project them." },
      { id: "interactions", label: "Species interactions",       blurb: "Predators, prey, competitors, and contests." },
      { id: "ecosystems",   label: "Communities and ecosystems", blurb: "Diversity, energy flow, and change over time." },
      { id: "conservation", label: "Conservation and environmental policy", blurb: "Laws, shared resources, and managing land." } ] },
  { id: "atmosphere", label: "Atmosphere & Climate",
    blurb: "How gases in the air interact with light and weather: the greenhouse effect, the ozone layer, air quality, and global winds.",
    sections: [
      { id: "climate", label: "Greenhouse effect and climate" },
      { id: "ozone",   label: "The ozone layer" },
      { id: "air",     label: "Air quality" },
      { id: "circulation", label: "Global winds and climate zones" } ] },
  { id: "fieldbio", label: "Field Biology Review",
    blurb: "Species ID practice for BIOL 7 field trips.",
    sections: [
      { id: "species", label: "Species identification" } ] }
];

// Old page addresses (e.g. .../#population) still open the matching new tab.
const TOPIC_ALIASES = { plants: "cells", population: "ecology", community: "ecology",
  ecosystems: "ecology", behavior: "ecology", environment: "ecology", field: "ecology" };

const ITEMS = [
  {
    title: "Osmosis",
    where: ["cells/membranes"],
    type: "sim",
    url: "sims/osmosis/",
    desc: "Two chambers separated by a membrane that lets water through but not solutes. Change the solute on each side and watch the water level shift.",
    tags: ["osmosis", "tonicity", "membranes"]
  },
  {
    title: "Osmolarity & Tonicity: Plant Cells",
    where: ["cells/membranes"],
    type: "sim",
    url: "sims/plant-cell-tonicity/",
    desc: "Compare three plant cells in hypotonic, isotonic, and hypertonic solutions. See turgor pressure, plasmolysis, and water potential (Ψ = Ψs + Ψp).",
    tags: ["tonicity", "plasmolysis", "turgor", "water potential"]
  },
  {
    title: "Photosynthesis: C₃, C₄, CAM & Photorespiration",
    where: ["cells/plants"],
    type: "sim",
    url: "sims/photosynthesis-pathways/",
    desc: "Adjust light, CO₂, and temperature to see what limits photosynthesis, watch Rubisco choose between CO₂ and O₂, and compare C₃, C₄, and CAM plants across habitats.",
    tags: ["photosynthesis", "Rubisco", "C4", "CAM", "quiz"]
  },
  {
    title: "Water Potential in Plants",
    where: ["cells/plants", "soils/water"],
    type: "sim",
    url: "sims/plant-water-potential/",
    desc: "Follow water from the soil into the root, up the xylem, and out through transpiration, using the water potential equation at each step.",
    tags: ["water potential", "xylem", "transpiration"]
  },
  {
    title: "Soil Water",
    where: ["soils/water"],
    type: "sim",
    url: "sims/soil-water/",
    desc: "Explore soil water potential, soil water content, infiltration and permeability, and what happens to redox chemistry when soils flood.",
    tags: ["soil water", "infiltration", "redox", "water potential"]
  },
  {
    title: "Soil Cation Exchange Lab",
    where: ["soils/chemistry"],
    type: "sim",
    url: "sims/soil-cation-exchange/",
    desc: "See why some cations are held more tightly than others, build soils with different CEC and base saturation, and watch roots trade H⁺ for nutrients.",
    tags: ["CEC", "base saturation", "cations", "roots"]
  },
  {
    title: "Soil pH: Hydrogen Adsorption & Desorption",
    where: ["soils/chemistry"],
    type: "sim",
    url: "sims/soil-ph/",
    desc: "Compare two soils side by side as pH changes. Add acid or lime and see how H⁺ and Al³⁺ displace base cations and how buffering differs between sandy and clay soils.",
    tags: ["pH", "buffering", "lime", "CEC"]
  },
  {
    title: "Population Growth: Exponential, Logistic & Chaos",
    where: ["ecology/populations"],
    type: "sim",
    url: "sims/population-growth/",
    desc: "Release rabbits on an island and compare exponential (r), geometric (λ), and logistic (K) growth, then push a population into cycles and chaos with a cobweb plot and bifurcation diagram.",
    tags: ["N", "r", "λ", "K", "logistic", "chaos"]
  },
  {
    title: "Mark–Recapture",
    where: ["ecology/populations"],
    type: "sim",
    url: "sims/mark-recapture/",
    desc: "Net, tag, and release fish in a murky pond, then recapture and estimate the population with Lincoln–Petersen and Chapman. Break the method's assumptions and see how estimates go wrong.",
    tags: ["Lincoln–Petersen", "Chapman", "population estimate", "field methods"]
  },
  {
    title: "Which Life Stage Matters Most? (Sea Turtles)",
    where: ["ecology/populations"],
    type: "sim",
    url: "sims/stage-sensitivity/",
    desc: "Protect different life stages of loggerhead sea turtles and see which raises the population growth rate most, with a stage-based matrix model, projections, and elasticity analysis.",
    tags: ["stage matrix", "sensitivity", "elasticity", "λ", "Crouse"]
  },
  {
    title: "Lotka–Volterra: Predators, Prey & Competitors",
    where: ["ecology/interactions"],
    type: "sim",
    url: "sims/lotka-volterra/",
    desc: "Watch hares and lynx cycle and trace their path on a phase plot, then pit two Paramecium species against each other and use isoclines to predict exclusion or coexistence.",
    tags: ["Lotka–Volterra", "predator–prey", "competition", "isoclines", "phase plot"]
  },
  {
    title: "Trophic Cascade: Spiders, Grasshoppers & Grass",
    where: ["ecology/interactions"],
    type: "sim",
    url: "sims/trophic-cascade/",
    desc: "Three identical cages of grass, goldenrod, and grasshoppers: no spiders, hunting spiders, and glued spiders that can only scare. Watch grasshoppers switch to goldenrod for cover, and separate eating (consumptive) from fear (non-consumptive) effects.",
    tags: ["trophic cascade", "non-consumptive effects", "predation risk", "Schmitz", "indirect effects"]
  },
  {
    title: "Hawks and Doves: Game Theory",
    where: ["ecology/interactions"],
    type: "sim",
    url: "sims/hawk-dove/",
    desc: "Birds that always fight (hawks) or only display (doves) compete over food. Change the value of food and the cost of fighting and watch the population evolve to an evolutionarily stable mix.",
    tags: ["game theory", "ESS", "hawk–dove", "evolution"]
  },
  {
    title: "Species Diversity Calculator",
    where: ["ecology/ecosystems"],
    type: "sim",
    url: "sims/species-diversity/",
    desc: "Enter species counts from several sites (or use an example data set) to calculate richness, Simpson's and Shannon's indices, and alpha, beta, and gamma diversity, with charts, step-by-step math, and a check-your-work tool.",
    tags: ["biodiversity", "Simpson", "Shannon", "beta diversity", "Jaccard"]
  },
  {
    title: "The Energy Pyramid",
    where: ["ecology/ecosystems"],
    type: "sim",
    url: "sims/energy-flow/",
    desc: "A live energy pyramid from grass to hawks: each level is drawn as wide as its energy, with glowing energy dots, losses to heat and decomposers, and why eating lower on the food chain feeds more people.",
    tags: ["trophic levels", "10% rule", "energy pyramid", "food chain"]
  },
  {
    title: "Succession and Fire in the Sierra Nevada",
    where: ["ecology/ecosystems"],
    type: "sim",
    url: "sims/succession/",
    desc: "Watch bare granite and an abandoned pasture grow into Sierra forest, with soil and sunlight meters that show why species replace each other. Then see how fire suppression builds fuel and sets up megafires.",
    tags: ["succession", "Sierra Nevada", "fire suppression", "megafire", "ponderosa pine"]
  },
  {
    title: "Field Biology Species Review",
    where: ["fieldbio/species"],
    type: "sim",
    url: "sims/field_bio_review/",
    desc: "Flashcard study tools for the species from each semester's BIOL 7 field trips. Pick your semester and practice your IDs.",
    tags: ["BIOL 7", "species ID", "flashcards"]
  },
  {
    title: "Environmental Laws in the Field",
    where: ["ecology/conservation"],
    type: "sim",
    url: "sims/environmental-laws/",
    desc: "Learn environmental laws from the perspective of a consulting or agency biologist: what triggers each law, what you survey for, and what goes in your report.",
    tags: ["CEQA", "NEPA", "ESA", "CESA", "Clean Water Act", "quiz"]
  },
  {
    title: "Tragedy of the Commons",
    where: ["ecology/conservation"],
    type: "sim",
    url: "sims/tragedy-commons/",
    desc: "Run a herd on a shared pasture with four other herders. See why everyone adding cows ruins the grass, then try community limits and private plots.",
    tags: ["commons", "sustainability", "Hardin", "Ostrom", "overgrazing"]
  },
  {
    title: "What Makes a Greenhouse Gas? Light Meets the Air",
    where: ["atmosphere/climate"],
    type: "sim",
    url: "sims/molecules-light/",
    desc: "Shine microwave, infrared, visible, and UV light on N₂, O₂, CO₂, H₂O, CH₄, and more, and watch molecules spin, vibrate, glow, or break apart. Then add CO₂ and water vapor to an atmosphere and see infrared get sent back down and the ground warm.",
    tags: ["greenhouse effect", "infrared", "CO₂", "climate", "light"]
  },
  {
    title: "A Planet's Energy Balance: How the Greenhouse Effect Sets Temperature",
    where: ["atmosphere/climate"],
    type: "sim",
    url: "sims/greenhouse-effect/",
    desc: "Watch sunlight arrive, reflect, and leave Earth as infrared. Change CO₂ and Earth's reflectivity from the last ice age to 2100, then compare Mercury, Venus, Earth, and Mars to see why Venus is the hottest planet.",
    tags: ["greenhouse effect", "energy balance", "CO₂", "albedo", "Venus"]
  },
  {
    title: "The Chapman Cycle: How the Ozone Layer Works",
    where: ["atmosphere/ozone"],
    type: "sim",
    url: "sims/chapman-cycle/",
    desc: "Watch UV light split O₂ and the pieces build ozone, molecule by molecule, until making and breaking reach a balance. Then add chlorine from CFCs and see ozone drop and more UV-B reach the ground.",
    tags: ["ozone", "Chapman cycle", "UV", "CFCs", "stratosphere"]
  },
  {
    title: "Inversion Layers: Why the Central Valley Traps Air Pollution",
    where: ["atmosphere/air"],
    type: "sim",
    url: "sims/valley-inversion/",
    desc: "A cross-section of the San Joaquin Valley from the Coast Ranges to the Sierra. Watch pollution from farms, Hwy 99, and Fresno–Clovis rise until it hits a warm-air lid, and track the Air Quality Index through tule fog, summer heat waves, and storms.",
    tags: ["temperature inversion", "air quality", "AQI", "PM2.5", "Central Valley", "tule fog"]
  },
  {
    title: "Global Air Circulation: Three Cells, Deserts, and Spinning Winds",
    where: ["atmosphere/circulation"],
    type: "sim",
    url: "sims/global-circulation/",
    desc: "Follow air around the Hadley, Ferrel, and polar cells to see how pressure, volume, temperature, and water-holding capacity explain rain belts and deserts. Then spin the Earth to see the Coriolis effect bend the trade winds and westerlies, and compare how fast the ground moves at each latitude.",
    tags: ["air pressure", "Hadley cell", "deserts", "Coriolis effect", "trade winds", "climate zones"]
  }

  // ---------- Example web app (delete the two slashes at the start of each line to use) ----------
  // ,{
  //   title: "Trail Camera Reviewer",
  //   where: ["fieldbio/species"],
  //   type: "app",
  //   url: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
  //   desc: "Review trail camera images and record species detections. Sign in with your college Google account.",
  //   tags: ["camera traps", "data"]
  // }
];
