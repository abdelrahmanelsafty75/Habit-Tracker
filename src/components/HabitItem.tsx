import Button from "./Button.tsx"
import { eachDayOfInterval, endOfWeek, format, isFuture, startOfWeek } from "date-fns"

type HabitItemProps = {
    habit: {id: string, name: string}
}

function HabitItem({habit}: HabitItemProps) {

    const visibleDates = eachDayOfInterval({ 
        start: startOfWeek(new Date()), end: endOfWeek(new Date())
    }); 

  return (
    <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">

        <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">

               <span className="font-medium">{habit.name}</span>
                <span className="text-sm text-amber-400">🔥 3</span>
            </div>
            <Button variant="Destructive" className="text-sm">Delete</Button>
        </div>

        <div className="flex gap-3 flex-wrap">
            {visibleDates.map(date => (
                    <Button className="flex flex-col flex-1 items-center rounded-lg text-xs"
                    key={date.toISOString()} disabled={isFuture(date)}>
                            <span className="font-medium">{format(date, "EEE")}</span>
                            <span>{format(date, "d")}</span>
                    </Button>
                ))}
        </div>
    </div>
  )
}

export default HabitItem