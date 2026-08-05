# Esgexa Entry Hero Design QA

## Evidence

- Source visual truth: `/Users/prajaktagaikwad/.codex/generated_images/019f37d2-ce75-77e3-98b3-190bcfca8c5c/exec-554a090d-327f-4679-bd96-debf5dbcebf1.png`
- Source dimensions: 1487 x 1058 px, normalized to 1440 x 1024 px for comparison.
- Implementation screenshot: `/tmp/esgexa-entry-desktop-final.png`
- Mobile implementation screenshot: `/tmp/esgexa-entry-mobile-v2.png`
- Combined comparison: `/tmp/esgexa-entry-comparison-final.png`
- Desktop CSS viewport: 1440 x 1024 at browser density normalized to a 1440 x 1024 screenshot.
- Mobile CSS viewport: 390 x 844 at browser density normalized to a 390 x 844 screenshot.
- State: entry hero at scroll position 0; mobile menu and entry-to-homepage transition tested separately.

## Full-View Comparison

The implementation preserves the selected visual hierarchy: transparent dark navigation, large Esgexa wordmark, concise supplier ESG message, two actions, full-bleed evidence constellation, and the bottom Collect/Score/Tasks index. The custom evidence asset matches the target's subject, dark cinematic lighting, teal network, lime verification signals and right-weighted document crop.

The implementation intentionally uses the website's real navigation destinations and exact Esgexa SVG mark. No existing homepage section was redesigned or removed.

## Focused Comparison

- Header: logo, navigation and action alignment remain on one stable row at desktop; mobile collapses to the functional menu control.
- Hero content: heading scale, line length, CTA order and left alignment match the target without overlap.
- Product rail: desktop retains the four-column target rhythm; mobile converts it to an internally scrollable horizontal rail to preserve a one-viewport entry.
- Original-site handoff: `Enter the platform` scrolls to `#top`, where the pre-existing light navbar and original hero become visible.

## Findings

No actionable P0, P1 or P2 findings remain.

- Fonts and typography: Geist is preserved; display hierarchy and optical weights match the target closely. The implementation uses zero letter spacing per the existing design rules.
- Spacing and layout: entry height is exactly 1024 px at desktop and 844 px at mobile. No document-level horizontal overflow is present.
- Colors and tokens: slate-black, teal, lime and white match both the selected concept and Esgexa brand tokens. Contrast remains readable over the image.
- Image quality: the production background is a dedicated 1672 x 941 generated image, rendered full-bleed with responsive cropping and slow transform motion. The logo remains SVG.
- Copy and content: Esgexa name, supplier ESG positioning, product labels, actions and existing route names are accurate.
- Interactions: mobile menu opens and closes; `Enter the platform` reaches the original hero; Request demo and News resolve to the existing routes; console errors: none.

## Comparison History

1. Initial desktop pass found a P2 content mismatch: an additional explanatory paragraph pushed the CTAs below the source rhythm. The paragraph was removed and the final screenshot aligns the CTA group with the target.
2. Initial mobile pass found a P2 responsive issue: the stacked product index made the entry 945.5 px tall in an 844 px viewport. The index was converted to a compact horizontal rail. Post-fix evidence shows an 844 px entry, original hero top at 844 px, and no page overflow.
3. Final desktop and mobile passes found no remaining P0/P1/P2 differences.

## Follow-up Polish

- P3: the generated target uses slightly larger navigation typography; the implementation keeps the current site's quieter navigation scale for continuity.
- P3: the selected mock includes more micro-labels inside the evidence image; the clean production asset intentionally avoids baked-in fake supplier data.

## Implementation Checklist

- [x] Selected concept reproduced with a dedicated hero asset.
- [x] Existing homepage preserved below the entry.
- [x] Desktop and mobile responsive layouts verified.
- [x] Primary navigation and entry transition tested.
- [x] Console checked with no errors.
- [x] Production build passed.

final result: passed
