import HabitItem from "./HabitItem.tsx"

function HabitList() {
  const habits = [
    {id: "a", name: "Gym"},
    {id: "b", name: "Football"}
  ];

  if(habits.length === 0)
    return(
      <p className="text-center text-zinc-500 py-15">
        No habits yet. Add one above to get started </p>
    )

  return (
    <div className="flex flex-col gap-3 font-bold mt-8">

      {habits.map(habit => (
          <HabitItem key="habit.id" habit={habit}/>
        ))}
    
    </div>
  )
}

export default HabitList