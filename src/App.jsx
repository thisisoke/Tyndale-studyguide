import { useState, useEffect } from 'react'
import Header from './components/Header'
import CourseInfo from './components/CourseInfo'
import WeekSection from './components/WeekSection'
import { weekData, courseInfo } from './data/weekData'

function App() {
  const [completedTasks, setCompletedTasks] = useState({})

  // Load completed tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('adura-completed-tasks')
    if (saved) {
      setCompletedTasks(JSON.parse(saved))
    }
  }, [])

  // Save completed tasks to localStorage
  useEffect(() => {
    localStorage.setItem('adura-completed-tasks', JSON.stringify(completedTasks))
  }, [completedTasks])

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }))
  }

  return (
    <div className="container">
      <Header />
      
      <div className="course-info">
        <h3>📅 Fall 2025 Course Overview</h3>
        {courseInfo.map(course => (
          <CourseInfo key={course.id} course={course} />
        ))}
      </div>

      {weekData.map(week => (
        <WeekSection 
          key={week.id}
          week={week}
          completedTasks={completedTasks}
          onToggleTask={toggleTask}
        />
      ))}
    </div>
  )
}

export default App