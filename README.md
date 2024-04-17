This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

This document describes the development process for cloning the career page of the Metalogic website using Next.js with TypeScript. The project aims to create a replica of the career page with similar functionality and design aesthetics.

<!-- - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial. -->

## Development Process Documentation: Career Page Cloning

### Introduction

This document describes the development process for cloning the career page of the Metalogic website using Next.js with TypeScript. The project aims to create a replica of the career page with similar functionality and design aesthetics.

### Setup Instructions

Prerequisites

- Node.js and npm/yarn installed
- Basic understanding of Next.js and React
- Familiarity with TypeScript, Tailwind CSS, and Sass

### Installation

- git clone [https://github.com/MilanPraz/MetaLogic.git]
- cd [project_directory]
- npm install
- npm run dev

### Access the application

- Visit http://localhost:3000 in your browser to view the application.

### Design Decisions

- Next.js with TypeScript: Chosen for its ease of use, support for server-side rendering, and type safety provided by TypeScript.
- Styling: Used a combination of Tailwind CSS for utility-based styling and SCSS/Sass for modular CSS.
- Animations: Utilized Framer Motion for creating smooth animations and transitions.
- Icons: Employed React Icons for a wide variety of icons for user interfaces.

### Challenges Encountered

- Responsiveness: Ensuring that the page is responsive across different devices required careful handling of CSS and layout adjustments.
- Overflowing Problem: Managed issues related to content overflowing beyond the visible area by using proper CSS properties like overflow:hidden and monitoring layout adjustments.
- Animation Keyframe and Positioning: Fine-tuning animations and positioning them precisely in line with the original website's design required additional testing and experimentation.

### Best Practices and Lessons Learned

- Use a Mobile-First Approach: Designing with mobile users in mind from the beginning helps create a more responsive and user-friendly experience.
- Proper Testing: Thoroughly test different features and functionalities across devices and browsers to ensure consistency.
- Animations: Experimenting with different approaches to animations can help in achieving smooth transitions and effects.

### Further Reading and Resources

- Next.js Documentation: [https://nextjs.org/docs]
- TypeScript Documentation: [https://www.typescriptlang.org/docs/]
- Tailwind CSS Documentation: [https://tailwindcss.com/docs/installation]
- Framer Motion Documentation: [https://www.framer.com/motion/]
