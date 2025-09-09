function CourseInfo({ course }) {
  return (
    <div className="textbook-item">
      <strong>{course.name}</strong><br />
      <em>{course.instructor}</em><br />
      <small>{course.schedule}</small>
      <div style={{ marginTop: '8px', fontSize: '12px', color: '#9b9a97' }}>
        {course.textbooks.map((book, index) => (
          <div key={index}>• {book}</div>
        ))}
      </div>
    </div>
  )
}

export default CourseInfo