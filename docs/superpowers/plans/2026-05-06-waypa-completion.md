# WAYPA Completion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete static WAYPA site that matches the live `waypa.aarman.co` design direction and removes unfinished placeholder content.

**Architecture:** The site is a self-contained static artifact: `index.html` for markup, `styles.css` for design, `script.js` for small interactions, and `assets/` for copied live imagery. A Node test script verifies content and asset contracts.

**Tech Stack:** HTML, CSS, vanilla JavaScript, local image assets, Node.js for verification.

---

## File Structure

- Create: `/Users/sudhanshu/Desktop/Claude/waypa-complete/index.html` for the finished page markup.
- Create: `/Users/sudhanshu/Desktop/Claude/waypa-complete/styles.css` for the live-site-inspired visual system.
- Create: `/Users/sudhanshu/Desktop/Claude/waypa-complete/script.js` for accordion, nav state, and reveal interactions.
- Create: `/Users/sudhanshu/Desktop/Claude/waypa-complete/tests/verify-waypa-site.mjs` for static checks.
- Use: `/Users/sudhanshu/Desktop/Claude/waypa-complete/assets/` for live WAYPA logo, program cards, and leadership portraits.

### Task 1: Verification Script

**Files:**
- Create: `/Users/sudhanshu/Desktop/Claude/waypa-complete/tests/verify-waypa-site.mjs`

- [ ] **Step 1: Write failing verification script**

Create a script that fails until the finished site exists and contains the required sections, copy, accessibility attributes, and local assets.

- [ ] **Step 2: Run script to verify it fails**

Run: `node /Users/sudhanshu/Desktop/Claude/waypa-complete/tests/verify-waypa-site.mjs`

Expected: failure because `index.html`, `styles.css`, and `script.js` do not exist yet.

### Task 2: Assets

**Files:**
- Create copied files under: `/Users/sudhanshu/Desktop/Claude/waypa-complete/assets/`

- [ ] **Step 1: Fetch live assets**

Download the live logo, program card images, and leadership images from `https://waypa.aarman.co/`.

- [ ] **Step 2: Confirm assets exist**

Run: `find /Users/sudhanshu/Desktop/Claude/waypa-complete/assets -maxdepth 1 -type f | sort`

Expected: logo, three program images, and six leadership images.

### Task 3: Markup

**Files:**
- Create: `/Users/sudhanshu/Desktop/Claude/waypa-complete/index.html`

- [ ] **Step 1: Add complete semantic HTML**

Include the hero, introduction, objective panel, vision scroller, programs scroller, essence accordion, leadership grid, contact band, and footer.

- [ ] **Step 2: Run verification**

Run: `node /Users/sudhanshu/Desktop/Claude/waypa-complete/tests/verify-waypa-site.mjs`

Expected: failure only for missing styles or script if markup is otherwise complete.

### Task 4: Styling

**Files:**
- Create: `/Users/sudhanshu/Desktop/Claude/waypa-complete/styles.css`

- [ ] **Step 1: Implement live-site-inspired visual system**

Use the beige, white, black, yellow, green, orange, red, and blue palette. Match the live page's grid, type scale, card behavior, sticky section headers, and leadership grid.

- [ ] **Step 2: Run verification**

Run: `node /Users/sudhanshu/Desktop/Claude/waypa-complete/tests/verify-waypa-site.mjs`

Expected: failure only for missing script if CSS is referenced correctly.

### Task 5: Interaction

**Files:**
- Create: `/Users/sudhanshu/Desktop/Claude/waypa-complete/script.js`

- [ ] **Step 1: Add small interactions**

Implement one-open-at-a-time accordion behavior, `aria-expanded` updates, sticky nav scroll styling, and reveal-on-scroll.

- [ ] **Step 2: Run verification**

Run: `node /Users/sudhanshu/Desktop/Claude/waypa-complete/tests/verify-waypa-site.mjs`

Expected: pass.

### Task 6: Visual Review

**Files:**
- Review: `/Users/sudhanshu/Desktop/Claude/waypa-complete/index.html`

- [ ] **Step 1: Open local file in the in-app browser**

Navigate to `file:///Users/sudhanshu/Desktop/Claude/waypa-complete/index.html`.

- [ ] **Step 2: Inspect desktop and mobile layout**

Check that the page reads like the live designer direction, no visible placeholder copy remains, text does not overlap, and cards/accordion work.
