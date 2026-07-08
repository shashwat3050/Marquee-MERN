const marks = [90, 95, 98, 93, 90];

function totalMarks(marks) {
    return marks.reduce((total, mark) => {
        return total + mark;
    }, 0);
}

const maxMark = 100;

function getPercentage(total) {
    return (total / (maxMark * marks.length)) * 100;
}

console.log(totalMarks(marks),"/",marks.length*100);
console.log(getPercentage(totalMarks(marks)));