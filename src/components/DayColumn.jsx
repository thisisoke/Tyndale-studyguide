import TaskCard from './TaskCard'

function DayColumn({ day, completedTasks, onToggleTask }) {
  return (
    <div className="day-column">
      <div className="day-header">
        <div className="day-name">{day.name}</div>
        <div className="day-date">{day.date}</div>
      </div>
      
      <div className="day-tasks">
        {day.tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            isCompleted={completedTasks[task.id] || false}
            onToggle={() => onToggleTask(task.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default DayColumn