import DayColumn from './DayColumn'

function WeekSection({ week, completedTasks, onToggleTask }) {
  return (
    <div className="week-section">
      <div className="week-header">
        <h2>{week.title}</h2>
        <div className="week-dates">{week.subtitle}</div>
      </div>
      
      <div className="kanban-board">
        {week.days.map(day => (
          <DayColumn 
            key={day.name}
            day={day}
            completedTasks={completedTasks}
            onToggleTask={onToggleTask}
          />
        ))}
      </div>
    </div>
  )
}

export default WeekSection