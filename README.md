# Habit Tracker

A modern, fast, and fully responsive Habit Tracking application built with React, TypeScript, and Vite. Track your daily routines, maintain streaks, and view your progress week by week.

**Live Demo:** [View the deployed app on Vercel here!](https://habit-tracker-rouge-beta.vercel.app/)

## Features

- **Daily Habit Tracking:** Easily add, delete, and toggle habits for specific days.
- **Weekly Navigation:** Browse through previous and upcoming weeks to see your history.
- **Streak Calculation:** Automatically calculates and displays your current completion streak (🔥) for each habit.
- **Data Persistence:** Habits and completions are automatically saved to your browser's localStorage using Zustand's persist middleware. You won't lose your data when refreshing!
- **Modern UI:** A clean, dark-themed user interface built with Tailwind CSS v4.
- **Type-Safe:** Fully typed with TypeScript to ensure reliability and an excellent developer experience.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) (with persist for Local Storage)
- **Date Utilities:** [date-fns](https://date-fns.org/)
- **Class Merging:** tailwind-merge

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended).

### Installation

1. **Clone the repository** (or download the source code):  
   `git clone <your-repository-url>`  
   `cd habit-tracker`
2. **Install the dependencies**:  
   `npm install`
3. **Start the development server**:  
   `npm run dev`
4. Open your browser and navigate to `http://localhost:5173`.

## 📂 Folder Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Button.tsx       # Custom button with variants (Primary, Secondary, Destructive)
│   ├── HabitForm.tsx    # Form to add new habits
│   ├── HabitItem.tsx    # Individual habit card with streak and daily toggles
│   ├── HabitList.tsx    # List container for rendering HabitItems
│   └── Header.tsx       # Top navigation (Week selection and progress)
├── store/
│   └── useHabits.ts     # Zustand global store & Local Storage persistence logic
├── App.tsx              # Main application layout
├── index.css            # Global CSS and Tailwind directives
└── main.tsx             # React entry point
```

## How State is Handled

This project uses **Zustand** for global state management instead of traditional Prop Drilling or Context API.

- The store (useHabits.ts) handles adding, deleting, and toggling habits, as well as navigating between weeks.

- It utilizes Zustand's persist middleware to automatically sync the habits array with localStorage.

- A custom dateReviver function is used during the JSONparsing phase to ensure that ISO date strings stored in localStorage are safely converted back into native JavaScript Date objects upon loading.

## Scripts

    npm run dev:        Starts the Vite development server.
    npm run build:      Compiles TypeScript and bundles the app for production.
    npm run lint:       Runs ESLint to check for code quality issues.
    npm run preview:    Previews the production build locally.
