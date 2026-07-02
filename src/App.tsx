import Header from "./components/Header.tsx"
import HabitForm from "./components/HabitForm.tsx"
import HabitList from "./components/HabitList.tsx"

function App() {
  return (
    <div className="mx-2xl mx-auto p-4 flex flex-col gap-3">
      <Header />
      <HabitForm />
      <HabitList />
    </div>
  )
}

export default App
