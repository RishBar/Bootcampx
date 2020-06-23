SELECT cohorts.name, COUNT(students.*) AS total_student
FROM cohorts
INNER JOIN students 
ON cohorts.id = students.cohort_id
GROUP BY cohorts.name
HAVING COUNT(students.*) >= 18
ORDER BY total_student;