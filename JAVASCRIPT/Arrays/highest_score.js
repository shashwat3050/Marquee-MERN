const students = [
    {
        name: 'Aarav Sharma',
        email: 'aarav.sharma@example.com',
        year: 1,
        course: 'BCA',
        phone: '9876543210',
        isGraduated: false,
        examScore: [
            { subject: 'Java', marks: 82 },
            { subject: 'HTML', marks: 91 },
            { subject: 'JavaScript', marks: 88 },
        ],
    },
    {
        name: 'Priya Patel',
        email: 'priya.patel@example.com',
        year: 2,
        course: 'BSc IT',
        phone: '9876543211',
        isGraduated: false,
        examScore: [
            { subject: 'Java', marks: 75 },
            { subject: 'HTML', marks: 89 },
            { subject: 'JavaScript', marks: 84 },
        ],
    },
    {
        name: 'Rahul Verma',
        email: 'rahul.verma@example.com',
        year: 3,
        course: 'B.Tech',
        phone: '9876543212',
        isGraduated: false,
        examScore: [
            { subject: 'Java', marks: 92 },
            { subject: 'HTML', marks: 87 },
            { subject: 'JavaScript', marks: 95 },
        ],
    },
    {
        name: 'Sneha Joshi',
        email: 'sneha.joshi@example.com',
        year: 4,
        course: 'B.E.',
        phone: '9876543213',
        isGraduated: true,
        examScore: [
            { subject: 'Java', marks: 85 },
            { subject: 'HTML', marks: 93 },
            { subject: 'JavaScript', marks: 90 },
        ],
    },
    
];

function getHighestExamScore(students) {
    return students.reduce((highest, student) => {
        const studentHighest = student.examScore.reduce(
            (max, score) => Math.max(max, score.marks),
            0
        );
        return Math.max(highest, studentHighest);
    }, 0);
}
const highestExamScore = getHighestExamScore(students);
console.log("Highest Score:",highestExamScore);