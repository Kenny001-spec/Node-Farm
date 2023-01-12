const replaceTemplate = (temp, prod) => {
    let htmlOutput = temp.replace(/{%PRODUCTNAME%}/g, prod.productName);
    htmlOutput = htmlOutput.replace(/{%IMAGE%}/g, prod.image);
    htmlOutput = htmlOutput.replace(/{%FROM%}/g, prod.from);
    htmlOutput = htmlOutput.replace(/{%QUANTITY%}/g, prod.quantity);
    htmlOutput = htmlOutput.replace(/{%PRICE%}/g, prod.price);
    htmlOutput = htmlOutput.replace(/{%NUTRIENTS%}/g, prod.nutrients);
    htmlOutput = htmlOutput.replace(/{%DESCRIPTION%}/g, prod.description);
    htmlOutput = htmlOutput.replace(/{%ID%}/g, prod.id);


    if (!prod.organic) htmlOutput = htmlOutput.replace(/{%NOT_ORGANIC%}/g, `not-organic`)


    return htmlOutput;
}
module.exports = replaceTemplate;