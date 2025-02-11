import { ScheduleCard } from "@/components/schedule/ScheduleCard"
import { ScheduleNav } from "@/components/schedule/ScheduleNav"
import { useSchedule } from "@/hooks/useSchedule"

export default function StudySchedule() {
  const { activeTab, setActiveTab, filteredSchedule, pinnedCourses, handlePinToggle } = useSchedule()

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <ScheduleNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 p-4 overflow-auto">
        <h2 className="text-2xl font-bold mb-4 md:hidden">Jadwal Kuliah</h2>
        <div className="grid gap-4 pb-16 md:pb-0">
          {filteredSchedule.map((item) => (
            <ScheduleCard
              key={item.id}
              item={item}
              isPinned={pinnedCourses.includes(item.id)}
              onTogglePin={handlePinToggle}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

