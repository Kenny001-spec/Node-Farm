const fs = require('fs');
const http = require('http');
const url = require('url');
const validator = require('validator');
const replaceTemplate = require('./modules/replace');
const genName = require('./utils');

// genName('abubakar');
// console.log(validator.isEmail('me@example.com'));

// SIMPLE WEB SERVER & ROUTING

const apiData = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const templateCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const templateOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const apiDataObj = JSON.parse(apiData)

console.log(templateOverview);


// console.log(cardHTML[2].nutrients)





const server = http.createServer((req, res) => {
    // console.log('my URL ==>', req.url);

    const { pathname, query } = url.parse(req.url, true);


    // OVERVIEW
    if (pathname === '/' || pathname === '/overview') {

        const cardHTML = apiDataObj.map(productEl => replaceTemplate(templateCard, productEl)).join('');
        const output = templateOverview.replace(/{%PRODUCTCARD%}/, cardHTML);


        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.end(output);



        //PRODUCTS
    } else if (pathname === '/products') {
        const product = apiDataObj[query.id];
        const output = replaceTemplate(templateProduct, product);
        res.writeHead(200, {
            "content-type": "text/html"

        })
        res.end(output);



        // API
    } else if (pathname === '/api') {
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.end(apiData);



        // 404 PAGE
    } else {
        res.writeHead(404, {
            "content-type": "text/html"
        });
        res.end('<h1>Page not found!</h1>')
    }
});
server.listen(8000, '127.0.0.1', () => { console.log('Server running on port 8000') });



// // READING
// const readInput = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(readInput);

// // WRITING
// const outputFile = fs.writeFileSync('./content/output.md', 'what are we doing now', 'utf-8');
// console.log('output file written successfully!');

// // EDITING
// const removeFile = fs.appendFileSync('./content/output.md', '\ndemocracy is for the people by the people and for the people', 'utf-8');
// console.log('new content added');

// ASYNC READING
// fs.readFile('./content/output.md', 'utf-8', ((err, data) => {
//     console.log(data);
// }));
// console.log('I am waiting for the Log');

// fs.readFile('./txt/start.txt', 'utf-8', ((err, data1) => {
//     if (err) return console.log('ERROR 💥');
//     // console.log(data1);

//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', ((err, data2) => {
//         // console.log(data2);

//         fs.readFile(`./txt/append.txt`, 'utf-8', ((err, data3) => {
//             // console.log(data3);

//             fs.writeFile(`./content/final.md`, `${data2}\n${data3}`, 'utf-8', ((err) => {
//                 console.log('final.md created successfully !🍖');

//                 fs.readFile('./content/final.md', 'utf-8', ((err, data4) => {
//                     console.log(data4);

//                     fs.appendFile(`./txt/input.txt`, `${data4}`, 'utf-8', ((err) => {
//                         console.log('input text is appended!');
//                     }))
//                 }))
//             }));

//         }))
//     }))
// }));
