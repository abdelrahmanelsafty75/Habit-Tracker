import { create } from "zustand"
import { addWeeks, endOfWeek, isSameDay, startOfWeek } from "date-fns"

export type Habit = {
  id: string
  name: string
  completions: Date[]
}

export function getWeekRange(weekOffset: number) {
  const date = addWeeks(new Date(), weekOffset)
  return { start: startOfWeek(date), end: endOfWeek(date) }
}

type HabitsState = {
  habits: Habit[]
  weekOffset: number
  addHabit: (name: string) => void
  deleteHabit: (id: string) => void
  toggleHabit: (id: string, date: Date) => void
  prevWeek: () => void
  nextWeek: () => void
}

export const useHabits = create<HabitsState>((set) => ({
  habits: [],
  weekOffset: 0,

  addHabit: (name) =>
    set((state) => ({
      habits: [
        ...state.habits,
        { id: crypto.randomUUID(), name, completions: [] },
      ],
    })),

  deleteHabit: (id) =>
    set((state) => ({
      habits: state.habits.filter((h) => h.id !== id),
    })),

  toggleHabit: (id, date) =>
    set((state) => ({
      habits: state.habits.map((h) => {
        if (h.id !== id) return h

        const alreadyDone = h.completions.some((c) => isSameDay(c, date))
        const completions = alreadyDone
          ? h.completions.filter((c) => !isSameDay(c, date))
          : [...h.completions, date]

        return { ...h, completions }
      }),
    })),

  prevWeek: () => set((state) => ({ weekOffset: state.weekOffset - 1 })),

  nextWeek: () => set((state) => ({ weekOffset: state.weekOffset + 1 })),
}))
