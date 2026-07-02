import Header from "./components/Header.tsx" 
import HabitForm from "./components/HabitForm.tsx" 
import HabitList  from "./components/HabitList.tsx"
import type { Habit } from "./components/HabitList.tsx"
import { useState } from "react"
import { isSameDay } from "date-fns"

function App() {

  const [habits, setHabits] = useState<Habit[]>([])

  function handleAddHabit(name: string){
    setHabits(curr => [...curr, {id: crypto.randomUUID(), name, completions: []}])
 // setHabits([...habits, {id: crypto.randomUUID(), name}])
  }

  function deleteHabit(id: string){
    setHabits(curr => curr.filter(h => h.id !== id))
  }

  function toggleHabit(id: string, date: Date){
    setHabits( curr => 
     curr.map(h =>{
      if(h.id !== id) return h

      const alreadyDone = h.completions.some(c => isSameDay(c, date))
      const completions = alreadyDone 
      ? h.completions.filter(c => !isSameDay(c, date))
      : [...h.completions, date]

      return {...h, completions}
    })
    )
  }

  return (
    <div className="mx-2xl mx-auto p-4 flex flex-col gap-3">
        <Header/>
        <HabitForm addHabit={handleAddHabit}/>
        <HabitList deleteHabit={deleteHabit} toggleHabit={toggleHabit} habits={habits}/>
    </div>
  )
}

export default App
