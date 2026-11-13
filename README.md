# Dr. Whitford's Class Simulations

Interactive simulations and web apps for biology, plant science, soil science, community ecology, and field methods courses at Clovis Community College.

**Live site:** https://malachi-whitford.github.io/class-sims/

## How the site is organized

```
class-sims/
├── index.html      ← home page with topic tabs (you rarely need to edit this)
├── catalog.js      ← the list of tabs and cards (edit this to add or move items)
├── .nojekyll       ← tells GitHub to serve the files as-is
├── README.md
└── sims/
    ├── osmosis/index.html
    ├── plant-cell-tonicity/index.html
    ├── photosynthesis-pathways/index.html
    ├── plant-water-potential/index.html
    ├── soil-water/index.html
    ├── soil-cation-exchange/index.html
    ├── soil-ph/index.html
    ├── competition/index.html
    ├── predator-prey/index.html
    ├── island-biogeography/index.html
    ├── disturbance-succession/index.html
    ├── molecules-light/index.html
    ├── chapman-cycle/index.html
    ├── greenhouse-effect/index.html
    ├── valley-inversion/index.html
    ├── jar-test/index.html
    ├── environmental-laws/index.html
    ├── field_bio_review/index.html
    └── species-diversity/index.html
```

Each simulation lives in its own folder as `index.html`, so it gets a clean link:
`https://malachi-whitford.github.io/class-sims/sims/osmosis/`

## Adding a new simulation

1. In the `sims` folder, click **Add file → Create new file**.
2. Type the name as `new-folder-name/index.html` (typing the `/` creates the folder).
3. Paste in the HTML and commit.
4. Open `catalog.js`, copy an existing item, paste it into the list, and change `title`, `topic`, `url`, `desc`, and `tags`. Put a comma between items.

## Adding a web app or outside link

Add an item to `catalog.js` with `type: "app"` (for Apps Script or other web apps) or `type: "link"` (for Google Docs, videos, websites), and use the full `https://` address as the `url`. These open in a new tab. Google Apps Script web apps usually can't be embedded on outside sites, so linking out is the reliable option.

## Adding or renaming a topic tab

Edit the `TOPICS` list at the top of `catalog.js`. The tabs appear in the order listed. Every item's `topic` must match one of the topic `id`s. To show a card under more than one tab, give a list instead, e.g. `topic: ["community", "field"]`.

## Linking students to a specific tab

Add the topic id after a `#`:

- https://malachi-whitford.github.io/class-sims/#soils
- https://malachi-whitford.github.io/class-sims/#community
- https://malachi-whitford.github.io/class-sims/#plants
- https://malachi-whitford.github.io/class-sims/#cells
- https://malachi-whitford.github.io/class-sims/#field
- https://malachi-whitford.github.io/class-sims/#atmosphere
- https://malachi-whitford.github.io/class-sims/#water

## Embedding in Google Sites or Canvas

In Google Sites, use **Insert → Embed → By URL** and paste a simulation's link. In Canvas, use an iframe or a plain link. When you update a file here, every embed updates automatically.

## Accessibility (WCAG 2.1 AA)

Every simulation ends with an accessibility block (search the file for `Accessibility layer`). It:

- gives every slider, dropdown, and search box a name a screen reader can read, plus spoken values with units
- marks section tabs as real tabs that work with the arrow keys
- adds text descriptions to every animated diagram (canvas) and figure
- announces new results to screen readers after a student changes a setting
- shows a clear focus outline for keyboard users

**Phones:** every simulation loads the shared `sims/mobile.js`. When a student uses a control and the animation has scrolled off screen, a live copy of the animation pins to the top of the screen (tap it to jump back, × to hide). When you add a new simulation, add `<script src="../mobile.js"></script>` just before `</body>`.

Each simulation also has a pause control for continuous animation, and colors were adjusted to meet the 4.5:1 text contrast ratio.

**When you add a new simulation:** copy the block from the bottom of an existing simulation (from `<script>window.A11Y = ...` to the end of the second `</script>`) and paste it just before `</body>`. Then edit the `window.A11Y` settings:

- `img`: a description of each canvas or diagram (what it shows and where to find the numbers)
- `live`: the IDs of the result or message boxes that should be read aloud when they change
- `names` and `units`: only needed if a control's label is unclear or missing

## License, AI disclosure, and accessibility

- **License:** © 2026 Malachi Whitford. Licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). See `LICENSE`.
- **AI disclosure:** The simulations were created with generative AI (Claude, by Anthropic) under the direction of Dr. Malachi Whitford. Every page shows this notice at the bottom.
- **Accessibility:** Pages aim to meet WCAG 2.1 AA: keyboard operable controls with visible focus, text alternatives for canvases and charts, screen-reader announcements of results, text contrast of at least 4.5:1 in light and dark mode, reflow at 320 px, and a "Pause all animation" button on every page.
- **Adding a new page:** include the notice block (between `<!--SIM-NOTICE-->` markers) used on the other pages.
