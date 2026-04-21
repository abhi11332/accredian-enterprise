# Accredian Enterprise Partial Clone

A partial clone of [Accredian Enterprise](https://enterprise.accredian.com/) built with **Next.js 14**, **React**, and **Tailwind CSS** as part of the Full Stack Developer Intern assignment.

## Live Links

- Live Demo: `ADD_VERCEL_LINK_HERE`
- GitHub Repository: `ADD_GITHUB_REPO_LINK_HERE`

## Assignment Coverage

This project covers the requested scope from the assignment:

- Landing page with multiple sections
- Navigation bar and footer
- Fully responsive layout for mobile and desktop
- Clean and structured UI
- Reusable component-based implementation
- Smooth navigation between sections

Bonus implemented:

- Lead capture form
- API integration using a mock Next.js API route

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Next.js API Route for lead form submission

## Setup Instructions

1. Clone the repository

```bash
git clone ADD_GITHUB_REPO_LINK_HERE
cd accredian-enterprise
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open the app

```bash
http://localhost:3000
```

5. Build for production

```bash
npm run build
npm run start
```

## Approach Taken

The project was built as a **partial clone** of the Accredian Enterprise website, with the goal of keeping the implementation clean, responsive, and component-driven instead of trying to create a pixel-perfect copy.

The page is divided into reusable sections:

- Navbar
- Hero
- Trusted By
- Stats / Impact
- Features
- Programs
- How It Works
- Testimonials
- FAQ
- Lead Form
- Footer

The implementation focuses on:

- clear section-based layout
- reusable React components
- mobile-friendly responsiveness
- enterprise-style visual hierarchy
- smooth in-page navigation

For the bonus requirement, a lead capture form was added and connected to a mock API route using Next.js. The current API stores data in memory, which is acceptable for assignment/demo purposes.

## AI Usage

AI tools were used during development as part of the assignment requirement.

AI helped with:

- brainstorming layout ideas and section structure
- comparing the project against the reference website
- identifying missing sections and improvement areas
- improving responsiveness and UI hierarchy
- refining copy and README structure
- speeding up component refactoring and styling iterations

Tools used:

- Codex / ChatGPT-style AI assistance

## What Was Modified or Improved Manually

The project was not used as raw AI output. Manual decisions and refinements were made throughout the implementation.

Manual work included:

- deciding the final page structure and section order
- choosing which parts of the reference site to simplify
- adjusting spacing, typography, and responsiveness
- refining the design direction to keep it clean and structured
- improving mobile layout behavior
- reviewing assignment requirements and aligning the implementation to them
- verifying the final build output

## AI vs Manual Contribution Summary

- AI was mainly used for speed, ideation, comparison, and implementation support
- Manual effort was used for final decisions, cleanup, refinement, responsiveness, and assignment alignment

## Improvements I Would Make With More Time

- Replace the mock lead API with persistent storage like MongoDB or Supabase
- Add real company logos and assets closer to the reference website
- Improve section-level animations and interactions further
- Add better accessibility support including stronger keyboard states and ARIA polish
- Add form success/error handling with richer UX feedback
- Add analytics and admin-side lead viewing
- Improve fidelity further if exact clone-level accuracy is needed

## Notes

- This project is intentionally implemented as a **structured partial clone**, not a direct template copy.
- The focus was on clarity, code structure, responsiveness, and execution quality.
- The mock API setup is used for demo/assignment purposes.

## Build Status

Production build has been verified successfully with:

```bash
npm run build
```
