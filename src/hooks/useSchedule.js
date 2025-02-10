import { useState } from 'react'
import { scheduleData, dayOrder } from '@/config/scheduleData'
import { usePinnedCourses } from './usePinnedCourses'

export function useSchedule() {
  const [activeTab, setActiveTab] = useState("KELAS WAJIB")
  const [pinnedCourses] = usePinnedCourses()

  const filteredSchedule = scheduleData
    .filter((item) => {
      if (activeTab === "KELAS WAJIB") return item.group === "KELAS WAJIB"
      return item.group === "KELAS PILIHAN" || pinnedCourses.includes(item.id)
    })
    .sort((a, b) => {
      const aPinned = pinnedCourses.includes(a.id)
      const bPinned = pinnedCourses.includes(b.id)
      if (aPinned !== bPinned) return bPinned ? 1 : -1

      const dayDiff = dayOrder[a.day] - dayOrder[b.day]
      if (dayDiff !== 0) return dayDiff
      
      const [aHour, aMin] = a.time.split('-')[0].split('.').map(Number)
      const [bHour, bMin] = b.time.split('-')[0].split('.').map(Number)
      return (aHour * 60 + aMin) - (bHour * 60 + bMin)
    })

  return {
    activeTab,
    setActiveTab,
    filteredSchedule,
    pinnedCourses
  }
} 