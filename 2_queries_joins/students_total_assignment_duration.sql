SELECT SUM(duration) 
FROM students
INNER JOIN assignment_submissions
ON students.id = assignment_submissions.student_id
WHERE name = 'Ibrahim Schimmel';