const owner_details = [
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


function createBankAccount(owner, mobile_no, email, initial_balance = 0) {
    let balance = initial_balance;

    return{
        owner,
        mobile_no,
        email,

        deposit(amount){
            if (amount<=0) console.log('Deposit amount must be a positive number');
            balance +=amount;
            return balance;
        },
        withdraw(amount){
            if (amount<=0) console.log('Withdrawal amount must be a positive number');

            if (amount>balance){
                console.log('Insufficient balance');
                return null;
            }
            balance= balance-amount;
            return balance;
        },
        checkBalance(){
            return balance;
        },
    };
}

function emailFormat(owner, account) {
    const subject = "Account Summary";

    const message = `
To      : ${owner.email}
Subject : ${subject}

Hello ${owner.name},
Good Afternoon ${owner.name},

Your account details are:

Owner Name      : ${account.owner}
Phone Number    : ${account.mobile_no}
Email           : ${account.email}
Current Balance : ₹${account.checkBalance()}

Thank you for banking with us.
Only Lena Bank.
`;

    return {
        name: owner.name,
        email: owner.email,
        phone: owner.phone,
        subject,
        message,
        status: "Email Sent Successfully"
    };
}

const owner = owner_details[0];
const myAccount = createBankAccount(
    owner.name,
    owner.phone,
    owner.email,
    2
);
myAccount.deposit(20);
myAccount.withdraw(1);

const sendEmail = emailFormat(owner, myAccount);

console.log(sendEmail.message);
console.log("Current Balance:", myAccount.checkBalance());

sendEmail = owner_details.map(emailFormat);
console.log(sendEmail);



// const myAccount = createBankAccount('Fraud', '1234567890', 'scam@no_mail.com', 2);
// console.log(myAccount);

// myAccount.deposit(20);
// myAccount.withdraw(5000000);
// console.log(`Current Balance:`,myAccount.checkBalance());   