const highest = students.reduce((high, student) => {
    return student.marks > high.marks ? student : high;
});