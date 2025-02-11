import { useState, useCallback } from 'react'
import { scheduleData, dayOrder } from '@/config/scheduleData'
import { usePinnedCourses } from './usePinnedCourses'

export function useSchedule() {
  const [activeTab, setActiveTab] = useState("KELAS WAJIB")
  const [pinnedCourses, togglePin] = usePinnedCourses()
  const [scheduleItems, setScheduleItems] = useState(() => sortSchedule(scheduleData, pinnedCourses))

  function sortSchedule(items, pinned) {
    return [...items].sort((a, b) => {
      const aPinned = pinned.includes(a.id)
      const bPinned = pinned.includes(b.id)
      if (aPinned !== bPinned) return bPinned ? 1 : -1

      const dayDiff = dayOrder[a.day] - dayOrder[b.day]
      if (dayDiff !== 0) return dayDiff
      
      const [aHour, aMin] = a.time.split('-')[0].split('.').map(Number)
      const [bHour, bMin] = b.time.split('-')[0].split('.').map(Number)
      return (aHour * 60 + aMin) - (bHour * 60 + bMin)
    })
  }

  const handlePinToggle = useCallback((courseId) => {
    togglePin(courseId)
    setScheduleItems(current => {
      const newPinned = pinnedCourses.includes(courseId) 
        ? pinnedCourses.filter(id => id !== courseId)
        : [...pinnedCourses, courseId]
      return sortSchedule(current, newPinned)
    })
  }, [pinnedCourses, togglePin])

  // Filter schedule based on active tab
  const filteredSchedule = scheduleItems.filter((item) => {
    if (activeTab === "KELAS WAJIB") return item.group === "KELAS WAJIB"
    return item.group === "KELAS PILIHAN" || pinnedCourses.includes(item.id)
  })

  return {
    activeTab,
    setActiveTab,
    filteredSchedule,
    pinnedCourses,
    handlePinToggle
  }
} 