function TaskCard({ task, isCompleted, onToggle }) {
  const getCourseClass = (course) => {
    const courseMap = {
      'LEAD 0510': 'lead',
      'OLDT 0511': 'oldt', 
      'COUN 0601': 'coun-0601',
      'COUN 0772': 'coun-0772',
      'GENERAL': 'class'
    }
    return courseMap[course] || 'class'
  }

  const getTypeClass = (type) => {
    return type === 'assignment' ? 'assignment' : type === 'class' ? 'class' : getCourseClass(task.course)
  }

  return (
    <div className={`task-card ${isCompleted ? 'completed' : ''}`}>
      <div className={`course-tag ${getTypeClass(task.type)}`}>
        {task.emoji} {task.course}
      </div>
      
      <div className="task-content">
        <input 
          type="checkbox"
          className="task-checkbox"
          checked={isCompleted}
          onChange={onToggle}
        />
        
        <div className="task-text">
          {task.text}
          {task.type === 'assignment' && task.text.includes('⚠️') && (
            <span className="assignment-marker">DUE</span>
          )}
          {task.type === 'celebration' && task.text.includes('🎉') && (
            <span className="milestone-marker">MILESTONE</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskCard