const miniName = (str) => str.slice(1, -1);
console.log(miniName('abubakar'));
console.log(miniName('maximillano'));

const p = 'The quick brown fox';
console.log(p.replace(/fox/g, 'lion'));


const myObj = {
    a: "my name",
    b: "our name"
}
const { a, b } = myObj;
console.log(a);
console.log(b);