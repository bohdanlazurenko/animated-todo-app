# Animated Todo App

A beautiful and functional todo application built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, local storage persistence, and a clean, modern interface.

## Features

- ✅ Add, complete, and delete todos
- 🔍 Filter todos by status (All, Active, Completed)
- 💾 Automatic local storage persistence
- 🎨 Smooth animations and transitions
- 📱 Responsive design
- 🎯 Real-time todo counter
- 🗑️ Clear completed todos

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── TodoApp.tsx
│   └── TodoItem.tsx
├── lib/
│   ├── hooks/
│   │   └── useTodos.ts
│   └── types.ts
├── .gitignore
├── next.config.js

tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License