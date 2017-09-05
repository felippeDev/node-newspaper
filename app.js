const app = require('./config/server.js');
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`
    ------------------------------------- \n
    --> Server listening on port: ' + port
    `);
});