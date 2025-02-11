import { ScheduleCard } from "@/components/schedule/ScheduleCard"
import { ScheduleNav } from "@/components/schedule/ScheduleNav"
import { useSchedule } from "@/hooks/useSchedule"

export default function StudySchedule() {
  const { activeTab, setActiveTab, filteredSchedule, pinnedCourses, handlePinToggle } = useSchedule()

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <ScheduleNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 p-4 overflow-auto">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            Jadwal Kuliah
            <span className="block text-sm font-medium text-gray-500 mt-1">
              {activeTab === "KELAS WAJIB" ? "Mata Kuliah Wajib" : "Mata Kuliah Pilihan"}
            </span>
          </h2>
          <div className="text-sm text-gray-500 hidden md:block">
            {filteredSchedule.length} Mata Kuliah
          </div>
        </div>

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

