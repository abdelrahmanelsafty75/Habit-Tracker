import HabitItem from "./HabitItem.tsx"
import { useHabits } from "../store/useHabits.ts"

function HabitList() {
  const habits = useHabits((state) => state.habits)

  if (habits.length === 0)
    return (
      <p className="text-center text-zinc-500 py-15">
        No habits yet. Add one above to get started{" "}
      </p>
    )

  return (
    <div className="flex flex-col gap-3 font-bold mt-8">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  )
}

export default HabitList
