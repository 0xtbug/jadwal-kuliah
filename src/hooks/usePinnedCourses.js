import { useState, useEffect } from 'react'

export function usePinnedCourses() {
  const [pinnedCourses, setPinnedCourses] = useState(() => {
    const saved = localStorage.getItem('pinnedCourses')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('pinnedCourses', JSON.stringify(pinnedCourses))
  }, [pinnedCourses])

  const togglePin = (courseId) => {
    setPinnedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    )
  }

  return [pinnedCourses, togglePin]
} 