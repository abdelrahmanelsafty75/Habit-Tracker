import Button from "./Button.tsx" 

function HabitForm() {
  return (
    <form className="flex gap-2">

        <input type="text" className="flex-1 rounded-lg bg-zinc-800 outline-none 
        focus-visible:ring-2 focus-visible:ring-violet-500 px-4 py-2"
        placeholder="New Habit ..."
        />

        <Button className="rounded-lg px-4 py-2 font-medium">Add Habbit</Button>
    </form>
  )
}

export default HabitForm