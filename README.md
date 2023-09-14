This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
# or
yarn install
# then
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Project Info
- [Preview](https://lenkie-test-results.vercel.app/)
- [Artists view](https://lenkie-test-results.vercel.app/artist/13)

What you'd do if you had more time:
 - Refactor the player into smaller components
 - Migrate logic from useState to React context to handle state changes in the player.tsx to prevent re-render on route change
 - Add some tests using Jest
 - Setup CI/CD to run the test on code deployment
 - Setup precommit hooks for commit check before deploying code
 - Add storybook to document component

Views
- [http://localhost:3000](http://localhost:3000/)
- [http://localhost:3000/artist/13](http://localhost:3000/artist/13)

Tools used

- Next.js (Version 13)
- TailwindCss 
- [shadcn/ui](https://ui.shadcn.com/docs)
- Prettier/Eslint
- [Swiper](https://swiperjs.com/swiper-api)
- Icon - [@radix-ui](https://www.radix-ui.com/icons)

Features
- Music Player - Hover on any track and click play to see player
- Homepage dashboard
- Search 
- Artist page

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
