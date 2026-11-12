/* =====================================================================
   THUMBNAILS: small drawings shown at the top of each card.
   Keyed by the item's url. Items without a drawing get a plain
   pattern in their topic color, so this file is optional to update.
   Each drawing is SVG on a 160 x 90 canvas.
   ===================================================================== */
const THUMBS = {
"sims/osmosis/": `
  <rect x="22" y="14" width="116" height="64" rx="4" fill="#fff" stroke="#0f5e57" stroke-width="2.5"/>
  <rect x="24" y="44" width="54" height="32" fill="#9fd8e8"/><rect x="82" y="30" width="54" height="46" fill="#9fd8e8"/>
  <line x1="80" y1="14" x2="80" y2="78" stroke="#0f5e57" stroke-width="2" stroke-dasharray="4 3"/>
  <g fill="#e07a2e"><circle cx="96" cy="52" r="3"/><circle cx="112" cy="62" r="3"/><circle cx="124" cy="46" r="3"/><circle cx="104" cy="70" r="3"/><circle cx="44" cy="62" r="3"/></g>
  <path d="M60 36 q14 -10 30 0" fill="none" stroke="#1d6fb8" stroke-width="2.5"/>
  <path d="M86 32 l6 4 l-7 3" fill="none" stroke="#1d6fb8" stroke-width="2.5"/>`,
"sims/plant-cell-tonicity/": `
  <g stroke="#2f6b3a" stroke-width="2.5" fill="#e6f4dc">
    <rect x="10" y="20" width="40" height="52" rx="5"/><rect x="60" y="20" width="40" height="52" rx="5"/><rect x="110" y="20" width="40" height="52" rx="5"/></g>
  <rect x="13" y="23" width="34" height="46" rx="4" fill="#7cc36a"/>
  <rect x="66" y="27" width="28" height="38" rx="8" fill="#9fcf8c"/>
  <ellipse cx="130" cy="46" rx="11" ry="15" fill="#9fcf8c"/>
  <g fill="#2f6b3a"><circle cx="22" cy="34" r="3"/><circle cx="38" cy="56" r="3"/><circle cx="76" cy="40" r="2.6"/><circle cx="85" cy="54" r="2.6"/><circle cx="127" cy="42" r="2.3"/><circle cx="133" cy="51" r="2.3"/></g>`,
"sims/photosynthesis-pathways/": `
  <circle cx="34" cy="26" r="13" fill="#f4b62a"/>
  <g stroke="#f4b62a" stroke-width="3" stroke-linecap="round"><line x1="34" y1="4" x2="34" y2="9"/><line x1="12" y1="26" x2="17" y2="26"/><line x1="18" y1="10" x2="21" y2="13"/><line x1="50" y1="10" x2="47" y2="13"/><line x1="18" y1="42" x2="21" y2="39"/></g>
  <path d="M60 74 C60 40 100 18 146 20 C140 56 110 78 60 74Z" fill="#5aa64a" stroke="#2f6b3a" stroke-width="2.5"/>
  <path d="M62 72 C90 56 116 38 140 24" stroke="#2f6b3a" stroke-width="2" fill="none"/>
  <text x="66" y="40" font-size="12" font-weight="700" fill="#2f6b3a" font-family="sans-serif">CO₂</text>`,
"sims/plant-water-potential/": `
  <rect x="0" y="58" width="160" height="32" fill="#a77a4f"/>
  <path d="M80 58 V22" stroke="#3b7a2a" stroke-width="4"/>
  <path d="M80 34 C64 30 56 20 56 12 C68 14 78 22 80 34Z M80 28 C96 24 104 14 106 6 C92 8 82 16 80 28Z" fill="#5aa64a"/>
  <path d="M80 58 L66 82 M80 58 L94 84 M80 62 L80 86 M72 70 L60 74" stroke="#e8d3b0" stroke-width="2.5" fill="none"/>
  <g stroke="#1d6fb8" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M110 80 V40 M104 48 L110 40 L116 48"/><path d="M118 14 q6 -6 12 0" /><path d="M124 22 q6 -6 12 0"/></g>`,
"sims/soil-water/": `
  <rect x="0" y="10" width="160" height="20" fill="#6e4a2c"/><rect x="0" y="30" width="160" height="26" fill="#946740"/><rect x="0" y="56" width="160" height="34" fill="#b88b5c"/>
  <g fill="#7cc4ec"><path d="M30 34 q5 8 0 12 q-5 -4 0 -12Z"/><path d="M76 44 q5 8 0 12 q-5 -4 0 -12Z"/><path d="M120 62 q5 8 0 12 q-5 -4 0 -12Z"/><path d="M50 66 q5 8 0 12 q-5 -4 0 -12Z"/><path d="M104 18 q5 8 0 12 q-5 -4 0 -12Z"/></g>
  <g fill="#5aa64a"><path d="M20 10 l4 -8 l4 8Z"/><path d="M60 10 l4 -10 l4 10Z"/><path d="M130 10 l4 -7 l4 7Z"/></g>`,
"sims/soil-cation-exchange/": `
  <ellipse cx="80" cy="46" rx="44" ry="18" fill="#c99a63" stroke="#7a5532" stroke-width="2.5"/>
  <g fill="#7a5532" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle"><text x="62" y="51">−</text><text x="80" y="51">−</text><text x="98" y="51">−</text></g>
  <g font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle">
    <circle cx="30" cy="22" r="10" fill="#1d6fb8"/><text x="30" y="26" fill="#fff">Ca</text>
    <circle cx="80" cy="14" r="9" fill="#e07a2e"/><text x="80" y="18" fill="#fff">K</text>
    <circle cx="130" cy="24" r="10" fill="#6b3fa0"/><text x="130" y="28" fill="#fff">Mg</text>
    <circle cx="44" cy="76" r="9" fill="#c0392b"/><text x="44" y="80" fill="#fff">H</text>
    <circle cx="116" cy="76" r="9" fill="#1d6fb8"/><text x="116" y="80" fill="#fff">Na</text></g>`,
"sims/soil-ph/": `
  <defs><linearGradient id="phg" x1="0" x2="1"><stop offset="0" stop-color="#d63b2f"/><stop offset=".3" stop-color="#f1a33a"/><stop offset=".5" stop-color="#e9df4a"/><stop offset=".7" stop-color="#5bb85d"/><stop offset="1" stop-color="#3b4fb8"/></linearGradient></defs>
  <rect x="14" y="54" width="132" height="16" rx="8" fill="url(#phg)"/>
  <path d="M60 50 l6 -10 l6 10Z" fill="#3a2a1c"/>
  <g font-family="sans-serif" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">
    <circle cx="34" cy="24" r="10" fill="#c0392b"/><text x="34" y="28">H⁺</text>
    <circle cx="66" cy="18" r="10" fill="#c0392b"/><text x="66" y="22">H⁺</text>
    <circle cx="112" cy="26" r="10" fill="#3b4fb8"/><text x="112" y="30">OH</text></g>`,
"sims/population-growth/": `
  <path d="M18 78 H150 M18 78 V10" stroke="#3b4a3d" stroke-width="2"/>
  <line x1="18" y1="24" x2="150" y2="24" stroke="#888" stroke-dasharray="4 3"/>
  <path d="M18 76 C70 74 92 50 104 10" stroke="#c0392b" stroke-width="3" fill="none"/>
  <path d="M18 76 C60 72 72 28 100 26 S140 24 150 24" stroke="#2f6b3a" stroke-width="3" fill="none"/>
  <text x="152" y="22" font-size="11" font-weight="700" fill="#3b4a3d" font-family="sans-serif" text-anchor="end">K</text>`,
"sims/mark-recapture/": `
  <rect x="0" y="0" width="160" height="90" fill="#7fb6c9" opacity=".55"/>
  <g fill="#e0913a"><path d="M24 34 q18 -14 36 0 q-18 14 -36 0Z M60 34 l10 -8 v16Z"/><path d="M90 60 q18 -14 36 0 q-18 14 -36 0Z M126 60 l10 -8 v16Z"/></g>
  <g fill="#7c8aa0"><path d="M84 24 q14 -10 28 0 q-14 10 -28 0Z M112 24 l8 -6 v12Z"/><path d="M20 68 q14 -10 28 0 q-14 10 -28 0Z M48 68 l8 -6 v12Z"/></g>
  <g fill="#fff" stroke="#c0392b" stroke-width="2"><circle cx="40" cy="34" r="4"/><circle cx="106" cy="60" r="4"/></g>
  <g fill="#1e2a20"><circle cx="30" cy="32" r="1.6"/><circle cx="96" cy="58" r="1.6"/></g>`,
"sims/stage-sensitivity/": `
  <rect x="0" y="62" width="160" height="28" fill="#ead9a8"/><path d="M0 62 q40 -8 80 0 t80 0" fill="#7fc4d8"/>
  <g fill="#fff" stroke="#c7b48a"><ellipse cx="18" cy="76" rx="5" ry="5"/><ellipse cx="28" cy="78" rx="5" ry="5"/><ellipse cx="23" cy="70" rx="5" ry="5"/></g>
  <ellipse cx="62" cy="76" rx="8" ry="5" fill="#5f7d4a"/>
  <g transform="translate(116 34)"><ellipse cx="0" cy="0" rx="24" ry="17" fill="#6b8a4a" stroke="#3f5a2a" stroke-width="2.5"/>
    <path d="M-12 -8 h24 M-16 2 h32 M-10 11 h20 M0 -16 v32" stroke="#3f5a2a" stroke-width="1.6"/>
    <ellipse cx="28" cy="-2" rx="8" ry="6" fill="#8aa56a"/><path d="M-20 12 l-10 8 M18 12 l10 8 M-18 -12 l-10 -8 M18 -12 l10 -8" stroke="#8aa56a" stroke-width="5" stroke-linecap="round"/></g>`,
"sims/lotka-volterra/": `
  <path d="M10 80 H150" stroke="#3b4a3d" stroke-width="2"/>
  <path d="M10 60 C25 20 35 20 50 50 S75 80 90 40 S115 10 130 50 S145 70 150 55" stroke="#2f6b3a" stroke-width="3" fill="none"/>
  <path d="M10 72 C30 70 38 40 56 34 S80 70 96 66 S120 30 136 30 S148 52 150 60" stroke="#c0392b" stroke-width="3" fill="none"/>
  <g font-family="sans-serif" font-size="10" font-weight="700"><text x="14" y="16" fill="#2f6b3a">prey</text><text x="50" y="16" fill="#c0392b">predator</text></g>`,
"sims/trophic-cascade/": `
  <g stroke="#3f8a34" stroke-width="3" stroke-linecap="round" fill="none"><path d="M14 88 q4 -30 -2 -50"/><path d="M26 88 q2 -36 8 -60"/><path d="M38 88 q-2 -24 4 -44"/><path d="M134 88 q-2 -30 4 -54"/><path d="M146 88 q4 -26 -2 -46"/></g>
  <g transform="translate(70 58)"><path d="M0 0 q14 -12 34 -4 q-6 10 -30 8Z" fill="#7da33c" stroke="#4a6a1e" stroke-width="1.5"/><path d="M26 -2 l10 -16 l8 20 M14 2 l-6 12 M22 2 l4 12" stroke="#4a6a1e" stroke-width="2" fill="none"/><circle cx="31" cy="-4" r="1.6" fill="#1e2a20"/></g>
  <g transform="translate(92 22)"><line x1="0" y1="-22" x2="0" y2="-6" stroke="#999" stroke-width="1"/><ellipse cx="0" cy="4" rx="8" ry="9" fill="#5a3b26"/><circle cx="0" cy="-6" r="5" fill="#3d2818"/>
    <g stroke="#3d2818" stroke-width="2" fill="none"><path d="M-6 0 l-12 -8 M-6 4 l-14 2 M-6 8 l-12 10 M6 0 l12 -8 M6 4 l14 2 M6 8 l12 10"/></g></g>`,
"sims/hawk-dove/": `
  <g transform="translate(46 50)"><path d="M-26 6 C-10 -14 10 -14 24 -4 L36 -8 L28 4 C16 16 -10 18 -26 6Z" fill="#8a5a2b"/><path d="M-6 -6 L-28 -30 L8 -10Z" fill="#6b4420"/><path d="M28 -6 l10 2 l-8 6Z" fill="#f2b33a"/><circle cx="24" cy="-4" r="2" fill="#fff"/></g>
  <g transform="translate(118 54)"><path d="M26 6 C10 -12 -10 -12 -22 -2 L-30 -4 L-24 6 C-14 16 10 18 26 6Z" fill="#c9ccd6"/><path d="M4 -4 L20 -24 L-6 -8Z" fill="#a9adbb"/><path d="M-28 -2 l-6 2 l6 3Z" fill="#e8a27a"/><circle cx="-20" cy="-2" r="2" fill="#1e2a20"/></g>
  <text x="80" y="22" font-family="sans-serif" font-size="16" font-weight="800" fill="#c0392b" text-anchor="middle">VS</text>`,
"sims/species-diversity/": `
  <g fill="#2f6b3a"><rect x="16" y="20" width="14" height="60" rx="2"/></g><rect x="36" y="38" width="14" height="42" rx="2" fill="#4c8f3c"/><rect x="56" y="50" width="14" height="30" rx="2" fill="#7cb342"/><rect x="76" y="60" width="14" height="20" rx="2" fill="#c0ca33"/><rect x="96" y="66" width="14" height="14" rx="2" fill="#f4b62a"/><rect x="116" y="72" width="14" height="8" rx="2" fill="#e07a2e"/><rect x="136" y="75" width="14" height="5" rx="2" fill="#c0392b"/>
  <path d="M12 80 H154" stroke="#3b4a3d" stroke-width="2"/>
  <text x="150" y="30" font-family="serif" font-style="italic" font-size="22" font-weight="700" fill="#1f4a28" text-anchor="end">H′</text>`,
"sims/energy-flow/": `
  <path d="M20 82 H140 L128 64 H32Z" fill="#5aa64a"/><path d="M34 62 H126 L114 46 H46Z" fill="#c0ca33"/><path d="M48 44 H112 L100 28 H60Z" fill="#f4b62a"/><path d="M62 26 H98 L80 6Z" fill="#e07a2e"/>
  <g fill="#fff" opacity=".9"><circle cx="50" cy="74" r="2"/><circle cx="70" cy="72" r="2"/><circle cx="96" cy="75" r="2"/><circle cx="112" cy="71" r="2"/><circle cx="72" cy="54" r="2"/><circle cx="92" cy="55" r="2"/><circle cx="80" cy="37" r="2"/></g>
  <g stroke="#c0392b" stroke-width="2" fill="none" stroke-linecap="round"><path d="M132 52 q8 -6 14 0"/><path d="M118 34 q8 -6 14 0"/></g>`,
"sims/succession/": `
  <path d="M0 70 L30 40 L52 58 L84 22 L118 56 L140 38 L160 54 V90 H0Z" fill="#b8c4cf"/>
  <rect x="0" y="72" width="160" height="18" fill="#c9b27c"/>
  <ellipse cx="20" cy="74" rx="10" ry="4" fill="#7c8a8a"/>
  <g fill="#9cc25a"><path d="M40 74 l3 -10 l3 10Z"/><path d="M46 74 l3 -8 l3 8Z"/></g>
  <circle cx="68" cy="66" r="8" fill="#6f9a3c"/>
  <g fill="#2e5d34"><path d="M96 76 L104 40 L112 76Z"/><path d="M118 76 L128 30 L138 76Z"/></g>
  <path d="M146 76 C140 66 146 60 150 52 C152 60 160 64 156 76Z" fill="#f08a24"/><path d="M148 76 C146 70 150 66 151 62 C153 68 156 70 154 76Z" fill="#f9d548"/>`,
"sims/field_bio_review/": `
  <rect x="28" y="16" width="86" height="60" rx="6" fill="#fff" stroke="#6b3fa0" stroke-width="2.5" transform="rotate(-6 71 46)"/>
  <rect x="44" y="14" width="86" height="60" rx="6" fill="#fff" stroke="#6b3fa0" stroke-width="2.5"/>
  <path d="M64 58 C64 36 84 24 108 26 C104 48 88 60 64 58Z" fill="#5aa64a"/><path d="M66 56 C80 46 92 38 104 30" stroke="#2f6b3a" stroke-width="1.6" fill="none"/>
  <text x="122" y="68" font-family="sans-serif" font-size="16" font-weight="800" fill="#6b3fa0" text-anchor="end">?</text>`,
"sims/environmental-laws/": `
  <path d="M80 12 V76 M58 80 H102" stroke="#5a4636" stroke-width="3" stroke-linecap="round"/>
  <path d="M40 24 H120" stroke="#5a4636" stroke-width="3"/>
  <path d="M40 24 L28 52 H52Z M120 24 L108 52 H132Z" fill="none" stroke="#5a4636" stroke-width="1.6"/>
  <path d="M26 52 q14 10 28 0Z" fill="#c9a15a"/><path d="M106 52 q14 10 28 0Z" fill="#c9a15a"/>
  <path d="M40 50 l-6 -10 h12Z" fill="#2e5d34"/><ellipse cx="120" cy="47" rx="7" ry="4" fill="#6b8a4a"/>`,
"sims/tragedy-commons/": `
  <rect x="0" y="40" width="160" height="50" fill="#9cc25a"/><path d="M0 40 q40 -10 80 0 t80 0 V40Z" fill="#b6d47a"/>
  <rect x="96" y="40" width="64" height="50" fill="#c9b27c"/>
  <g fill="#fff" stroke="#3b3b3b" stroke-width="1.5"><rect x="22" y="56" width="22" height="12" rx="5"/><rect x="66" y="64" width="22" height="12" rx="5"/><rect x="104" y="52" width="22" height="12" rx="5"/><rect x="128" y="70" width="22" height="12" rx="5"/></g>
  <g fill="#3b3b3b"><circle cx="45" cy="58" r="4"/><circle cx="89" cy="66" r="4"/><circle cx="127" cy="54" r="4"/><circle cx="151" cy="72" r="4"/></g>
  <circle cx="130" cy="18" r="10" fill="#f4b62a"/>`,
"sims/molecules-light/": `
  <rect x="0" y="0" width="160" height="90" fill="#13243b"/>
  <rect x="8" y="34" width="30" height="22" rx="4" fill="#2c3a4f" stroke="#6b7a90" stroke-width="1.5"/><ellipse cx="38" cy="45" rx="3" ry="8" fill="#ff5a4a"/>
  <path d="M46 45 q4 -6 8 0 t8 0 t8 0" stroke="#ff5a4a" stroke-width="2.5" fill="none"/>
  <circle cx="114" cy="45" r="26" fill="#ff5a4a" opacity=".18"/>
  <path d="M96 48 L114 40 L132 48" stroke="#9aa3ad" stroke-width="3" fill="none"/>
  <circle cx="96" cy="49" r="8" fill="#d9412b"/><circle cx="114" cy="40" r="9" fill="#4b525c"/><circle cx="132" cy="49" r="8" fill="#d9412b"/>
  <path d="M120 70 q4 6 8 0 t8 0" stroke="#ff5a4a" stroke-width="2.5" fill="none"/>`,
"sims/chapman-cycle/": `
  <rect x="0" y="0" width="160" height="90" fill="#13254a"/><rect x="0" y="0" width="160" height="14" fill="#f4c95a" opacity=".35"/>
  <rect x="0" y="78" width="160" height="12" fill="#4f7a3a"/>
  <path d="M30 14 q-4 4 0 8 t0 8 t0 8" stroke="#c4a3ff" stroke-width="2.5" fill="none"/>
  <circle cx="74" cy="46" r="16" fill="#5aa0ff" opacity=".35"/>
  <g fill="#d9412b"><circle cx="74" cy="40" r="6"/><circle cx="65" cy="50" r="6"/><circle cx="83" cy="50" r="6"/><circle cx="118" cy="34" r="6"/><circle cx="129" cy="34" r="6"/><circle cx="122" cy="62" r="6"/></g>
  <circle cx="122" cy="62" r="10" fill="none" stroke="#ffeeb0" stroke-width="1.5"/>`
};
