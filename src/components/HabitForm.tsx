import Button from "./Button.tsx"
import { useState, type SubmitEvent } from "react"
import { useHabits } from "../store/useHabits.ts"

function HabitForm() {
  const addHabit = useHabits((state) => state.addHabit)
  const [name, setName] = useState("")

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()

    if (name.trim() === "") return

    addHabit(name)
    setName("")
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="flex-1 rounded-lg bg-zinc-800 outline-none 
        focus-visible:ring-2 focus-visible:ring-violet-500 px-4 py-2"
        placeholder="New Habit ..."
      />

      <Button
        disabled={name.trim() === ""}
        className="rounded-lg px-4 py-2 font-medium"
      >
        Add Habbit
      </Button>
    </form>
  )
}

export default HabitForm
