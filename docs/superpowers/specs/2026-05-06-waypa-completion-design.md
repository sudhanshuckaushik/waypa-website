# WAYPA Completion Design

## Goal

Create a finished, deployable static WAYPA site that follows the live `waypa.aarman.co` design direction rather than the unrelated alternate HTML drafts.

## Source Of Truth

The visual source of truth is the current live site:

- Large quiet logo hero on white.
- Warm beige page background.
- Wide grid layout with generous margins.
- Color-coded phrase headline using green, orange, red, blue, and green.
- White objective panel with a red divider strip.
- Sticky beige section headers for horizontal card rows.
- Square/portrait cards with image or neutral gray media, yellow bottom panels, plus icons, and hover expansion on pointer devices.
- Minimal accordion section for "The Essence of WAYPA."
- Clean leadership grid using square portraits and understated captions.
- Simple footer.

The older local HTML files are copy references only. Their green/gold, formal institutional layouts must not drive the design.

## Content Changes

Replace unfinished live-site copy and test artifacts:

- Change the page title and metadata from "Future Energy" to "West Africa Young Parliamentarians Network."
- Remove the "Future Energy" brand/tagline.
- Replace energy infrastructure card copy in "Our Vision" with WAYPA-specific governance copy.
- Replace the AI/quantum "Why now?" accordion answer with youth governance and West African demographic context.
- Remove the "Test Modal" section and hidden test drawer content.
- Use finished program, governance, leadership, contact, and FAQ copy from the local WAYPA drafts where it fits the live design.

## Page Structure

The finished page will contain:

1. Logo hero with concise mission line.
2. Intro statement with color-coded WAYPA name.
3. Objective panel.
4. Our Vision horizontal cards.
5. Our Programs horizontal cards using the live program images.
6. The Essence of WAYPA accordion.
7. Leadership grid using the live portrait images.
8. Contact/get involved band.
9. Footer with proper organization name and emails.

## Interaction

Cards expand their yellow text panel on hover and focus. The accordion opens one answer at a time. Navigation links smooth-scroll to sections. Motion respects `prefers-reduced-motion`.

## Testing

Automated checks will confirm:

- No leftover placeholder phrases remain.
- Required sections exist.
- Referenced local assets exist.
- Basic accessibility contracts are present: page title, alt text, aria labels, and button states.

Manual visual review will be done through the in-app browser on the local file.
