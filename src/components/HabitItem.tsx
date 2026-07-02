import Button from "./Button.tsx"
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isFuture,
  isSameDay,
  startOfWeek,
  subDays,
} from "date-fns"
import type { Habit } from "../store/useHabits.ts"
import { useHabits } from "../store/useHabits.ts"

type HabitItemProps = {
  habit: Habit
}

function HabitItem({ habit }: HabitItemProps) {
  const deleteHabit = useHabits((state) => state.deleteHabit)
  const toggleHabit = useHabits((state) => state.toggleHabit)

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
  })

  const streak = getStreak(habit.completions)

  return (
    <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="font-medium">{habit.name}</span>
          {streak !== 0 && (
            <span className="text-sm text-amber-400">🔥 {streak} </span>
          )}
        </div>
        <Button
          onClick={() => deleteHabit(habit.id)}
          variant="Destructive"
          className="text-sm"
        >
          Delete
        </Button>
      </div>

      <div className="flex gap-3 flex-wrap">
        {visibleDates.map((date) => (
          <Button
            className="flex flex-col flex-1 items-center rounded-lg text-xs"
            key={date.toISOString()}
            disabled={isFuture(date)}
            variant={
              habit.completions.some((comp) => isSameDay(date, comp))
                ? "Primary"
                : "Secondary"
            }
            onClick={() => toggleHabit(habit.id, date)}
          >
            <span className="font-medium">{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default HabitItem

function getStreak(completions: Date[]) {
  let streak = 0
  let date = new Date()

  while (completions.some((c) => isSameDay(c, date))) {
    streak++
    date = subDays(date, 1)
  }
  return streak
}
