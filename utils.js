const genName = (str) => {
    const newName = str.slice(0, 3);
    const newNum = Math.trunc(Math.random() * 10)

    console.log(`${newName}${newNum}`);
}

module.exports = genName;

// genName('olawale')

console.log(__dirname);

