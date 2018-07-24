const greet = require('./greet');
// console.log(greet("xola"));

const figlet = require('figlet');

figlet.text('Xola!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
