let students = [
  {
    studentId: "123e4567-e89b-12d3-a456-426614174000",
    name: "John Doe",
    age: 20,
  },
  {
    studentId: "123e4567-e89b-12d3-a456-426614174001",
    name: "Jane Doe",
    age: 22,
  },
];

function setStudentName(studentId, newName) {
  students = students.map((student) =>
    student.studentId === studentId ? { ...student, name: newName } : student
  );
  return students;
}

function addStudent(newStudent) {
  students = [...students, newStudent];
  return students;
}

console.log(
  setStudentName("123e4567-e89b-12d3-a456-426614174000", "John Smith")
);
console.log(
  addStudent({
    studentId: "123e4567-e89b-12d3-a456-426614174002",
    name: "Emily Doe",
    age: 21,
  })
);
