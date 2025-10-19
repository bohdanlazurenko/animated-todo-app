# Animated Todo App

A beautiful animated todo list application built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations powered by Framer Motion and persistent storage using localStorage.

## Features

- ✅ Add, complete, and delete todos
- 🎨 Beautiful animations and transitions
- 💾 Persistent storage with localStorage
- 📱 Responsive design
- 🎯 Task counter
- ⚡ Built with Next.js 14 App Router

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts      # Health check endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main todo page
├── components/
│   ├── ui/
│   │   ├── button.tsx        # Button component
│   │   └── input.tsx         # Input component
│   └── todo-item.tsx         # Individual todo item
├── lib/
│   └── todo-manager.ts       # Todo management logic
└── public/                   # Static assets
```

## Usage

1. **Add a todo**: Type your task in the input field and click "Add Todo" or press Enter
2. **Complete a todo**: Click the circle icon to mark a task as complete
3. **Delete a todo**: Hover over a task and click the X button to delete it
4. **View progress**: See the number of remaining tasks at the bottom

## Build

To create a production build:

```bash
npm run build
```

## License

MIT License