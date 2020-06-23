SELECT cohorts.name, COUNT(assignment_submissions.*) AS total_assignments
FROM cohorts
INNER JOIN students 
ON cohorts.id = students.cohort_id
INNER JOIN assignment_submissions 
ON students.id = assignment_submissions.student_id
GROUP BY cohorts.name
ORDER BY COUNT(assignment_submissions.*) DESC;