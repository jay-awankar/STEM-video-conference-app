# <img src="public/icons/logo.png" width="30" /> STEM Video Conference App

A web-based video conferencing platform built with Next.js, designed for STEM collaboration and real-time communication.

## 🚀 Live

- [Live App Deployment 1](https://stem-git-master-jay-awankars-projects.vercel.app)
- [Live App Deployment 2](https://stem-agwuy0ktn-jay-awankars-projects.vercel.app)

## Preview
<img src="public/images/Screenshot%202025-08-08%20121646.png" alt="HomePreview" width="700" />

## ✨ Features

- Modern collaborative video conferencing tailored for STEM fields
- Built with the power of **Next.js** 14+ and TypeScript
- Uses **Tailwind CSS** for fast and responsive UI styling
- Auth with [Clerk](https://clerk.com/) integration
- Easily customizable and extendable for new features

## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- **Node.js** v18+ recommended
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. Clone the repository:


2. Install dependencies:
```bash
npm i
# or
yarn install
# or
pnpm install
# or
bun install
```


3. Create a `.env.local` file using the provided `.env.example` and set up your Clerk authentication keys.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Editing

Edit `app/page.tsx` or other source files. The app supports fast refresh and will auto-update as you make changes.

## 🛠️ Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.com/) (Authentication)
- [shadcn/ui](https://ui.shadcn.com/) for UI components

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js/)
- [shadcn/ui Docs](https://ui.shadcn.com/)

## 🌐 Deployment

Deploy the app easily on [Vercel](https://vercel.com/):

- Push your repository to GitHub.
- Connect to Vercel and follow the instructions to deploy.
- [Deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying)


## 🤝 Contributing

- Pull requests are welcome! For significant changes, open an issue to discuss what you would like to change.
- Please consider following [conventional commits](https://www.conventionalcommits.org/) for commit messages.

npm install @clerk/nextjs
.env.local -> ClerkProvider
