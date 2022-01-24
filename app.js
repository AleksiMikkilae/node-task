const express = require('express');
const app = express();


/**
 * 
 * @param {Number} a 1. param
 * @param {Number} b 2. param
 * @returns {Number} sum of a and b
 */
const add = (a,b) => {
    return a + b;
}

app.get('', (req, res) => {
    const sum = add(2,3);
    console.log(sum);
    res.send('ok')
});

app.listen(3000, () => {
    console.log('server listening on  localhost:3000');
});