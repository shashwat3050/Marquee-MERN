const student_details = [
    {
        name: 'Aarav Sharma',
        email: 'aarav.sharma@example.com',
        year: 1,
        course: 'BCA',
        phone: '9876543210',
        isGraduated: false,
    },
    {
        name: 'Priya Patel',
        email: 'priya.patel@example.com',
        year: 2,
        course: 'BSc IT',
        phone: '9876543211',
        isGraduated: false,
    },
    {
        name: 'Rahul Verma',
        email: 'rahul.verma@example.com',
        year: 3,
        course: 'B.Tech',
        phone: '9876543212',
        isGraduated: false,
    },
    {
        name: 'Sneha Joshi',
        email: 'sneha.joshi@example.com',
        year: 4,
        course: 'B.E.',
        phone: '9876543213',
        isGraduated: true,
    },
];

function detail() {
    return student_details.map(student => ({
        name: student.name,
        email: student.email,
        phone: student.phone,
        // year: student.year,
        // course: student.course,
        // isGraduated: student.isGraduated,
    }));
}
console.log(detail());

// let mofifiedStudents = student_details.map((student) => 
//     detail(student));