function* countNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const counter = countNumbers();

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());