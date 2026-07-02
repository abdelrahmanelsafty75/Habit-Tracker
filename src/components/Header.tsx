import { format, isToday } from "date-fns"
import { getWeekRange, useHabits } from "../store/useHabits.ts"
import Button from "./Button.tsx"

function Header() {
  const habits = useHabits((state) => state.habits)

  const weekOffset = useHabits((state) => state.weekOffset)
  const prevWeek = useHabits((state) => state.prevWeek)
  const nextWeek = useHabits((state) => state.nextWeek)

  const { start, end } = getWeekRange(weekOffset)
  
  const doneToday = habits.filter((h) =>
    h.completions.some((c) => isToday(c)),
  ).length

  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
        <span className="text-zinc-400 text-sm">
          {doneToday} / {habits.length} Done Today
        </span>
      </div>

      <div className="flex flex-col gap-1 items-end">
        <span className="text-zinc-400 text-sm">
          {format(start, "MMM d")} - {format(end, "MMM d")}
        </span>
        <div className="flex items-center gap-4">
          <Button onClick={prevWeek}>Prev</Button>
          <Button onClick={nextWeek} disabled={weekOffset >= 0}>
            Next
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
