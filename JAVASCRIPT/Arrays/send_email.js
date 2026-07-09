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

function emailFormat(student_details) {
    const subject = `Welcome to JavaScript Course`;
    const message = `
to      : ${student_details.email}
subject : ${subject}

Hello ${student_details.name},

We are happy to have you in our JavaScript course.
We hope you enjoy learning with us.
If you have any questions, feel free to contact us.

Phone : ${student_details.phone}

Regards,
Parul University
`;
    return {
        name: student_details.name,
        email: student_details.email,
        phone: student_details.phone,
        subject: subject,
        message: message,
        status: "Email Sent Successfully"
    };
}

const sendEmail = student_details.map(emailFormat);
console.log(sendEmail);