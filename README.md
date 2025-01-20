# Next.js + MUI + Clerk Auth + PostgreSQL + Drizzle ORM + TypeScript Boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/HEAD/packages/create-next-app), with [Material UI](https://mui.com/) and [Clerk Authentication](https://clerk.dev/) integrated, and written in TypeScript.

## Features

- Next.js: A fast React framework with optimized server-side rendering and static site generation.
- Material UI: A popular React UI framework for building responsive and accessible user interfaces.
- Clerk Authentication: A complete user management and authentication solution, easily integrated with Next.js.
- PostgreSQL: A powerful, open source object-relational database system know for reliability, feature robustness, and performance.
- Drizzle ORM: Drizzle ORM is a headless TypeScript ORM with a head.
- TypeScript: Provides static typing to catch errors early and improve code maintainability.

## How to Use

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>

   ```

2. Create a `.env.local` file in the root directory and add the following environment variables:

   ```bash
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=<Your Clerk Sign-In URL>
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Your Clerk Publishable Key>
   CLERK_SECRET_KEY=<Your Clerk Secret Key>
   DATABASE_URL=<Your Database URL (PostgreSQL + DrizzleORM)>

   ```

3. Install dependencies and run the development server:

   ```bash
   npm install
   npm run dev
   ```

4. Open http://localhost:3000 in your browser to see the result.

5. use Following Command to Manage database.

   ```bash
   npm run db-generate // Generates the DB Migrations.
   npm run db-migrate  // Migrates the Generated DB Migrations.
   npm run db-pull     // Pull the latest DB Migrations from DB.
   npm run db-push     // Push the new DB Migrations to DB without Migrations.
   ```

## What's Next?

1. Customize your Material UI theme to match your branding.
2. Configure Clerk to manage your application's users.
3. Build out your pages and components with Next.js.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs): Learn about Next.js features and API.
- [Material UI](https://mui.com/): A popular React UI framework for building responsive and accessible user interfaces.
- [Clerk Authentication](https://clerk.com/): A complete user management and authentication solution, easily integrated with Next.js.
- [PostgreSQL](https://www.postgresql.org/): A powerful, open source object-relational database system know for reliability, feature robustness, and performance.
- [Drizzle ORM](https://orm.drizzle.team/): Drizzle ORM is a headless TypeScript ORM with a head.
- [TypeScript](https://www.typescriptlang.org/): Provides static typing to catch errors early and improve code maintainability.
