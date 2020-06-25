const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// let userInputDate = process.argv[2];
let userInputDate = process.argv[2]
pool.query(`
SELECT DISTINCT cohorts.name AS cohort, teachers.name AS teacher
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${userInputDate}%'
ORDER BY teachers.name
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));



// let userInputDate = process.argv[2];
// let userInputNum = process.argv[3];
// pool.query(`
// SELECT students.id AS id, students.name AS name, cohorts.name AS cohort
// FROM students
// JOIN cohorts ON cohort_id = cohorts.id
// WHERE cohorts.name LIKE '%${userInputDate}%'
// LIMIT ${userInputNum};
// `)
// .then(res => {
//   console.log(res.rows);
// })
// .catch(err => console.error('query error', err.stack));

// pool.query(`
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
//   })
// });

