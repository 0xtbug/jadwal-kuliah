import PropTypes from 'prop-types'
import { Calendar, BookOpen } from "lucide-react"

export function ScheduleNav({ activeTab, onTabChange }) {
  return (
    <>
      <aside className="w-full md:w-64 bg-white p-4 hidden md:block flex flex-col h-[calc(100vh-4rem)] rounded-lg">
        <div>
          <h1 className="text-2xl font-bold mb-4">Jadwal Kuliah</h1>
          <nav>
            <button
              className={`w-full text-left p-2 mb-2 rounded ${
                activeTab === "KELAS WAJIB" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => onTabChange("KELAS WAJIB")}>
              Matkul Wajib
            </button>
            <button
              className={`w-full text-left p-2 mb-2 rounded ${
                activeTab === "KELAS PILIHAN" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => onTabChange("KELAS PILIHAN")}>
              Matkul Pilihan
            </button>
          </nav>
        </div>
        <footer className="fixed bottom-4 left-4 text-sm text-gray-500 w-56 bg-white p-2 rounded-lg shadow-lg text-center">
          Built with ❤️ by <a href="https://github.com/0xtbug" target="_blank" rel="noopener noreferrer">tubagusnm</a>
        </footer>
      </aside>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2 z-50 shadow-lg">
        <button
          className={`flex flex-col items-center ${
            activeTab === "KELAS WAJIB" ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => onTabChange("KELAS WAJIB")}>
          <Calendar size={24} />
          <span className="text-xs">Matkul Wajib</span>
        </button>
        <button
          className={`flex flex-col items-center ${
            activeTab === "KELAS PILIHAN" ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => onTabChange("KELAS PILIHAN")}>
          <BookOpen size={24} />
          <span className="text-xs">Matkul Pilihan</span>
        </button>
      </nav>
    </>
  )
}

ScheduleNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
} 