const fs = require('fs');

function showMain(req, res) {
    try {  
        var data = fs.readFileSync('./files/quotes.txt', 'utf8');
        const splitLines = data.toString().split(/\r?\n/);
        const index = Math.floor(Math.random() * splitLines.length);
        
        console.log('Showing quote: ' + splitLines[index]);
        res.render('main', {layout : 'index', post: {quote:splitLines[index]}});
    } catch(e) {
        console.log('error', e.toString())
        res.render('main', {layout : 'index'});
    }
}

module.exports = showMain