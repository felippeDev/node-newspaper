const app = require('./config/server.js');

app.listen(3000, () => {
    console.log(
    '------------------------------------- \n' +
    '--> Server listening on port: 3000');
});